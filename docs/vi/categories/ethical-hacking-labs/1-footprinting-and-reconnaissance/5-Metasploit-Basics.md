# Thu thập thông tin sử dụng Metasploit
Metasploit Framework là công cụ cung cấp thông tin về các lỗ hổng bảo mật và hỗ trợ trong kiểm thử xâm nhập và phát triển chữ ký IDS.
_Kho lưu trữ chính thức:_ https://github.com/rapid7/metasploit-framework

**Phiên bản Metasploit: 5.0.59-dev**

Metasploit có thể được sử dụng để kiểm tra lỗ hổng của hệ thống máy tính hoặc để xâm nhập vào các hệ thống từ xa. **Lab này sẽ trình bày cách trích xuất thông tin sử dụng Metasploit Framework.**

## Tổng quan về Metasploit:
Metasploit Framework là một dự án mã nguồn mở hỗ trợ công việc của kẻ tấn công, người viết exploit và payload. Một ưu điểm lớn của framework là cách tiếp cận mô-đun, cho phép kết hợp bất kỳ exploit nào với bất kỳ payload nào.

### Yêu cầu:
* Máy ảo Kali Linux.

### Mục tiêu:
* Cách xác định lỗ hổng và rò rỉ thông tin.
* Trích xuất thông tin chính xác về mạng.
***

## Thiết lập Metasploit
Đăng nhập vào máy **Kali Linux** và mở cửa sổ **Terminal**.

Khởi động dịch vụ cơ sở dữ liệu PostgreSQL để liên kết với Metasploit:

`service postgresql start`

Bây giờ gõ `msfconsole` để khởi chạy Metasploit.

`msfconsole`

Kiểm tra xem Metasploit đã kết nối với cơ sở dữ liệu thành công chưa:

`db_status`
```
[*] postgresql selected, no connection
```
Nếu bạn nhận được thông báo này, có nghĩa là cơ sở dữ liệu chưa kết nối đúng với msf. Để khắc phục, gõ `exit` để thoát Metasploit. Sau đó, để khởi tạo cơ sở dữ liệu, gõ:

`msfdb init`

Sau đó, khởi động lại dịch vụ postgresql:

`service postgresql restart`

Khởi chạy lại Metasploit và chạy `db_status` để kiểm tra trạng thái cơ sở dữ liệu:

`msfconsole`
`db_status`
```
[*] Connected to msf. Connection type: postgresql.
```
Bây giờ cơ sở dữ liệu đã kết nối thành công với msf.

## Tìm các host đang hoạt động
Tôi khuyên bạn nên khởi động một vài VM trong Lab của bạn. Trong trường hợp của tôi, tôi đã khởi động:
* Ubuntu Metasploitable
* Windows 7 SP1
* Windows Server 2012 R2

Để quét subnet, chúng ta có thể sử dụng **Nmap**:

`nmap -O -oX Test 10.0.2.0/24`

Nmap bắt đầu quét subnet và hiển thị kết quả trên màn hình. Lệnh `-oX Test` của Nmap có nghĩa là **output ra file XML** tên là **Test**.

Chúng ta có thể nhập kết quả Nmap vào cơ sở dữ liệu:

`db_import Test`

Để xem các host và chi tiết của chúng được Nmap khám phá, gõ:

`hosts`
...
_(Kiểm tra phiên bản OS, địa chỉ IP và MAC)._

Tôi sẽ chọn Windows Server 2012, mà tôi đã quét để kiểm tra các dịch vụ đang chạy trên hệ thống này.

`db_nmap -sS -A 10.0.2.28`

Nmap bắt đầu footprint hệ thống và liệt kê chi tiết OS.

`db_nmap` khởi động quét Nmap và kết quả sẽ được lưu tự động vào cơ sở dữ liệu của chúng ta.

Gõ `services` hoặc `db_services` để lấy toàn bộ danh sách dịch vụ đang chạy trên host.

`db_services`

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/2734644f73fe43d2b99b56a03fb4bab3b01acf20/services-nmap-scan.png "Nmap Services Scan")

## Quét cổng và dịch vụ mở
Tìm kiếm module **portscan**:

`search portscan`
```
#  Name                                    Disclosure Date  Rank    Check  Description
-  ----                                    ---------------  ----    -----  -----------
0  auxiliary/scanner/http/wordpress_pingback_access         normal  Yes    Wordpress Pingback Locator
1  auxiliary/scanner/natpmp/natpmp_portscan                 normal  Yes    NAT-PMP External Port Scanner
2  auxiliary/scanner/portscan/ack                           normal  Yes    TCP ACK Firewall Scanner
3  auxiliary/scanner/portscan/ftpbounce                     normal  Yes    FTP Bounce Port Scanner
4  auxiliary/scanner/portscan/syn                           normal  Yes    TCP SYN Port Scanner
5  auxiliary/scanner/portscan/tcp                           normal  Yes    TCP Port Scanner
6  auxiliary/scanner/portscan/xmas                          normal  Yes    TCP "XMas" Port Scanner
7  auxiliary/scanner/sap/sap_router_portscanner             normal  No     SAPRouter Port Scanner
```

Chọn **scanner/portscan/syn**:

`use scanner/portscan/syn`

Bây giờ chúng ta cần xem các tùy chọn module:

`show options`
```
Name       Current Setting  Required
----       ---------------  --------
BATCHSIZE  256              yes
DELAY      0                yes
INTERFACE                   no
JITTER     0                yes
PORTS      1-10000          yes
RHOSTS                      yes
SNAPLEN    65535            yes
THREADS    1                yes
TIMEOUT    500              yes
```
Đặt `RHOSTS` thành mục tiêu và `THREADS` thành `100`

`set RHOSTS 10.0.2.23`
`set THREADS 100`

Gõ `run` để khởi chạy module.

```
[+]  TCP OPEN 10.0.2.23:53
[+]  TCP OPEN 10.0.2.23:80
[+]  TCP OPEN 10.0.2.23:88
[+]  TCP OPEN 10.0.2.23:135
[+]  TCP OPEN 10.0.2.23:139
[+]  TCP OPEN 10.0.2.23:389
[+]  TCP OPEN 10.0.2.23:443
[+]  TCP OPEN 10.0.2.23:445
[+]  TCP OPEN 10.0.2.23:464
[+]  TCP OPEN 10.0.2.23:593
[+]  TCP OPEN 10.0.2.23:636
...
```
Module này sẽ liệt kê mọi dịch vụ TCP đang mở bằng cách sử dụng quét SYN thô.

Tiếp theo, hãy tìm phiên bản SMB.
Tải module **scanner/smb/smb_version**:

`use scanner/smb/smb_version`

Gõ `show options` để xem cấu hình.

Đặt `RHOSTS` thành mục tiêu và `THREADS` thành `100`

`set RHOSTS 10.0.2.23`
`set THREADS 100`

Gõ `run` để khởi chạy module.

Bây giờ gõ `hosts` và quan sát trường **os_flavor** của host bạn đã quét trong subnet.

Kết luận:
Bạn có thể thu thập các thông báo lỗi khác nhau để tìm hiểu về lỗ hổng, và ghi lại thông tin được tiết lộ về mạng.
