# Xác định Hệ điều hành của Hệ thống Mục tiêu bằng TTL (Time-to-Live) và Kích thước Cửa sổ TCP sử dụng Wireshark
Xác định hệ điều hành được sử dụng trên máy chủ mục tiêu cho phép kẻ tấn công tìm ra các lỗ hổng mà hệ thống có và các khai thác có thể hoạt động trên hệ thống để thực hiện các cuộc tấn công bổ sung.

Bắt phản hồi được tạo ra từ máy mục tiêu bằng các công cụ bắt gói tin như Wireshark và quan sát TTL và kích thước cửa sổ TCP.

### Mục tiêu:
* Xác định hệ điều hành bằng TTL và kích thước cửa sổ TCP sử dụng Wireshark.

### Yêu cầu:
* Máy Linux Ubuntu.
* Máy Windows 7.
* Máy Windows 10 (máy mục tiêu chạy Wireshark).

## Tổng quan về Bắt Banner:
**Có hai loại kỹ thuật bắt banner: chủ động và thụ động.**

Bắt banner (Banner grabbing) hoặc nhận dạng hệ điều hành (OS fingerprinting) là phương pháp xác định hệ điều hành đang chạy trên hệ thống mục tiêu từ xa.

Hệ điều hành | Time-to-Live (TTL) | Kích thước cửa sổ TCP
--- | --- | ---
Linux (Kernel 2.4 và 2.6) | 64 | 5840
FreeBSD | 64 | 65535
OpenBSD | 64 | 65535
Google customized Linux | 64 | 5720
Windows XP | 128 | 65535
Windows 7, Vista và Server 2008 | 128 | 8192
Cisco Router IOS 12.4 | 255 | 4128

## Sử dụng Wireshark để phát hiện TTL
1. Mở Wireshark trên máy Windows 10, chọn đúng giao diện mạng và bắt đầu bắt gói tin. (Giao diện có thể khác với môi trường lab của bạn).

![Wireshark Start](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c68b799fcf3e60f75c0111fbcee309cd630def61/start-wireshark-1.png "Wireshark Start!")

2. Chuyển sang máy Ubuntu và bắt đầu ping máy Windows 10.

`ping -c 10 <địa chỉ IP mục tiêu [Windows 10]>`

![Ubuntu Ping](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c68b799fcf3e60f75c0111fbcee309cd630def61/ping-ubuntu-2.png "Ubuntu Ping")

3. Quay lại Wireshark và kiểm tra giao thức ICMP bằng cách chọn khung gói tin đã bắt; Mở rộng nút Internet Protocol Version trong chi tiết gói tin, bạn sẽ thấy TTL.

Giá trị TTL được ghi nhận là `64` có nghĩa là yêu cầu ICMP đến từ máy dựa trên Linux.

![Wireshark Ubuntu Ping](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b191cdf69129f7cfa87ddbaae31340b37c2b1bbc/wireshark-capturing-ubuntu64-3.png "Capturing Ubuntu ICMP")

4. Làm mới Wireshark bằng cách bắt đầu một lần bắt mới và chuyển sang máy Windows 7.

Bạn sẽ lặp lại quy trình tương tự, nhưng với máy Windows 7. Mở Command Prompt hoặc Powershell và ping máy Windows 10 đang chạy Wireshark.

`ping <địa chỉ IP mục tiêu>`

5. Quay lại Wireshark trên máy Windows 10 và kiểm tra lại thông tin TTL tương tự.

Giá trị TTL được ghi nhận là `128` có nghĩa là yêu cầu ICMP đến từ máy dựa trên Windows.

![Wireshark windows ping](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b191cdf69129f7cfa87ddbaae31340b37c2b1bbc/wireshark-capturing-win7-128-4.png)
