# Enumerate Windows và Samba sử dụng Enum4linux
Một công cụ thay thế trên Linux cho enum.exe để enumerate dữ liệu từ các host Windows và Samba.

Enum4linux là một công cụ để enumerate thông tin từ các hệ thống Windows và Samba. Với tư cách là người làm bảo mật, bạn phải bảo vệ quy trình mà qua đó kẻ tấn công có thể thiết lập kết nối chủ động với nạn nhân và cố gắng phát hiện càng nhiều vector tấn công càng tốt, có thể được sử dụng để khai thác hệ thống sâu hơn.

### Mục tiêu
Enumeration:
* Các thiết bị đã kết nối
* Tên host và thông tin
* Miền (Domain)
* Thông tin phần cứng và lưu trữ
* Các thành phần phần mềm
* Tổng bộ nhớ

### Yêu cầu
* Kali Linux (Kẻ tấn công)
* Windows Server 2012 R2 (Mục tiêu)

## Lấy thông tin người dùng
Truy cập Kali Linux và mở một cửa sổ Terminal mới.
Gõ `enum4linux -h` để xem các tùy chọn.

Tiếp theo, gõ một số thông tin xác thực đã biết:

`enum4linux -u CEH -p Pa55w.rd -U 10.0.2.23`

-u: Tên người dùng, -p Mật khẩu, -U thông tin người dùng

Enum4linux bắt đầu enumerate các workgroup/domain trước và hiển thị tất cả kết quả.

Nó liệt kê thông tin Người dùng cùng với RID tương ứng như hiển thị bên dưới:

```
index: 0xf4d RID: 0x1f4 acb: 0x00000010 Account: Administrator  Name: (null)    Desc: Built-in account for administering the computer/domain
index: 0x1025 RID: 0x453 acb: 0x00000014 Account: bobby Name: Bobby     Desc: (null)
index: 0x1024 RID: 0x452 acb: 0x00000010 Account: CEH   Name: (null)    Desc: (null)
index: 0xf4e RID: 0x1f5 acb: 0x00000214 Account: Guest  Name: (null)    Desc: Built-in account for guest access to the computer/domain
index: 0xf85 RID: 0x1f6 acb: 0x00020011 Account: krbtgt Name: (null)    Desc: Key Distribution Center Service Account
index: 0x102b RID: 0x459 acb: 0x00000010 Account: shmurdance    Name: (null)    Desc: (null)
```

## Lấy thông tin hệ điều hành

Tùy chọn này enumerate hệ thống mục tiêu và liệt kê thông tin chi tiết về hệ điều hành như hiển thị bên dưới

`enum4linux -u CEH -p Pa55w.rd -o 10.0.2.23`

-o: Lấy thông tin hệ điều hành

```
 =================================== 
|    OS information on 10.0.2.23    |
 =================================== 
Use of uninitialized value $os_info in concatenation (.) or string at ./enum4linux.pl line 464.
[+] Got OS info for 10.0.2.23 from smbclient: 
[+] Got OS info for 10.0.2.23 from srvinfo:
        10.0.2.23      Wk Sv Sql PDC Tim NT 
        platform_id     :       500
        os version      :       6.3
        server type     :       0x80102f
```

## Lấy thông tin Chính sách Mật khẩu
Tùy chọn này enumerate hệ thống mục tiêu và hiển thị toàn bộ thông tin chính sách mật khẩu như hiển thị bên dưới:

`enum4linux -u CEH -p Pa55w.rd -P 10.0.2.23`

-P: Lấy thông tin chính sách mật khẩu

```
 ================================================= 
|    Password Policy Information for 10.0.2.23    |
 ================================================= 

[+] Attaching to 10.0.2.23 using shmurdance:Pa55w.rd
[+] Trying protocol 445/SMB...
[+] Found domain(s):

        [+] LAB
        [+] Builtin

[+] Password Info for Domain: LAB

        [+] Minimum password length: 7
        [+] Password history length: 24
        [+] Maximum password age: 41 days 23 hours 53 minutes 
        [+] Password Complexity Flags: 000001

                [+] Domain Refuse Password Change: 0
                [+] Domain Password Store Cleartext: 0
                [+] Domain Password Lockout Admins: 0
                [+] Domain Password No Clear Change: 0
                [+] Domain Password No Anon Change: 0
                [+] Domain Password Complex: 1

        [+] Minimum password age: 1 day 4 minutes 
        [+] Reset Account Lockout Counter: 30 minutes 
        [+] Locked Account Duration: 30 minutes 
        [+] Account Lockout Threshold: None
        [+] Forced Log off Time: Not Set

[+] Retieved partial password policy with rpcclient:

Password Complexity: Enabled
Minimum Password Length: 7
```

## Lấy thông tin Nhóm
Tùy chọn này enumerate hệ thống mục tiêu và hiển thị thông tin chính sách nhóm, hiển thị các nhóm miền, thành viên, nhóm cục bộ và nhiều hơn nữa.

`enum4linux -u CEH -p Pa55w.rd -G 10.0.2.23`


## Lấy thông tin Share
Tùy chọn này enumerate thông tin chính sách share của máy mục tiêu

`enum4linux -u CEH -p Pa55w.rd -S 10.0.2.23`

-S: Lấy danh sách share
