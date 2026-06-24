# Session Hijacking (Chỉnh sửa phiên)
Tấn công Session Hijacking bao gồm việc khai thác cơ chế kiểm soát phiên web, thường được quản lý bởi một session token.

<p align="center">
  <img width="50%" src="https://www.greycampus.com/ckeditor_assets/pictures/231/content_ses.hij.intro.bmp" />
</p>

Vì giao thức HTTP sử dụng nhiều kết nối TCP khác nhau, máy chủ web cần một phương pháp để nhận diện từng kết nối của người dùng. Phương pháp phổ biến nhất dựa vào một token mà máy chủ Web gửi đến trình duyệt của client sau khi xác thực thành công. Session token thường bao gồm một chuỗi có độ dài biến đổi và có thể được sử dụng theo nhiều cách khác nhau, như trong URL, trong header của yêu cầu HTTP dưới dạng cookie, trong các phần khác của header yêu cầu HTTP, hoặc trong phần body của yêu cầu HTTP.

Tấn công Session Hijacking xâm phạm session token bằng cách đánh cắp hoặc dự đoán một session token hợp lệ để truy cập trái phép vào máy chủ Web.

Session token có thể bị xâm phạm theo nhiều cách khác nhau; phổ biến nhất là:

* Session token có thể dự đoán được
* Session Sniffing (chụp gói tin phiên)
* Tấn công phía client (XSS, mã JavaScript độc hại, Trojan, v.v.)
* Tấn công Man-in-the-middle (trung gian)
* Tấn công Man-in-the-browser (trình duyệt trung gian)

Nguồn: https://owasp.org/www-community/attacks/Session_hijacking_attack
