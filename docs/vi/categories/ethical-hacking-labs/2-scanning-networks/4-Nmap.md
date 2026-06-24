# Tìm hiểu những Điều Cơ bản về Quét Mạng sử dụng Nmap
![grid](https://miro.medium.com/max/1500/1*SGiVLHyikvLQEXVkt_Tg5w.jpeg)
Nmap (Zenmap là giao diện đồ họa chính thức của Nmap) là một tiện ích miễn phí, mã nguồn mở (giấy phép) dùng để khám phá mạng và kiểm toán bảo mật.

Nmap là tiện ích quét mạng phổ biến nhất, mà hầu hết các chuyên gia bảo mật sử dụng trong quá trình đánh giá bảo mật. Nó hỗ trợ nhiều loại kỹ thuật quét mạng khác nhau. Trong quá trình đánh giá bảo mật, bạn sẽ được yêu cầu thực hiện quét mạng bằng Nmap. Do đó, với tư cách là một hacker đạo đức chuyên nghiệp hoặc chuyên gia kiểm thử xâm nhập, bạn sẽ cần quen thuộc với Nmap để thực hiện quét mạng.

### Mục tiêu:
* Quét toàn bộ mạng con (Subnet).
* Theo dõi tất cả các gói tin gửi và nhận.
* Thực hiện quét toàn diện chậm.
* Tạo một profile mới để thực hiện Null Scan.
* Quét các cổng TCP và UDP.
* Phân tích chi tiết máy chủ và cấu trúc liên kết của chúng.
* Các kỹ thuật quét:
  * TCP Connect Scan
  * Xmas Scan
  * ACK Flag Scan
  * UDP Scan
  * IDLE Scan
* Tránh phát hiện quét

### Yêu cầu:
* Máy Windows Server 2012.
* Máy Windows 10.
* Máy Ubuntu [Metasploitable](https://information.rapid7.com/download-metasploitable-2017.html).
* Máy Kali Linux.
* Đảm bảo [cấu hình](https://www.techrepublic.com/article/how-to-create-multiple-nat-networks-in-virtualbox/) đúng cấu trúc liên kết mạng trên môi trường ảo của bạn.

**Lưu ý** #0: Vì bài lab này chỉ dành riêng cho việc quét mạng, bạn không cần tải xuống các máy cụ thể này. miễn là bạn có bất kỳ máy ảo nào để quét (ngoài Kali), bạn có thể bắt đầu.

**Lưu ý** #1: Bạn có thể sử dụng bất kỳ phiên bản Nmap nào bạn thích. Cá nhân tôi thích phiên bản CLI hơn GUI, nó linh hoạt hơn với quy trình làm việc và có đường cong học tập vững chắc hơn.

## Quét toàn bộ mạng con
Mở cửa sổ Terminal và gõ `nmap -h` để liệt kê tất cả các lệnh có sẵn. Vì Nmap có rất nhiều tùy chọn, bạn có thể sử dụng [cheat sheet](https://nmapcookbook.blogspot.com/2010/02/nmap-cheat-sheet.html) này, [[2]](https://www.stationx.net/nmap-cheat-sheet/) để xem một số ví dụ.


`nmap -O <phạm vi IP>`

Tùy chọn `-O` liên quan đến việc phát hiện hệ điều hành.

Để chỉ định phạm vi IP, bạn có thể sử dụng hai phương pháp:

**Wildcard**:
`nmap -O 10.0.2.*`

**Dấu phân cách mạng con:**
`nmap -O 10.0.2.1/24`

Cả hai đều thực hiện tương tự nhau, với một số khác biệt nhỏ, như dấu phân cách mạng con nhanh hơn một chút so với wildcard.

**Chạy quét này và kiểm tra kết quả.**

Nmap quét toàn bộ mạng và hiển thị thông tin cho tất cả các máy chủ, cùng với các cổng mở, loại thiết bị, chi tiết hệ điều hành, v.v.

## Theo dõi tất cả các Gói tin Gửi và Nhận
**Chọn** một máy chủ bạn đã quét

`nmap --packet-trace 10.0.2.23`

Bằng cách thực thi lệnh `--packet-trace`, Nmap gửi một số gói tin đến máy dự kiến và nhận các gói tin phản hồi. Nó in tóm tắt mọi gói tin nó gửi và nhận.

Đầu ra bên dưới cho thấy các gói tin **gửi từ máy chủ đến mục tiêu** và các gói tin **nhận từ mục tiêu về máy chủ**.
```
...
SENT (4.1431s) TCP 10.0.2.15:35962 > 10.0.2.23:3005 S ttl=43 id=22968 iplen=44  seq=1965204224 win=1024 <mss 1460>
SENT (4.1433s) TCP 10.0.2.15:35962 > 10.0.2.23:4000 S ttl=39 id=51710 iplen=44  seq=1965204224 win=1024 <mss 1460>
SENT (4.1434s) TCP 10.0.2.15:35962 > 10.0.2.23:1503 S ttl=53 id=146 iplen=44  seq=1965204224 win=1024 <mss 1460>
SENT (4.1435s) TCP 10.0.2.15:35962 > 10.0.2.23:1761 S ttl=56 id=27951 iplen=44  seq=1965204224 win=1024 <mss 1460>
...
```
Lưu ý ở cuối đầu ra cũng hiển thị các cổng TCP mở:
```
PORT      STATE SERVICE
53/tcp    open  domain
80/tcp    open  http
88/tcp    open  kerberos-sec
135/tcp   open  msrpc
139/tcp   open  netbios-ssn
389/tcp   open  ldap
443/tcp   open  https
445/tcp   open  microsoft-ds
...
```

## Xác định Dịch vụ với TCP Null Scan

`nmap -sN -T4 -A <địa chỉ IP mục tiêu>`

`-sN`: TCP Null Scan.
`-T4`: Timing: (4) Chế độ Aggressive tăng tốc quét bằng cách giả định rằng bạn đang trên mạng đủ nhanh và đáng tin cậy.
`-A`: Bật phát hiện hệ điều hành, phát hiện phiên bản, quét script và traceroute

Bằng cách thực thi lệnh này, Nmap gửi các gói tin TCP mà không có cờ TCP nào được thiết lập trong gói tin. Nếu quét trả về gói tin RST, điều đó có nghĩa là cổng đã đóng; Nếu không có gì trả về, cổng hoặc là bị lọc hoặc là mở.
```
...
53/tcp   open  domain      ISC BIND 9.4.2
| dns-nsid: 
|_  bind.version: 9.4.2
80/tcp   open  http        Apache httpd 2.2.8 ((Ubuntu) DAV/2)
|_http-server-header: Apache/2.2.8 (Ubuntu) DAV/2
|_http-title: Metasploitable2 - Linux
111/tcp  open  rpcbind     2 (RPC #100000)
139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
512/tcp  open  exec        netkit-rsh rexecd
513/tcp  open  login       OpenBSD or Solaris rlogind
514/tcp  open  tcpwrapped
1099/tcp open  java-rmi    GNU Classpath grmiregistry
1524/tcp open  bindshell   Metasploitable root shell
2049/tcp open  nfs         2-4 (RPC #100003)
2121/tcp open  ftp         ProFTPD 1.3.1
...
```
Như đã thấy ở trên, chúng ta có thể thấy một phần đầu ra của quét, được thực hiện trên Metasploitable Linux. Sau đó chúng ta có thể kiểm tra các phiên bản và loại dịch vụ đang chạy trên các cổng mở. Loại thông tin này rất có giá trị vì chúng ta có thể tìm kiếm các lỗ hổng, sai sót v.v.

# Các Kỹ thuật Quét
Nmap đi kèm với nhiều script tích hợp có thể được sử dụng trong quá trình quét nhằm tìm các cổng mở và dịch vụ đang chạy trên các cổng.

Tóm tắt các quét sẽ được thực hiện:
1. **TCP Connect Scan** sử dụng kết nối TCP bình thường để xác định xem một cổng có sẵn sàng hay không.
2. **Xmas Scan** liên quan đến việc gửi các phân đoạn TCP với tất cả các cờ được gửi trong tiêu đề gói tin, tạo ra các gói tin bất hợp pháp theo RFC 793.
3. **ACK Flag Scan** liên quan đến việc gửi gói tin dò ACK với số thứ tự ngẫu nhiên.
4. **UDP Scan** liên quan đến việc gửi một gói tin UDP chung đến mục tiêu.
5. **IDLE Scan** liên quan đến việc gửi các gói tin giả mạo đến mục tiêu.

## 1. TCP Connect Scan
Đây là quét cơ bản nhất của TCP scanning. Cuộc gọi hệ thống connect() được cung cấp bởi hệ điều hành của bạn được sử dụng để mở kết nối đến mọi cổng quan tâm trên máy. Nếu cổng đang lắng nghe, connect() sẽ thành công, ngược lại cổng không thể truy cập. Một ưu điểm lớn của kỹ thuật này là bạn không cần bất kỳ quyền đặc biệt nào.

Thực hiện quét TCP với timing bình thường (`-T3`):

`nmap -sT -T3 -A <địa chỉ IP mục tiêu>`

`-sT`: TCP connect port scan (Mặc định không có quyền root).

Kết quả quét bao gồm tất cả các cổng mở, kết quả nhận dạng hệ điều hành, kết quả nbstat, kết quả smb-os-discovery, phiên bản smb, v.v.

## 2. Xmas Scan
Xmas Scan gửi một khung TCP đến thiết bị từ xa với các cờ PSH, URG và FIN được thiết lập. FIN scan chỉ hoạt động với hệ điều hành TCP/IP được phát triển theo RFC 793. Phiên bản hiện tại của MS Windows không được hỗ trợ.

**Lưu ý: Quét tiếp theo sẽ trên máy có bật tường lửa (tức là Windows Server 2012).**

`nmap -sX -T4 <địa chỉ IP mục tiêu>`

`-sX`: Thiết lập các cờ FIN, PSH và URG, làm sáng gói tin như cây thông Giáng sinh
```
Nmap scan report for 10.0.2.23
Host is up (0.00040s latency).
All 1000 scanned ports on 10.0.2.23 are open|filtered
MAC Address: 11:22:33:44:55:66 (Oracle VirtualBox virtual NIC)

Nmap done: 1 IP address (1 host up) scanned in 21.64 seconds
```
Nmap trả về kết quả nêu rằng tất cả các cổng đều **mở/lọc, điều này có nghĩa là tường lửa đã được cấu hình trên máy mục tiêu.**

**Tiếp theo, tắt tường lửa trên máy mục tiêu.**

## 3. ACK Flag Scan
ACK scan không bao giờ tìm thấy cổng mở. Nó chỉ cung cấp trạng thái "filtered" hoặc "unfiltered", vì nó không bao giờ kết nối với ứng dụng để xác nhận trạng thái "open".

Quét này khởi tạo quét ACK và hiển thị trạng thái cổng, như hiển thị bên dưới:

`nmap -sA -v -T4 <địa chỉ IP mục tiêu>`
```
Initiating ARP Ping Scan at 13:18
Scanning 10.0.2.23 [1 port]
Completed ARP Ping Scan at 13:18, 0.04s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 13:18
Completed Parallel DNS resolution of 1 host. at 13:18, 0.05s elapsed
Initiating ACK Scan at 13:18
Scanning 10.0.2.23 [1000 ports]
Completed ACK Scan at 13:18, 1.26s elapsed (1000 total ports)
Nmap scan report for 10.0.2.23
Host is up (0.00029s latency).
All 1000 scanned ports on 10.0.2.23 are unfiltered
MAC Address: 11:22:33:44:55:66 (Oracle VirtualBox virtual NIC)

Read data files from: /usr/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 1.51 seconds
           Raw packets sent: 1060 (42.388KB) | Rcvd: 1001 (40.028KB)
```
Kẻ tấn công gửi gói tin dò ACK với số thứ tự ngẫu nhiên.

* Không có phản hồi có nghĩa là cổng bị lọc.
* Phản hồi unfiltered có nghĩa là cổng đã đóng.

## 4. UDP Scan
Quét UDP được thực hiện để tìm bất kỳ cổng UDP nào trên máy mục tiêu. Nếu có để xác định trạng thái của chúng (Mở/Đóng).

`nmap -sU -T5 <địa chỉ IP mục tiêu>`
```
...
Not shown: 986 open|filtered ports
PORT      STATE  SERVICE
123/udp   open   ntp
137/udp   open   netbios-ns
389/udp   open   ldap
445/udp   closed microsoft-ds
688/udp   closed realm-rusd
1001/udp  closed unknown
1901/udp  closed fjicl-tep-a
8001/udp  closed vcom-tunnel
16674/udp closed unknown
18818/udp closed unknown
28973/udp closed unknown
30656/udp closed unknown
31109/udp closed unknown
57172/udp open   unknown
...
```

## 5. IDLE Scan
IDLE scan là một phương pháp quét nâng cao thực hiện quét TCP thực sự mù (blind) trên mục tiêu (có nghĩa là không có gói tin nào được gửi đến mục tiêu từ địa chỉ IP thực của bạn). Thay vào đó, một cuộc tấn công kênh bên (side-channel attack) độc đáo khai thác dự đoán được trình tự tạo ID phân mảnh IP trên máy zombie để thu thập thông tin về các cổng mở trên mục tiêu.

Trong ví dụ này, zombie sẽ là máy Windows Server 2012 và mục tiêu là máy Windows 10 sử dụng số cổng 80 (hoặc bất kỳ cổng nào bạn muốn kiểm tra).

`nmap -Pn -p 80 -sI <địa chỉ IP của zombie> <địa chỉ IP mục tiêu>`
```
Idle scan using zombie 10.0.2.37 (10.0.2.37:80); Class: Incremental
Nmap scan report for 10.0.2.23
Host is up (0.0069s latency).

PORT   STATE SERVICE
80/tcp open  http
MAC Address: 22:44:11:55:66:77 Oracle VirtualBox virtual NIC)

Nmap done: 1 IP address (1 host up) scanned in 1.08 seconds
```
IDLE scan có thể khó hiểu đối với người mới, tôi khuyên bạn nên thử và kiểm tra theo cách riêng. Tôi khuyên bạn nên xem [liên kết](https://gbhackers.com/idle-zombie-scan-nmap/) này để biết thêm thông tin.
***
## Ping Sweep
Ping sweep là một phương pháp có thể thiết lập một loạt các địa chỉ IP ánh xạ đến các máy chủ đang hoạt động.

Thay vì kiểm tra từng hệ thống riêng lẻ, chúng ta sẽ kiểm tra tất cả các hệ thống đang sống trong mạng bằng cách thực hiện ping sweep.

`-sP`: Thực hiện quét chỉ Ping

`nmap -sP 10.0.2.*`
```
Nmap scan report for 10.0.2.1
Host is up (0.0011s latency).
MAC Address: 22:44:99:33:11:55 QEMU virtual NIC)
Nmap scan report for 10.0.2.2
Host is up (0.00084s latency).
MAC Address: 22:44:99:33:11:55 (QEMU virtual NIC)
Nmap scan report for 10.0.2.3
Host is up (0.00097s latency).
MAC Address: 11:22:33:44:55:66 (Oracle VirtualBox virtual NIC)
Nmap scan report for 10.0.2.22
Host is up (0.00075s latency).
MAC Address: 11:22:33:44:55:66 (Oracle VirtualBox virtual NIC)
Nmap scan report for 10.0.2.23
Host is up (0.00066s latency).
MAC Address: 11:22:33:44:55:66 (Oracle VirtualBox virtual NIC)
Nmap scan report for 10.0.2.37
Host is up (0.00051s latency).
MAC Address: 11:22:33:44:55:66 (Oracle VirtualBox virtual NIC)
Nmap scan report for 10.0.2.15
Host is up.
Nmap done: 256 IP addresses (7 hosts up) scanned in 2.29 seconds
```
Nmap quét mạng con và hiển thị danh sách các hệ thống đang sống như đã thấy ở trên. Kết quả có thể khác nhau trong môi trường lab của bạn.

# Tránh Phát hiện Quét sử dụng Nhiều Địa chỉ IP Giả
Lệnh Nmap `nmap -D RND:10` là tùy chọn giả (decoy), cho phép bạn quét sử dụng nhiều địa chỉ IP giả.

Tường lửa và IDS phát hiện các nỗ lực quét bình thường trên mạng mục tiêu. Tuy nhiên, bạn có thể sử dụng kỹ thuật địa chỉ IP giả để tránh bị phát hiện.

**Trước khi bắt đầu bài lab này, hãy đảm bảo rằng bạn đã bật tường lửa Windows trên máy mục tiêu.**

## Phân mảnh IP

Mở một cửa sổ Terminal mới trên Kali và nhập địa chỉ IP mục tiêu (Windows).

`nmap -f <địa chỉ IP mục tiêu>`

`-f`: Được sử dụng để quét các gói tin phân mảnh nhỏ.
```
Nmap scan report for 10.0.2.23
Host is up (0.00074s latency).
Not shown: 979 filtered ports
PORT      STATE SERVICE
53/tcp    open  domain
80/tcp    open  http
88/tcp    open  kerberos-sec
135/tcp   open  msrpc
139/tcp   open  netbios-ssn
389/tcp   open  ldap
443/tcp   open  https
445/tcp   open  microsoft-ds
464/tcp   open  kpasswd5
593/tcp   open  http-rpc-epmap
636/tcp   open  ldapssl
3268/tcp  open  globalcatLDAP
3269/tcp  open  globalcatLDAPssl
3389/tcp  open  ms-wbt-server
MAC Address: 11:22:33:44:55:66 (Oracle VirtualBox virtual NIC)

Nmap done: 1 IP address (1 host up) scanned in 13.72 seconds
```
Khi dịch vụ Windows Firewall được bật, bạn chỉ có thể thấy các cổng mở như hiển thị trong đầu ra ở trên.

## Thực hiện Maximum Transmission Unit
Lệnh này được sử dụng để truyền các gói tin nhỏ hơn thay vì gửi một gói tin hoàn chỉnh mỗi lần.

Quét này rất giống với quét trước nhưng với **Maximum Transmission Unit** (`-mtu`) và `8` byte gói tin.

`nmap -mtu 8 <địa chỉ IP mục tiêu>`

Nếu mọi thứ hoạt động, kết quả sẽ giống hệt với quét trước.

## Giả mạo địa chỉ IP
Lệnh này được sử dụng để quét nhiều địa chỉ IP giả. Nmap sẽ gửi nhiều gói tin với các địa chỉ IP khác nhau, cùng với địa chỉ IP kẻ tấn công thực của bạn.

`nmap -D RND:10 <địa chỉ IP mục tiêu>`

Một lần nữa, đầu ra giống với các đầu ra trước đó nhưng trên góc nhìn của mục tiêu thì rất khác.

Kiểm tra Nhật ký trên tường lửa Windows Server và phân tích lần quét cuối cùng được thực hiện. Bạn cũng có thể phân tích thông tin này với Wireshark đang bật.

Cả hai đều hiển thị nhiều địa chỉ IP cùng với địa chỉ IP kẻ tấn công thực của bạn.

![firewall](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6c4f716f549aedea473d2701b1f40bb592413e47/firewallLog-RND.png)
_Nhật ký Windows Firewall: Địa chỉ IP Giả_

![wireshark](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6c4f716f549aedea473d2701b1f40bb592413e47/wireshark-RND.png)
_Wireshark: Địa chỉ IP Giả_


***
**Tóm lại**: Nmap là một công cụ rất mạnh mẽ cho việc quét mạng / đánh giá bảo mật mạng. Về cơ bản là công cụ bắt buộc phải có khi nói đến An ninh Mạng, Hacker Đạo đức hoặc Kiểm thử Xâm nhập.


Liên kết hữu ích:

* [Tài liệu chính thức](https://nmap.org/docs.html)
* [Cheat Sheet với Mẹo Chuyên nghiệp](https://hackertarget.com/nmap-cheatsheet-a-quick-reference-guide/)
* [Cheat Sheet](https://nmapcookbook.blogspot.com/2010/02/nmap-cheat-sheet.html)
* [Cheat Sheet 2](https://www.stationx.net/nmap-cheat-sheet/)
* [Cài đặt trước Zenmap](https://www.securesolutions.no/zenmap-preset-scans/)
* [Bỏ qua Quy tắc Tường lửa](https://nmap.org/book/firewall-subversion.html)
