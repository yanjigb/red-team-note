# Sử dụng ZAP (Zed Attack Proxy)
Zed Attack Proxy (ZAP) là một công cụ kiểm thử xâm nhập miễn phí, mã nguồn mở được bảo trì dưới sự quản lý của dự án Open Web Application Security Project (OWASP). ZAP được thiết kế đặc biệt để kiểm thử ứng dụng web và có tính linh hoạt cũng như khả năng mở rộng cao.

<p align="center">
  <img src="https://www.zaproxy.org/getting-started/images/browser-no-proxy.png" />
</p>

Về bản chất, ZAP là một "man-in-the-middle proxy" (proxy trung gian). Nó nằm giữa trình duyệt của người kiểm thử và ứng dụng web để có thể chặn và kiểm tra các thông điệp được gửi giữa trình duyệt và ứng dụng web, sửa đổi nội dung nếu cần, và sau đó chuyển tiếp các gói tin đó đến đích. Nó có thể được sử dụng như một ứng dụng độc lập hoặc như một tiến trình daemon. [[...]](https://www.zaproxy.org/getting-started/)

[>> Tải ZAP](https://www.zaproxy.org/download/)

### Mục tiêu
* Chặn lưu lượng truy cập giữa máy chủ và client

### Yêu cầu
* Máy ảo Windows Server 2012 hoặc 2016 (Máy tấn công)
* Máy ảo Windows 10 (Mục tiêu)

## Thiết lập Proxy
1. Đăng nhập vào **Windows 10** và khởi động bất kỳ trình duyệt nào, trong lab này sử dụng: **Firefox**.

2. Vào **Settings** > **Network Settings**

3. Trong **Proxy Settings**, tích chọn ô **Manual Proxy Configuration**, và nhập địa chỉ IP của máy tấn công vào port **8080** như hình bên dưới:
![firefox-proxy](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-0.png)

4. Bạn cũng có thể cấu hình trực tiếp trong **Internet Properties** trên **Control Panel** > **Connections Tab** > **LAN Settings**
![proxy](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-7.png)
**Tích chọn checkbox Proxy Server và nhập địa chỉ IP của máy tấn công cùng port 8080** như hình bên dưới:
![proxy2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-8.png)

## Thiết lập ZAP (Zed Attack Proxy)
Chuyển sang máy tấn công (Windows Server).

Lưu ý: Đảm bảo đã cài đặt **Java Runtime**

1. Tải ZAP > https://www.zaproxy.org/download/

2. Trong quá trình cài đặt, đảm bảo chọn tùy chọn: **"No, I do not want to persist this session at this moment in time"**:
![zap1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-1.png)

3. Trên cửa sổ chính OWASP ZAP, nhấp vào biểu tượng **"+"** ở ngăn bên phải, sau đó thêm tab **Break**, như hình bên dưới:
![zap-main-window](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-2.png)
Tab **Break** cho phép bạn **sửa đổi response** hoặc **request** khi nó bị ZAP chặn.
Nó cũng cho phép bạn sửa đổi một số phần tử mà bạn không thể sửa đổi qua trình duyệt; bao gồm:
**Header, các trường ẩn, các trường bị vô hiệu hóa, các trường sử dụng Javascript để lọc ký tự bất hợp pháp**.

4. Khi tab **Break** đã được thêm, bạn cần cấu hình ZAP để hoạt động như một proxy, vào **Options** bằng cách nhấp vào biểu tượng **bánh răng** ở phía trên, như hình bên dưới:
![zap-options](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-3.png)

5. Trong cửa sổ **Options**, chọn **Local Proxies** từ ngăn bên trái; Địa chỉ là **địa chỉ IP của Windows Server** và port mặc định là **8080**:
![zap-options-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-4.png)

6. Quay lại **cửa sổ chính ZAP** và nhấp vào **Nút màu Xanh lá (Set break on all requests and responses)** như hình bên dưới:
![zap-green-icon](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-5.png)
Nút này thiết lập và hủy breakpoint toàn cục sẽ bắt và hiển thị response hoặc request tiếp theo trong tab Break từ máy mục tiêu.
Bạn có thể sửa đổi bất kỳ phần nào của request hoặc response mà bạn muốn và gửi nó đến ứng dụng nạn nhân bằng cách nhấp vào **Step** hoặc **Continue**.
Ngoài ra, bạn có thể nhấp **Drop** để loại bỏ request hoặc response.
---
1. **Chuyển lại sang máy mục tiêu (Windows 10)** và khởi động trình duyệt mà bạn đã cấu hình proxy.

2. Nhập URL: www.certifiedhacker.com , nếu bạn nhận được thông báo cảnh báo nào thì hãy chấp nhận rủi ro và tiếp tục.

3. Bây giờ, **chuyển sang máy tấn công (Windows Server)**, bạn sẽ thấy rằng proxy ZAP đã bắt đầu chụp các request từ mục tiêu.
![zap6](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-6.png)

4. Bây giờ nhấp vào nút **'submit and step to the next request'** cho đến khi bạn chụp được request **GET** của trang web đang duyệt.
![zap7](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-9.png)

Bạn có thể sửa đổi tất cả các request GET đã chụp trên **tab Break** và chuyển tiếp lưu lượng đến máy mục tiêu, thay đổi trang web, v.v.
