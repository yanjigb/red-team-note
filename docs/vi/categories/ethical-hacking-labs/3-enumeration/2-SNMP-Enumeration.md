# SNMP Enumeration sử dụng `snmp_enum`
Module **snmp_enum** trong Metasploit cho phép enumerate bất kỳ thiết bị nào hỗ trợ giao thức SNMP. Nó hỗ trợ thông tin phần cứng, phần mềm và mạng. Community string mặc định được sử dụng là 'public'.

SNMP enumeration là quá trình enumerate các tài khoản người dùng và thiết bị trên máy tính có bật SNMP.

Dịch vụ SNMP đi kèm với hai mật khẩu, được sử dụng để cấu hình và truy cập SNMP agent từ trạm quản lý. Chúng là: Read community string và Read/Write community string. Các chuỗi (mật khẩu) này có giá trị mặc định, giống nhau trên tất cả các hệ thống.
Chúng trở thành điểm xâm nhập dễ dàng cho kẻ tấn công nếu quản trị viên không thay đổi.

Kẻ tấn công enumerate SNMP để trích xuất thông tin về tài nguyên mạng như hosts, routers, thiết bị, shares(...) Thông tin mạng như bảng ARP, bảng định tuyến, thông tin cụ thể của thiết bị và thống kê lưu lượng.

### Mục tiêu:
Enumeration:
* Các thiết bị đã kết nối
* Tên host và thông tin
* Miền (Domain)
* Thông tin phần cứng và lưu trữ
* Các thành phần phần mềm
* Tổng bộ nhớ

### Yêu cầu:
* Máy Kali Linux (Kẻ tấn công)
* Windows Server 2012 / 2016 (Nạn nhân/Mục tiêu)
* Ubuntu [BeeBox](https://www.vulnhub.com/entry/bwapp-bee-box-v16,53/) (Nạn nhân/Mục tiêu)

## Kiểm tra Trạng thái Cổng SNMP
Đầu tiên chúng ta cần tìm hiểu xem cổng SNMP có mở hay không. **SNMP sử dụng cổng 161 theo mặc định**. Để kiểm tra thông tin này, trước tiên chúng ta cần chạy quét cổng Nmap.

**Lưu ý**: Nhớ kích hoạt dịch vụ SNMP trên Windows Server của bạn.

`-sU`: Quét cổng UDP.
`-p`: Phạm vi quét cổng.

`nmap -sU -p 161 <Target IP Address>`

```
Nmap scan report for 10.0.2.38
Host is up (0.00070s latency).

PORT    STATE SERVICE
161/udp open  snmp
MAC Address: 11:22:33:44:55:66 (Oracle VirtualBox virtual NIC)
```

## Enumerate Community String
Để thực hiện SNMP enumeration, bạn có nhiều công cụ có sẵn.
Hướng dẫn này trình bày hai cách để thực hiện cùng một việc: sử dụng **Metasploit** và **snmp-check**.

Trên Metasploit, bạn có thể sử dụng module **snmp_enum**:

`auxiliary/scanner/snmp/snmp_enum`

Cách khác là sử dụng snmp-check.
snmp-check là một gói có sẵn trên Kali Linux, chỉ cần mở terminal và gõ:

`snmp-check <Target IP Address>`

Cả hai phương pháp đều enumerate thông tin máy mục tiêu và trả về cùng một **danh sách toàn diện** hiển thị **Thông tin Hệ thống**. Các công cụ này hỗ trợ các enumerate sau:
* Địa chỉ IP của Host
* Tên host
* Mô tả phần cứng
* Thời gian hoạt động của hệ thống
* Thời gian hoạt động SNMP
* Miền nếu hệ thống được kết nối trong Domain
* Tài khoản người dùng
* Địa chỉ MAC
* Các tiến trình đang chạy
* [Và nhiều hơn nữa](https://tools.kali.org/information-gathering/snmp-check)
