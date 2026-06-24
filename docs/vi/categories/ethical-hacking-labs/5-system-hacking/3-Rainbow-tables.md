# Bảng Rainbow
RainbowCrack là một chương trình máy tính tạo bảng rainbow để sử dụng trong việc giải mã mật khẩu.

RainbowCrack [Tài liệu](https://project-rainbowcrack.com/documentation.htm)

### Tổng quan về Bảng Rainbow
Bảng rainbow là một bảng được tính toán trước để đảo ngược hàm băm mật mã, thường được sử dụng để giải mã hash mật khẩu. Bảng thường được sử dụng để khôi phục mật khẩu văn bản thuần bao gồm một tập hợp ký tự giới hạn, đến một độ dài nhất định.

### Mục tiêu
* Giới thiệu ngắn gọn về bảng rainbow và sử dụng chúng để giải mã hash và thu được mật khẩu văn bản thuần.

## Tạo Bảng Rainbow
Để có bảng rainbow, bạn có thể [tải xuống](https://freerainbowtables.com/) hoặc tự tạo bằng cách sử dụng `rtgen` đi kèm với gói `rainbowcrack`.

Cài đặt phiên bản CLI của RainbowCrack:

`sudo apt-get install rainbowcrack`

**Phiên bản GUI**: https://project-rainbowcrack.com/

**Ví dụ sử dụng**:
`rtgen hash_algorithm charset plaintext_len_min plaintext_len_max table_index chain_len chain_num part_index`

Hash Algorithm | Mô tả
--- | --- | ---
**hash_algorithm** | Bảng rainbow đặc thù cho từng thuật toán băm. Bảng rainbow cho một thuật toán băm cụ thể chỉ giúp giải mã các hash thuộc loại đó. Chương trình rtgen hỗ trợ nhiều thuật toán băm như lm, ntlm, md5, sha1, mysqlsha1, halflmchall, ntlmchall, oracle-SYSTEM và md5-half. Trong ví dụ trên, chúng ta tạo bảng rainbow md5 để tăng tốc giải mã hash md5.
**charset** | Bảng ký tự bao gồm tất cả các ký tự có thể cho văn bản thuần. "loweralpha-numeric" đại diện cho "abcdefghijklmnopqrstuvwxyz0123456789", được định nghĩa trong file cấu hình charset.txt.
**plaintext_len_min plaintext_len_max** | Hai tham số này giới hạn phạm vi độ dài văn bản thuần của bảng rainbow. Trong ví dụ trên, phạm vi độ dài văn bản thuần là 1 đến 7. Vì vậy các văn bản thuần như "a" và "abcdefg" có thể được chứa trong bảng rainbow được tạo. Nhưng văn bản thuần "abcdefgh" với độ dài 8 sẽ không được chứa.
**table_index1** | Tham số table_index chọn hàm giảm. Bảng rainbow với tham số table_index khác nhau sử dụng hàm giảm khác nhau.
**chain_len1** | Đây là độ dài chuỗi rainbow. Chuỗi rainbow dài hơn lưu trữ nhiều văn bản thuần hơn và cần thời gian tạo lâu hơn.
**chain_num1** | Số lượng chuỗi rainbow cần tạo. Bảng rainbow đơn giản là một mảng các chuỗi rainbow. Kích thước mỗi chuỗi rainbow là 16 byte.
**part_index** | Để lưu trữ một bảng rainbow lớn trong nhiều file nhỏ hơn, sử dụng số khác nhau trong tham số này cho mỗi phần và giữ tất cả các tham số khác giống nhau.

**Ví dụ:**

`rtgen md5 loweralpha-numeric 1 7 0 3800 33554432 0`

CPU sẽ bận tính toán các chuỗi rainbow. Trên hệ thống có bộ xử lý đa lõi, tất cả các lõi được sử dụng đầy đủ.

Để tạm dừng tạo bảng, chỉ cần nhấn Ctrl+C và chương trình rtgen sẽ thoát. Lần sau nếu chương trình rtgen được chạy với chính xác các tham số tương tự, việc tạo bảng sẽ được tiếp tục.

**Lệnh này mất hàng giờ để hoàn thành với bộ xử lý thông thường.**

Sau khi tạo bảng rainbow, bạn cần sắp xếp nó. Rainbowcrack đi kèm với chương trình `rtsort`, sắp xếp các chuỗi rainbow theo điểm cuối để cho phép tìm kiếm nhị phân giúp bộ xử lý truy cập nhanh hơn.

`rtsort *.rt`

## Giải mã
Để hiển thị cách sử dụng và tùy chọn, chỉ cần nhập `rcrack`.
```
usage: ./rcrack path [path] [...] -h hash
       ./rcrack path [path] [...] -l hash_list_file
       ./rcrack path [path] [...] -lm pwdump_file
       ./rcrack path [path] [...] -ntlm pwdump_file
path:              directory where rainbow tables (*.rt, *.rtc) are stored
-h hash:           load single hash
-l hash_list_file: load hashes from a file, each hash in a line
-lm pwdump_file:   load lm hashes from pwdump file
-ntlm pwdump_file: load ntlm hashes from pwdump file

implemented hash algorithms:
    lm HashLen=8 PlaintextLen=0-7
    ntlm HashLen=16 PlaintextLen=0-15
    md5 HashLen=16 PlaintextLen=0-15
    sha1 HashLen=20 PlaintextLen=0-20
    sha256 HashLen=32 PlaintextLen=0-20

examples:
    ./rcrack . -h 5d41402abc4b2a76b9719d911017c592
    ./rcrack . -l hash.txt
```

# L0phtCrack

L0phtCrack là một công cụ kiểm toán mật khẩu chứa các tính năng như lập lịch, trích xuất hash từ phiên bản Windows 64-bit, thuật toán đa xử lý, và giám sát mạng cùng giải mã. Nó có thể nhập và giải mã file mật khẩu UNIX từ máy Windows từ xa.

Dùng thử miễn phí: https://www.l0phtcrack.com/
Tài liệu: https://www.l0phtcrack.com/doc/


### Liên kết hữu ích:

https://project-rainbowcrack.com/documentation.htm

https://www.insecurity.be/blog/2018/01/21/retrieving-ntlm-hashes-and-what-changed-technical-writeup/

https://asecuritysite.com/encryption/lmhash
