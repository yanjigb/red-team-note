# Khắc phục Sự cố Mạng Cơ bản sử dụng MegaPing (Windows)
MegaPing là bộ công cụ toàn diện cung cấp đầy đủ các tiện ích thiết yếu cho quản trị viên IT và nhà cung cấp giải pháp.

Trang chính thức: http://www.magnetosoft.com/product/megaping/download

Với tiện ích MegaPing, bạn có thể phát hiện các máy chủ đang hoạt động, các cổng mở của hệ thống trong mạng. Bạn cũng có thể thực hiện các hoạt động khắc phục sự cố mạng khác nhau với sự trợ giúp của các tiện ích mạng được tích hợp, như DNS lookup name, DNS list hosts, Finger, host monitor, IP scanner, NetBios scanner, network time synchronizer, ping, port scanner, share scanner, traceroute và whois.

### Mục tiêu:
* Phát hiện các máy chủ đang hoạt động và các cổng mở của hệ thống trong mạng.

### Yêu cầu:
* Windows 7, 8 hoặc 10.
* Windows Server 2012/2016 (máy mục tiêu).

***

Sau khi cài đặt, khởi động ứng dụng trên máy Windows 10 của bạn.

## Quét các Máy chủ Đang hoạt động
Phần mềm này rất dễ sử dụng. Để bắt đầu quét, nhấp vào **IP Scanner** trên bảng bên trái.

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/2e4f6b59a182462ca77ffd6888b14e0eeede313d/megaPing.png "MegaPing")

* Chỉ định **phạm vi IP** của lab mạng của bạn, sau đó nhấp bắt đầu.
* Lưu ý hộp kiểm ở bên phải, bạn có thể xem **địa chỉ MAC** từ các máy chủ bạn đã thu thập.

MegaPing liệt kê tất cả các địa chỉ IP trong phạm vi mục tiêu đã chỉ định cùng với **TTL**, **Trạng thái** (chết hoặc sống) và thống kê của chúng.

## Thực hiện Traceroute trên Mục tiêu

* Nhấp chuột phải vào một địa chỉ IP, và nhấp **Traceroute**.

Hành động này sẽ thực hiện Traceroute, hiển thị số bước nhảy (hop) mà máy chủ thực hiện để đến được mục tiêu.

## Thực hiện Quét Cổng trên Máy chủ Mục tiêu
* Tiếp theo chọn **Port Scanner** trên bảng bên trái.
* Nhập địa chỉ IP của máy mục tiêu vào phần **Destination Address List**, và nhấp **Add**.

Hành động này sẽ liệt kê tất cả các cổng liên quan đến mục tiêu, cùng với **loại cổng, từ khóa, rủi ro và mô tả**, như hiển thị trong ảnh chụp màn hình sau:

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c7ebf540a2bb39c7a989b87716bc23fd1151dbb8/megaPing-PortScanner.png "MegaPing Port Scanner")

Lưu ý: Bạn cũng có thể tạo báo cáo dưới dạng file HTML cho mỗi lần quét.

**Kết luận**: Trình quét bảo mật MegaPing kiểm tra mạng của bạn để tìm các lỗ hổng tiềm ẩn có thể được sử dụng bởi kẻ tấn công.
