# Xây Dựng Phòng Thí Nghiệm

### Yêu cầu 
* Windows 10, macOS hoặc bất kỳ bản phân phối Linux nào
    * Ít nhất 8 GB RAM (khuyến nghị 16GB)

### Mục tiêu
* Hiểu cách máy ảo hoạt động
* Học cách tạo môi trường ảo cơ bản cho mục đích kiểm thử xâm nhập

# Máy ảo (VM) là gì?
Để đơn giản, hãy nghĩ về máy ảo (VM) như một "máy tính làm từ phần mềm" mà bạn có thể sử dụng để chạy bất kỳ phần mềm nào bạn sẽ chạy trên một máy tính vật lý thực. Giống như máy vật lý, máy ảo có hệ điều hành riêng (Windows, Linux, v.v.), lưu trữ, mạng, cài đặt cấu hình và phần mềm, và nó hoàn toàn được cách ly khỏi các máy ảo khác chạy trên máy chủ đó.

![vm](https://miro.medium.com/max/937/1*QgshMdPQ7ZzK1hRbv1ncPQ.jpeg)


**Lợi ích bảo mật** — Vì máy ảo chạy trên nhiều hệ điều hành, sử dụng hệ điều hành khách trên VM cho phép bạn chạy các ứng dụng có độ bảo mật đáng ngờ và bảo vệ hệ điều hành chủ của bạn. Máy ảo cũng cho phép pháp y bảo mật tốt hơn, kiểm thử xâm nhập và thường được sử dụng để nghiên cứu virus máy tính một cách an toàn, cách ly virus để tránh rủi ro cho máy tính chủ.

### Hypervisor
Có hai loại hypervisor chính, được gọi là **"Loại 1" (hoặc "bare metal")** và **"Loại 2" (hoặc "hosted")**.

![hypervisors](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/0143eb15cf424c87ae823109d73df9ebe3faebec/hyper.png)

- **Hypervisor Loại 1** hoạt động như một hệ điều hành nhẹ và chạy trực tiếp trên phần cứng của máy chủ.
- **Hypervisor Loại 2** chạy như một lớp phần mềm trên hệ điều hành, giống như các chương trình máy tính khác.

# 1. Cài đặt VirtualBox

- **Hướng dẫn này sử dụng [Oracle VM VirtualBox](https://www.virtualbox.org), hypervisor hosted miễn phí và mã nguồn mở phổ biến nhất cho ảo hóa x86, được phát triển bởi Oracle.**
- Có các tùy chọn khác từ các nhà cung cấp khác nhau để đạt kết quả tương tự:
    - [VMware Player cho Windows (dùng thử 30 ngày)](https://www.vmware.com/products/workstation-player.html)
    - [VMware Fusion cho macOS (dùng thử 30 ngày)](https://www.vmware.com/products/fusion.html)
    - [Windows Hyper-V](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/about/)
    - [Linux KVM](https://help.ubuntu.com/community/KVM/Installation)

1. **Đảm bảo PC của bạn hỗ trợ ảo hóa phần cứng (Windows)** 
    - Khởi động lại máy tính của bạn
    - Ngay khi máy tính đang khởi động từ màn hình đen, nhấn Delete, Esc, F1, F2 hoặc F4. Mỗi nhà sản xuất máy tính sử dụng một phím khác nhau nhưng nó có thể hiển thị một thông báo ngắn khi khởi động cho bạn biết nhấn phím nào. Nếu bạn bỏ lỡ lần đầu, khởi động lại và thử lại. Nhấn phím khoảng hai lần một giây khi máy tính đang khởi động rất hữu ích. Nếu bạn không thể vào BIOS bằng phương pháp này, hãy tham khảo hướng dẫn sử dụng máy tính của bạn.
    - Trong cài đặt BIOS, tìm các mục cấu hình liên quan đến CPU. Chúng có thể nằm dưới các tiêu đề Processor, Chipset hoặc Northbridge.
    - Bật ảo hóa; cài đặt có thể được gọi là **VT-x, AMD-V, SVM, hoặc Vanderpool**. Bật Intel VT-d hoặc AMD IOMMU nếu các tùy chọn có sẵn.
    - Lưu thay đổi và khởi động lại.

> ⚠️  Nếu bạn không thể tìm thấy cài đặt ảo hóa trong BIOS, điều đó có thể có nghĩa là máy tính của bạn không hỗ trợ.

2. **Tải phiên bản mới nhất của Virtual Box**
    - Truy cập trang web Oracle Virtual Box:
        - https://www.virtualbox.org/wiki/Downloads
    - Chọn hệ điều hành hiện tại của bạn và tải trình cài đặt
    - ![v](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/944dad38ad3bfc556600c6ca3e08ec83cabd54e5/vbox1.png)
    - Ngoài ra, cuộn xuống trên cùng trang và tải **VirtualBox Extension Pack**. Phần mở rộng này sẽ cho phép các tính năng VirtualBox như hỗ trợ USB, mã hóa đĩa ảo, v.v.
    - ![v2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/944dad38ad3bfc556600c6ca3e08ec83cabd54e5/vbox2.png)

3. **Cài đặt Virtual Box và Extension Pack**
    - Không có cấu hình đặc biệt nào trong quá trình cài đặt **Virtual Box**, chỉ cần click và cài đặt.
    - Khi cài đặt xong, cài đặt **Extension Pack** bằng cách nhấp đúp vào nó; Phần mở rộng tệp là `.vbox-extpack`. Đừng lo lắng về các cảnh báo.

## Cấu hình NAT của VirtualBox
*Các bước tiếp theo sẽ hướng dẫn cách tạo mạng NAT trên VirtualBox. Nói đơn giản, Máy ảo cần một card mạng ảo, để truy cập internet và tách biệt IP Máy chủ (hệ điều hành chính) và IP Khách (VM).*

4. **Khởi chạy VirtualBox và mở panel `Preferences`** 

![pref1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/1b0a358d438d859df17db305753ce41c1826e4b0/pref1.png)

5. **Vào tab `Network` ở panel bên trái, sau đó nhấn nút `green plus button` ở bên phải**

![pref2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/1b0a358d438d859df17db305753ce41c1826e4b0/pref2.png)

6. **Theo mặc định, VirtualBox tự động tạo một NatNetwork. Nhấn nút `OK` và lưu cấu hình này**

![pref3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/1b0a358d438d859df17db305753ce41c1826e4b0/pref3.png)


7. **Phần tiếp theo chúng ta sẽ tải phiên bản Kali Linux mới nhất và khởi động nó trong phần mềm VirtualBox**



## Giới thiệu về Kali Linux 
![kali](https://www.bleepstatic.com/content/hl-images/2019/11/29/kali-header.jpg)

> ⚠️  Hướng dẫn Kali Linux sẽ được giới thiệu ở module tiếp theo [Linux cho Hacker].md 

Kali Linux (trước đây được gọi là BackTrack Linux) là một bản phân phối Linux mã nguồn mở, dựa trên Debian, hướng đến Kiểm thử Xâm nhập nâng cao và Kiểm toán Bảo mật. [[+]](https://www.kali.org/docs/introduction/what-is-kali-linux/)

Kali Linux chứa vài trăm công cụ nhắm đến nhiều nhiệm vụ bảo mật thông tin khác nhau, chẳng hạn như:
- Kiểm thử Xâm nhập
- Nghiên cứu Bảo mật
- Pháp y Máy tính
- Kỹ thuật Đảo ngược

## Tải hình ảnh Kali Linux mới nhất
1. **Truy cập trang web Offensive Security:**
    - https://www.offensive-security.com/kali-linux-vm-vmware-virtualbox-image-download/
2. **Tải hình ảnh VirtualBox của Kali Linux, đảm bảo chọn `Virtual Box image (OVA)`**

![kali0](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/163a5fcc5653f6c06fb7e63fbf570e3fd9b5c144/kali0.png)

# 2. Cài đặt Kali Linux trên VirtualBox
Khi bạn đã cài đặt VirtualBox và tải hình ảnh Kali Linux, bạn chỉ cần nhập nó vào VirtualBox để làm cho nó hoạt động.

1. **Khởi chạy VirtualBox và nhấn nút `Import Button` ở menu trên cùng**

![kali1](https://i1.wp.com/itsfoss.com/wp-content/uploads/2019/02/vmbox-import-kali-linux.jpg?w=956&ssl=1)

2. **Tiếp theo, duyệt đến hình ảnh Kali Linux (OVA) bạn vừa tải và chọn để nhập (như bạn có thể thấy trong hình dưới đây).**

![kali2](https://i2.wp.com/itsfoss.com/wp-content/uploads/2019/02/vmbox-linux-next.jpg?w=954&ssl=1)

3. **Tiếp theo, bạn sẽ thấy cài đặt cho máy ảo sắp được nhập. Bạn có thể tùy chỉnh hoặc không – đó là lựa chọn của bạn dựa trên dung lượng phần cứng.**
    - Nếu bạn có máy tính với 8GB RAM và ít nhất 2 lõi, để cài đặt mặc định.
    - Nếu máy tính của bạn có 16GB RAM hoặc hơn, tôi khuyến nghị sử dụng 4GB RAM cho Kali Linux, để làm điều đó, cuộn xuống danh sách cấu hình và thay đổi `giá trị RAM` thành `4096` MB

![kali3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/9a53e3ba4ca62c777cf59acc53d211b4c187598e/pref4.png)

4. **Bạn sẽ thấy Kali box được liệt kê. Chỉ cần nhấn Start để khởi chạy.**

![kali4](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/5f7c4d496d67f429aff72c1c177028f16dc35379/pref5.png)

5. **Nhập thông tin đăng nhập mặc định:** username: `kali`, password: `kali`. 
    - Mẹo: Trên Linux, bạn có thể thay đổi mật khẩu mặc định của người dùng hiện tại bằng cách nhập `passwd` trên terminal.

![kali5](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/5f7c4d496d67f429aff72c1c177028f16dc35379/kali-log.png)

6. **Hoàn thành!**

![kali6](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/a8f9a9f928ce6aeb71683cf95cb738b5842d0c04/kali-desk.png)

- ⚠️  **Module tiếp theo bạn sẽ học một số kỹ thuật của bản phân phối Kali và cách vận hành trên chính Linux.**
