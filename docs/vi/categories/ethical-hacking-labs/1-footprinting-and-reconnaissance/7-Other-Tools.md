# Các công cụ khác cho Recon

Sublist3r là công cụ Python được thiết kế để liệt kê subdomain của trang web sử dụng OSINT.

https://github.com/aboul3la/Sublist3r

Đăng nhập vào máy Kali và mở terminal

Gõ lệnh này để cập nhật các gói Kali rolling và cài đặt sublist3r:

`sudo apt update && apt -y install sublist3r`

Gõ `sublist3r -h` để in tổng quan tất cả các tùy chọn có sẵn.

>Để tìm kiếm subdomain, gõ:
`sublist3r -d google.com -t 3 -e bing`
`-d` = tên miền mục tiêu
`-t` = số lượng thread
`-e` = công cụ tìm kiếm

Bạn cũng có thể tìm subdomain nào có cổng 80 mở, ví dụ trên `google.com`.

`sublist3r -d google.com -p 80 -e bing`

# Web Data Extractor
Web Data Extractor được sử dụng để trích xuất thông tin liên hệ hoặc dữ liệu của công ty mục tiêu như email, fax, điện thoại qua web để giao tiếp b2b có trách nhiệm.

Công cụ này chỉ dành cho Windows, rất dễ sử dụng.
Nhược điểm: phiên bản dùng thử chỉ xuất 10 dòng báo cáo.
http://www.webextractor.com/

# HTTrack
Web site copier là tiện ích trình duyệt ngoại tuyến tải một trang web về thư mục cục bộ.

Ứng dụng này có sẵn ở giao diện GUI và CLI.

Hoạt động trên Linux/OSX/BSD/Unix, Windows và Android.
https://www.httrack.com/

# Truy vết Email
Truy vết email bao gồm phân tích **email header** để khám phá chi tiết về người gửi.
Theo dõi email rất hữu ích để xác định công ty và mạng cung cấp dịch vụ cho địa chỉ đó.

**eMailTrackerPro** là công cụ để theo dõi, phát hiện bất thường trong email header.
http://www.emailtrackerpro.com/


# Thu thập thông tin IP và tên miền sử dụng Whois Lookup
Whois lookup hiển thị thông tin có sẵn trên hostname, địa chỉ IP hoặc tên miền.

* Cho Windows: [**SmartWhois**](https://smartwhois.en.softonic.com/)
* Kali Linux: [**lệnh whois**](https://www.cyberpratibha.com/blog/using-whois-a-command-for-information-gathering/)

# Truy vết tuyến mạng nâng cao sử dụng Path Analyzer Pro
Path Analyzer Pro cung cấp khả năng truy vết tuyến mạng nâng cao với kiểm thử hiệu suất, DNS, whois và phân giải mạng để điều tra các vấn đề mạng.

Hoạt động trên Linux/Mac/Windows.
Ứng dụng trả phí với phiên bản dùng thử 10 ngày.
https://www.pathanalyzer.com/

# Fingerprinting tự động sử dụng FOCA
Fingerprinting Organizations with Collected Archives (FOCA) là công cụ tiết lộ metadata và dữ liệu bị che giấu. Các kho lưu trữ này có thể nằm trên các trang web, và có thể được tải về và phân tích bằng FOCA.
_Kho lưu trữ chính thức:_ https://github.com/ElevenPaths/FOCA

Tính năng:
* Trích xuất Metadata
* Phân tích mạng
* DNS Snooping
* Tìm kiếm file phổ biến
* File hấp dẫn
* Tìm kiếm Proxy
* Nhận diện công nghệ
* Fingerprinting
* Rò rỉ
* Tìm kiếm bản sao lưu
* Buộc lỗi
* Tìm kiếm thư mục mở
