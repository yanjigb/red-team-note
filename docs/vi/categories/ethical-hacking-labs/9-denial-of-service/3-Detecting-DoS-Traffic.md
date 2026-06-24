# Phát hiện lưu lượng tấn công DoS
KFSensor là một hệ thống phát hiện xâm nhập (IDS) dạng honeypot dựa trên Windows. Nó hoạt động như một honeypot để thu hút và phát hiện tin tặc và worm bằng cách mô phỏng các dịch vụ hệ thống và Trojan dễ bị tổn thương. Bằng cách đóng vai trò là máy chủ mồi nhử, nó có thể chuyển hướng các cuộc tấn công khỏi hệ thống quan trọng và cung cấp mức thông tin cao hơn so với tường lửa và NIDS đơn thuần.

KFSensor dùng thử miễn phí: http://www.keyfocus.net/kfsensor/
Wireshark: https://www.wireshark.org/

### Mục tiêu
* Phát hiện tấn công DoS bằng KFSensor
* Phân tích gói tin đến đã bắt bằng Wireshark

### Yêu cầu
* Máy ảo Windows 10
* Máy ảo Windows Server 2012 hoặc 2016
* Máy ảo Kali Linux

## Thiết lập
1. Cài đặt [KFSensor](http://www.keyfocus.net/kfsensor/) và [Wireshark](https://www.wireshark.org/) trên máy ảo Windows 10.

2. Khởi chạy KFSensor với quyền Administrator.

3. Nhấp vào **Settings** trên menu trên cùng và Set Up Wizard:
![kfsensor](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/9296013460b912b31656952b31c5c8fb343b073d/kfsensor-1.png)
Để các tùy chọn mặc định cho đến khi dừng ở tùy chọn DoS.

4. Chọn **Cautious** từ danh sách thả xuống Denial of Service Options, và chọn **Enable packet dump files** từ danh sách thả xuống **Network Protocol Analyzer**:
![kfsensor2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/9296013460b912b31656952b31c5c8fb343b073d/kfsensor-2.png)

5. Nhấp next và hoàn tất wizard:
![kfsensor3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/9296013460b912b31656952b31c5c8fb343b073d/kfsensor-3.png)

Trên panel bên trái bạn sẽ thấy biểu tượng FTP có màu xanh lá, và phần FTP trống, điều này có nghĩa là hiện tại không có lưu lượng truy cập qua cổng 21.

![kfsensor4](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/d2a685936b7fe3a16bbc3f53e6a9462c0cea0477/kfsensor-4.png)

Bây giờ, KFSensor đã được cấu hình để phát hiện các cuộc tấn công DoS.

## Thực hiện tấn công DoS
Chuyển sang Kali Linux và mở một cửa sổ terminal mới.

1. Kiểm tra xem cổng 21 có mở không:
`nmap -p 21 <Windows 10 IP address>`

```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-01-22 14:02 EST
Nmap scan report for 10.0.2.45
Host is up (0.00051s latency).

PORT   STATE SERVICE
21/tcp open  ftp
```
**Như bạn có thể thấy ở trên, cổng 21 đang mở.**

Hãy sử dụng cổng này để tràn ngập mục tiêu:

2. Thực hiện **SYN flooding** bằng cách gõ:
`hping3 -d 100 -S -p 21 --flood <Windows 10 IP Address>`

Tham số | Mô tả
-- | -- 
`-S` | SYN Flooding
`-p 21` | Cổng 21
`-d 100` | Kích thước dữ liệu mỗi gói (byte)

Sau khi nhập lệnh, chuyển sang **Windows 10**, quan sát thấy máy gần như bị đơ, điều này có nghĩa là tài nguyên của Windows đã bị cạn kiệt hoàn toàn. Điều này có nghĩa là cuộc tấn công DoS đang được thực hiện thành công.

Chuyển ngược lại **Kali Linux** và nhấn **Ctrl+C** để chấm dứt SYN flooding.

![hping3-terminate](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/69d1c60b4927909ac69784c963ad1712c5f5fe0a/kfsensor-7.png)

## Phát hiện tấn công DoS
Chuyển sang **Windows 10**, bây giờ bạn có thể truy cập được vào nó.

Bây giờ biểu tượng FTP trong panel bên trái chuyển sang **màu đỏ**, và phần FTP trong panel bên phải bị tràn ngập bởi các sự kiện.

![kfsensor9](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/69d1c60b4927909ac69784c963ad1712c5f5fe0a/kfsensor-8.png)

Cuộn xuống và cố gắng tìm một sự kiện có tên **DOS Attack**

![kfsensor10](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/19219e6d8c9e72aa7349794f40ecb1ad02daffbd/kfsensor-9.png)

Điều này kết luận rằng KFSensor đã phát hiện cuộc tấn công DoS.

Chọn một sự kiện ngẫu nhiên khác và nhấp đúp để hiển thị chi tiết sự kiện.

Trên cửa sổ Event, chứa tóm tắt sự kiện, bạn có thể thấy mức độ nghiêm trọng của sự kiện **(High)**, mô tả sự kiện **(Syn Scan)**, khách truy cập của sự kiện **(địa chỉ IP của máy tấn công)**, tên cảm biến **(FTP)**, và nhiều thông tin khác như bạn có thể thấy dưới đây.

![kfsensor11](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/19219e6d8c9e72aa7349794f40ecb1ad02daffbd/kfsensor-10.png)

## Phân tích Packet Dump trên Wireshark
Tiếp theo, phân tích file packet dump chứa lưu lượng đã bắt trong cuộc tấn công DoS. KFSensor lưu file packet dump tại **C:\kfsensor\dumps** theo mặc định.

Mở Wireshark và nhấp vào **File > Open** và mở file packet dump được lưu tại **C:\kfsensor\dumps**

![kfsensor-wireshark11](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/84f8b3324442d6d26f744a9566c74dd7964bc866/kfsensor-11.png)

Wireshark tải file và hiển thị chi tiết gói tin, như hình trên.

Bạn có thể phân tích các gói tin để thu thập thông tin liên quan đến header của gói tin, địa chỉ IP nguồn, và nhiều thông tin khác.
