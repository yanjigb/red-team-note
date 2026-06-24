# Enumerate Dịch vụ
Trích xuất tên người dùng, tên máy, tài nguyên mạng, shares và dịch vụ từ một hệ thống.

### Mục tiêu:
* Quét tất cả các máy trong một mạng hoặc subnet nhất định.
* Liệt kê tất cả các host đang hoạt động.
* Xác định các cổng mở trên một node nhất định.
* Kiểm tra xem có cổng nào bị giới hạn bởi firewall hay không.
* Enumerate tất cả các dịch vụ đang chạy trên cổng cùng với phiên bản tương ứng.

### Yêu cầu:
* Máy Windows Server 2012 hoặc 2016.
* Máy Kali Linux.
* Một phiên bản Windows khác (7, 8, 10 hoặc Server).

## Ping Sweep - `Nmap`
Bạn có thể thực hiện ping sweep trong Nmap bằng cách sử dụng chế độ quét ping (`-sP`) trên toàn bộ subnet.

Ping sweep trên Nmap sẽ quét tất cả các node trên subnet và bắt đầu hiển thị tất cả các host đang hoạt động, cùng với địa chỉ MAC và thông tin thiết bị tương ứng.

Mở một cửa sổ Terminal mới trên Kali Linux và gõ:

`nmap -sP 10.0.2.1/24`

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

## Ping Sweep - `Bash`
Tôi sẽ chỉ một cách khác để kiểm tra các host đang hoạt động trên subnet bằng một chút **lập trình Bash**. Bạn có thể bỏ qua phần tiếp theo nếu không quan tâm.

### 1. Kiểm tra lệnh one-liner để chỉ lấy địa chỉ IP
Đầu tiên, tôi sẽ sử dụng lệnh `ping` trên một phạm vi subnet nhất định, để kiểm tra xem các host có đang hoạt động hay không.
**Mục tiêu là: ping từng host trên một phạm vi nhất định với đầu ra sạch.**

Phần đầu ra sạch là vì khi chúng ta sử dụng lệnh `ping`, nó trả về một chuỗi các dòng, mục tiêu là loại bỏ tất cả thông tin không cần thiết và chỉ giữ lại địa chỉ IP.
**Ví dụ:**

`ping -c 1 8.8.8.8`

```
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=2 ttl=54 time=155 ms
--- 8.8.8.8 ping statistics ---
1 packets transmitted, 0 received, 100% packet loss, time 0ms
```
Chúng ta chỉ cần dòng thứ hai của đầu ra bắt đầu bằng **"64 bytes(...)"** chứa địa chỉ IP của host đang hoạt động.
```
64 bytes from 8.8.8.8: icmp_seq=2 ttl=54 time=155 m
```

**Chỉ lấy địa chỉ IP:**

`ping -c 5 8.8.8.8 | grep "64" | cut -d " " -f 4 | tr -d ":" ; > iptest.txt`

```sh
8.8.8.8
8.8.8.8
8.8.8.8
8.8.8.8
8.8.8.8
```
Phân tích lệnh one-liner (theo pipe):
1. Ping IP 5 lần;
2. Grep lấy các ký tự đầu dòng (**64** bytes...);
3. Cut các khoảng trắng thành 4 phần để lấy chuỗi IP;
4. Sử dụng lệnh translate để xóa ký tự ":";
5. Xuất kết quả ra file .txt;

### 2. Chuyển đổi thành script

1. Tạo file .sh (pingsweep.sh)

```sh
#!/bin/bash 
 
if [ "$1" == "" ]
then
echo "[-] You forgot the IP address!"
echo "[-] Syntax: ./ipsweep.sh 10.10.10"

else
for ip in `seq 1 254`; do 
ping -c 1 $1.$ip | grep "64 bytes" | cut -d " " -f 4 | tr -d ":" &
done
fi
```
Sẽ tiện hơn khi lấy đầu vào của người dùng ở ba octet đầu và octet cuối là vòng lặp (1 - 254).
**Ví dụ đầu vào: 192.168.1**

Script dưới đây rất đơn giản, có một câu lệnh điều kiện để lấy đúng đầu vào của người dùng, một vòng lặp qua phạm vi subnet, và lệnh one-liner sử dụng đầu vào của người dùng với biến vòng lặp.

2. Lưu file, thay đổi quyền và cấp quyền thực thi:

`chmod 770 pingsweep.sh`
`chmod +x pingsweep.sh`

3. Kiểm tra:

`./pingsweep.sh 10.0.2 > ping-results.txt`
`cat ping-results.txt`
```
10.0.2.3
10.0.2.1
10.0.2.15
10.0.2.22
10.0.2.23
10.0.2.37
```

## Thực hiện Stealth SYN Scan
Bây giờ, chọn một địa chỉ IP từ kết quả và thực hiện **stealth syn scan** trên **Nmap**.

`nmap -sS <Target IP Address>`

```
...
Host is up (0.00092s latency).
Not shown: 977 closed ports
PORT      STATE SERVICE
53/tcp    open  domain
80/tcp    open  http
88/tcp    open  kerberos-sec
135/tcp   open  msrpc
139/tcp   open  netbios-ssn
389/tcp   open  ldap
443/tcp   open  https
...
```

SYN scan là tùy chọn quét mặc định và phổ biến nhất với lý do chính đáng. Nó có thể được thực hiện nhanh chóng, quét hàng nghìn cổng mỗi second trên mạng nhanh mà không bị cản trở bởi firewall.


## Stealth SYN Scan với Phát hiện Phiên bản và Hệ điều hành

Phát hiện phiên bản thu thập thông tin về dịch vụ cụ thể đang chạy trên một cổng mở, bao gồm tên sản phẩm và số phiên bản. Thông tin này có thể rất quan trọng trong việc xác định điểm xâm nhập cho một cuộc tấn công.

Nmap sẽ thực hiện stealth scan với phát hiện phiên bản cùng với phát hiện hệ điều hành.

`nmap -sSV -O <Target IP Address> -oN Enumeration.txt`

```
Host is up (0.0017s latency).
Not shown: 977 closed ports
PORT      STATE SERVICE            VERSION
53/tcp    open  domain?
80/tcp    open  http               Microsoft IIS httpd 8.5
88/tcp    open  kerberos-sec       Microsoft Windows Kerberos (server time: 2019-12-06 20:56:57Z)
135/tcp   open  msrpc              Microsoft Windows RPC
139/tcp   open  netbios-ssn        Microsoft Windows netbios-ssn
389/tcp   open  ldap               Microsoft Windows Active Directory LDAP (Domain: Lab.local, Site: Default-First-Site-Name)
443/tcp   open  ssl/https?
```
`-oN` có nghĩa là xuất kết quả vào file text sẽ được lưu trong thư mục home /root/ với tên `Enumeration.txt`.

***

### Kết luận
Bằng cách thực hiện enumerate dịch vụ, kẻ tấn công có thể cố gắng tìm các lỗ hổng liên quan đến ứng dụng cụ thể đó và khai thác chúng để chiếm quyền truy cập vào máy mục tiêu.
