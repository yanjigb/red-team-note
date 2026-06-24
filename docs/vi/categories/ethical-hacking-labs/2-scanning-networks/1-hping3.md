# Kỹ thuật Tạo Gói tin UDP và TCP bằng `hping3`
Hping3 là một chương trình có thể lập trình kịch bản sử dụng [ngôn ngữ Tcl](https://www.tcl.tk/about/language.html), trong đó các gói tin có thể được nhận và gửi thông qua biểu diễn nhị phân hoặc chuỗi mô tả các gói tin.

Trong quá trình quét mạng, nhiệm vụ đầu tiên của bạn là quét mạng mục tiêu để xác định tất cả các cổng mở có thể, các máy chủ đang hoạt động và các dịch vụ đang chạy. Kiến thức về các kỹ thuật tạo gói tin có thể giúp bạn quét mạng vượt qua tường lửa hoặc IDS.

### Mục tiêu:
* Cách thực hiện quét mạng và tạo gói tin bằng các lệnh hping3.

### Yêu cầu:
* Kali Linux (máy tấn công)
* Windows 10 (máy mục tiêu)

## Tổng quan về Tạo Gói tin
Tạo gói tin (Packet crafting) là một kỹ thuật cho phép bạn tìm các lỗ hổng hoặc điểm vào mạng mục tiêu. Điều này có thể được thực hiện bằng cách tạo các gói tin mạng tùy chỉnh để kiểm tra thiết bị mạng và hành vi.
***

**Lưu ý:** Trước khi bắt đầu bài lab này, hãy cài đặt Wireshark trên máy Windows 10.

## Các lệnh cơ bản hping3
Đăng nhập vào Kali Linux và khởi động Terminal.
Sử dụng `hping3 -h` để hiển thị tất cả các lệnh. Chúng ta sẽ tập trung vào một vài lệnh nên đừng lo lắng.

Bắt đầu nào!

`hping3 -c 3 <địa chỉ IP mục tiêu>`
```
...
3 packets transmitted, 3 packets received, 0% packet loss
...
```
Lưu ý ở cuối đầu ra, 3 gói tin đã được gửi và nhận. Bạn sẽ nhận được phản hồi này.

`-c` đại diện cho số lượng gói tin. Có nghĩa là chúng ta chỉ muốn gửi ba gói tin đến máy mục tiêu.

Tiếp theo chúng ta sẽ gửi một quét cờ SYN với một phạm vi cổng.

`hping3 --scan 1-3000 -S <địa chỉ IP mục tiêu>`
```
Scanning 10.0.2.15 (10.0.2.15), port 1-3000
3000 ports to scan, use -V to see all the replies
+----+-----------+---------+---+-----+-----+-----+
|port| serv name |  flags  |ttl| id  | win | len |
+----+-----------+---------+---+-----+-----+-----+
  135 epmap      : .S..A... 128 62018 65392    46
  139 netbios-ssn: .S..A... 128 63042  8192    46
  445 microsoft-d: .S..A... 128 52291 65392    46
All replies received. Done.
Not responding ports: 
```
Tham số `--scan` xác định phạm vi cổng để quét.
`-S` đại diện cho **cờ SYN**.

Đầu ra cho thấy các cổng mở trên máy mục tiêu, tức là Windows 10.

## Tạo gói tin UDP
Để thực hiện tạo gói tin UDP trên máy mục tiêu, gõ:

`hping3 <địa chỉ IP mục tiêu> --udp --rand-source --data 500`

Tiếp theo chuyển sang máy Windows 10 và khởi động Wireshark để bắt đầu bắt gói tin.

Quan sát các gói tin UDP và ICMP. Nhấp vào gói tin **UDP** và quan sát bên trong, **Data (500 bytes)**.

`--udp` Chế độ UDP.
`--rand-source` Tùy chọn này bật chế độ nguồn ngẫu nhiên. hping sẽ gửi các gói tin với địa chỉ nguồn ngẫu nhiên.
`--data` kích thước dữ liệu tính bằng byte.

## Gửi Yêu cầu TCP SYN
Khởi động Wireshark trên máy Windows một lần nữa và để nó chạy.

Để gửi yêu cầu TCP SYN đến máy mục tiêu, gõ:

`hping3 -S <địa chỉ IP mục tiêu> -p 80 -c 5`

**Điều này sẽ truyền 5 gói tin yêu cầu đến máy nạn nhân thông qua cổng 80.**

`-S` sẽ thực hiện yêu cầu TCP SYN trên mục tiêu, `-p` sẽ truyền lưu lượng qua cổng được chỉ định, và `-c` là số lượng gói tin gửi đến máy mục tiêu.

Chuyển sang máy mục tiêu (Windows), và quan sát các gói tin TCP được bắt trong Wireshark.

Tiếp theo, dừng bắt gói tin, và bắt đầu bắt gói tin mới. Để Wireshark chạy tiếp.

## Thực hiện TCP Flooding

`hping3 <địa chỉ IP mục tiêu> --flood`

`--flood` gửi gói tin nhanh nhất có thể, mà không cần quan tâm đến việc hiển thị các phản hồi đến.

Sau vài giây dừng bắt gói tin trong Wireshark trên Windows. Bạn sẽ nhận thấy cuộc tấn công TCP flooding từ máy tấn công.

Lưu ý: Nếu bạn muốn kiểm tra luồng gói tin TCP và thực hiện một số kỹ thuật reverse engineering, hãy đảm bảo hiểu nhiều hơn là bắt tay ba bước nổi tiếng.
***

Một số liên kết thú vị:

[Số thứ tự và Xác nhận TCP](https://packetlife.net/blog/2010/jun/7/understanding-tcp-sequence-acknowledgment-numbers/)

[Reverse Engineering Một Luồng UDP Bí ẩn Trong Khách Sạn Của Tôi](https://www.gkbrk.com/2016/05/hotel-music/)

[Hướng dẫn TCP/IP](http://www.tcpipguide.com/free/index.htm)
