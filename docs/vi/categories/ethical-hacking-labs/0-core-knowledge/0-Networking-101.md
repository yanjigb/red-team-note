# Mạng Máy Tính 101
> ⚠ Mạng 101 là phần giới thiệu đơn giản về các khái niệm mạng quan trọng nhất cho hacking đạo đức. Đây là một chủ đề rất lớn và được khuyến nghị học từ nhiều nguồn khác nhau như khóa học, sách và các chứng chỉ như [Cisco CCNA](https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html) hoặc [CompTIA Network+](https://www.comptia.org/certifications/network). Ngoài ra có rất nhiều **tài liệu đào tạo miễn phí**, tôi khuyến nghị [kiểm tra danh sách này](https://freetraining.dfirdiva.com/free-networking-training) sau.

### Mục tiêu
* Hiểu các khái niệm cơ bản về mạng

### **Module này theo thứ tự:**
1. Giới thiệu
2. Địa chỉ IP và MAC
3. Chia mạng con (Subnetting)
4. TCP, UDP và Bắt tay 3 bước
5. Cổng & Giao thức
6. Mô hình OSI

# 1. Giới thiệu

## Vậy mạng là gì?
Một mạng bao gồm hai hoặc nhiều máy tính được kết nối với nhau để chia sẻ tài nguyên. Mạng máy tính là nền tảng của truyền thông trong CNTT. Chúng được sử dụng theo nhiều cách khác nhau và có thể bao gồm nhiều loại mạng khác nhau. Mạng máy tính là một tập hợp các máy tính được kết nối với nhau để chúng có thể chia sẻ thông tin. Những ví dụ sớm nhất về mạng máy tính là từ thập niên 1960, nhưng chúng đã đi một chặng đường dài trong nửa thế kỷ kể từ đó.

![net](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/5edc8fbef915a17c93fa91c95877134c8fac324c/net2.jpg)

<sub><sup>Topology mạng LAN - Mạng SOHO / Nhà nhỏ</sup></sub>

**Hai loại mạng phổ biến nhất bao gồm: LAN (Mạng cục bộ) và WAN (Mạng diện rộng)**

## Các loại topology
Có nhiều loại mạng khác nhau, có thể được sử dụng cho các mục đích khác nhau và bởi các loại người dùng và tổ chức khác nhau. Dưới đây là một số loại mạng bạn có thể gặp:

### LAN - Mạng Cục Bộ (Local Area Network)

* LAN là một mạng có ranh giới logic và vật lý mà một máy tính có thể phát sóng

<p align="center">
<img width="70%" src="https://www.geocities.ws/alcantara97/starhttt.gif" />
</p>

### WAN - Mạng Diện Rộng (Wide Area Network)

* WAN là nhiều mạng LAN hoặc các mạng WAN bổ sung với chức năng định tuyến để kết nối liên thông.

<p align="center">
<img width="70%" src="https://gist.github.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/a3f9b5f3f243467208da83e0d0e543b32233c5d6/wan-topo.jpg" />
</p>

### MAN - Mạng Đô Thị (Metropolitan Area Network)

<p align="center">
<img width="70%" src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f37cec4e00f726cb4be3661f20ccad77751e003a/man-topo.jpg" />
</p>

### Internet
Kết nối các mạng WAN với nhau cho đến khi hoàn thành toàn bộ thế giới = Internet.

* Giao thức vận hành internet là TCP/IP
* Miễn là bạn sử dụng địa chỉ IPv4 hoặc IPv6 hợp lệ
<p align="center">
<img width="70%" src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/8c176b8a798fb5749c4391c45015ee5d14d56f13/internet.png" />
</p>

### Intranet
Nếu bạn sử dụng ngăn xếp TCP/IP và tạo mạng LAN hoặc WAN của riêng mình = Intranet.

* Intranet là mạng riêng vẫn chạy TCP/IP

<p align="center">
<img width="70%" src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/8c176b8a798fb5749c4391c45015ee5d14d56f13/intranet.png" />
</p>

## Các thuật ngữ phổ biến trong mạng
* **Địa chỉ IP (internet protocol)**: địa chỉ mạng của hệ thống trên mạng, còn được gọi là Địa chỉ Logic).

* **Địa chỉ MAC**: địa chỉ MAC hay địa chỉ vật lý định danh duy nhất mỗi máy chủ. Nó được liên kết với Card giao diện mạng (NIC).

* **Hệ thống mở**: hệ thống mở được kết nối vào mạng và sẵn sàng cho giao tiếp.

* **Hệ thống đóng**: hệ thống đóng không được kết nối vào mạng và do đó không thể giao tiếp được.

* **Cổng (Port)**: cổng là kênh qua đó dữ liệu được gửi và nhận.

* **Nút (Nodes)**: nút là thuật ngữ dùng để chỉ bất kỳ thiết bị tính toán nào như máy tính gửi và nhận các gói mạng qua mạng.

* **Gói mạng (Network packets)**: dữ liệu được gửi đến và đi từ các nút trong mạng.

* **Bộ định tuyến (Routers)**: bộ định tuyến là các phần cứng quản lý các gói định tuyến. Chúng xác định nút nào mà thông tin đến và nơi để gửi đến. Một bộ định tuyến có giao thức định tuyến xác định cách nó giao tiếp với các bộ định tuyến khác.

* **Dịch địa chỉ mạng (NAT - Network address translation)**: kỹ thuật mà bộ định tuyến sử dụng để cung cấp dịch vụ internet cho nhiều thiết bị hơn bằng cách sử dụng ít địa chỉ IP công khai hơn. Một bộ định tuyến có địa chỉ IP công khai nhưng các thiết bị kết nối với nó được gán IP riêng mà người ngoài mạng không thể thấy.

* **Giao thức cấu hình máy chủ động (DHCP - Dynamic host configuration protocol)**: gán địa chỉ IP động cho các máy chủ và được duy trì bởi nhà cung cấp dịch vụ internet.

* **Nhà cung cấp dịch vụ internet (ISP - Internet service providers)**: các công ty cung cấp kết nối internet cho mọi người, cả cá nhân và doanh nghiệp cũng như các tổ chức khác.

# 2. Địa chỉ IP & MAC
## Địa chỉ IP là gì (Internet Protocol)?
![ip](https://media.fs.com/images/community/upload/wangEditor/201912/24/_1577182449_2uLs0pQcuT.jpg)

Địa chỉ IP là một địa chỉ duy nhất xác định một thiết bị trên internet hoặc mạng cục bộ. IP là viết tắt của "Internet Protocol" (Giao thức Internet), là tập hợp các quy tắc điều chỉnh định dạng dữ liệu được gửi qua internet hoặc mạng cục bộ.

## Kiểm tra địa chỉ IP nội bộ của bạn

1. Nếu bạn sử dụng Linux hoặc MacOS bạn có thể mở terminal và nhập lệnh `ifconfig`
2. Đối với máy Windows bạn có thể mở cmd prompt hoặc powershell, sau đó nhập `ipconfig /all`

![inet](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/5a56240010acbc33026413ad6b5c6f66e9450413/inet.png)

- inet IPv4: `192.168.64.3`
   - `inet` --> inet (họ giao thức Internet) hiển thị địa chỉ IP nội bộ. Đây là IP phiên bản 4 (IPv4) sử dụng số thập phân 32-bit.
- inet6 IPv6: `fe80::c83b:ccff:fe0e:1069`

   - `inet6` --> Là phiên bản mới của IP (IPv6), sử dụng giá trị thập lục phân 128 bit.
- `ether` --> Địa chỉ MAC - định danh duy nhất được gán cho bộ điều khiển giao diện mạng (NIC)

## Thêm về giá trị thập phân IPv4:

``` 
IPv4 = 32 bits range (4 octets of 8 bits, from 0-255 each(4))

11000000.10101000.01000000.00000011   [IPv4 binary]
   192  .   168  .   64   .  3        [IPv4 decimal]
``` 

### Phép toán học đằng sau IPv4:

- Một octet có 8 bit:

0 or 1 | 0 or 1 | 0 or 1 | 0 or 1 | 0 or 1 | 0 or 1 | 0 or 1 | 0 or 1 
-|-|-|-|-|-|-|-
8th bit | 7th bit | 6th bit | 5th bit | 4th bit | 3rd bit | 2nd bit | 1st bit
128 (2^7) | 64 (2^6) | 32 (2^5) | 16 (2^4) | 8 (2^3) | 4 (2^2) | 2 (2^1) | 1 (2^0)

Đây là cách các octet nhị phân chuyển sang thập phân: Bit ngoài cùng bên phải, hay bit ít quan trọng nhất, của một octet có giá trị 2^0. Bit ngay bên trái của nó có giá trị 2^1. Điều này tiếp tục cho đến bit ngoài cùng bên trái, hay bit quan trọng nhất, có giá trị 2^7. Vì vậy nếu tất cả các bit nhị phân đều là 1, giá trị thập phân tương ứng sẽ là 255 như thể hiện ở đây:

```
  1   1   1   1   1   1   1   1
  |   |   |   |   |   |   |   |
(128 +64 +32 +16 +8  +4  +2  +1) --> 255 

Ví dụ chuyển đổi octet:
Địa chỉ IP: 192.168.64.3

Để tính octet đầu tiên (192.), từ định dạng nhị phân sang thập phân:

128  64  32  16  8   4   2   1         
 |   |   |   |   |   |   |   |
 1   1   0   0   0   0   0   0          
 |   |   |   |   |   |   |   |
128+ 64+ 0+  0+  0+  0+  0+  0 = 192   ---> giá trị cuối cùng (octet đầu tiên IPv4 dạng thập phân)

```
* Lấy IP: `192.168.64.3`
* Octet đầu tiên `192` ở dạng nhị phân 8 bit là `11000000`.
* Chỉ bit thứ `8` và `7` đang bật và phần còn lại (`bit thứ 6 đến 1`) đang tắt, nghĩa là giá trị thập phân là tổng cuối cùng của các giá trị này:  `128 + 64 = 192`

⚠️ **Tại sao? Máy tính thấy mọi thứ dưới dạng nhị phân; bật và tắt.**


## IPv4 và IPv6
![ipv](https://academy.avast.com/hs-fs/hubfs/New_Avast_Academy/IPv4%20vs.%20IPv6%20What%E2%80%99s%20the%20Difference/IPv4-vs-IPv6.png?width=2750&name=IPv4-vs-IPv6.png)

## Địa chỉ IP Riêng tư và Công khai
Tất cả địa chỉ IPv4 có thể được chia thành hai nhóm lớn: **toàn cầu (hoặc công khai, bên ngoài)** - nhóm này cũng có thể được gọi là 'địa chỉ WAN' — những địa chỉ được sử dụng trên Internet, và **địa chỉ riêng tư (hoặc cục bộ, nội bộ)** — những địa chỉ được sử dụng trong mạng cục bộ (LAN).

![priv-pub](https://wiki.teltonika-networks.com/wikibase/images/thumb/a/a7/Sip.png/1100px-Sip.png)

## Thêm về địa chỉ **IP Riêng tư**:
Các địa chỉ riêng tư (nội bộ) không được định tuyến trên Internet và không có lưu lượng nào có thể gửi đến chúng từ Internet, chúng chỉ hoạt động trong mạng cục bộ.
Các địa chỉ riêng tư bao gồm các địa chỉ IP từ các mạng con sau:

![private-ip](https://66.media.tumblr.com/02a533c1d55ca0ba83e0176168df06ec/tumblr_inline_o4m1taQugo1u4ytoo_1280.jpg)

## NAT - Dịch Địa Chỉ Mạng
NAT là viết tắt của dịch địa chỉ mạng. Đó là cách ánh xạ nhiều địa chỉ riêng cục bộ thành một địa chỉ công khai trước khi truyền thông tin. Các tổ chức muốn nhiều thiết bị sử dụng một địa chỉ IP duy nhất sử dụng NAT, cũng như hầu hết các bộ định tuyến gia đình.

![nat2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/8275f73b57bdcb982b1d69aa8d213d2bdb384657/nat2.png)

1. **NAT Tĩnh (Static NAT)**

   Khi địa chỉ cục bộ được chuyển đổi thành địa chỉ công khai, NAT này chọn cùng một địa chỉ. Điều này có nghĩa là sẽ có một địa chỉ IP công khai nhất quán liên kết với bộ định tuyến hoặc thiết bị NAT đó.

2. **NAT Động (Dynamic NAT)**

   Thay vì chọn cùng một địa chỉ IP mỗi lần, NAT này đi qua một nhóm địa chỉ IP công khai. Điều này dẫn đến việc bộ định tuyến hoặc thiết bị NAT nhận được một địa chỉ khác mỗi lần bộ định tuyến dịch địa chỉ cục bộ sang địa chỉ công khai.

### ⚠️ Địa chỉ IP hoạt động trên **Lớp 3 của Mô hình OSI**

*Lưu ý: Module này sẽ giới thiệu mô hình OSI sau.*

![osi3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b9d7f33be654d299f6618feeacb97fc5fd5bd7d2/OSI_L3.png)

# 3. Chia Mạng Con (Subnetting)
### Tại sao phải chia mạng con?
Cách xây dựng địa chỉ IP khiến cho các bộ định tuyến Internet tương đối đơn giản để tìm đúng mạng để định tuyến dữ liệu vào. Tuy nhiên, trong một mạng lớp A (ví dụ), có thể có hàng triệu thiết bị kết nối, và có thể mất một lúc để dữ liệu tìm đúng thiết bị. Đây là lý do tại sao chia mạng con hữu ích: chia mạng con thu hẹp địa chỉ IP để sử dụng trong một phạm vi thiết bị.

Vì địa chỉ IP chỉ giới hạn trong việc chỉ ra mạng và địa chỉ thiết bị, địa chỉ IP không thể được sử dụng để chỉ ra gói IP nên đi đến mạng con nào. Các bộ định tuyến trong mạng sử dụng thứ gọi là mặt nạ mạng con để phân loại dữ liệu vào các mạng con.

> ⚠️ Chia mạng con thực sự quan trọng cho các chuyên gia kiểm thử xâm nhập và hacker tham vọng, cuối cùng bạn sẽ đối mặt với nhiều trường hợp liên quan đến mạng nhỏ hoặc lớn trong các hoạt động tương lai. Hiểu loại địa chỉ IP, phạm vi, số lượng máy chủ có sẵn là rất quan trọng cho bất kỳ phân tích mạng nào.

## Bảng gian lận giúp chia mạng con dễ hơn

![subnetting](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/5ce4b7daa9c2c10ccd44675eadaceae646e487e2/cyber-mentor-subnetting.png)

* Bảng gian lận Subnetting của CyberMentor: https://twitter.com/thecybermentor/status/1211335431406727169

* Bảng gian lận Subnetting thay thế: https://nsrc.org/workshops/2009/summer/presentations/day3/subnetting.pdf



## Bài tập:
Chia mạng con giúp trả lời các câu hỏi cơ bản như:
   - Xác định địa chỉ mạng và địa chỉ phát sóng
   - Có bao nhiêu máy chủ trong phạm vi mạng/máy chủ?
   - Mặt nạ nào cho phép máy chủ cụ thể?


IP range | Subnet | Hosts | Network | Broadcast
-|-|-|-|-
192.168.1.16/28 | 255.255.255.240 | 14 | 192.168.1.16 | 192.168.1.31 
192.168.0.0/22 | ? | ? | ? | ?

- Lấy phạm vi IP `192.168.0.0/22` liệt kê ở trên
- Bạn có thể dễ dàng tìm ra mặt nạ mạng con bằng cách xem bảng gian lận, bạn có thể thấy cột `252`. Chỉ cần thay thế giá trị của `x`. Bạn sẽ được `255.255.252.0`
   - Mặt nạ mạng con có thể là 0, 128, 192, 224, 240, 248, 252, 254 và 255. 
   - Để hiểu cơ bản về toán học đằng sau các bit, xem hình dưới đây:

![bits](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c1e01e29aedc394f2d75c4ccf57e72606775103a/bits.png)

- Số lượng máy chủ là `2^(n) - 2`. 
   - `n = số bit tắt`
   - Trong trường hợp này, là 2^10 = 1024 -> 1024 - 2 = `1022`
- Phần mạng là giá trị đầu tiên và thấp nhất có thể.
- Địa chỉ phát sóng là giá trị cuối cùng và cao nhất có thể.

IP range | Subnet | Hosts | Network | Broadcast
-|-|-|-|-
192.168.0.0/22 | 255.255.252.0 | 1022 | 192.168.0.0 | 192.168.3.255



## Thông tin liên quan khác về IP
- **Các loại địa chỉ IPv4 chính**
  - **Unicast** - được xử lý bởi một người nhận duy nhất
  - **Multicast** - được xử lý bởi các thành viên của một nhóm cụ thể
  - **Broadcast** - được xử lý bởi mọi người trên mạng
    - **Limited** - gửi đến mọi hệ thống trong miền (255.255.255.255)
    - **Directed** - gửi đến tất cả thiết bị trên một mạng con và sử dụng địa chỉ phát sóng đó
- **Mặt nạ mạng con** - xác định bao nhiêu địa chỉ có sẵn trên một mạng con cụ thể
  - Được biểu diễn bằng ba phương pháp
    - **Thập phân** - 255.240.0.0
    - **Nhị phân** - 11111111.11110000.00000000.00000000
    - **CIDR** - x.x.x.x/12   (trong đó x.x.x.x là một địa chỉ ip trong phạm vi đó)
  - Nếu tất cả bit trong trường máy chủ đều là 1, địa chỉ đó là địa chỉ phát sóng
  - Nếu tất cả đều là 0, đó là địa chỉ mạng
  - Bất kỳ kết hợp nào khác cho biết một địa chỉ trong phạm vi

# Địa chỉ MAC

-  Địa chỉ MAC (Media Access Control) được cung cấp bởi nhà sản xuất Card NIC và cung cấp địa chỉ vật lý của máy tính.

![macphys](https://i1.wp.com/learntomato.flashrouters.com/wp-content/uploads/MAC-address-hardware.jpg?resize=560%2C315&ssl=1)

Ba byte đầu tiên của địa chỉ MAC ban đầu được gọi là **OUI, hay Định danh Duy nhất của Tổ chức. Mỗi nhà sản xuất thiết bị mạng được gán một OUI, và có thể tự do gán số của riêng họ trong khối đó.**

```
   OUI     NIC
    |       |
________ ________
00:0c:29:99:98:ca
```
## Kiểm tra nhà sản xuất đằng sau địa chỉ MAC
1. Kiểm tra địa chỉ MAC của bạn sử dụng lệnh `ifconfig` (Linux) hoặc `/ipconfig` (Windows)
![mac](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/214242916f8947f09fc15d5bdde6a668fd4a4c1f/mac2.png)

2. Sao chép và lưu **ba byte đầu tiên** của địa chỉ của bạn. *(Ba byte đầu tiên từ hình trên là `00:0c:29`)*

3. Xác thực thông tin bằng cách thực hiện **Tra cứu Địa chỉ MAC** trên internet. Ví dụ này sử dụng: https://aruljohn.com/
![mac2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c82686452d3e671f9a4d351cd5c02171914dd16d/mac2lookup.png)

4. Như bạn có thể thấy, tra cứu OUI xác định một giao diện mạng ảo được cung cấp bởi VMware

*Vì vậy, để tóm tắt, **ba byte đầu tiên** được gán cho nhà sản xuất thiết bị mạng và nhà sản xuất gán ba byte cuối cùng của một địa chỉ.*

### ⚠️ Địa chỉ MAC hoạt động trên Lớp 2 của Mô hình OSI
![osil2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b9d7f33be654d299f6618feeacb97fc5fd5bd7d2/OSI_L2.png)

# 4. TCP/IP, UDP và Bắt tay 3 bước

## Giao thức Điều khiển Truyền tải/Giao thức Internet (TCP/IP)

* TCP được dùng để làm gì?

TCP cho phép dữ liệu được truyền giữa các ứng dụng và thiết bị trên mạng. Nó được thiết kế để chia nhỏ một thông báo, chẳng hạn như email, thành các gói dữ liệu để đảm bảo thông báo đến đích thành công và nhanh nhất có thể.

* TCP có nghĩa là gì?

TCP có nghĩa là Giao thức Điều khiển Truyền tải (Transmission Control Protocol), là một tiêu chuẩn truyền thông để gửi dữ liệu và thông báo qua mạng. TCP là một tiêu chuẩn cơ bản xác định các quy tắc của internet và là giao thức phổ biến được sử dụng để gửi dữ liệu trong truyền thông mạng kỹ thuật số.

- Mô hình TCP/IP bao gồm nhiều loại giao thức, bao gồm:
   - TCP và IP
   - Address Resolution Protocol (ARP)
   - Internet Control Message Protocol (ICMP)
   - Reverse Address Resolution Protocol (RARP)
   - User Datagram Protocol (UDP)

![tcpmod](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/bccff9a7c15aa11636c03686ef344ae2d433f699/tcpmodel.png)

<sub><sup>Mô hình TCP/IP</sup></sub>

TCP là giao thức được sử dụng phổ biến nhất trong số các giao thức này và chiếm phần lớn lưu lượng trên mạng TCP/IP. **UDP là một giải pháp thay thế cho TCP không cung cấp sửa lỗi, kém tin cậy hơn và có ít overhead hơn, khiến nó lý tưởng cho phát trực tuyến.**

## Giao thức Datagram Người dùng (UDP)
Là một giao thức truyền dữ liệu nhẹ hoạt động trên IP.
UDP cung cấp cơ chế để phát hiện dữ liệu bị hỏng trong gói, nhưng nó không cố gắng giải quyết các vấn đề khác phát sinh với gói, chẳng hạn như gói bị mất hoặc out of order. Đó là lý do tại sao UDP đôi khi được gọi là Giao thức Dữ liệu Không Tin cậy (Unreliable Data Protocol).
UDP đơn giản nhưng nhanh, ít nhất là so với các giao thức khác hoạt động trên IP. Nó thường được sử dụng cho các ứng dụng nhạy cảm với thời gian (chẳng hạn như phát video trực tiếp) nơi tốc độ quan trọng hơn độ chính xác.

- Trên hệ thống Linux và Unix bạn có thể sử dụng lệnh `lsof` để xem tiến trình nào đang sử dụng cổng UDP
![udp](https://cdn.kastatic.org/ka-perseus-images/edbdf593300fc4a51c60a97998c4d01a51ccd3b1.png)

## Định dạng TCP
![tc](https://cdn.kastatic.org/ka-perseus-images/e5fdf560fdb40a1c0b3c3ce96f570e5f00fff161.svg)

## Định dạng UDP
![udp](https://cdn.kastatic.org/ka-perseus-images/9d185d3d44c7ef1e2cd61655e47befb4d383e907.svg)

## Bắt tay TCP

TCP sử dụng bắt tay ba bước để thiết lập kết nối tin cậy. Kết nối là full duplex, và cả hai bên đồng bộ hóa (SYN) và xác nhận (ACK) lẫn nhau. Trao đổi bốn cờ này được thực hiện trong ba bước:
1. SYN
2. SYN-ACK
3. ACK 

![3wayhandshake](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/bd38a6a2d83ea02a4715d6cb7fd8e0d74af3bd26/3wayhs.jpg)

Cơ chế ba tin nhắn được thiết kế để hai máy tính muốn truyền thông tin qua lại có thể đàm phán các tham số của kết nối trước khi truyền dữ liệu như yêu cầu trình duyệt HTTP.

## Thêm các cờ TCP

| Flag | Tên           | Chức năng                                                     |
| ---- | -------------- | ------------------------------------------------------------ |
| SYN  | Đồng bộ hóa    | Được thiết lập trong giao tiếp ban đầu.  Đàm phán tham số và số thứ tự |
| ACK  | Xác nhận | Được thiết lập như xác nhận cho cờ SYN.  Luôn được thiết lập sau SYN ban đầu |
| RST  | Đặt lại          | Buộc chấm dứt kết nối (theo cả hai hướng)  |
| FIN  | Kết thúc         | Đóng giao tiếp có thứ tự                              |
| PSH  | Đẩy           | Buộc gửi dữ liệu mà không quan tâm đến bộ đệm    |
| URG  | Khẩn cấp         | Dữ liệu bên trong đang được gửi out of band.  Ví dụ là hủy một tin nhắn |

## Bắt gói Bắt tay 3 bước (Ví dụ)

- Hình dưới đây cho thấy các gói bắt tay 3 bước được bắt bởi [Wireshark](https://www.wireshark.org/)

![wireshark](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/5213becc28e3f9f46c976d05cd090ffd070ff5d1/wireshark0.png)

# 5. Cổng & Giao thức
## Cổng là gì?
Trong mạng máy tính, cổng là một điểm cuối giao tiếp. Ở cấp phần mềm, trong hệ điều hành, cổng là một cấu trúc logic xác định một tiến trình cụ thể hoặc một loại dịch vụ mạng.

## Các cổng phổ biến nhất
Với tư cách là chuyên gia kiểm thử xâm nhập hoặc hacker đạo đức, bạn nên quen thuộc với các cổng và giao thức phổ biến được sử dụng bởi các dịch vụ phổ biến.

### <u>Số hiệu Cổng</u>

- **Internet Assigned Numbers Authority** (IANA) - duy trì Registry Tên Dịch vụ và Số hiệu Cổng Giao thức Vận tải liệt kê tất cả các đặt chỗ số hiệu cổng

- Phạm vi

  - **Cổng được biết đến rộng rãi** - 0 - 1023

  - **Cổng đã đăng ký** - 1024 - 49,151

  - **Cổng động** - 49,152 - 65,535

    | Số hiệu Cổng | Giao thức | Giao thức Vận tải |
    | ----------- | -------- | ------------------ |
    | 20/21       | FTP      | TCP                |
    | 22          | SSH      | TCP                |
    | 23          | Telnet   | TCP                |
    | 25          | SMTP     | TCP                |
    | 53          | DNS      | TCP/UDP            |
    | 67          | DHCP     | UDP                |
    | 69          | TFTP     | UDP                |
    | 80          | HTTP     | TCP                |
    | 110         | POP3     | TCP                |
    | 135         | RPC      | TCP                |
    | 137-139     | NetBIOS  | TCP/UDP            |
    | 143         | IMAP     | TCP                |
    | 161/162     | SNMP     | UDP                |
    | 389         | LDAP     | TCP/UDP            |
    | 443         | HTTPS    | TCP                |
    | 445         | SMB      | TCP                |
    | 514         | SYSLOG   | UDP                |

  - Một dịch vụ được gọi là đang **lắng nghe** khi nó mở cổng cụ thể đó

  - Khi một dịch vụ đã tạo kết nối, cổng ở trạng thái **đã thiết lập**

  - Lệnh **`netstat`**:

    - Hiển thị các cổng mở trên máy tính
    - **netstat -an** hiển thị kết nối ở dạng số
    - **netstat -b** hiển thị các file thực thi gắn với cổng mở (chỉ admin)

# 6. Mô hình OSI
Mô hình OSI là một khung mạng giả thuyết sử dụng các giao thức và cơ chế cụ thể trong mỗi lớp. Mô hình này được sử dụng để chia kiến trúc mạng thành bảy lớp khác nhau về mặt khái niệm. Các lớp này là:

![osi-model](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/3e2dc59e7c341f4d79b2b93bac03fd8378c7ae3a/tcpmo.jpg)

Cũng liên quan đến một số tư thế và cơ chế bảo mật mà chuyên gia bảo mật phải biết để phát hiện và đặt phương pháp bảo mật hiệu quả trong mỗi lớp.

## Thêm về các Lớp:

## Lớp 7 - Ứng dụng

![l7](https://www.cloudflare.com/img/learning/ddos/glossary/open-systems-interconnection-model-osi/7-application-layer.svg)

- Đây là lớp duy nhất tương tác trực tiếp với dữ liệu từ người dùng. Các ứng dụng phần mềm như trình duyệt web và ứng dụng email dựa vào lớp ứng dụng để bắt đầu giao tiếp. Nhưng cần nói rõ rằng các ứng dụng phần mềm client không thuộc lớp ứng dụng; thay vào đó lớp ứng dụng chịu trách nhiệm về các giao thức và xử lý dữ liệu mà phần mềm dựa vào để trình bày dữ liệu có ý nghĩa cho người dùng. Các giao thức lớp ứng dụng bao gồm HTTP cũng như SMTP (Simple Mail Transfer Protocol là một trong những giao thức cho phép giao tiếp email).

## Lớp 6 - Trình bày

![l6](https://www.cloudflare.com/img/learning/ddos/glossary/open-systems-interconnection-model-osi/6-presentation-layer.svg)

- Lớp này chủ yếu chịu trách nhiệm chuẩn bị dữ liệu để nó có thể được sử dụng bởi lớp ứng dụng; nói cách khác, lớp 6 làm cho dữ liệu có thể trình bày được cho các ứng dụng tiêu thụ. Lớp trình bày chịu trách nhiệm dịch, mã hóa và nén dữ liệu.

## Lớp 5 - Phiên

![l5](https://www.cloudflare.com/img/learning/ddos/glossary/open-systems-interconnection-model-osi/5-session-layer.svg)

- Đây là lớp chịu trách nhiệm mở và đóng giao tiếp giữa hai thiết bị. Thời gian giữa khi giao tiếp được mở và đóng được gọi là phiên. Lớp phiên đảm bảo rằng phiên mở đủ lâu để truyền tất cả dữ liệu được trao đổi, và sau đó đóng phiên kịp thời để tránh lãng phí tài nguyên.

## Lớp 4 - Vận tải

![l4](https://www.cloudflare.com/img/learning/ddos/glossary/open-systems-interconnection-model-osi/4-transport-layer.svg)

- Lớp 4 chịu trách nhiệm giao tiếp đầu-cuối giữa hai thiết bị. Bao gồm lấy dữ liệu từ lớp phiên và chia thành các phần gọi là segment trước khi gửi đến lớp 3. Lớp vận tải trên thiết bị nhận chịu trách nhiệm tái lắp ráp các segment thành dữ liệu mà lớp phiên có thể tiêu thụ.

- Lớp vận tải cũng chịu trách nhiệm kiểm soát luồng và kiểm soát lỗi. Kiểm soát luồng xác định tốc độ truyền tối ưu để đảm bảo rằng người gửi với kết nối nhanh không lấn át người nhận với kết nối chậm. Lớp vận tải thực hiện kiểm soát lỗi ở phía nhận bằng cách đảm bảo dữ liệu nhận được là đầy đủ, và yêu cầu truyền lại nếu không đầy đủ.

## Lớp 3 - Mạng

![l3](https://www.cloudflare.com/img/learning/ddos/glossary/open-systems-interconnection-model-osi/3-network-layer.svg)

- Lớp mạng chịu trách nhiệm tạo điều kiện truyền dữ liệu giữa hai mạng khác nhau. Nếu hai thiết bị giao tiếp trên cùng một mạng, thì lớp mạng là không cần thiết. Lớp mạng chia nhỏ các segment từ lớp vận tải thành các đơn vị nhỏ hơn, gọi là gói, trên thiết bị gửi, và tái lắp ráp các gói này trên thiết bị nhận. Lớp mạng cũng tìm đường đi vật lý tốt nhất cho dữ liệu để đến đích; điều này được gọi là định tuyến.

## Lớp 2 - Liên kết Dữ liệu

![l2](https://www.cloudflare.com/img/learning/ddos/glossary/open-systems-interconnection-model-osi/2-data-link-layer.svg)

- Lớp liên kết dữ liệu rất giống với lớp mạng, ngoại trừ lớp liên kết dữ liệu tạo điều kiện truyền dữ liệu giữa hai thiết bị trên CÙNG một mạng. Lớp liên kết dữ liệu lấy các gói từ lớp mạng và chia thành các phần nhỏ hơn gọi là frame. Giống như lớp mạng, lớp liên kết dữ liệu cũng chịu trách nhiệm kiểm soát luồng và kiểm soát lỗi trong giao tiếp nội mạng (Lớp vận tải chỉ kiểm soát luồng và kiểm soát lỗi cho giao tiếp liên mạng).

## Lớp 1 - Vật lý

![l1](https://www.cloudflare.com/img/learning/ddos/glossary/open-systems-interconnection-model-osi/1-physical-layer.svg)

- Lớp này bao gồm các thiết bị vật lý tham gia vào truyền dữ liệu, chẳng hạn như cáp và switch. Đây cũng là lớp nơi dữ liệu được chuyển đổi thành luồng bit, là chuỗi các số 1 và 0. Lớp vật lý của cả hai thiết bị cũng phải đồng ý về quy ước tín hiệu để có thể phân biệt số 1 với số 0 trên cả hai thiết bị.
