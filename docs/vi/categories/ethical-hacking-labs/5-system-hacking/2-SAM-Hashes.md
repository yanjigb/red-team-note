# Trích xuất và Giải mã Hash SAM để Lấy Mật khẩu dạng Văn bản thuần
Pwdump7 có thể được sử dụng để trích xuất các file được bảo vệ. Ophcrack là một chương trình miễn phí mã nguồn mở (GPL) giải mã mật khẩu Windows bằng cách sử dụng hash LM thông qua bảng rainbow.

SAM (Security Account Manager) là một file cơ sở dữ liệu có trong máy Windows lưu trữ tài khoản người dùng và mô tả bảo mật cho người dùng trên máy tính cục bộ. Nó lưu trữ mật khẩu người dùng ở dạng hash (hash LM và hash NTLM). Vì hàm hash là một chiều, điều này cung cấp một mức độ bảo mật nhất định cho việc lưu trữ mật khẩu.

Bạn cần có quyền quản trị viên để trích xuất nội dung của file SAM. Đánh giá độ mạnh mật khẩu là một cột mốc quan trọng trong quá trình đánh giá bảo mật của bạn. Bạn sẽ bắt đầu đánh giá mật khẩu bằng cách trích xuất đơn giản hash SAM và chạy nó với trình giải mã hash để phát hiện mật khẩu dạng văn bản thuần.

### Mục tiêu
* Sử dụng công cụ **pwdump7** để trích xuất hash mật khẩu.
* Sử dụng công cụ Ophcrack để giải mã mật khẩu và thu được mật khẩu dạng văn bản thuần.

### Yêu cầu
* Máy ảo Windows 10.

### Công cụ
* [Ophcrack](https://ophcrack.sourceforge.io/)
* [Pwdump7](https://www.tarasco.org/security/pwdump_7/index.html)

## Tạo Hash
1. Trước tiên, chúng ta cần tìm User ID liên kết với tên người dùng trên Windows 10.

2. Khởi chạy Command Prompt ở chế độ Administrator và nhập:

`wmic useraccount get name,sid > c:/users.txt`

Lệnh này sẽ lấy tên người dùng và User ID tương ứng. **Ghi nhớ mỗi User ID cho các bước tiếp theo.**

3. Để thu thập hash mật khẩu, truy cập thư mục **pwdump7** và chạy file .exe.

`cd C:\Users\Dummy\Desktop\pwdump7`

`PwDump7.exe`

Để lưu thông tin này ra file .txt bên ngoài, nhập:

`PwDump7.exe > c:\hashes.txt`

Bây giờ đặt tên người dùng trước User ID tương ứng mà chúng ta đã thu thập ở **bước 2** và lưu file.

## Sử dụng Ophcrack để giải mã hash

1. Khởi chạy ứng dụng Ophcrack.
2. Nhấp vào **Load** và chọn **PWDUMP file**

![Ophcrack](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/51d83f1edc90c3f3de3890d72f3a27552a2646b1/ophcrack.png "Ophcrack")

3. Tiếp theo, bạn cần [tải xuống](https://ophcrack.sourceforge.io/tables.php) bảng để thực hiện giải mã. Chọn **Vista free** để tải xuống.

4. Truy cập Ophcrack và nhấp vào menu **Tables** để tải bảng.

5. Trong cửa sổ Table Selection, chọn **Vista free**, và nhấp **Ok**.

Bảng table_vista_free này là một bảng được tính toán trước để đảo ngược hàm băm mật mã và khôi phục mật khẩu văn bản thuần đến một độ dài nhất định. Bảng **table_vista_free** được chọn được cài đặt dưới tên **Vista free**, được biểu thị bằng dấu chấm màu **xanh lá**.

6. Nhấp **Crack** trên thanh menu. Ophcrack bắt đầu giải mã mật khẩu. Thao tác này sẽ mất vài phút.
