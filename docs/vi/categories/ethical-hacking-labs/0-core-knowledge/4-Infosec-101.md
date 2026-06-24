# <u>Giới thiệu về Bảo mật Thông tin & Kiểm thử Xâm nhập</u>

> ⚠️ Module này hoàn toàn lý thuyết và được trích xuất từ repo [CEH Study Guide](https://github.com/Samsar4/CEH-v10-Study-Guide/). Ở đây bạn sẽ tìm thấy một số thuật ngữ cơ bản trong 'thế giới InfoSec'.


## <u> Các Khái niệm Bảo mật Cơ bản </u>
Toàn bộ nguyên tắc là tránh **Trộm cắp, Giả mạo và Gián đoạn** của hệ thống thông qua **Bộ ba CIA** (Bảo mật, Toàn vẹn và Sẵn sàng).

<p align="center">
<img width="50%" src="https://i.ytimg.com/vi/AJTJN4wDBM8/hqdefault.jpg">
</p>

- **Bảo mật (Confidentiality)**
Ngăn hệ thống và dữ liệu bị truy cập, xem, đọc bởi bất kỳ ai không được phép.

- **Toàn vẹn (Integrity)**
Bảo vệ dữ liệu khỏi bị sửa đổi hoặc xóa bởi bên không được phép, và đảm bảo rằng khi người được phép thực hiện thay đổi không nên được thực hiện thì thiệt hại có thể được khắc phục.

- **Sẵn sàng (Availability)**
Hệ thống, kênh truy cập và cơ chế xác thực phải hoạt động đúng để thông tin chúng cung cấp và bảo vệ có sẵn khi cần.

**Lưu ý:** *Ngoài ra, các thuộc tính khác, chẳng hạn như tính xác thực, trách nhiệm giải trình, không từ chối và độ tin cậy cũng có thể được bao gồm. (ISO/IEC 27000:2009)*

- **Kiểm toán & Trách nhiệm giải trình (Auditing & Accountability)**
Về cơ bản theo dõi mọi thứ, như, ai đã đăng nhập khi nào họ đăng nhập ai truy cập dữ liệu này.

- **Không từ chối (Non-Repudiation)**
Không từ chối là sự đảm bảo rằng ai đó không thể phủ nhận tính hợp lệ của điều gì đó. Không từ chối là một khái niệm pháp lý được sử dụng rộng rãi trong bảo mật thông tin và đề cập đến một dịch vụ, cung cấp bằng chứng về nguồn gốc dữ liệu và tính toàn vẹn của dữ liệu.

### **Cân bằng Bảo mật, Chức năng và Khả năng sử dụng**

Có sự phụ thuộc lẫn nhau giữa ba thuộc tính này. Khi **bảo mật tăng lên, khả năng sử dụng và chức năng giảm xuống**. Bất kỳ tổ chức nào cũng nên cân bằng giữa ba phẩm chất này để đạt được hệ thống thông tin cân bằng.

<p align="center">
<img width="50%" src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f14455ed4def635e1bc93b85657f43dbbf4a3127/triad2.png">
</p>

## <u>Các loại Hacker</u>

<p align="center">
<img width="50%" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/types-hacker.JPG">
</p>

> - **Black Hat** - Hacker tìm cách thực hiện các hoạt động độc hại.
> - **Gray Hat** - Hacker thực hiện hoạt động tốt hoặc xấu nhưng không có sự cho phép của tổ chức mà họ đang hack.
> - **White Hat** - Hacker đạo đức; Họ sử dụng kỹ năng để cải thiện bảo mật bằng cách phát hiện lỗ hổng trước hacker độc hại.

**Script Kiddie / Skiddies** - Cá nhân không có kỹ năng sử dụng các script hoặc chương trình độc hại, chẳng hạn như web shell, được phát triển bởi người khác để tấn công hệ thống máy tính và mạng và phá hoại trang web. 

**Hacker được nhà nước tài trợ (State-Sponsored Hacker)** - Hacker được thuê bởi chính phủ hoặc thực thể liên quan.

**Hacktivist** - Người hack cho một mục đích; chương trình nghị sự chính trị.

**Hacker tự sát (Suicide Hackers)** - Là những hacker không sợ đi tù hoặc đối mặt với bất kỳ hình phạt nào; hack để hoàn thành công việc.

**Khủng bố mạng (Cyberterrorist)** - Được thúc đẩy bởi niềm tin tôn giáo hoặc chính trị để tạo ra sự sợ hãi hoặc gián đoạn.

## <u>Từ vựng Hacking</u>

- **Giá trị hack (Hack value)** - Giá trị hoặc giá trị được nhận thức của mục tiêu theo cách nhìn của kẻ tấn công.
- **Lỗ hổng (Vulnerability)** - Khiếm khuyết hệ thống, điểm yếu trên hệ thống (trong thiết kế, triển khai, v.v.).
- **Mối đe dọa (Threat)** - Khai thác một lỗ hổng.
- **Khai thác (Exploit)** - Exploit là cách để có được quyền truy cập vào hệ thống thông qua một lỗi bảo mật và tận dụng lỗi đó cho lợi ích của họ.
- **Tải trọng (Payload)** - Thành phần của cuộc tấn công; là phần văn bản riêng tư của người dùng cũng có thể chứa phần mềm độc hại như worm hoặc virus thực hiện hành động độc hại; xóa dữ liệu, gửi spam hoặc mã hóa dữ liệu.
- **Tấn công zero-day** - Cuộc tấn công xảy ra trước khi nhà cung cấp biết hoặc có thể vá lỗi.
- **Daisy Chaining / Pivotting** - Bao gồm việc có được quyền truy cập vào mạng và/hoặc máy tính và sau đó sử dụng cùng thông tin để có quyền truy cập vào nhiều mạng và máy tính chứa thông tin mong muốn. 
- **Doxxing** - Công bố PII về một cá nhân thường với ý đồ xấu.
- **Kiến trúc Bảo mật Thông tin Doanh nghiệp (EISA - Enterprise Information Security Architecture)** - xác định cấu trúc và hành vi của hệ thống thông tin tổ chức thông qua các quy trình, yêu cầu, nguyên tắc và mô hình.

## <u> Các loại Mối đe dọa </u>
* **Mối đe dọa Mạng**
  - Thu thập thông tin
  - Nghe lén và theo dõi
  - Đầu độc DNS/ARP
  - MITM (Tấn công trung gian)
  - DoS/DDoS
  - Tấn công dựa trên mật khẩu
  - Tấn công Firewall và IDS
  - Đánh cắp phiên

* **Mối đe dọa Máy chủ**
  - Bẻ khóa mật khẩu
  - Tấn công phần mềm độc hại
  - Footprinting
  - Lập hồ sơ
  - Thực thi mã tùy ý
  - Truy cập backdoor
  - Leo thang đặc quyền
  - Thực thi mã

* **Mối đe dọa Ứng dụng**
  - Tấn công Injection
  - Xác thực dữ liệu/đầu vào không đúng
  - Xử lý lỗi và quản lý ngoại lệ không đúng
  - Manipulation trường ẩn
  - Quản lý phiên bị hỏng
  - Vấn đề mật mã
  - SQL injection
  - Lừa đảo phishing
  - Tràn bộ đệm
  - Tiết lộ thông tin
  - Cấu hình sai bảo mật

## <u> Vectơ Tấn công </u>
*Con đường mà hacker có thể truy cập vào máy chủ để gửi tải trọng hoặc kết quả độc hại*

- **APT - Mối đe dọa Dai dẳng Nâng cao (Advanced Persistent Threats)**
  - Một mối đe dọa dai dẳng nâng cao là một tác nhân đe dọa lén lút, thường là quốc gia hoặc nhóm được nhà nước tài trợ, có được quyền truy cập trái phép vào mạng máy tính và không bị phát hiện trong thời gian dài; Thường sử dụng tấn công zero-day.
- **Điện toán đám mây / Công nghệ dựa trên đám mây**
  - Lỗ hổng trong ứng dụng đám mây của một khách hàng cho phép kẻ tấn công truy cập dữ liệu của khách hàng khác
- **Virus, worm và phần mềm độc hại**
  - Virus và worm là mối đe dọa mạng phổ biến nhất có khả năng lây nhiễm mạng trong vài giây.
- **Ransomware**
  - Hạn chế truy cập vào các tệp và thư mục của hệ thống máy tính và yêu cầu thanh toán tiền chuộc trực tuyến cho kẻ tấn công để loại bỏ các hạn chế.
- **Mối đe dọa thiết bị di động**
- **Botnet**
  - Mạng khổng lồ gồm các hệ thống bị xâm phạm được sử dụng bởi kẻ xâm nhập để thực hiện nhiều cuộc tấn công mạng khác nhau
- **Tấn công nội bộ**
    - Nhân viên bất mãn có thể gây thiệt hại tài sản từ bên trong.
    - Mạng khổng lồ gồm các máy chủ bị xâm phạm. (dùng cho DDoS).

- **Tấn công phishing**
- **Mối đe dọa ứng dụng web**
  - Các tấn công như SQL injection, XSS (Cross-site scripting)...
- **Mối đe dọa IoT**


## <u>Các loại Tấn công</u>
### 1. Hệ điều hành
*Các tấn công nhắm vào lỗi hệ điều hành hoặc vấn đề bảo mật bên trong như tài khoản khách hoặc mật khẩu mặc định.*
>  - **Vectơ**: Tràn bộ đệm, Triển khai Giao thức, lỗi phần mềm, mức độ vá, sơ đồ xác thực

### 2. Ứng dụng
*Các tấn công vào mã lập trình và logic phần mềm.*
>  - **Vectơ**: Tràn bộ đệm, Bug, XSS, DoS, SQL Injection, MitM

### 3. Cấu hình sai
*Tấn công tận dụng các hệ thống bị cấu hình sai do cấu hình không đúng hoặc cấu hình mặc định.*

>  - **Ví dụ**: Quyền không đúng của người dùng SQL; Access-list cho phép tất cả

### 4. Mã Shrink-Wrap
*Hành động khai thác lỗ hổng trong phần mềm chưa được vá hoặc cấu hình kém.*
>  - **Ví dụ**: Lỗi phần mềm trong phiên bản 1.0; Lỗi trong script CGI mẫu; Mật khẩu mặc định 

## <u>Lỗ hổng</u>

- **CVSS - Hệ thống chấm điểm lỗ hổng phổ biến (Common Vulnerability Scoring System)** [[+]](https://nvd.nist.gov/vuln-metrics/cvss)
  - Đặt điểm số dựa trên mức độ nghiêm trọng
  - ![cvss](https://3.bp.blogspot.com/-5V1cb_wTvsk/Wl78iF4Sd8I/AAAAAAAAF7U/KmK4pMXi54YworDgh4uI8aZtHgy0bbznQCLcBGAs/s1600/CVSS.png
  )
- **CVE – Lỗ hổng và Tiêu lộ phổ biến (Common Vulnerabilities and Exposures)** [[+]](https://cve.mitre.org/)
  - Là danh sách các lỗ hổng và tiêu lộ được công bố công khai được duy trì bởi MITRE.
  - ![cve](https://i0.wp.com/gbhackers.com/wp-content/uploads/2016/10/cve.png?resize=486%2C408&ssl=1)
- **NVD - Cơ sở dữ liệu Lỗ hổng Quốc gia (National Vulnerability Database)**  [[+]](https://nvd.nist.gov/)
  -  là cơ sở dữ liệu, được duy trì bởi NIST, đồng bộ hóa hoàn toàn với danh sách MITRE CVE; Kho lưu trữ lỗ hổng của chính phủ Mỹ.

### Các loại Lỗ hổng

- **Cấu hình sai** - cấu hình không đúng dịch vụ hoặc ứng dụng
- **Cài đặt mặc định** - không thay đổi cài đặt trong ứng dụng có sẵn theo mặc định
- **Tràn bộ đệm** - lỗi thực thi mã
- **Thiếu bản vá** -  hệ thống chưa được vá
- **Lỗi thiết kế** - lỗi cố hữu trong thiết kế hệ thống như mã hóa và xác thực dữ liệu
- **Lỗi hệ điều hành** - lỗi cụ thể cho từng hệ điều hành
- **Mật khẩu mặc định** - để mật khẩu mặc định đi kèm với hệ thống/ứng dụng


## <u>Các giai đoạn Kiểm thử Xâm nhập (Phương pháp CEH)</u>
1. **Giai đoạn Tiền tấn công** - Do thám và thu thập dữ liệu.
2. **Giai đoạn Tấn công** - Cố gắng xâm nhập mạng và thực hiện tấn công.
3. **Giai đoạn Sau tấn công** - Dọn dẹp để đưa hệ thống về trạng thái trước tấn công và cung cấp báo cáo.


## <u>Năm Giai đoạn của Hacking Đạo đức</u>

### 1. **Do thám (Reconnaissance)**
*Thu thập bằng chứng về mục tiêu*; Có hai loại Do thám:
- **Do thám Thụ động (Passive Reconnaissance)**: Thu thập thông tin về máy tính và mạng mục tiêu **mà không tương tác trực tiếp với hệ thống**.
    - Ví dụ: Tìm kiếm Google, Hồ sơ công khai, Phát hành mới, Mạng xã hội, Quét mạng xung quanh.
- **Do thám Chủ động (Active Reconnaissance)**: Bao gồm tương tác trực tiếp với mục tiêu.
    - Ví dụ: Gọi điện thoại cho mục tiêu, Phỏng vấn việc làm; các công cụ như Nmap, Nessus, OpenVAS, Nikto và Metasploit có thể được coi là Do thám Chủ động.

### 2. **Quét & Liệt kê (Scanning & Enumeration)**
*Thu thập thông tin chuyên sâu hơn về mục tiêu.*
- Ví dụ: Quét mạng, Quét cổng, Phiên bản dịch vụ nào đang chạy.

### 3. **Chiếm quyền truy cập (Gaining Access)**
*Các cuộc tấn công được tiến hành để có quyền truy cập vào hệ thống.*
- Ví dụ: Có thể được thực hiện cục bộ (ngoại tuyến), qua LAN hoặc qua internet.
  - Ví dụ(2): Giả mạo để khai thác hệ thống bằng cách giả vờ là người dùng hợp pháp hoặc hệ thống khác, chúng có thể gửi gói dữ liệu chứa lỗi đến hệ thống mục tiêu để khai thác lỗ hổng.
  - Có thể được thực hiện bằng nhiều kỹ thuật như injection lệnh, tràn bộ đệm, DoS, bẻ khóa thông tin đăng nhập, kỹ thuật xã hội, cấu hình sai, v.v.
  
### 4. **Duy trì truy cập (Maintaining Access)**
*Các mục được đặt để đảm bảo truy cập trong tương lai.*
- Ví dụ: Rootkit, Trojan, Backdoor có thể được sử dụng.

### 5. **Xóa dấu vết (Covering Tracks)**
*Các bước thực hiện để che giấu thành công và xâm nhập; Không bị phát hiện.*
  - Ví dụ: Xóa nhật ký; Làm mờ trojan hoặc chương trình backdoor độc hại.


## Ba loại Phòng thủ Chủ động 
- **Quấy rối (Annoyance)**
  - Bao gồm theo dõi hacker và dẫn hắn vào máy chủ giả, lãng phí thời gian của hắn — và khiến hắn dễ bị phát hiện.
- **Truy nguyên (Attribution)**
  - Xác định kẻ tấn công; Sử dụng công cụ để truy vết nguồn gốc cuộc tấn công đến vị trí cụ thể, hoặc thậm chí một hacker cá nhân.
- **Tấn công (Attack)**
  - Điều gây tranh cãi nhất. Để "hack lại", một công ty truy cập vào máy tính của hacker bị cáo buộc để xóa dữ liệu hoặc thậm chí trả thù. Cả hai bước này đều bị coi là bất hợp pháp. 

## <u> Đảm bảo Thông tin (IA) </u>
*Đề cập đến sự đảm bảo về Tính toàn vẹn, Sẵn sàng, Bảo mật và Tính xác thực của thông tin và hệ thống thông tin trong quá trình sử dụng, xử lý, lưu trữ và truyền tải thông tin.*

* **Các quy trình giúp đạt được IA:**
  - Phát triển chính sách, quy trình và hướng dẫn cục bộ.
  - Thiết kế chiến lược xác thực mạng và người dùng.
  - Xác định lỗ hổng và mối đe dọa mạng (Đánh giá lỗ hổng phác thảo tư thế bảo mật của mạng).
  - Xác định vấn đề và yêu cầu tài nguyên.
  - Tạo kế hoạch cho các yêu cầu tài nguyên đã xác định.
  - Áp dụng các kiểm soát IA phù hợp.
  - Thực hiện quy trình C&A (Chứng nhận và Công nhận) của hệ thống thông tin giúp theo dõi lỗ hổng và triển khai biện pháp an toàn.
  - Cung cấp đào tạo đảm bảo thông tin cho tất cả nhân viên trong tổ chức liên bang và tư nhân.

## <u>Chương trình Quản lý Bảo mật Thông tin </u>
*Sự kết hợp của chính sách, quy trình, thủ tục, tiêu chuẩn và hướng dẫn để thiết lập **mức độ bảo mật thông tin cần thiết.***

- Được thiết kế để đảm bảo doanh nghiệp hoạt động trong trạng thái giảm thiểu rủi ro.
- Nó bao gồm tất cả các quy trình tổ chức và vận hành cũng như người tham gia liên quan đến bảo mật thông tin.

![infosec](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/950220d4b802bb726fe84470c7a13055b056a621/infosec.jpg)


> ⚠️ **IA** tập trung vào đánh giá rủi ro, phía giảm thiểu; 
> ⚠️ **InfoSec** tập trung vào thực sự triển khai các biện pháp bảo mật để bảo vệ hệ thống.

## <u>EISA - Kiến trúc Bảo mật Thông tin Doanh nghiệp</u>
*Tập hợp các yêu cầu, quy trình, nguyên tắc và mô hình xác định cấu trúc và hành vi của hệ thống thông tin tổ chức.*

* **Mục tiêu của EISA**:
  - Hỗ trợ giám sát và phát hiện hành vi mạng
  - Phát hiện và phục hồi từ vi phạm bảo mật
  - Ưu tiên tài nguyên của tổ chức
  - Hỗ trợ thực hiện đánh giá rủi ro của tài sản CNTT tổ chức.
  - Triển vọng chi phí khi được tích hợp trong các điều khoản bảo mật như ứng phó sự cố, phục hồi thảm họa, tương quan sự kiện, v.v.

## <u>Kiểm soát Bảo mật Vật lý</u> 

- **Kiểm soát phòng ngừa**: Ngăn cản tác nhân thực hiện mối đe dọa.
    - Ví dụ: Hàng rào, Khóa máy chủ, Cửa bẫy, v.v.

- **Kiểm soát phát hiện**: Nhận ra mối đe dọa của tác nhân.   
    - Ví dụ: Kiểm tra lý lịch, CCTV.

- **Kiểm soát ngăn chặn**: Ngăn cản tác nhân **cố gắng** thực hiện mối đe dọa.
    - Ví dụ: Biển cảnh báo.

- **Phục hồi**: Giảm thiểu tác động của mối đe dọa đã hiện thực hóa.
    - Ví dụ: Sao lưu.

- **Kiểm soát bù trừ**: Cung cấp sửa chữa thay thế cho bất kỳ chức năng nào ở trên.


*Hầu hết các kiểm soát bảo mật là kiểm soát giai đoạn phòng ngừa*.

⚠️ **Phòng thủ theo chiều sâu (Defense in Depth)**: Nhiều lớp kiểm soát bảo mật; Cung cấp dự phòng trong trường hợp kiểm soát thất bại. (ví dụ: hình dưới)

![defense-in-depth](https://www.fairwarning.com/wp-content/uploads/2019/03/Defense-in-Depth-for-Cloud-Security-Rainbow-Diagram.png)


### Các loại Kiểm soát Bảo mật

| Mô tả    | Ví dụ                                      |
| -------------- | --------------------------------------------- |
| **Vật lý**   | Bảo vệ, đèn, camera, bình chữa cháy, bảo vệ lũ lụt                     |
| **Hành chính** | Đào tạo nhận thức, chính sách, thủ tục và hướng dẫn cho infosec                 |
| **Kỹ thuật**    | IDS/IPS, Firewall, Mã hóa, Thẻ thông minh, Danh sách kiểm soát truy cập |

| Mô tả  | Ví dụ                    |
| ------------ | --------------------------- |
| **Phòng ngừa** | Xác thực, chuông báo động |
| **Phát hiện**    | Kiểm toán, Sao lưu             |
| **Khắc phục**   | Phục hồi hoạt động          |

## <u>Quản lý Rủi ro</u>
**Rủi ro** có thể được định nghĩa là xác suất xảy ra một mối đe dọa hoặc sự kiện có thể gây thiệt hại, hoặc gây mất mát hoặc có tác động tiêu cực khác từ các nghĩa vụ nội bộ hoặc bên ngoài.

### Ma trận rủi ro

**Ma trận rủi ro** được sử dụng trong quá trình **đánh giá rủi ro** để xác định mức độ rủi ro bằng cách xem xét loại **xác suất hoặc khả năng** so với loại **mức độ nghiêm trọng** của hậu quả. 

 - Đây là cơ chế đơn giản để tăng khả năng hiển thị của rủi ro và hỗ trợ ra quyết định của quản lý.

![matrix](https://paladinrisk.com.au/wp-content/uploads/2018/11/risk-1-1024x434.jpg)

### Quản lý Rủi ro
*Là việc xác định, đánh giá và ưu tiên rủi ro theo sau là ứng dụng có điều phối và tiết kiệm tài nguyên để giảm thiểu, giám sát và kiểm soát xác suất hoặc tác động của các sự kiện không may hoặc để tối đa hóa hiện thực hóa cơ hội.*

## <u>Chính sách Bảo mật</u>
1. **Chính sách** - Tuyên bố cấp cao về bảo vệ thông tin; Quy tắc kinh doanh để bảo vệ bộ ba CIA; Chính sách bảo mật có thể được áp dụng cho Người dùng, Hệ thống, Đối tác, Mạng và Nhà cung cấp.
    - **Ví dụ Chính sách Bảo mật phổ biến:**
      - Chính sách mật khẩu
        - Đáp ứng yêu cầu độ phức tạp mật khẩu.
        - Ví dụ: Độ dài tối thiểu 8 ký tự, chữ hoa chữ thường và chữ số.
      - Chính sách bảo mật không dây
      - AUP - Chính sách Sử dụng Chấp nhận được
        - Cách sử dụng đúng tài sản của công ty
        - Ví dụ: "Nên và không nên" với máy tính công ty.
      - Chính sách Lưu giữ Dữ liệu 
        - Ví dụ: Giữ dữ liệu trong X thời gian.
      - Chính sách Kiểm soát Truy cập
        - Ví dụ: Truy cập máy chủ; Firewall 
2. **Thủ tục** - Tập hợp các bước chi tiết để hoàn thành mục tiêu; Hướng dẫn thực hiện
3. **Hướng dẫn** - Lời khuyên về hành động trong tình huống nhất định; Được khuyến nghị, không bắt buộc

## Chính sách Bảo mật - Ví dụ
* **Chính sách Kiểm soát Truy cập**
  - Điều này xác định các tài nguyên được bảo vệ và các quy tắc kiểm soát truy cập vào chúng

* **Chính sách Truy cập Từ xa**
  - Điều này xác định ai có thể có truy cập từ xa và xác định phương tiện truy cập và kiểm soát bảo mật truy cập từ xa.

* **Chính sách Quản lý Firewall**
  - Điều này xác định truy cập, quản lý và giám sát firewall trong tổ chức.

* **Chính sách Kết nối Mạng**
  - Điều này xác định ai có thể cài đặt tài nguyên mới trên mạng, phê duyệt cài đặt thiết bị mới, ghi lại thay đổi mạng, v.v.

* **Chính sách Mật khẩu**
  - Điều này xác định hướng dẫn sử dụng bảo vệ mật khẩu mạnh trên các tài nguyên có sẵn.

* **Chính sách Tài khoản Người dùng**
  - Điều này xác định quy trình tạo tài khoản, quyền hạn, quyền và trách nhiệm của tài khoản người dùng.

* **Chính sách Bảo vệ Thông tin**
  - Điều này xác định mức độ nhạy cảm của thông tin, ai có thể truy cập, cách lưu trữ và truyền tải, và cách xóa khỏi phương tiện lưu trữ, v.v.

* **Chính sách Truy cập Đặc biệt**
  - Điều này xác định các điều khoản và điều kiện cấp truy cập đặc biệt vào tài nguyên hệ thống.

* **Chính sách Bảo mật Email**
  - Chính sách này được thiết kế để điều chỉnh việc sử dụng đúng email công ty.

* **Chính sách Sử dụng Chấp nhận được**
  - Điều này xác định việc sử dụng chấp nhận được của tài nguyên hệ thống.

## Chính sách Bảo mật - Các loại
1. **Chính sách buông lỏng (Promiscuous Policy)** - Chính sách này thường không có hạn chế nào về sử dụng tài nguyên hệ thống.

2. **Chính sách cho phép (Permissive Policy)** - Chính sách này bắt đầu rộng mở và chỉ chặn các dịch vụ/tấn công hoặc hành vi nguy hiểm đã biết. Loại chính sách này phải được cập nhật thường xuyên để duy trì hiệu quả.

3. **Chính sách thận trọng (Prudent Policy)** - Chính sách này cung cấp bảo mật tối đa trong khi cho phép các nguy hiểm đã biết nhưng cần thiết. Loại chính sách này sẽ chặn tất cả dịch vụ và chỉ các dịch vụ an toàn/cần thiết được bật riêng lẻ. Mọi thứ đều được ghi nhật ký.

4. **Chính sách hoang tưởng (Paranoid Policy)** - Chính sách này cấm mọi thứ. Không có kết nối internet hoặc sử dụng internet bị hạn chế nghiêm ngặt.

## Chính sách Bảo mật - Các bước tạo 
1. Thực hiện Đánh giá Rủi ro
2. Sử dụng Tiêu chuẩn và Khung bảo mật làm hướng dẫn
3. Lấy ý kiến Ban quản lý và Nhân viên
4. Thực thi chính sách. Sử dụng hình phạt cho việc không tuân thủ
5. Xuất bản dự thảo cuối cùng cho toàn bộ tổ chức.
6. Yêu cầu tất cả nhân viên đọc/ký rằng họ đã hiểu chính sách
7. Sử dụng công cụ để hỗ trợ thực thi chính sách
8. Đào tạo nhân viên
9. Đánh giá và cập nhật thường xuyên

## <u>Quy trình Quản lý Sự cố</u>
*Sự cố là một sự kiện có thể dẫn đến mất mát hoặc gián đoạn hoạt động, dịch vụ hoặc chức năng của tổ chức.*

***Quản lý sự cố** là thuật ngữ mô tả các hoạt động của tổ chức để xác định, phân tích và sửa lỗi để ngăn ngừa sự tái diễn trong tương lai.*

1. **Chuẩn bị:** Chọn người, gán quy tắc, xác định công cụ để xử lý sự cố.
2. **Phát hiện & Phân tích:** Xác định sự cố đã xảy ra (IDS, SIEM, AV, Ai đó báo cáo, v.v).
3. **Phân loại và Ưu tiên:**
4. **Thông báo:** Xác định sự cố nhỏ và lớn; ai và cách thông báo sự cố.
5. **Khống chế:** Hạn chế thiệt hại; Cách ly máy chủ; Liên hệ chủ hệ thống.
6. **Điều tra Pháp y:** Điều tra nguyên nhân gốc của sự cố sử dụng công cụ pháp y; Nhật ký hệ thống, bộ nhớ thời gian thực, nhật ký thiết bị mạng, nhật ký ứng dụng, v.v;
7. **Loại bỏ & Phục hồi:** Loại bỏ nguyên nhân sự cố; Vá nếu cần. Phục hồi: đưa vào sản xuất; Giám sát hệ thống bị ảnh hưởng.
8. **Hoạt động sau sự cố:** Ghi lại những gì đã xảy ra và tại sao; Chuyển giao kiến thức.

### Nhiệm vụ của Đội Ứng phó Sự cố

1. Quản lý các vấn đề bảo mật bằng cách tiếp cận chủ động đối với lỗ hổng bảo mật của khách hàng 
2. Phát triển hoặc đánh giá các quy trình và thủ tục phải được tuân theo 
3. Quản lý phản ứng đối với sự cố và đảm bảo tất cả các thủ tục được tuân theo đúng cách để giảm thiểu và kiểm soát thiệt hại
4. Xác định và phân tích những gì đã xảy ra trong sự cố, bao gồm tác động và mối đe dọa
5. Cung cấp một điểm liên hệ duy nhất để báo cáo sự cố và vấn đề bảo mật
6. Đánh giá các thay đổi trong yêu cầu pháp lý và quy định để đảm bảo tất cả các quy trình và thủ tục hợp lệ
7. Đánh giá các kiểm soát hiện có và đề xuất các bước và công nghệ để ngăn ngừa sự cố tương lai
8. Thiết lập mối quan hệ với cơ quan thực thi pháp luật địa phương, cơ quan chính phủ, đối tác chính và nhà cung cấp

### SIEM - Quản lý Thông tin và Sự kiện Bảo mật
<p align="center">
<img width="90%" src="https://secureops.com/wp-content/uploads/2020/01/components-of-siem.jpg" />
</p>

*Thu thập dữ liệu từ mạng, bao gồm tệp nhật ký, bắt lưu lượng, tin nhắn SNMP, v.v., từ mọi máy chủ trên mạng. SIEM có thể thu thập tất cả dữ liệu này vào một vị trí tập trung và tương quan để phân tích tìm kiếm vấn đề bảo mật và hiệu suất, cũng như xu hướng tiêu cực tất cả trong thời gian thực.*

* **Tổng hợp (Aggregation)**: Thu thập dữ liệu từ các nguồn khác nhau và tổ chức dữ liệu thành một định dạng duy nhất. Bất kỳ thiết bị nào trong hệ thống SIEM thu thập dữ liệu được gọi là collector hoặc aggregator.

* **Tương quan (Correlation)**: Là logic xem xét dữ liệu từ các nguồn khác nhau và có thể đưa ra xác định về các sự kiện diễn ra trên mạng của bạn. (Có thể là in-band hoặc out-of-band, tùy thuộc vào vị trí của NIDS/NIPS).
	* **Cảnh báo** - Để thông báo nếu có gì đó xấu xảy ra.
	* **Kích hoạt** - Vượt quá ngưỡng.

* **Chuẩn hóa (Normalization)**: Sẽ thực sự tạo nhiều bảng / tổ chức theo cách dữ liệu trở nên hiệu quả hơn và cho phép công cụ phân tích và báo cáo hoạt động tốt hơn.

* **WORM - Write Once Read Many (Ghi một lần Đọc nhiều lần)**: Khái niệm là tệp nhật ký quý giá, và很多时候 bạn có thể muốn xem chúng theo cách lưu trữ, vì vậy chúng ta có thể sử dụng phương tiện quang như ổ WORM để lưu trữ chúng.

#### Công cụ SIEM Phổ biến nhất:

* **[Splunk](https://www.splunk.com/)**
	![splunk](https://www.splunk.com/content/dam/splunk2/images/screenshots/platform-journey/conflaunch/SS-UI-Light-Mode-frame.png)



* **[ArcSight](https://www.microfocus.com/en-us/products/siem-security-information-event-management/overview)**
	![arcsight](https://i.ytimg.com/vi/N7J0EwdbKF0/maxresdefault.jpg)



* **[ELK - Elastic Search, Log Stash and Kibana](https://www.elastic.co/what-is/elk-stack) (Mã nguồn mở)**
	![elk](https://i.imgur.com/lydtCwn.png)

## <u>Quản lý Danh tính và Truy cập</u>
> **Xác định, Xác thực, Ủy quyền**, và **Kế toán** hoạt động cùng nhau để quản lý tài sản một cách bảo mật.

### 1. **Xác định (Identification)**
*Thông tin trên thông tin đăng nhập xác định người dùng.*

- **Ví dụ**: 
  - Tên, tên người dùng, số ID, số nhân viên, SSN, v.v.

### 2. **Xác thực (Authentication)**
*“Chứng minh bạn là Người dùng hợp pháp." – Luôn nên được thực hiện với Xác thực đa yếu tố!*

* **Các yếu tố Xác thực:**
	* Thứ bạn **biết** (ví dụ - mật khẩu)
	* Thứ bạn **có** (ví dụ - thẻ thông minh)
	* Thứ bạn **là** (ví dụ - vân tay)
	* Thứ bạn **làm** (ví dụ - mẫu hình android; chữ ký thủ công)
	* **Nơi** bạn ở (ví dụ - vị trí địa lý)
> 🛑 **Xác thực đa yếu tố** *thường sử dụng hai trong số các ví dụ này (ví dụ - Thứ bạn **Biết(1)** và Thứ bạn **Có(2)**, không bao giờ cùng một loại*

### 3. Khái niệm Ủy quyền (Authorization)
*Bạn được phép truy cập gì – Chúng ta sử dụng mô hình Kiểm soát Truy cập, cái gì và cách triển khai phụ thuộc vào tổ chức và mục tiêu bảo mật của chúng ta.*

* **Quyền hạn (Permissions)**:
	* Áp dụng cho tài nguyên
* **Quyền** / **Đặc quyền (Rights / Privileges)**:
	* Gán ở cấp hệ thống 
* **Chiến lược ủy quyền**:
	* Đặc quyền tối thiểu (Least privileged)
	* Phân chia nhiệm vụ (Separation of Duties)

### 4. Kế toán (Accounting)
*Truy vết Hành động đến Danh tính của Đối tượng:*
- Chứng minh ai/cái gì đã thực hiện hành động (không từ chối); Ghi nhật ký

### Mô hình Kiểm soát Truy cập

<p align="center">
<img width="80%" src="https://security-architect.com/wp-content/uploads/FGA.png" />
</p>

* **Kiểm soát Truy cập Bắt buộc (MAC - Mandatory Access Control)**:
	* Mỗi đối tượng được gán một **nhãn**
		- Mật, bí mật, tối mật, v.v
	* Quản trị viên quyết định ai được truy cập mức bảo mật nào; Người dùng không thể thay đổi các cài đặt này
	* Được sử dụng trên hệ thống cũ (ví dụ: Thông tin Chính phủ Tối mật)
* **Kiểm soát Truy cập Tùy ý (DAC - Discretionary Access Control)**:
	* Được sử dụng trong hầu hết hệ điều hành
	* Chủ sở hữu dữ liệu xác định truy cập
	* Kiểm soát truy cập rất linh hoạt; Bảo mật rất yếu
* **Kiểm soát Truy cập dựa trên Vai trò (RBAC - Role-based Access Control)**:
	* Truy cập vào tài nguyên được xác định bởi một tập hợp quy tắc được xác định bởi vai trò trong tổ chức/chức năng công việc của bạn (Quản lý, Giám đốc, v.v)
	* Quản trị viên cung cấp truy cập dựa trên vai trò của người dùng
		- Quyền được hưởng một cách ngầm thay vì rõ ràng
	* Trong Windows, sử dụng **Groups** để cung cấp kiểm soát truy cập dựa trên vai trò
		- Ví dụ: Admin Groups --> Rights and Perms,
		- Sales Group --> Rights and Perms


> ⚠️ **Truy cập được xác định bởi ACL, Danh sách Kiểm soát Truy cập (Access Control List)**.
> ⚠️ **Từ chối ngầm (Implicit deny)** ngăn truy cập trừ khi được phép cụ thể. 


## Ngăn ngừa Mất mát Dữ liệu (DLP)
Ngăn ngừa Mất mát Dữ liệu (DLP) là thực hành **phát hiện và ngăn chặn vi phạm dữ liệu, rò rỉ hoặc phá hủy không mong muốn dữ liệu nhạy cảm**. Tổ chức sử dụng DLP để bảo vệ và bảo mật dữ liệu của họ và tuân thủ quy định.

* Thuật ngữ DLP đề cập đến việc bảo vệ tổ chức chống lại cả mất mát dữ liệu và ngăn chặn rò rỉ dữ liệu. 

#### Tổ chức thường sử dụng DLP để:

- Bảo vệ Thông tin Cá nhân Nhận dạng (PII) và tuân thủ quy định liên quan
- Bảo vệ Sở hữu Trí tuệ quan trọng cho tổ chức
- Đạt được khả năng hiển thị dữ liệu trong tổ chức lớn
- Bảo mật lực lượng lao động di động và thực thi bảo mật trong môi trường Mang Thiết bị Riêng (BYOD)
- Bảo mật dữ liệu trên hệ thống đám mây từ xa

<p align="center">
<img width="90%" src="https://miro.medium.com/max/720/1*FG9LR51eySVRQJUjhVv-9A.png" />
</p>

## Sao lưu Dữ liệu
Sao lưu dữ liệu đóng vai trò quan trọng trong duy trì tính liên tục kinh doanh bằng cách giúp tổ chức phục hồi từ thảm họa CNTT, vi phạm bảo mật, lỗi ứng dụng, lỗi con người, v.v. 

Tất cả các quy định tuân thủ như COBIT, SSAE, SOCII, PCI-DSS, HIPPA, SOX, FINRA, FISMA, GDPR, v.v. yêu cầu doanh nghiệp duy trì sao lưu dữ liệu quan trọng trong thời gian quy định.

### Chiến lược Sao lưu
1. Xác định dữ liệu kinh doanh quan trọng
2. Chọn phương tiện sao lưu
3. Chọn công nghệ sao lưu
4. Chọn cấp RAID phù hợp
5. Chọn phương pháp sao lưu phù hợp

### 3 Phương pháp sao lưu
####  1. Sao lưu lạnh (Cold backup) 🔵

<img width="40%" src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/29c5e018095b135baec32aaece84a900a43b23ca/cc-cold.png"/>

- **Trang trống, không phần cứng, không dữ liệu, không người**
- **Mất vài tuần để đưa vào hoạt động**
- Không gian văn phòng cơ bản (ví dụ tòa nhà, ghế, điều hòa...)
- Không thiết bị vận hành
- Địa điểm phục hồi rẻ nhất

#### 2. Sao lưu ấm (Warm backup) 🟡

<img width="40%" src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/29c5e018095b135baec32aaece84a900a43b23ca/cc-warm.png"/>

- **Nằm giữa lạnh và nóng - Đủ để bắt đầu (Phòng lớn với không gian rack, bạn mang phần cứng đến)**
- Phần cứng đã sẵn sàng và chờ đợi - bạn mang phần mềm và dữ liệu đến
- **Mất vài ngày để đưa vào hoạt động**
- Thiết bị vận hành nhưng ít hoặc không có dữ liệu

#### 3. Sao lưu nóng (Hot backup) 🔴

<img width="40%" src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/29c5e018095b135baec32aaece84a900a43b23ca/cc-hot.png"/>

- **Bản sao chính xác của hệ thống sản xuất**
- Ứng dụng và phần mềm được cập nhật liên tục
- Bật công tắc và mọi thứ di chuyển
- **Mất vài giờ để đưa vào hoạt động**
- Đồng bộ hóa thời gian thực
- Gần như tất cả dữ liệu sẵn sàng - thường chỉ cần cập nhật nhanh
- Rất đắt


## <u>Kiểm thử Xâm nhập - Cơ bản</u>
> **Chủ đề này sẽ được giới thiệu chi tiết trong [Chapter 14 - Pentesting](https://github.com/Samsar4/CEH-v10-Study-Guide/blob/master/modules/14-Pentesting.md).**

*Kiểm thử xâm nhập, thường được gọi là pen test, pentest hoặc hacking đạo đức, là một cuộc tấn công mạng mô phỏng được ủy quyền vào hệ thống máy tính, được thực hiện để đánh giá bảo mật của hệ thống.*

> ⚠️ **Không nhầm lẫn với đánh giá lỗ hổng.**

- Được xác định rõ ràng, kiểm thử toàn diện các kiểm soát bảo mật
- Các giai đoạn
  - **Chuẩn bị** - Hợp đồng và nhóm được xác định
  - **Đánh giá** - Tất cả các giai đoạn hacking (do thám, quét, tấn công, v.v.)
  - **Sau đánh giá** - Báo cáo & kết luận
- Các loại
  - **Black Box** - Thực hiện mà không có kiến thức nào về hệ thống hoặc mạng.
  - **White Box** - Khi kẻ tấn công có kiến thức đầy đủ về hệ thống được cung cấp bởi chủ sở hữu/mục tiêu.
  - **Gray Box** - Khi kẻ tấn công có một số kiến thức về hệ thống và/hoặc mạng

## Luật và Tiêu chuẩn:

### **Tuân thủ OSSTM**
**"Open Source Security Testing Methodology Manual"** (Sổ tay Phương pháp Kiểm tra Bảo mật Mã nguồn mở) được duy trì bởi ISECOM, xác định ba loại tuân thủ.

- **Lập pháp** - Giải quyết quy định chính phủ (Như SOX và HIPAA).
- **Hợp đồng** - Giải quyết yêu cầu ngành / nhóm (Như PCI DSS).
- **Dựa trên tiêu chuẩn** - Giải quyết các thực hành phải được tuân theo bởi thành viên của nhóm/tổ chức nhất định (Như ITIL, ISO và OSSTMM).

- **Kiểm soát OSSTM**
  - **OSSTM Class A - Kiểm soát Tương tác**
    - *Xác thực* -  Cung cấp xác định và ủy quyền dựa trên thông tin đăng nhập.
    - *Bồi thường* - Cung cấp bảo vệ hợp đồng chống mất mát hoặc thiệt hại.
    - *Phục tùng* - Đảm bảo rằng tương tác xảy ra theo quy trình được xác định bởi chủ tài sản.
    - *Tính liên tục* -  Duy trì tính tương tác với tài nguyên nếu xảy ra hỏng hoặc lỗi.
    - *Khả năng phục hồi* - Bảo vệ tài nguyên khỏi hỏng hóc và lỗi.
  
- **OSSTM Class B  - Kiểm soát Quy trình**
    - *Không từ chối* - Ngăn người tham gia từ chối hành động của họ
    - *Bảo mật* - Đảm bảo rằng chỉ người tham gia biết về tài nguyên
    - *Quyền riêng tư* - Đảm bảo rằng chỉ người tham gia có quyền truy cập tài nguyên
    - *Toàn vẹn* - Đảm bảo rằng chỉ người tham gia biết khi tài nguyên và quy trình thay đổi
    - *Báo động*  - Thông báo cho người tham gia khi tương tác xảy ra
      
### **PCI-DSS**
**"Payment Card Industry Data Security Standard"** (Tiêu chuẩn Bảo mật Dữ liệu Ngành Thanh toán) Tiêu chuẩn cho các tổ chức xử lý Thẻ tín dụng, Thẻ ATM và các thẻ POS khác.

### **ISO 27001**
Tiêu chuẩn Quốc tế này được chuẩn bị để cung cấp các yêu cầu thiết lập, triển khai, duy trì và cải thiện liên tục hệ thống quản lý bảo mật thông tin.

### **ISO 27002 VÀ 17799**
Dựa trên BS799 nhưng tập trung vào mục tiêu bảo mật và cung cấp kiểm soát bảo mật dựa trên thực tiễn tốt nhất của ngành.

### **HIPAA**
**"Health Insurance Portability and Accountability Act"** (Đạo luật Di chuyển và Trách nhiệm Bảo hiểm Y tế) luật thiết lập tiêu chuẩn quyền riêng tư để bảo vệ hồ sơ y tế bệnh nhân và thông tin sức khỏe được chia sẻ giữa bác sĩ, bệnh viện và nhà cung cấp bảo hiểm.

### **SOX**
**"Sarbanes-Oxley Act"** (Đạo luật Sarbanes-Oxley) Luật yêu cầu các công ty giao dịch công khai nộp cho kiểm toán độc lập và công bố đúng thông tin tài chính.

### DMCA
**"The Digital Millennium Copyright Act"** (Đạo luật Bản quyền Thiên niên kỷ Kỹ thuật số) là luật bản quyền Hoa Kỳ năm 1998 thực hiện hai hiệp ước năm 1996 của Tổ chức Sở hữu Trí tuệ Thế giới. Nó hình sự hóa việc sản xuất và phân phối công nghệ, thiết bị hoặc dịch vụ nhằm mục đích lách các biện pháp kiểm soát truy cập vào tác phẩm có bản quyền.

### **FISMA** 
**"Federal Information Security Modernization Act Of 2002"** (Đạo luật Hiện đại hóa Bảo mật Thông tin Liên bang năm 2002) Luật được cập nhật năm 2004 để mã hóa quyền hạn của Bộ An ninh Nội địa liên quan đến triển khai chính sách bảo mật thông tin. *(Dành cho cơ quan chính phủ)*

### **NIST-800-53**
Danh mục kiểm soát bảo mật và quyền riêng tư cho hệ thống thông tin liên bang, được tạo để hỗ trợ triển khai FISMA.
  
### **FITARA**
**"Federal Information Technology Acquisition Reform Act"** (Đạo luật Cải cách Mua sắm Công nghệ Thông tin Liên bang) Dự luật năm 2013 nhằm thay đổi khung xác định cách chính phủ Mỹ mua công nghệ.

### **COBIT**
**"Control Object for Information and Related Technology"** (Đối tượng Kiểm soát cho Thông tin và Công nghệ Liên quan) Khung quản trị CNTT và bộ công cụ, được tạo bởi ISACA và ITGI

### **GLBA**
**"U.S Gramm-Leach-Bliley Act"** (Đạo luật Gramm-Leach-Bliley của Mỹ) Luật bảo vệ tính bảo mật và toàn vẹn của thông tin cá nhân được thu thập bởi tổ chức tài chính.

### **CSIRT**
**"Computer Security Incident Response Team"** (Đội Ứng phó Sự cố Bảo mật Máy tính) CSIRT cung cấp một điểm liên hệ duy nhất khi báo cáo sự cố bảo mật máy tính

### **ITIL**
**"Information Technology Infrastructure Library"** (Thư viện Cơ sở hạ tầng Công nghệ Thông tin) - Khung vận hành được phát triển vào thập niên 80 tiêu chuẩn hóa các thủ tục quản lý CNTT
