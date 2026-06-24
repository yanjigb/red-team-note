# Thu thập thông tin sử dụng theHarvester
theHarvester được sử dụng để thu thập tình báo mã nguồn mở (OSINT) về một công ty hoặc tên miền. theHarvester thu thập email, subdomain, host, tên nhân viên, cổng mở và banner từ các nguồn công khai khác nhau như công cụ tìm kiếm, máy chủ khóa PGP và cơ sở dữ liệu máy tính SHODAN.


_Kho lưu trữ chính thức:_ https://github.com/laramies/theHarvester

## Tổng quan về theHarvester
Được phát triển bằng Python bởi Christian Martorella. Đây là công cụ rất hữu ích trong giai đoạn đầu của kiểm thử xâm nhập. Giúp hiểu footprint của khách hàng trên internet. Một số chuyên gia cũng sử dụng theHarvester để xem xét thông tin có sẵn cho kẻ tấn công qua internet.

### Yêu cầu:
* Máy ảo Kali Linux.

### Mục tiêu:
* Trình bày cách xác định lỗ hổng và rò rỉ thông tin trên công cụ tìm kiếm sử dụng theHarvester.
* Trích xuất email, tên subdomain, virtual host(...) từ các trang web.
***

## Chạy theHarvester với mục tiêu
Để xem tất cả tùy chọn lệnh, gõ:

`theHarvester -h`

Hãy thực hiện harvest đầy đủ trên mục tiêu này:

`theHarvester -d certifiedhacker.com -l 300 -b all`

Trong lệnh `help` bạn có thể thấy ý nghĩa của các tùy chọn này, như `-d` là tên miền, `-l` để giới hạn số kết quả tìm kiếm, và `-b` là công cụ tìm kiếm/nguồn.

theHarvester có thể trả về quá nhiều thông tin để xem qua, để dễ đọc hơn, bạn có thể ghi output ra file HTML:

`theHarvester -d certifiedhacker.com -l 300 -b all -f report`

File sẽ được xuất trong thư mục home trên máy Kali.

Lưu ý: Nếu bạn gặp khó khăn khi xuất file HTML, hãy lưu ý rằng đây là một lượng thông tin rất lớn đang được thu thập, bạn có thể giảm số lượng công cụ tìm kiếm/nguồn, thay vì sử dụng tất cả cùng một lúc.
