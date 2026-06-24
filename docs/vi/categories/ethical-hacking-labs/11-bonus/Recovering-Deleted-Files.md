Khôi phục tệp đã xóa
=============================

### Mục tiêu:
* Học những kiến thức cơ bản về **hexedit**, **scalpel** và **foremost**
* Khôi phục và Carve tệp bằng công cụ pháp y


### Yêu cầu:
* Bất kỳ bản phân phối Linux nào
    * Đã cài đặt scalpel, foremost và hexedit


### - File Carving là gì?
*File carving là một quy trình được sử dụng trong pháp y máy tính để trích xuất dữ liệu từ ổ đĩa hoặc thiết bị lưu trữ khác mà không cần sự hỗ trợ của hệ thống tệp ban đầu đã tạo tệp. Đây là phương pháp khôi phục tệp tại không gian chưa phân bổ mà không có bất kỳ thông tin tệp nào và được sử dụng để khôi phục dữ liệu và thực hiện điều tra pháp y kỹ thuật số. Nó còn được gọi là "carving", là thuật ngữ chung cho việc trích xuất dữ liệu có cấu trúc từ dữ liệu thô, dựa trên các đặc điểm cụ thể của định dạng có trong dữ liệu có cấu trúc.*

*File carving chỉ hoạt động trên dữ liệu thô trên phương tiện truyền thông và nó không liên quan đến cấu trúc hệ thống tệp. File carving không quan tâm đến bất kỳ hệ thống tệp nào được sử dụng để lưu trữ tệp[.]Trong hệ thống tệp FAT ví dụ, khi một tệp bị xóa, mục nhập thư mục của tệp được thay đổi thành không gian chưa phân bổ. Ký tự đầu tiên của tên tệp được thay thế bằng một đánh dấu, nhưng dữ liệu tệp本身 vẫn được giữ nguyên. Cho đến khi nó bị ghi đè, dữ liệu vẫn còn.*

* * * 

## Tạo thư mục mới và điều hướng vào đó
```bash
mkdir forensic
cd /forensic/
```

## Tạo ổ cứng ảo
```bash
dd if=/dev/zero bs=1M count=100 of=/forensic/disk.img
```

## Thiết lập loop device
```bash
losetup /dev/loop0 /forensic/disk.img 
```

## Tạo hệ thống tệp ext4
```bash
mkfs.ext4 /dev/loop0
```

## Ngắt loop device:
```bash
losetup -d /dev/loop0
```

## Xác minh loại tệp
```bash
file /forensic/disk.img
```

## Tạo điểm gắn kết
```bash
mkdir /mnt/disk/
```

## Gắn kết hệ thống tệp

```bash
mount -o loop /forensic/disk.img /mnt/disk/
```

## Tải một số tệp mẫu

```bash
cd /mnt/disk/

curl -0 https://www.photos-public-domain.com/wp-content/uploads/2017/12/gray-cat-with-green-eyes.jpg --output cat-0.jpg

curl -0 https://www.photos-public-domain.com/wp-content/uploads/2012/10/orange-and-white-cat-in-window-sill.jpg --output cat-1.jpg

curl -0 https://www.photos-public-domain.com/wp-content/uploads/2012/04/funny-cat-hanging-upside-down-on-kitty-tree.jpg --output cat-2.jpg
```

## Liệt kê các tệp và inode

```bash
ls -li /mnt/disk/*.jpg
```

## Hiển thị trạng thái tệp
```bash
stat /mnt/disk/*.jpg
```

## Xóa tất cả các tệp mẫu
```bash
rm -rf /mnt/disk/*.jpg
sync
```

## Hiển thị trạng thái tệp
```bash
stat /mnt/disk/*.jpg
```

## Gỡ gắn kết hệ thống tệp
```bash
cd /forensic
umount /mnt/disk
```

Khôi phục
=======

### Tạo thư mục case mới

    mkdir /forensic/case && cd /forensic/case

## Cài đặt Hexedit
-  hexedit - xem và chỉnh sửa tệp ở dạng thập lục phân hoặc ASCII

```bash
sudo apt-get install hexedit -y
```

## Chạy Hexedit
```bash
hexedit /forensic/disk.img
```

## Cú pháp

```bash
    F1:          help
    F2:          save
    F3:          load file
    Ctrl-Z:      suspend
    Ctrl-X:      save and exit
    Ctrl-C:      exit without saving
    Ctrl-U:      undo all
    Ctrl-S:      search forward
```
## Tìm đầu của JPEG (ffd8ffe1)

```bash
Ctrl-S
Hexa string to search: ffd8ffe1
```
## Output (offset)

```bash
---  disk.img       --0x840C00/0x6400000--------------------------------------------------------------------
````

## Tính toán vị trí bắt đầu của JPEG (tính bằng byte)
```bash
echo "ibase=16;0840C00" | bc
```

## Output
> `8653824`

## Tìm cuối của JPEG (ffd9)

```bash
hexedit /forensic/disk.img
```
## Tìm kiếm chuỗi thập lục phân ffd9

```bash
Ctrl-S
Hexa string to search: ffd9
```

## Output (offset)

```bash
---  disk.img       --0x85CCCD/0x6400000--------------------------------------------------------------------
```
## Tính toán cuối của JPEG (tính bằng byte)

```bash
echo "ibase=16;85CCCD" | bc
```

### Output
- `8768717`

## Carve hình ảnh sử dụng lệnh ```dd```

```bash
dd if=/forensic/disk.img of=/forensic/case/001.jpg skip=8653824 bs=1 count=8768717
```
## Hiển thị hình ảnh

```
xdg-open 001.jpg
```

Sử dụng ```Scalpel```
-------------

## Tạo bản sao cục bộ của tệp scalpel.conf

```bash
cp /etc/scalpel.conf /forensic/case/
```
## Xác minh/Chỉnh sửa cấu hình scalpel

```bash
vim scalpel.conf
```
## Sử dụng Scalpel để carve tệp
```bash
scalpel -c scalpel.conf /forensic/disk.img
```
## Kết quả
```bash
ls  -R /forensic/case/scalpel-output/
```
## Output
```bash
/forensic/case/scalpel-output/:
audit.txt  jpg-6-0  rpm-41-0  tif-9-0

/forensic/case/scalpel-output/jpg-6-0:
00000000.jpg  00000001.jpg  00000002.jpg

/forensic/case/scalpel-output/rpm-41-0:
00000006.rpm  00000007.rpm  00000008.rpm  00000009.rpm  00000010.rpm  00000011.rpm  00000012.rpm  00000013.rpm  00000014.rpm  00000015.rpm  00000016.rpm  00000017.rpm  00000018.rpm  00000019.rpm  00000020.rpm

/forensic/case/scalpel-output/tif-9-0:
00000003.tif  00000004.tif  00000005.tif
```

Sử dụng Foremost
--------------
- foremost - Khôi phục tệp bằng header, footer và cấu trúc dữ liệu

## Cài đặt foremost
```bash
sudo apt-get install foremost -y
```

## Chuyển đến thư mục làm việc
```bash
cd /forensic/case/
```

## Sử dụng Foremost để carve tệp jpg
```bash
    foremost -t jpg -o foremost-output /forensic/disk.img
```

## Kết quả
```bash
ls -lR foremost-output/
```

## Output
```bash
foremost-output/:
total 8
-rw-r--r--. 1 root root  817 Jun 27 10:11 audit.txt
drwxr-xr--. 2 root root 4096 Jun 27 10:11 jpg

foremost-output/jpg:
total 440
-rw-r--r--. 1 root root 114895 Jun 27 10:11 00016902.jpg
-rw-r--r--. 1 root root 132203 Jun 27 10:11 00017128.jpg
-rw-r--r--. 1 root root 195148 Jun 27 10:11 00017388.jpg
```
## Tài liệu tham khảo:

- [Man: hexedit](https://manpages.ubuntu.com/manpages/bionic/en/man1/hexedit.1.html)
- [Man: scalpel](https://manpages.ubuntu.com/manpages/precise/man1/scalpel.1.html)
- [Man: foremost](https://linux.die.net/man/1/foremost)
- [Infosec Institute - Blog post](https://resources.infosecinstitute.com/topic/file-carving/)
