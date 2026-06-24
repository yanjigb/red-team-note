# Hướng dẫn Recon-ng
Recon-ng là công cụ reconnaissance dựa trên web mã nguồn mở, dùng để trích xuất thông tin từ tổ chức mục tiêu và nhân sự của họ.
_Kho lưu trữ chính thức:_
https://github.com/lanmaster53/recon-ng

* Phiên bản: v5.0.1

### Yêu cầu:
* Máy ảo Kali Linux

### Mục tiêu:
* Cách thực hiện recon mạng.
* Thu thập các host liên quan đến một tên miền.
* Thu thập thông tin cá nhân.
* Tạo báo cáo với thông tin đã thu thập.

Recon-ng có giao diện và cách sử dụng tương tự Metasploit Framework, giảm đường cong học tập khi sử dụng framework này.

## Các bước đầu tiên
1. Mở terminal và gõ `recon-ng`
2. Gõ `help` để xem tất cả các lệnh cho phép bạn thêm/xóa bản ghi vào DB, truy vấn, v.v.
```
back            Thoát khỏi ngữ cảnh hiện tại
dashboard       Hiển thị tóm tắt hoạt động
db              Giao diện với cơ sở dữ liệu workspace
exit            Thoát khỏi framework
help            Hiển thị menu này
index           Tạo chỉ mục module (chỉ dành cho dev)
keys            Quản lý thông tin xác thực tài nguyên bên thứ ba
marketplace     Giao diện với marketplace module
modules         Giao diện với các module đã cài đặt
options         Quản lý tùy chọn ngữ cảnh hiện tại
pdb             Khởi chạy phiên Python Debugger (chỉ dành cho dev)
script          Ghi và thực thi script lệnh
shell           Thực thi lệnh shell
show            Hiển thị các mục khác nhau của framework
snapshots       Quản lý snapshot workspace
spool           Xuất output ra file
workspaces      Quản lý workspace
```
**Lưu ý:
Khi tải recon-ng lần đầu, hãy chú ý thông báo dưới đây. Bạn bắt đầu với một framework trống (không có module được cài đặt sẵn).**
```
[*] No modules enabled/installed.
```

3. Tạo workspace mới:
`workspaces create CEH`

4. Thêm tên miền mục tiêu để thực hiện recon mạng:
`db insert domains`
`certifiedhacker.com`

Bạn có thể xem tên miền đã thêm bằng cách gõ `show domains`
```
[recon-ng][CEH] > db insert domains
domain (TEXT): certifiedhacker.com
[*] 1 rows affected.
[recon-ng][CEH] > show domains

  +--------------------------------------------+
  | rowid |        domain       |    module    |
  +--------------------------------------------+
  | 1     | certifiedhacker.com | user_defined |
  +--------------------------------------------+
```
## Sử dụng Module từ Recon-ng Marketplace
Recon-ng hoạt động với các module độc lập, tương tác cơ sở dữ liệu, các hàm tiện ích tích hợp sẵn, trợ giúp tương tác và hoàn thành lệnh, Recon-ng cung cấp một môi trường mạnh mẽ để thực hiện reconnaissance dựa trên web mã nguồn mở một cách nhanh chóng và toàn diện. Để thêm module mới, bạn sẽ sử dụng **marketplace**.

Kho lưu trữ Recon-ng Marketplace:
https://github.com/lanmaster53/recon-ng-marketplace

Để xem toàn bộ marketplace repo, gõ:
`marketplace search`

Quy trình làm việc với module và workspace rất đơn giản như ví dụ dưới đây:

```
0. Cài đặt module bằng lệnh marketplace:
> marketplace install recon/domains-hosts/findsubdomains

1. Tải module bằng lệnh modules load:
> modules load /recon/domains-hosts/findsubdomains

2. Để hiển thị tùy chọn module:
> info

3. Thực thi module:
> run

4. Để chuyển đổi giữa các module hoặc workspace, gõ:
> back

5. Chọn workspace hiện có:
> workspaces select W0rkspaceName

6. Chọn module đã cài đặt:
> modules load path/to/module-name
```
## Sử dụng hackertarget để tìm sub-domain
Bạn có thể tìm các module khác để thu thập subdomain, chúng ta sẽ sử dụng hackertarget trong hướng dẫn này.

Hãy cài đặt và tải nó:
`marketplace install hackertarget`
`modules load hackertarget`

Gõ `info` để xem SOURCE, hiện đang được đặt mặc định như bên dưới:
`info`
```
Name    Current Value  Required  Description
------  -------------  --------  -----------
SOURCE  default        yes       source of input (see 'show info' for details)
```
Bây giờ đặt SOURCE thành:

`options set SOURCE certifiedhacker.com`

Bạn có thể sử dụng lệnh `input` để xem mục tiêu:

`input`
```
+---------------------+
|    Module Inputs    |
+---------------------+
| certifiedhacker.com |
+---------------------+
```

Chạy module:

`run`

**Lưu ý: Nếu phản hồi của bạn hoạt động đúng nhưng lộn xộn với nhiều truy vấn và giá trị, chỉ cần gõ `show hosts` để hiển thị output tốt hơn.**

`show hosts`
...
_(Lệnh này sẽ hiển thị tóm tắt gọn gàng về các tài nguyên đã khám phá)_

## Brute-force tên host
Bạn có thể sử dụng các module khác để thu thập thêm host, chẳng hạn như **brute_hosts**.

**Thoát** khỏi module hiện tại:

`back`

Cài đặt module **brute_hosts**:

`marketplace install recon/domain-hosts/brute_hosts`

Tải module:

`modules load recon/domain-hosts/brute_hosts`

Đặt SOURCE thành tên miền mục tiêu:

`options set SOURCE certifiedhacker.com`

Bằng cách gõ `info`, bạn có thể thấy trong module cụ thể này, bạn có thể đặt wordlist hostname của riêng mình. Tôi khuyến nghị sử dụng wordlist mặc định vì nó khá tốt.
```
Name      Current Value
  --------  -------------
  SOURCE    certifiedhacker.com
  WORDLIST  /root/.recon-ng/data/hostnames.txt
```
5. Chạy module:
`run`
...
_(lưu ý rằng quá trình này sẽ mất một lúc)_

## Tạo báo cáo
Bây giờ bạn đã thu thập được một số host, bạn sẽ chuẩn bị một báo cáo chứa tất cả thông tin.

Cài đặt **reporting module** để xuất báo cáo định dạng html.

`marketplace install reporting/html`

**Lưu ý:** Bạn có thể cài đặt bất kỳ module nào dưới đây để xuất ở các định dạng khác nhau.
```
reporting/csv
reporting/html
reporting/json
reporting/list
reporting/proxifier
reporting/pushpin
reporting/xlsx
reporting/xml
```
Tải module:

`modules load reporting/html`

Để cấu hình thông tin báo cáo, gõ `info` để xem các giá trị.
```
 Name      Current Value
 --------  -------------
 CREATOR
 CUSTOMER
 FILENAME  /root/.recon-ng/workspaces/CEH/results.html
 SANITIZE  True
```
Bạn sẽ cần gán các giá trị này: CREATOR, CUSTOMER và FILENAME.

Đặt tên của bạn [CREATOR], tên khách hàng [CUSTOMER], đường dẫn xuất và tên file [FILENAME].

`options set CREATOR J0nDoe`
`options set CUSTOMER CertifiedHacker Network`
`options set FILENAME /root/Desktop/CE-Results.html`

Chạy module để xuất:

`run`

**Báo cáo được tạo sẽ lưu vào Desktop.**

Không có nhiều nội dung trong báo cáo này, nhưng khi bạn bắt đầu chạy nhiều module và thêm báo cáo geolocation, nó có thể trở nên rất phức tạp. Recon-ng làm rất tốt việc theo dõi tất cả mọi thứ.

# Sử dụng Recon-ng để thu thập thông tin nhân sự (phần 2)
Mục tiêu:
* Lấy thông tin liên hệ của nhân viên làm việc trong một tổ chức.
* Tìm sự tồn tại của hồ sơ người dùng trên nhiều trang web khác nhau.

**Lưu ý quan trọng:**
Các module **location** và **pushpin** được đề cập trong hướng dẫn này yêu cầu khóa API hợp lệ để sử dụng và có một số vấn đề liên quan đến GDPR về thu thập dữ liệu.
Một số yêu cầu bạn phải trả tiền, sẽ được đề cập bên dưới. Tôi khuyên bạn nên lưu tất cả các khóa API vào một file để có thể sử dụng sau này. Để thiết lập khóa API cho recon-ng rất đơn giản, chỉ cần làm theo tài liệu bên dưới và quản lý khóa bên trong Recon-ng bằng lệnh: `keys`.
https://github.com/Raikia/Recon-NG-API-Key-Creation/blob/master/README-v4.8.3.md

## Thu thập thông tin cá nhân
Thu thập thông tin cá nhân bao gồm khám phá thông tin liên hệ như email, địa chỉ, v.v. hiện diện trên trang web của tổ chức mục tiêu. Recon-ng chứa nhiều module để thu thập và khám phá thông tin liên hệ về một công ty nhất định. Một số module Recon-ng để khám phá thông tin cá nhân là:
* recon/domain-contacts
* recon/companies-contacts
* recon/domain-contacts/namechk

## Thiết lập Recon-ng
1. Khởi động Kali Linux và mở terminal.
2. Gõ `recon-ng` để khởi chạy ứng dụng.
3. Thêm workspace mới tên là recon:

`workspaces create recon`

## Thu thập thông tin liên hệ liên kết với một tên miền
Đặt tên miền và thực hiện footprinting trên đó để trích xuất thông tin liên hệ có sẵn trong tên miền.

Module được chọn để thực hiện kỹ thuật này sử dụng ARIN Whois RWS để thu thập dữ liệu POC từ các truy vấn whois cho tên miền nhất định.

Cài đặt và tải module:

`marketplace install recon/domains-contacts/whois_pocs`

`modules load recon/domains-contacts/whois_pocs`

Kiểm tra các tùy chọn cần thiết để chạy module:

`info`

Đặt giá trị SOURCE thành tên miền mục tiêu:

`options set SOURCE facebook.com`

Chạy module:

`run`
```
------------
FACEBOOK.COM
------------
[*] URL: http://whois.arin.net/rest/pocs;domain=facebook.com
[*] URL: http://whois.arin.net/rest/poc/NOL17-ARIN
[*] [contact] Lea Neteork ops (leigha311@facebook.com) - Whois contact
[*] URL: http://whois.arin.net/rest/poc/OPERA82-ARIN
[*] [contact] <blank> Operations (domain@facebook.com) - Whois contact
[*] URL: http://whois.arin.net/rest/poc/BST184-ARIN
[*] [contact] Brandon Stout (bstout@facebook.com) - Whois contact
[*] URL: http://whois.arin.net/rest/poc/DJW23-ARIN
[*] [contact] Darrell Wayne (tiffany.cameron.507@facebook.com) - Whois contact
[*] URL: http://whois.arin.net/rest/poc/MZU-ARIN
[*] [contact] Mark Zuckerberg (zuck@thefacebook.com) - Whois contact
```
Kết quả sẽ trả về các thông tin liên hệ liên quan đến tên miền.

## Sự tồn tại hồ sơ
Module **recon/profiles-profiles/namechk** xác minh sự tồn tại của tên người dùng của một liên hệ cụ thể, nhưng đáng tiếc namechk tính phí để sử dụng API của họ.

Chúng ta có thể tìm kiếm sự tồn tại của hồ sơ người dùng trên nhiều trang web khác nhau bằng module **recon/profiles-profiles/profiler**.

Gõ `back` để quay về trang chủ workspace.

Cài đặt và tải module:

`marketplace install recon/profiles-profiles/profiler`

`modules load recon/profiles-profiles/profiler`

Đặt giá trị SOURCE (Tên người dùng mục tiêu):

`options set SOURCE MarkZuckerberg`

Chạy module:

`run`

Module recon/profiles-profiles/profiler tìm kiếm tên người dùng này và trả về URL của hồ sơ trên nhiều trang web khác nhau (tìm thấy với tên người dùng trùng khớp).
