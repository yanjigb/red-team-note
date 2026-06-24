 # Các kiến thức cơ bản về Footprinting với dòng lệnh Windows

Mục tiêu của hướng dẫn này là dạy các kiến thức cơ bản về phương pháp Footprinting, được sử dụng cho các ethical-hacker và pentester.

### Yêu cầu
* Môi trường ảo
* Windows 8.1/10
* Windows Server 2012 hoặc 2016
* Kiến thức cơ bản về mạng

### Mục tiêu
* Sử dụng lệnh ping để tìm địa chỉ IP của tên miền mục tiêu.
* Sử dụng lệnh ping để mô phỏng traceroute (lệnh tracert).
* Khám phá kích thước frame tối đa cho mạng.
* Kiểu ICMP và mã cho gói echo request và echo reply.

## Các lệnh sử dụng trong hướng dẫn này
## ```ping```
Lệnh ping gửi ICMP (Internet Control Message Protocol)
Dùng để kiểm tra khả năng truy cập của một host trên mạng IP và đo thời gian truyền của các tin nhắn gửi từ host nguồn đến đích mục tiêu.

## ```nslookup```
Dùng để truy vấn DNS (Domain Name System), để lấy ánh xạ tên miền hoặc địa chỉ IP và các bản ghi DNS cụ thể khác.

## ```tracert```) (Windows) hoặc ```traceroute``` (Linux)
Công cụ chẩn đoán để hiển thị tuyến đường và đo độ trễ truyền tải của các gói tin qua mạng IP.

**LƯU Ý:**
**Tôi khuyến nghị bạn sử dụng lệnh -help để xem tất cả các tham số của một lệnh cụ thể**

`ping -help`

***
## Tìm địa chỉ IP của http://www.certifiedhacker.com

Mở **Command prompt** hoặc **PowerShell** trên Windows và gõ:

`ping www.certifiedhacker.com`

Kết quả sẽ tương tự như thông báo dưới đây.
Lưu ý: Địa chỉ IP có thể khác trong môi trường của bạn.

```
Reply from 162.241.216.11: bytes=32 time=160ms TTL=40
Reply from 162.241.216.11: bytes=32 time=151ms TTL=40
Reply from 162.241.216.11: bytes=32 time=151ms TTL=40
Reply from 162.241.216.11: bytes=32 time=153ms TTL=40

Ping statistics for 162.241.216.11:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)
Approximate round trip times in milli-seconds:
    Minimum = 151ms, Maximum = 160ms, Average = 153ms
```
***
## Tìm kích thước frame tối đa trên mạng

Sử dụng lệnh trước đó và thêm tham số `-f` để không phân mảnh gói ping và `-l` để đặt kích thước frame là `1500` byte.

`ping www.certifiedhacker.com -f -l 1500`

Kết quả:

```
Packet needs to be fragmented but DF set.
```

Thông báo trên có nghĩa là frame quá lớn để truyền trên mạng và cần được phân mảnh.

Mục đích ở đây là thử các giá trị khác nhau cho đến khi bạn đạt được kích thước frame tối đa.

**Ví dụ:**

` ping www.certifiedhacker.com -f -l 1450`
_hoạt động_
` ping www.certifiedhacker.com -f -l 1475`
_đã đạt giới hạn_
` ping www.certifiedhacker.com -f -l 1473`
_đã đạt giới hạn_
` ping www.certifiedhacker.com -f -l 1472`
_hoạt động_

Tóm lại, lưu ý rằng hai kết quả cuối `1473` byte và `1472` byte cho thấy **kích thước frame tối đa** trên mạng của máy này.
***
## Khảo sát TTL (Time to Live).
Mỗi frame trên mạng đều có TTL được xác định riêng. Nếu TTL đạt 0, router sẽ loại bỏ gói tin để tránh mất mát gói tin.

`ping www.certifiedhacker.com -i 3`

```
Reply from 10.10.127.254: TTL expired in transit.
Reply from 10.10.127.254: TTL expired in transit.
Reply from 10.10.127.254: TTL expired in transit.
Reply from 10.10.127.254: TTL expired in transit.
```

Tham số `-i` có nghĩa là thời gian chờ, tức là số giây chờ giữa mỗi lần ping (giá trị từ `1-255`).

TTL expired có nghĩa là router đã loại bỏ frame, vì TTL đã hết (đạt 0).
***
## Tìm traceroute từ máy của bạn đến www.certifiedhacker.com

Lệnh này thực hiện traceroute thông tin cấu hình mạng của tên miền mục tiêu.

Mở một cửa sổ mới trên prompt hoặc powershell và gõ:

`tracert www.certifiedhacker.com`

Hệ thống phân giải URL thành địa chỉ IP và bắt đầu dò đường đến đích. Ở đây gói tin cần 19 hop để đến được đích.

Bạn có thể sử dụng flag help để hiển thị các tùy chọn khác nhau cho lệnh:
`tracert /?`
***
## Hãy kiểm tra tuổi thọ của gói tin.
Mở một cửa sổ mới trên prompt hoặc powershell và gõ:

`ping www.certifiedhacker.com -i 2 -n 1`

Chúng ta đang đặt TTL là `2` trong nỗ lực kiểm tra tuổi thọ của gói tin và `-n` số lượng gói tin là `1`

```
Pinging certifiedhacker.com [162.241.216.11] with 32 bytes of data:
Reply from 10.10.10.45: TTL expired in transit.

Ping statistics for 162.241.216.11:
    Packets: Sent = 1, Received = 1, Lost = 0 (0% loss),
```
Có một phản hồi đến từ địa chỉ IP 162.241.216.11 mà không mất gói tin.

Hãy đặt giá trị TTL là `3` để xem điều gì xảy ra

`ping www.certifiedhacker.com -i 3 -n 1`
```
Pinging certifiedhacker.com [162.241.216.11] with 32 bytes of data:
Reply from 10.10.127.254: TTL expired in transit.

Ping statistics for 162.241.216.11:
    Packets: Sent = 1, Received = 1, Lost = 0 (0% loss),
```
Lưu ý có một địa chỉ IP khác, giống với địa chỉ mà chúng ta thu được ở lệnh traceroute ở các hop đầu tiên.

Lặp lại thao tác này và tăng giá trị TTL cho đến khi đạt được địa chỉ IP của www.certifiedhacker.com mà chúng ta đã traceroute trước đó.

`ping www.certifiedhacker.com -i 19 -n 1`
```
Pinging certifiedhacker.com [162.241.216.11] with 32 bytes of data:
Reply from 162.241.216.11: bytes=32 time=156ms TTL=40

Ping statistics for 162.241.216.11:
    Packets: Sent = 1, Received = 1, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 156ms, Maximum = 156ms, Average = 156ms
```
Xong! Những kết quả này ngụ ý rằng khi bạn đặt TTL là 19 (trong trường hợp này) thì phản hồi được nhận từ host đích (162.241.216.11).
Hãy lưu ý rằng kết quả sẽ tương tự như kết quả traceroute.

Ghi lại tất cả các địa chỉ IP mà bạn nhận được phản hồi.

***

## Sử dụng lệnh ```nslookup```
Dùng để truy vấn DNS (Domain Name System), để lấy ánh xạ tên miền hoặc địa chỉ IP và các bản ghi DNS cụ thể khác.

Gõ trên prompt hoặc powershell:

`nslookup`

**Lưu ý**: Lệnh này sẽ khởi chạy chế độ tương tác, bạn có thể gõ ```help``` để liệt kê các lệnh có sẵn!

Để truy vấn địa chỉ IP của một tên miền cụ thể, bạn cần đặt `type` thành bản ghi `A`, sau đó nhập tên miền mục tiêu:

`> type=a`
`> www.certifiedhacker.com`

```
> set type=a
> www.certifiedhacker.com

Server:  dns.google
Address:  8.8.8.8

Non-authoritative answer:
Name:    certifiedhacker.com
Address:  162.241.216.11
Aliases:  www.certifiedhacker.com
```
**Lưu ý**: Môi trường này sử dụng DNS server của Google (8.8.8.8). Để cấu hình DNS server của riêng bạn, chỉ cần gõ `server x.x.x.x`.

Hai dòng đầu tiên **dns.google** và **8.8.8.8** cho biết kết quả đã được chuyển đến server này để phân giải tên miền bạn yêu cầu. DNS server của Google không chứa các file zone gốc của tên miền, đây là lý do tại sao nó là **Non-authoritative**.

**Authoritative** là name server có các file nguồn gốc của zone files tên miền.
Để lấy Authoritative name server, đặt `type` thành bản ghi `CNAME` và truy vấn mục tiêu:

`set type=cname`
`certifiedhacker.com`
```
> set type=cname
> certifiedhacker.com
Server:  dns.google
Address:  8.8.8.8

certifiedhacker.com
        primary name server = ns1.bluehost.com
        responsible mail addr = dnsadmin.box5331.bluehost.com
        serial  = 2018011205
        refresh = 86400 (1 day)
        retry   = 7200 (2 hours)
        expire  = 3600000 (41 days 16 hours)
        default TTL = 300 (5 mins)
```
Truy vấn `CNAME` được thực hiện trực tiếp với authoritative name server của tên miền.

Với authoritative name server, bạn có thể xác định địa chỉ IP. Để truy vấn địa chỉ IP, đặt `type` thành `A`, sau đó gõ **primary name server** hiển thị trong môi trường lab của bạn, trong trường hợp của tôi: ```ns1.bluehost.com```.

`set type=a`
`ns1.bluehost.com`
```
> set type=a
> ns1.bluehost.com
Server:  dns.google
Address:  8.8.8.8

Non-authoritative answer:
Name:    ns1.bluehost.com
Address:  162.159.24.80
```

Tóm lại, **Authoritative name server** lưu trữ các bản ghi liên kết với tên miền tương ứng. Khi có authoritative name server (primary name server) và địa chỉ IP liên kết với nó, kẻ tấn công có thể cố gắng khai thác server, thực hiện các cuộc tấn công như DDoS, chuyển hướng URL, v.v.

**Phân tích cuối cùng:**
* Ghi lại tất cả các địa chỉ IP
* Địa chỉ IP của các yêu cầu phản hồi
* Thông tin về TTL
* Tên DNS server và các thông tin DNS khác.
