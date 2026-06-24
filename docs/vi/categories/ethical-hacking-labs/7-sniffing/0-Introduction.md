# Sniffing
Sniffing là quá trình giám sát và bắt tất cả các gói tin đi qua một mạng nhất định bằng các công cụ sniffing. Đây là một hình thức "nghe trộm đường dây điện thoại" và tìm hiểu về cuộc trò chuyện. Nó còn được gọi là nghe trộm áp dụng cho mạng máy tính.

<p align="center">
  <img width="68%" src="https://www.bettercap.org/legacy/assets/img/mitm.jpg">
</p>

Có rất nhiều khả năng rằng nếu một tập hợp các cổng switch doanh nghiệp mở, thì một trong số nhân viên của họ có thể sniff toàn bộ lưu lượng của mạng. Bất kỳ ai ở cùng vị trí vật lý có thể cắm vào mạng bằng cáp Ethernet hoặc kết nối không dây với mạng đó và sniff toàn bộ lưu lượng.

### Những gì có thể bị sniff?
* Lưu lượng email
* Mật khẩu FTP
* Lưu lượng web
* Mật khẩu Telnet
* Cấu hình router
* Phiên trò chuyện
* Lưu lượng DNS

## Các loại Sniffing

_Sniffing có thể là **Chủ động (Active)** hoặc **Thụ động (Passive)**._

### Trong sniffing thụ động,
lưu lượng bị theo dõi nhưng không bị thay đổi theo bất kỳ cách nào. Sniffing thụ động chỉ cho phép nghe. Nó hoạt động với thiết bị Hub. Trên thiết bị hub, lưu lượng được gửi đến tất cả các cổng. Trong mạng sử dụng hub để kết nối các hệ thống, tất cả các máy chủ trên mạng có thể thấy lưu lượng. Do đó, kẻ tấn công có thể dễ dàng bắt lưu lượng đi qua.

### Trong sniffing chủ động,
lưu lượng không chỉ bị theo dõi và giám sát, mà còn có thể bị thay đổi theo cách nào đó được xác định bởi cuộc tấn công. Sniffing chủ động được sử dụng để sniff mạng dựa trên switch. Nó bao gồm việc tiêm các gói phân giải địa chỉ (ARP) vào mạng mục tiêu để tràn bảng CAM (content addressable memory) của switch. CAM theo dõi máy chủ nào được kết nối với cổng nào.

Một số kỹ thuật Sniffing chủ động:

* MAC Flooding
* Tấn công DHCP
* DNS Poisoning
* Tấn công Spoofing
* ARP Poisoning

## Các giao thức bị ảnh hưởng

Các giao thức như TCP/IP truyền thống không bao giờ được thiết kế với bảo mật trong tâm trí và do đó không cung cấp nhiều khả năng chống lại kẻ xâm nhập tiềm năng. Một số quy tắc dễ bị sniff.

* **HTTP** − Nó được sử dụng để gửi thông tin dưới dạng plain text mà không có bất kỳ mã hóa nào và do đó là mục tiêu thực sự.

* **SMTP** _(Simple Mail Transfer Protocol)_ − SMTP chủ yếu được sử dụng để chuyển email. Giao thức này hiệu quả, nhưng nó không bao gồm bất kỳ bảo vệ nào chống lại sniffing.

* **NNTP** _(Network News Transfer Protocol)_ − Nó được sử dụng cho tất cả các loại giao tiếp, nhưng nhược điểm chính là dữ liệu và thậm chí mật khẩu được gửi qua mạng dưới dạng plain text.

* **POP** _(Post Office Protocol)_ − POP được sử dụng nghiêm ngặt để nhận email từ server. Giao thức này không bao gồm bảo vệ chống lại sniffing vì nó có thể bị bắt.

* **FTP** _(File Transfer Protocol)_ − FTP được sử dụng để gửi và nhận tệp, nhưng nó không cung cấp bất kỳ tính năng bảo mật nào. Tất cả dữ liệu được gửi dưới dạng plain text có thể dễ dàng bị sniff.

* **IMAP** _(Internet Message Access Protocol)_ − IMAP giống SMTP trong các chức năng, nhưng nó rất dễ bị sniff.

* **Telnet** − Telnet gửi mọi thứ (tên người dùng, mật khẩu, keystrokes) qua mạng dưới dạng plain text và do đó, nó có thể dễ dàng bị sniff.

_Nguồn: https://www.tutorialspoint.com/ethical_hacking/ethical_hacking_sniffing.htm_
