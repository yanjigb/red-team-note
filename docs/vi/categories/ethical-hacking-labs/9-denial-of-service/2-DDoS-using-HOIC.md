# Tấn công DDoS sử dụng HOIC
Một cuộc tấn công từ chối dịch vụ phân tán (DDoS) liên quan đến một nhóm các hệ thống bị xâm phạm, thường bị nhiễm Trojan, được sử dụng để thực hiện tấn công DoS trên một hệ thống hoặc mạng mục tiêu.

### Mục tiêu
* Thực hiện tấn công DDoS - HTTP flooding

### Yêu cầu
* Máy ảo Kali Linux (Mục tiêu)
* Máy ảo Windows Server, Windows 10 và Windows 7 (Kẻ tấn công)

### Tổng quan về HOIC
High Orbit Ion Cannon (HOIC) là một ứng dụng kiểm thử mạng miễn phí, mã nguồn mở được phát triển bởi Anonymous, một nhóm hacktivist, để thay thế cho Low Orbit Ion Cannon (LOIC). Được sử dụng cho tấn công từ chối dịch vụ (DoS) và tấn công từ chối dịch vụ phân tán (DDoS), nó hoạt động bằng cách tràn ngập hệ thống mục tiêu bằng các yêu cầu HTTP GET và POST rác.

## Đăng nhập vào các máy ảo
Trước khi bắt đầu bài lab này, hãy bật và đăng nhập vào tất cả các máy ảo trong bài lab (Windows 7, 10, Server và Kali Linux).

Sao chép thư mục **High Orbit Ion Cannon (HOIC)** sang tất cả các máy ảo Windows (3 máy).

## Cấu hình HOIC
Chuyển sang Windows 10 và mở HOIC (hoic2.1.exe)

Trên giao diện GUI của HOIC, nhấp vào '**+**' để thêm mục tiêu.

![hoic-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/ae12d7b7073ba34fd105724b932664d42326214a/hoic-1.png)

Trên cửa sổ bật lên HOIC - [Target]:
1. Nhập URL mục tiêu (địa chỉ IP của Kali)
2. Kéo thanh công suất lên **High**
3. Chọn **GenericBoost.hoic** booster từ danh sách thả xuống
4. Nhấp **add**
![hoic-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/4d7add45a1ce5bb52c475b1419b2747fca8ce61d/hoic-4.png)

Đặt giá trị **THREADS** thành **20** như hình dưới:

![hoic-3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/ae12d7b7073ba34fd105724b932664d42326214a/hoic-3.png)

**Bây giờ lặp lại quy trình này trên mỗi máy ảo Windows trong lab của bạn**.

## Thực hiện tấn công DDoS
Khi HOIC đã được cấu hình trên tất cả các máy, chuyển sang từng máy và nhấp vào **FIRE TEH LAZER!**.

<p align="center">
  <img src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/4a96be03755e00ce6123ea2f6b022b77488744ec/hoic-5.png" />
</p>
Điều này bắt đầu cuộc tấn công DDoS trên mục tiêu (Kali Linux).

Chuyển sang **Kali Linux** và khởi chạy **Wireshark**.

Quan sát rằng Wireshark bắt đầu bắt một lượng gói tin rất lớn, điều này có nghĩa là máy đang trải qua một số lượng lớn gói tin đến. Các gói tin này đến từ các máy ảo **Windows 7, Windows Server và Windows 10**.

![hoic-6](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/4a96be03755e00ce6123ea2f6b022b77488744ec/hoic-6.png)

Trong bài lab này, chỉ có ba máy được trình bày để tràn ngập một máy duy nhất. Nếu có một số lượng lớn máy thực hiện tràn ngập, thì tài nguyên của Kali Linux mục tiêu sẽ bị tiêu thụ hoàn toàn và máy bị quá tải.

Trong thực tế, một nhóm tin tặc vận hành hàng trăm hoặc hàng nghìn máy cấu hình công cụ này trên máy của họ, và mô phỏng cuộc tấn công DDoS bằng cách tràn ngập một máy/trang web mục tiêu cùng một lúc. Mục tiêu bị quá tải và ngừng phản hồi yêu cầu của người dùng hoặc bắt đầu loại bỏ các gói tin đến từ người dùng hợp lệ. Số lượng máy tấn công càng lớn, tác động của cuộc tấn công lên máy/trang web mục tiêu càng cao.

Để dừng DDoS, nhấp vào **FIRE TEH LAZER!** một lần nữa, sau đó đóng cửa sổ HOIC trên tất cả các máy ảo tấn công.
