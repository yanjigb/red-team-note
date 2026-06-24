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
