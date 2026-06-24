# Giới thiệu về Linux 🐧

### Yêu cầu 
* Máy ảo Ubuntu (hoặc bất kỳ bản phân phối desktop đa dụng nào như Manjaro, Fedora, v.v.) (1)
* Máy ảo Kali Linux (2)


### Mục tiêu
* Hiểu những điều cơ bản về hệ thống Linux
* Thực hiện các tác vụ hệ thống và mạng cơ bản từ CLI (giao diện dòng lệnh)
* Tìm hiểu về Kali Linux và các công cụ bảo mật được cài đặt sẵn


**Trước khi bắt đầu vào hướng dẫn Kali Linux, nên sử dụng một bản phân phối desktop đa dụng như [Ubuntu](https://ubuntu.com/download/desktop) hoặc [Manjaro](https://manjaro.org/download/) để học những điều cơ bản và làm quen, ngoài ra bạn có thể kiểm tra [DistroWatch](https://distrowatch.com/) để tìm một bản phân phối tốt để bắt đầu.**
 
1. __**Phần đầu tiên**__ của hướng dẫn này sử dụng máy ảo **Ubuntu** để giải thích những điều cơ bản về môi trường Linux, các lệnh và kỹ thuật cơ bản.

2. __**Phần thứ hai**__ nói về chính **Kali Linux**, giới thiệu các công cụ bảo mật sử dụng các kỹ thuật nâng cao hơn.

> **⚠️ Cảnh báo:** *Kali là một bản phân phối Linux được thiết kế đặc biệt cho các chuyên gia kiểm thử xâm nhập chuyên nghiệp và chuyên gia bảo mật, và do tính chất độc đáo của nó, **KHÔNG được khuyến nghị sử dụng làm máy tính để bàn Linux đa dụng cho phát triển, thiết kế web, chơi game, v.v.*** 

# Tại sao Linux phổ biến?

![linux](https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2015/01/best-linux-distros.jpg)

- Linux Torvalds không chỉ tạo ra Linux mà còn cung cấp nó miễn phí cho thế giới. Sau đó ông mời những người khác làm việc để sửa đổi Linux và giữ các đóng góp của họ miễn phí. Đây là lý do tại sao Linux đã thu được lượng người dùng khổng lồ trong giới developer hardcore rất nhanh chóng. Một lý do khác cho sự phổ biến đáng kinh ngạc này là Linux cực kỳ phổ biến và là hệ điều hành được yêu thích trong giới hacker. Lý do chính là mã nguồn Linux có sẵn miễn phí vì nó là hệ điều hành mã nguồn mở.

- Linux hấp dẫn đối với những người muốn thử nghiệm với các nguyên lý hệ điều hành và những người cần **mức độ kiểm soát lớn đối với hệ điều hành của họ.**

- **Linux được sử dụng rộng rãi để chạy internet và 85% tất cả các máy chủ đang chạy Linux.** Steam có 1600 game trên Linux hiện nay, bao gồm nhiều tựa game phổ biến.

- Linux nhanh hơn Windows và vì Windows là hệ điều hành thương mại nên nó tốn rất nhiều tiền trong khi Linux là hệ điều hành mã nguồn mở nên miễn phí.

- Terminal Linux vượt trội hơn để sử dụng so với dòng lệnh Windows cho developer. Bạn sẽ tìm thấy nhiều thư viện được phát triển nguyên bản cho Linux. Ngoài ra theo nhiều developer, Linux giúp họ hoàn thành công việc dễ dàng hơn.
Linux không gặp phải số lượng lớn các cập nhật phần mềm, nhưng bạn cũng sẽ quan sát thấy các cập nhật phần mềm nhanh hơn nhiều để loại bỏ các vấn đề bạn có thể đang gặp phải.

# Thiết lập 🧰
Điều đầu tiên, bạn nên tải và triển khai hai máy ảo: **Ubuntu Linux** và **Kali Linux**. 

Cấu hình khuyến nghị cho máy ảo Ubuntu là 2GB đến 3GB RAM và ít nhất 4GB RAM cho Kali. **Để đơn giản hóa, bạn có thể để cấu hình mặc định cho cả hai máy.**

- [Trang web chính thức Ubuntu](https://ubuntu.com/download/desktop)
- [Trang web chính thức Kali Linux](https://www.offensive-security.com/kali-linux-vm-vmware-virtualbox-image-download/#1572305786534-030ce714-cc3b)

**Lưu ý**: Nếu bạn không biết cách thiết lập máy ảo, bạn có thể kiểm tra [module trước về xây dựng phòng thí nghiệm](https://github.com/Samsar4/Ethical-Hacking-Labs/blob/master/0-Core-Knowledge/1-Lab-Building.md) hoặc cụ thể hơn một hướng dẫn về [cách thiết lập máy ảo Ubuntu](https://www.makeuseof.com/install-ubuntu-virtualbox/).

# Bắt đầu với Ubuntu

Tại thời điểm này bạn nên quen thuộc với một hệ điều hành cơ bản như Windows và các chương trình khác nhau đã có sẵn trên hệ điều hành Windows. Ubuntu không khác gì, bản phân phối Linux này là một hệ điều hành rất đơn giản, ổn định và dễ sử dụng cho người mới, sau khi cài đặt bạn đã sẵn sàng khám phá.

![ubunut1](https://i0.wp.com/9to5linux.com/wp-content/uploads/2020/08/ubuntu20041.jpg?fit=800%2C600&ssl=1)


**Lưu ý**: Hướng dẫn này sẽ dạy bạn **cách vận hành Linux bằng dòng lệnh** không phải giao diện. Về mặt kỹ thuật bạn có thể thực hiện một số tác vụ bằng cách sử dụng giao diện, nhưng tôi khuyến khích làm càng nhiều càng tốt trên CLI (giao diện dòng lệnh) và hướng dẫn này sẽ hướng dẫn bạn qua điều đó. Bằng cách này bạn có thể có quyền kiểm soát chi tiết để xử lý hệ thống.

* Khởi chạy máy ảo Ubuntu của bạn và tự khám phá giao diện, các ứng dụng được cài đặt sẵn và cấu hình.
![ubuntu2](https://techlatest.b-cdn.net/wp-content/uploads/2020/04/ubuntu-20.04-app-folders-1536x864-1-1024x576.jpg)

## UI vs. CLI
Ví dụ này sẽ so sánh sự khác biệt giữa UI (giao diện người dùng) và CLI (giao diện dòng lệnh) bằng cách thực hiện một tác vụ đơn giản: 
   - tạo một tệp văn bản, viết một vài từ và lưu nó.

Đây chỉ là một ví dụ đơn giản để nắm bắt ý tưởng đằng sau dòng lệnh. 

1. Đầu tiên, hãy tạo một tệp văn bản sử dụng giao diện. Nhấn vào nút 6 chấm ở dưới bên phải **(Show Applications)** và mở ứng dụng **Text Editor**

![ub1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/0490dd84d2611a7ed0631a21f851cc244f80ba4d/ub1.png)

2. Viết **hello world** trên tệp mới, sau đó lưu vào Desktop với tên **hello.txt**

![ub2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/0490dd84d2611a7ed0631a21f851cc244f80ba4d/ub2.png)

3. Bây giờ, nhấn lại nút 6 chấm để hiển thị tất cả ứng dụng và mở một cửa sổ **Terminal** mới

4. Để điều hướng đến desktop sử dụng terminal, nhập `cd Desktop`. Tiếp theo nhập `echo hello world > hello2.txt`.
   - Lệnh `cd` có nghĩa là thay đổi thư mục. Lệnh tiếp theo sẽ `echo` chuỗi `hello world` và ký hiệu `>` cho hệ thống xuất kết quả vào tệp mới, đích thường là tên tệp (`hello2.txt`).

![ub3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/0490dd84d2611a7ed0631a21f851cc244f80ba4d/ub3.png)

5. Như bạn có thể thấy trong hình dưới đây, cả hai phương pháp cho kết quả giống nhau.

![ub4](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/0490dd84d2611a7ed0631a21f851cc244f80ba4d/ub4.png)


**Tóm lại**, dòng lệnh là cách mạnh mẽ nhất để vận hành máy Linux, bạn có thể tận dụng quyền kiểm soát chi tiết của hệ thống Linux và làm hầu hết mọi thứ từ dòng lệnh một cách mạnh mẽ, nhanh chóng và hiệu quả hơn. Ví dụ bạn có thể đổi tên hàng nghìn tệp với một lệnh đơn giản, thay vì đổi tên từng cái một bằng giao diện. Bạn có thể tự động hóa tác vụ, quản lý mạng, v.v. và làm nhiều hơn nữa sử dụng terminal.

# Cấu trúc Linux
Trong Windows, gốc bắt đầu tại ký tự ổ đĩa, thường là C:\, về cơ bản có nghĩa là nó bắt đầu tại ổ cứng. Tuy nhiên trong Linux, gốc của hệ thống tệp không tương ứng với thiết bị hoặc vị trí vật lý, nó là một vị trí logic đơn giản là "/". Xem đồ họa dưới đây để có hình dung trực quan.

Để truy cập gốc của hệ thống tệp, bạn có thể nhập `cd` để thay đổi thư mục theo đích `/` , đại diện cho sự bắt đầu của hệ thống tệp.
   - `cd /`

```
ubuntu@primary:/home$ cd /
Users  boot  etc   lib    lib64   lost+found  mnt  proc  run   snap  sys  usr
bin    dev   home  lib32  libx32  media       opt  root  sbin  srv   tmp  var
```

Để hiểu cơ bản mỗi thư mục trong hệ thống tệp Linux dùng để làm gì, điều này sẽ giúp chúng ta hiểu rõ hơn cách Linux hoạt động nói chung. Lưu ý rằng không phải mọi thư mục được liệt kê ở đây hoặc minh họa dưới đây nhất thiết xuất hiện trong mọi bản phân phối Linux, nhưng hầu hết đều có.

![structure](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/4d8d864d53230f3aa14495d486fd01274a54aec0/linux-structure.png)

# Các lệnh cốt lõi
Các lệnh cốt lõi sẽ khám phá các lệnh người dùng và hệ thống quan trọng nhất.

> ⚠️  Nhớ rằng mỗi lệnh đều có trang hướng dẫn sử dụng, bạn có thể truy cập tại [trang web này](https://linux.die.net/man/) hoặc trực tiếp từ terminal bằng cách nhập: `man <command>`

### `sudo` 
Sudo là viết tắt của SuperUser DO và được sử dụng để truy cập các tệp và thao tác bị hạn chế. Theo mặc định, Linux hạn chế truy cập vào các phần nhất định của hệ thống ngăn các tệp nhạy cảm bị xâm phạm.

Lệnh sudo tạm thời nâng cao đặc quyền cho phép người dùng hoàn thành các tác vụ nhạy cảm mà không cần đăng nhập với tư cách người dùng root.

1. **Ví dụ, hãy thử cập nhật các gói Ubuntu mà không có lệnh `sudo`. Để làm điều đó, bạn chỉ cần sử dụng lệnh `apt-get update` và nhấn enter.**

```
purple@purple-vm:~$ apt-get update

Reading package lists... Done
E: Could not open lock file /var/lib/apt/lists/lock - open (13: Permission denied)
E: Unable to lock directory /var/lib/apt/lists/
W: Problem unlinking the file /var/cache/apt/pkgcache.bin - RemoveCaches (13: Permission denied)
W: Problem unlinking the file /var/cache/apt/srcpkgcache.bin - RemoveCaches (13: Permission denied)
```
Như bạn có thể thấy ở trên, chúng ta nhận được **lỗi "13: Permission denied"**, nghĩa là chúng ta cần đặc quyền root để cập nhật các gói Ubuntu.

2. **Tiếp theo, sử dụng lệnh với đặc quyền nâng cao (root) bằng `sudo`. Lệnh sẽ được thực thi thành công.**

```
purple@purple-vm:~$ sudo apt-get update
[sudo] password for purple: 
Hit:1 http://pt.archive.ubuntu.com/ubuntu focal InRelease
Hit:2 http://pt.archive.ubuntu.com/ubuntu focal-updates InRelease                     
Hit:3 http://pt.archive.ubuntu.com/ubuntu focal-backports InRelease                   
Hit:4 https://brave-browser-apt-release.s3.brave.com stable InRelease                 
Hit:5 http://security.ubuntu.com/ubuntu focal-security InRelease                      
Reading package lists... Done
```

Chúng ta cũng có các biến thể `apt-get` khác:
   - `apt-get upgrade` ->  đơn giản là nâng cấp/cài đặt phiên bản mới của gói có sẵn đè lên bản cũ.
   - `apt-get dist-upgrade` -> Lệnh này tìm kiếm các phụ thuộc mới hơn và ưu tiên nâng cấp chúng bằng khả năng loại bỏ các bản cũ – điều này có thể nguy hiểm. Đảm bảo đọc [tài liệu chính thức](https://linux.die.net/man/8/apt-get) trước khi sử dụng lệnh này.

3. **Bạn cũng có thể chuyển sang người dùng root bằng cách sử dụng `su`. Nhưng không được khuyến nghị hoạt động với tư cách root theo thực hành bảo mật. Các ứng dụng được thiết kế để chạy với bảo mật không phải admin, vì vậy bạn phải nâng cao đặc quyền của chúng để sửa đổi hệ thống cơ bản.**

```
purple@purple-vm:~$ sudo su
[sudo] password for purple: 
root@purple-vm:/home/purple# 
```
Như bạn có thể thấy, người dùng purple đã nhảy sang người dùng root bằng cách sử dụng su.

### `pwd`
`pwd` là viết tắt của **P**rint **W**orking **D**irectory (In thư mục làm việc). Nó in ra đường dẫn của thư mục hiện tại bạn đang ở, bắt đầu từ gốc.

```
purple@purple-vm:~$ pwd
/home/purple/work/code
```
## Phân quyền Linux 

Linux có ba quyền và chúng có thể được thiết lập cho chủ sở hữu, nhóm hoặc người khác.

<p align="center">
<img width="90%" src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/01260d855800248f380bd6c2b58fe0425067cebf/linux-perms.png" />
</p>

> **r = read** (đọc) - mở tệp, xem tệp.
> **w = write** (ghi) - chỉnh sửa tệp, thêm hoặc xóa tệp cho thư mục.
> **x = execute** (thực thi) - chạy tệp, thực thi chương trình hoặc script, CD đến thư mục khác.

Owner | Group | Other
:--:|:--:|:--:
rwx | rwx | rwx

* Xem phân quyền trên dòng lệnh Linux:

```console
ls -l
```

```console
-rwxrwxr-x 1 user user 31337 Feb 11 13:13 File
```

### Sử dụng `chmod` 
`chmod` *là lệnh và lời gọi hệ thống được sử dụng để thay đổi quyền truy cập của các đối tượng hệ thống tệp trên Unix và các hệ điều hành giống Unix.*

* Xóa quyền của **File** để không có quyền đọc, ghi và thực thi cho **Other**: *(Cờ tương đương với không có gì[o=] từ chối quyền)*

```console
ls -l
```

```console
-rwxrwxr-x 1 user user 31337 Feb 11 13:13 File
```

```console
chmod o= File
```

```console
ls -l
```

```console
-rwxrwx--- 1 user user 31337 Feb 11 13:13 File
```

* Cấp quyền **đọc** và **ghi** cho **Group**:

```console
ls -l
```

```console
-rwx---r-- 1 user user 31337 Feb 11 13:13 File
```

```console
chmod g=rw File
```

```console
ls -l
```

```console
-rwxrw-r-- 1 user user 31337 Feb 11 13:13 File
``` 

* Cấp **tất cả quyền** cho mọi người (Owner, Group và Other):

```console
ls -l
```

```console
-rwx---r-- 1 user user 31337 Feb 11 13:13 File
```

```console
chmod a=rwx File
```

```console
ls -l
```

```console
-rwxrwxrwx 1 user user 31337 Feb 11 13:13 File
``` 


## Sử dụng `chmod` - cách truyền thống:
Lệnh chmod sẽ lấy giá trị bát phân và kết hợp chúng để liên kết quyền trên ba vị trí khác nhau cho Owner, Group và Other/Mọi người. Điều này quy về một quy tắc nhị phân đơn giản: 0 = tắt | 1 = bật.

Bát phân | Nhị phân | Quyền
:--:|:--:|:--:
0 | 000 | ---
1 | 001 | --x
2 | 010 | -w-
3 | 011 | -wx
4 | 100 | r--
5 | 101 | r-x
6 | 110 | rw-
7 | 111 | rwx

*Nếu bạn muốn cấp tất cả quyền cho một nhóm, con số sẽ là 7 (4 + 2 + 1).*

Read | Write | Execute
:--:|:--:|:--:
r-- | -w- | --x
4 | 2 | 1

#### Ví dụ:

* Cấp quyền **đọc, ghi và thực thi** cho mọi người:

```console
ls -l
```

```console
-rwx---r-- 1 user user 31337 Feb 11 13:13 File
```

```console
chmod 777 File
```

```console
ls -l
```

```console
-rwxrwxrwx 1 user user 31337 Feb 11 13:13 File
``` 


* Cấp tất cả quyền cho **owner**, đọc và ghi cho **group** và không có quyền cho **other/mọi người**:

```console
ls -l
```

```console
-r-x---r-- 1 user user 31337 Feb 11 13:13 File
```

```console
chmod 760 File
```

```console
ls -l
```

```console
-rwxrw---- 1 user user 31337 Feb 11 13:13 File
```

### Linux - Quyền sở hữu tệp sử dụng `chown` (thay đổi chủ sở hữu tệp và nhóm)

```console
ls -l
```

```console
-rwxrwxrwx 1 user001 user001 31337 Feb 11 13:13 File
```

```console
sudo chown root File
```

```console
ls -l
```

```console
-rwxrwxrwx 1 root user001 31337 Feb 11 13:13 File
```

*Lệnh chown yêu cầu sudo*


### `passwd`

Thay đổi mật khẩu của người dùng hiện tại
```console
sudo passwd
```

## Các lệnh mạng

### `ping`
* Hữu ích cho kiểm tra DNS (lên / hoặc xuống) | là công cụ DNS để phân giải địa chỉ web thành địa chỉ IP.
* Kiểm tra khả năng tiếp cận - xác định thời gian vòng lặp, và sử dụng giao thức ICMP.

```console
~#: ping www.google.com 

PING www.google.com (172.217.168.164): 56 data bytes
64 bytes from 172.217.168.164: icmp_seq=0 ttl=55 time=25.981 ms
64 bytes from 172.217.168.164: icmp_seq=1 ttl=55 time=25.236 ms
--- www.google.com ping statistics ---
2 packets transmitted, 2 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 25.236/25.608/25.981/0.373 ms
```


### `netstat`
* Thống kê mạng
* Lấy thông tin về kết nối TCP / UDP của hệ thống chủ và trạng thái tất cả các cổng mở và lắng nghe cũng như bảng định tuyến.

* Bạn đang nói chuyện với ai? 
* Ai đang cố nói chuyện với bạn? 

```console
netstat -a # (hiển thị tất cả kết nối hoạt động) (máy chủ)
netstat -n # (máy chủ)
netstat -b # (Hiển thị binary Windows)
```

### `traceroute`
* Traceroute - cách các gói đi từ máy chủ đến điểm cuối khác. Traceroute hữu ích để xem những bộ định tuyến nào đang được đi qua, cả nội bộ và bên ngoài.

* **Tận dụng thông báo lỗi ICMP Time to Live (TTL) Exceeded**
	- Thời gian trong TTL đề cập đến số bước nhảy (hop), không phải giây hay phút.
	- TTL=1 là bộ định tuyến đầu tiên.
	- TTL=2 là bộ định tuyến thứ hai, và cứ tiếp tục.

<p align="center">
<img width="90%" src="https://2.bp.blogspot.com/-bJD787kOoXg/WxfnpFe4tVI/AAAAAAAAXN4/XTCxg0nFEAQOjtEVcvDzL2N-pK-EbQA2wCLcBGAs/s1600/0.png" />
</p>

* *Như thể hiện ở trên, tại HOP 2, TTL đã vượt quá và quay lại thiết bị A, đếm 3 trên TTL cho HOP tiếp theo.*

```console
~#: traceroute google.com

traceroute to google.com (172.217.17.14), 64 hops max, 52 byte packets
 1  192.168.1.1 (192.168.1.1)  4.960 ms  3.928 ms  3.724 ms
 2  10.10.124.254 (10.10.127.254)  11.175 ms  14.938 ms  15.257 ms
 3  10.133.200.17 (10.137.201.17)  13.212 ms  12.581 ms  12.742 ms
 4  10.255.44.86 (10.255.45.86)  16.369 ms  15.100 ms  17.488 ms
 5  71.14.201.214 (71.14.201.214)  13.287 ms  29.262 ms  16.591 ms
 6  79.125.235.68 (79.125.242.68)  22.488 ms
    79.125.235.84 (79.125.242.84)  13.833 ms *
 7  79.125.252.202 (79.125.252.202)  24.147 ms
    108.170.252.241 (108.170.25@.241)  26.352 ms
    79.125.252.202 (79.125.252.202)  23.598 ms
 8  108.170.252.247 (108.170.252.247)  31.187 ms
    79.125.252.199 (79.121.251.191)  22.885 ms
```

### `arp` 
* Giao thức phân giải địa chỉ - bộ nhớ đệm ip-to-ethernet
* Xác định địa chỉ MAC dựa trên địa chỉ IP
* Tùy chọn `-a`: xem bảng ARP cục bộ
```console
~#: arp -a

? (192.168.1.3) at 00:11:22:33:44:55 [ether] on enp0s10
? (192.168.1.128) at e8:33:b0:70:2c:71 [ether] on enp0s10
? (192.168.1.4) at 2c:33:5c:a4:2e:8a [ether] on enp0s10
_gateway (192.168.1.1) at 00:31:33:8b:2a:da [ether] on enp0s10
```

### `ifconfig`

* Tương đương với ipconfig cho UNIX/Linux OS.

```console
~#: ifconfig
docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        ether 00:11:22:33:44:55  txqueuelen 0  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

enp0s10: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.128  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::acf6:2ae2:ab5c:6316  prefixlen 64  scopeid 0x20<link>
        ether aa:bb:cc:dd:ee:ff  txqueuelen 1000  (Ethernet)
        RX packets 156651  bytes 29382856 (28.0 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 76400  bytes 23111524 (22.0 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

### `iwconfig`
Tương tự ifconfig, nhưng dành riêng cho giao diện mạng không dây.

```console
~#: iwconfig
lo        no wireless extensions.

enp0s10   no wireless extensions.

wlp3s0b1  IEEE 802.11  ESSID:off/any  
          Mode:Managed  Access Point: Not-Associated   Tx-Power=19 dBm   
          Retry short limit:7   RTS thr:off   Fragment thr:off
          Encryption key:off
          Power Management:off
          
docker0   no wireless extensions.
```

### `ip addr`
hiển thị / điều chỉnh định tuyến, thiết bị mạng, giao diện và tunnel.

Hiển thị tất cả cấu hình ip, địa chỉ mac, ipv6, v.v.

```console
~#: ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: enp0s10: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether aa:bb:cc:dd:ee:ff brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.111/24 brd 192.168.1.255 scope global dynamic noprefixroute enp0s10
       valid_lft 4761sec preferred_lft 4761sec
    inet6 fe80::acf6:2ae2:ab5c:6316 scope link noprefixroute 
       valid_lft forever preferred_lft forever
```

### `nslookup`

* Truy vấn máy chủ tên Internet một cách tương tác; kiểm tra xem máy chủ DNS có hoạt động không

```console
nslookup www.certifiedhacker.com

output:
Server:         192.168.1.1
Address:        192.168.1.1#53

Non-authoritative answer:
www.certifiedhacker.com canonical name = certifiedhacker.com.
Name:   certifiedhacker.com
Address: 162.241.216.11 inslookup www.certifiedhacker.com
Server:         192.168.1.1
Address:        192.168.1.1#53

Non-authoritative answer:
www.certifiedhacker.com canonical name = certifiedhacker.com.
Name:   certifiedhacker.com
Address: 162.241.216.11

```

### `dig` 
* Công cụ tra cứu DNS - Chức năng giống nslookup, nhưng cho phép chức năng mở rộng hơn.

```console
dig www.certifiedhacker.com

output:
; <<>> DiG 9.11.14-3-Debian <<>> certifiedhacker.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 15708
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 2048
; COOKIE: 71bd915b07b3fd08757c9ad65e5d6f3e549d5187359e97cb (good)
;; QUESTION SECTION:
;certifiedhacker.com.           IN      A

;; ANSWER SECTION:
certifiedhacker.com.    14400   IN      A       162.241.216.11

;; Query time: 419 msec
;; SERVER: 192.168.1.1#53(192.168.1.1)
;; WHEN: Mon Mar 02 15:40:29 EST 2020
;; MSG SIZE  rcvd: 92

```

### `netcat`
Swiss army knife của TCP/IP; bạn có thể tạo bất kỳ loại kết nối nào và xem kết quả từ dòng lệnh. Với nc bạn có thể kết nối với bất kỳ thứ gì trên bất kỳ số cổng nào hoặc bạn có thể khiến hệ thống lắng nghe trên một số cổng. Có thể là công cụ mạnh mẽ cho do thám.

<p align="center">
<img src="https://www.researchgate.net/publication/329745450/figure/fig3/AS:705181092179978@1545139682702/Remote-Command-and-Control-example-through-Netcat.ppm" />
</p>

* "Đọc" hoặc "Ghi" ra mạng
	- Mở một cổng và gửi hoặc nhận lưu lượng
	- Lắng nghe trên một số cổng
	- Truyền dữ liệu
	- Quét cổng và gửi dữ liệu đến một cổng
* Trở thành backdoor
	- Chạy shell từ thiết bị từ xa

### `stat` 
stat có thể trả về trạng thái của toàn bộ hệ thống tệp, trạng thái của ổ cứng đầu tiên, v.v.

<p align="center">
<img width="88%" src="https://www.howtoforge.com/images/command-tutorial/big/stat-basic.png" />
</p>

- Thuộc tính lưu trữ - **Windows** - nếu cái gì đó được tạo hoặc thay đổi

### `tcpdump`
* Tcpdump là chương trình phân tích gói mạng dữ liệu chạy dưới giao diện dòng lệnh. Nó cho phép người dùng hiển thị TCP/IP và các gói khác được truyền hoặc nhận qua mạng mà máy tính được kết nối. Được phân phối theo giấy phép BSD, tcpdump là phần mềm miễn phí

<p align="center">
<img width="90%" src="https://packetflows.com/wp-content/uploads/2017/05/tcpdump_i.png" />
</p>

## Công cụ quét mạng
**Hữu ích để thu thập và lập danh mục các máy chủ trên mạng, và hữu ích cho việc do thám hệ thống của bạn.**

### `nmap`
Cách tốt nhất để truy vấn hệ thống để kiểm tra xem chúng có cổng mở, dịch vụ, phiên bản hệ thống, phiên bản dịch vụ, v.v.


```console
nmap -v -A -T5 scanme.nmap.org 

...
PORT      STATE SERVICE    VERSION
22/tcp    open  ssh        OpenSSH 6.6.1p1 Ubuntu 2ubuntu2.13 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   1024 ac:00:a0:1a:82:ff:cc:55:99:dc:67:2b:34:97:6b:75 (DSA)
|   2048 20:3d:2d:44:62:2a:b0:5a:9d:b5:b3:05:14:c2:a6:b2 (RSA)
|   256 96:02:bb:5e:57:54:1c:4e:45:2f:56:4c:4a:24:b2:57 (ECDSA)
|_  256 33:fa:91:0f:e0:e1:7b:1f:6d:05:a2:b0:f1:54:41:56 (ED25519)
80/tcp    open  http       Apache httpd 2.4.7 ((Ubuntu))
|_http-favicon: Unknown favicon MD5: 156515DA3C0F7DC6B2493BD5CE43F795
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-server-header: Apache/2.4.7 (Ubuntu)
|_http-title: Go ahead and ScanMe!
9929/tcp  open  nping-echo Nping echo
31337/tcp open  tcpwrapped
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
...
```

# [đang tiến hành]

ghi chú cần làm

1) Ubuntu - cơ bản
    - giới thiệu về Linux
    - cách vận hành
    - các lệnh cơ bản

2) Kali - nâng cao
    - giới thiệu về Kali
    - công cụ bảo mật
    - các lệnh nâng cao

3) Phần bổ sung
    - tmux, vim.
    - các lệnh thú vị như thời tiết terminal, neofetch
---
