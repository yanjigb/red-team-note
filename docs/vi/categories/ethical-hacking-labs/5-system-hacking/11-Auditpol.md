# Xem, Bật và Xóa Chính sách Kiểm toán sử dụng Auditpol
Auditpol là một lệnh trong Windows Server 2016, 2012 và 2008, được yêu cầu để truy vấn hoặc cấu hình chính sách kiểm toán ở cấp danh mục con.

Auditpol hiển thị thông tin về hiệu suất và các hàm để điều khiển chính sách kiểm toán.

**Tài liệu Microsoft**: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/auditpol

### Mục tiêu
* Cách thiết lập Chính sách Kiểm toán

### Yêu cầu
* Máy ảo Windows Server 2016/2012.

***

![syntax](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/aa898df1242308b3886dbf6d8c252a5dcb30089d/auditpol-syntax.png)


Lệnh | Mô tả
-- |  --
`/set` | Đặt chính sách kiểm toán.
`/get` | Hiển thị chính sách kiểm toán hiện tại.
`/backup` | Lưu chính sách kiểm toán vào file.
`/list` | Hiển thị các phần tử chính sách có thể chọn.
`/restore` | Khôi phục chính sách kiểm toán từ file trước đó được tạo bằng auditpol/backup.
`/remove` | Xóa tất cả cài đặt chính sách kiểm toán theo người dùng và vô hiệu hóa tất cả cài đặt chính sách kiểm toán hệ thống.
`/clear` | Xóa chính sách kiểm toán.
`/resourceSACL` | Cấu hình danh sách kiểm soát truy cập hệ thống tài nguyên toàn cầu (SALCs).

### Để xem tất cả chính sách kiểm toán:

Khởi chạy **Command Prompt** từ Windows Server và nhập:
`auditpol /get /category:*`

![auditpol-category](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/aa898df1242308b3886dbf6d8c252a5dcb30089d/auditpol-1.png)

Để **bật** chính sách kiểm toán, nhập:
`auditpol /set /category:"system", "account logon" /success:enable /failure:enable`

![auditpol-enable](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/fdf96591f9b797cf067e6118b0cc35caf00f6eb7/auditpol-2.png)


Để kiểm tra chính sách kiểm toán đã được bật chưa, nhập:
`auditpol /get /category:*`

![auditpol-success-failure](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/8fe2d30ad3c2300f259ad9d4a56ccba2ded7d838/auditpol-3.png)

Để **xóa** chính sách kiểm toán, nhập:
`auditpol /clear /y`

![auditclear](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/75ff457ae9710b831a2e867d9acf5e0947bd3958/auditpol-4.png)

Để kiểm tra chính sách kiểm toán đã được xóa chưa, nhập:
`auditpol /get /category:*`

![audit-check-clear](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/39e8b217d60a368deaa7d384a43722747e643744/auditpol-5.png)
