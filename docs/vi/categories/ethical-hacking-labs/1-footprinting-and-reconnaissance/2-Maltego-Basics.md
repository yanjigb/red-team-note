# Footprinting sử dụng Maltego
Maltego là một ứng dụng tình báo mã nguồn mở và pháp y kỹ thuật số. Nó thu thập thông tin về mục tiêu và trình bày ở định dạng dễ hiểu.

### Yêu cầu:
* Máy ảo Kali Linux

### Mục tiêu:
* Xác định địa chỉ IP
* Xác định Domain và Schema tên miền
* Xác định công nghệ phía Server
* Xác định thông tin Service Oriented Architecture (SOA)
* Xác định Name Server
* Xác định Mail Exchanger
* Xác định vị trí địa lý
* Xác định các thực thể
* Khám phá địa chỉ Email và số điện thoại

Hiện tại có ba phiên bản của Maltego client: Maltego CE, Maltego Classic và Maltego XL. **Hướng dẫn này sẽ tập trung vào Maltego Community Edition (CE).**

Kali Linux đi kèm với Maltego đã được cài đặt. Khởi chạy Maltego từ thanh ứng dụng. Nếu đây là lần đầu tiên bạn sử dụng Maltego, chỉ cần chọn phiên bản Maltego CE (Free) và tạo tài khoản miễn phí tại https://www.paterva.com/community/community.php

## Các thao tác cơ bản với Maltego
1. Nhấp vào biểu tượng (+) ở góc trên bên trái của GUI (trong thanh công cụ) để tạo cửa sổ graph mới (giống như một tài liệu trống).
2. Đi đến panel bên trái và mở rộng node **Infrastructure** dưới Entity Palette. Danh sách này có nhiều thực thể hữu ích như AS, DNS Name, Domain, MX Record, v.v.

![alt text](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/2015007002780/original/tJmLPIhee9OzhB4xqVKx1pT2NGixIRpdFg.jpg?1545115008 "Entity Palette - Maltego")

3. Kéo thực thể Website vào phần New Graph(1) của bạn.
4. Đổi tên miền thành www.certifiedhacker.com

## Xác định công nghệ phía server
5. Nhấp chuột phải vào thực thể và chọn **All Transforms** rồi nhấp **To Server Technologies [BuiltWith]**

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6fe1dc406ed480aea2acfb2e9f34d51a0536e042/maltego-server-side-0.png "Server Side Technologies")

Lưu ý: Maltego có thể hữu ích để hiển thị kết quả theo cách năng động hơn bằng cách trực quan hóa các liên kết liên kết giữa các mục tìm kiếm.

## Xác định Domain
6. Tạo graph mới hoặc xóa/lưu kết quả trước đó.
7. Nhấp chuột phải vào thực thể Domain và chọn **All Transforms -> To Domains [DNS]**.

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/dd19c689c25ad5a9f86d5c4450b26bb5f82eadc9/maltego-DNS-names.png "DNS Names")

Transform này sẽ cố gắng kiểm tra schema tên miền với một tên miền và cố gắng xác định schema tên cụ thể cho tên miền đó.

## Xác định thông tin SOA
8. Tạo graph mới hoặc xóa/lưu kết quả trước đó.
9. Nhấp chuột phải vào thực thể Domain và chọn **All Transforms -> To DNS Name - SOA (Start of Authority)**.

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6fe1dc406ed480aea2acfb2e9f34d51a0536e042/maltego-DNS-SOA-2.png "DNS Name - SOA")

## Xác định Mail Exchanger
10. Tạo graph mới hoặc xóa/lưu kết quả trước đó.
11. Nhấp chuột phải vào thực thể Domain và chọn **All Transforms -> To DNS Name - MX (mail server)**.

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6fe1dc406ed480aea2acfb2e9f34d51a0536e042/maltego-MX-NameServers-3.png "DNS MX Server")

## Xác định Name Server
12. Tạo graph mới hoặc xóa/lưu kết quả trước đó.
13. Nhấp chuột phải vào thực thể Domain và chọn **All Transforms -> To DNS Name - NS (name server)**.

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6fe1dc406ed480aea2acfb2e9f34d51a0536e042/maltego-DNS-Name-Servers-4.png "NS")

## Xác định địa chỉ IP, Vị trí và Whois
12. Tạo graph mới hoặc xóa/lưu kết quả trước đó.
13. Nhấp chuột phải vào thực thể Website và chọn **All Transforms -> To IP address [DNS]**.
14. Nhấp chuột phải vào thực thể IP và chọn **All Transforms -> To Location [city, country]**.
15. Nhấp chuột phải vào thực thể Website và chọn **All Transforms -> To entities from whois [IBM Watson]**.

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6fe1dc406ed480aea2acfb2e9f34d51a0536e042/maltego-WebSite-IP-Location-WhoisOnDomain-5.png "IP Address, Location")

## Tóm lại:
Maltego là một công cụ mạnh mẽ, bạn có thể trích xuất nhiều loại thông tin khác nhau qua mạng, công nghệ và nhân sự (email, số điện thoại, twitter).

Bằng cách trích xuất tất cả thông tin này, kẻ tấn công có thể thực hiện nhiều loại hoạt động恶意 khác nhau.

* Các công nghệ tích hợp sẵn của server:
kẻ tấn công có thể tìm kiếm lỗ hổng liên quan đến bất kỳ công nghệ nào trong số đó và mô phỏng các kỹ thuật khai thác.

* Thông tin SOA:
cũng có thể hữu ích cho kẻ tấn công, họ có thể lợi dụng thông tin này để tìm lỗ hổng trong các dịch vụ và kiến trúc của nạn nhân và khai thác chúng.

* Name Server:
kẻ tấn công có thể khai thác NS bằng các kỹ thuật恶意 như DNS hijacking và chuyển hướng URL.

* Địa chỉ IP:
kẻ tấn công có thể lợi dụng địa chỉ IP bằng cách quét và tìm kiếm các cổng mở và lỗ hổng, từ đó cố gắng xâm nhập vào mạng và khai thác chúng.

* Vị trí địa lý:
kẻ tấn công có thể thực hiện các cuộc tấn công social engineering để khai thác thông tin nhạy cảm.
