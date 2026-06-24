# Ẩn File sử dụng NTFS Streams
Một stream bao gồm dữ liệu liên kết với một thư mục file chính (được gọi là stream chính không tên). Mỗi file và thư mục trong NTFS có thể có nhiều luồng dữ liệu mà thường bị ẩn khỏi người dùng.

https://docs.microsoft.com/en-us/sysinternals/downloads/streams

NTFS thay thế hệ thống file FAT như là hệ thống file ưa thích cho hệ điều hành Microsoft Windows. NTFS có nhiều cải tiến so với FAT và HPFS (High Performance File System), như hỗ trợ tốt hơn cho metadata và sử dụng cấu trúc dữ liệu nâng cao.

### Mục tiêu
* Cách ẩn file sử dụng NTFS streams.

### Yêu cầu
* Windows 7, 8, 10 hoặc Windows Server 2012, 2016.

## Ẩn Dữ liệu sử dụng NTFS streams
Hãy chắc chắn hệ thống file ổ **C:** là định dạng **NTFS**. Để kiểm tra, vào **Computer** và nhấp chuột phải vào C:\ rồi nhấp Properties.

![NFTS-Info-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/47c51699608fdb618bf4f38b8721c9cdb0ce7288/NTFS-1.png)

1. Mở Windows Explorer và tạo một **thư mục mới** tên **trick** bên trong ổ **C:**.

2. Truy cập **C:\windows\system32** và sao chép **calc.exe** vào thư mục **trick**.
![Calc-copy](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b1b0f3cef708249202b1679f71d1acd2588ac6fa/NTFS-calc-copy2.png)

3. Khởi chạy **command prompt** với quyền Administrator, và điều hướng đến **C:\trick**.
`cd C:\trick`

4. Tạo file readme.txt, nhập Hello World vào bên trong và lưu file.
`notepad readme.txt`

5. Quay lại command prompt và nhập **dir** để liệt kê các file trong thư mục hiện tại. **Ghi nhận kích thước file của readme.txt.**
![Readme-Size](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/bba37bcabedc43533fb1c84a35ede0745af44638/ntfs-6.png)

6. Bây giờ ẩn **calc.exe** bên trong **readme.txt** bằng cách nhập:
`type c:\trick\calc.exe > c:\trick\readme.txt:calc.exe`
![ntfs-4](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/bba37bcabedc43533fb1c84a35ede0745af44638/ntfs-7.png)

7. Nhập **dir** lại và ghi nhận kích thước file của **readme.txt** không thay đổi.

8. Quay lại **c:\trick** và **xóa calc.exe**.

## Thực thi Ứng dụng bị ẩn

9. Tạo một symlink:
`mklink backdoor.exe readme.txt:calc.exe`

10. Thực thi backdoor.exe bằng cách nhập: `backdoor.exe`
![ntfs-5](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/e97b7c0d62642eaa8e502a1b51268913c67de3c3/NTFS-calc-5.png)

Kẻ tấn công có thể ẩn file độc hại khỏi người dùng hợp pháp bằng cách sử dụng NTFS streams và thực thi chúng khi cần.
