# Denial of Service

Trong điện toán, tấn công từ chối dịch vụ (tấn công DoS) là một cuộc tấn công mạng trong đó thủ phạm tìm cách làm cho máy hoặc tài nguyên mạng không thể sử dụng được đối với người dùng dự định bằng cách tạm thời hoặc vô thời hạn gián đoạn dịch vụ của một máy chủ được kết nối với Internet. Từ chối dịch vụ thường được thực hiện bằng cách tràn ngập máy hoặc tài nguyên mục tiêu bằng các yêu cầu thừa nhằm cố gắng quá tải hệ thống và ngăn chặn một số hoặc tất cả các yêu cầu hợp lệ được xử lý.

### Các cuộc tấn công DoS thường thuộc 2 loại:
### Tấn công tràn bộ đệm (Buffer overflow)

Một loại tấn công trong đó tràn bộ đệm bộ nhớ có thể khiến máy tiêu tốn toàn bộ dung lượng ổ cứng, bộ nhớ hoặc thời gian CPU. Dạng khai thác này thường dẫn đến hành vi chậm chạp, lỗi hệ thống hoặc các hành vi bất lợi khác của máy chủ, dẫn đến từ chối dịch vụ.

### Tấn công tràn ngập (Flood attacks)
Bằng cách tràn ngập một máy chủ mục tiêu với lượng gói tin vượt quá khả năng xử lý, một tác nhân độc hại có thể quá tải dung lượng máy chủ, dẫn đến từ chối dịch vụ. Để大多数 các cuộc tấn công tràn DoS thành công, tác nhân độc hại phải có nhiều băng thông khả dụng hơn mục tiêu.


Về mặt lịch sử, các cuộc tấn công DoS thường khai thác các lỗ hổng bảo mật trong thiết kế mạng, phần mềm và phần cứng. Các cuộc tấn công này đã trở nên ít phổ biến hơn vì các cuộc tấn công DDoS có khả năng gây gián đoạn lớn hơn và tương đối dễ tạo ra với các công cụ có sẵn. Trong thực tế, hầu hết các cuộc tấn công DoS cũng có thể được chuyển thành tấn công DDoS.

### Một số cuộc tấn công DoS lịch sử phổ biến bao gồm:

### Tấn công Smurf
một cuộc tấn công DoS đã từng bị khai thác trong đó một tác nhân độc hại sử dụng địa chỉ broadcast của mạng dễ bị tổn thương bằng cách gửi các gói giả mạo, dẫn đến việc tràn ngập một địa chỉ IP mục tiêu.

### Ping flood
cuộc tấn công từ chối dịch vụ đơn giản này dựa trên việc tràn ngập mục tiêu bằng các gói ICMP (ping). Bằng cách tràn ngập mục tiêu với nhiều ping hơn khả năng phản hồi hiệu quả, từ chối dịch vụ có thể xảy ra. Cuộc tấn công này cũng có thể được sử dụng như một cuộc tấn công DDoS.

### Ping of Death
thường bị nhầm lẫn với tấn công ping flood, tấn công ping of death liên quan đến việc gửi một gói tin lỗi đến máy mục tiêu, dẫn đến hành vi bất lợi như lỗi hệ thống.

## DDoS
Trong **cuộc tấn công từ chối dịch vụ phân tán (tấn công DDoS)**, lưu lượng truy cập đến tràn ngập nạn nhân bắt nguồn từ nhiều nguồn khác nhau. Điều này khiến việc ngăn chặn cuộc tấn công đơn giản bằng cách chặn một nguồn duy nhất là gần như không thể.
Một số cuộc tấn công DoS có ý nghĩa lịch sử là gì?

DoS sử dụng một kết nối duy nhất, trong khi tấn công DDoS sử dụng nhiều nguồn lưu lượng tấn công, thường ở dạng botnet. Nói chung, nhiều cuộc tấn công về cơ bản tương tự nhau và có thể được thực hiện bằng một hoặc nhiều nguồn lưu lượng độc hại.

Nguồn:
* https://en.wikipedia.org/wiki/Denial-of-service_attack
* https://www.cloudflare.com/learning/ddos/glossary/denial-of-service/
