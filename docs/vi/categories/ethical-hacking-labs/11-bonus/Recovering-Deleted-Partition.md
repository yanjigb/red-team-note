Khôi phục phân vùng đã xóa
=================================
### Mục tiêu:
* Sử dụng Dcfldd, Scalpel và fdisk
* Học cách khôi phục bất kỳ phân vùng bị mất nào bằng công cụ pháp y

### Yêu cầu:
* Bất kỳ bản phân phối Linux nào

* * * 

> Thêm một ổ đĩa 512M vào máy ảo của bạn

## Tạo phân vùng ổ đĩa mới

```bash
fdisk /dev/sdb

Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x109df081.

Command (m for help): n
Partition type
    p   primary (0 primary, 0 extended, 4 free)
    e   extended (container for logical partitions)
Select (default p): 

Using default response p.
Partition number (1-4, default 1): 
First sector (2048-1048575, default 2048): 
Last sector, +sectors or +size{K,M,G,T,P} (2048-1048575, default 1048575): 

Created a new partition 1 of type 'Linux' and of size 511 MiB.

Command (m for help): w
The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

## Tạo hệ thống tệp ext4

```bash
mkfs.ext4 /dev/sdb1
````

## Output:

```bash
mke2fs 1.42.11 (09-Jul-2014)
Creating filesystem with 523264 1k blocks and 131072 inodes
Filesystem UUID: 4c904ba1-5a8c-42a6-8d97-5c7d3b0803ce
Superblock backups stored on blocks: 
    8193, 24577, 40961, 57345, 73729, 204801, 221185, 401409

Allocating group tables: done                            
Writing inode tables: done                            
Creating journal (8192 blocks): done
Writing superblocks and filesystem accounting information: done
```

## Tạo điểm gắn kết

```bash
mkdir /mnt/flashdrive
```

## Gắn kết hệ thống tệp

```bash
mount /dev/sdb1 /mnt/flashdrive
```

## Tải một số tệp mẫu vào Flashdrive

```bash
cd /mnt/flashdrive

curl -0 https://www.photos-public-domain.com/wp-content/uploads/2017/12/gray-cat-with-green-eyes.jpg --output cat-0.jpg

curl -0 https://www.photos-public-domain.com/wp-content/uploads/2012/10/orange-and-white-cat-in-window-sill.jpg --output cat-1.jpg

curl -0 https://www.photos-public-domain.com/wp-content/uploads/2012/04/funny-cat-hanging-upside-down-on-kitty-tree.jpg --output cat-2.jpg
```
## Liệt kê các tệp và inode

```bash
ls -li /mnt/flashdrive/*.jpg
```
## Gỡ gắn kết hệ thống tệp

```bash
cd 
umount /mnt/flashdrive
```

## Xóa phân vùng ⌫

```bash
fdisk /dev/sdb 

Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.


Command (m for help): d
Selected partition 1
Partition 1 has been deleted.

Command (m for help): w
The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

## Thử gắn kết hệ thống tệp

```bash
mount /dev/sdb1 /mnt/flashdrive
```

## Output

```bash
mount: special device /dev/sdb1 does not exist
```


Khôi phục pháp y sử dụng ```Scalpel``` và ```dcfldd```
=======

### Tùy chọn

Ghi lại typescript của phiên terminal:

```bash
script -a -t 2> case.time case.log
```
Phát lại typescript, sử dụng thông tin thời gian

```bash
scriptreplay case.time case.log
```
* * * * *

## Tạo thư mục case

```bash
mkdir -p /forensic/case && cd /forensic/case
```
## Tạo bản sao bằng chứng

## Cài đặt ```dcfldd```
- **dcfldd** là phiên bản cải tiến của dd dành cho pháp y và bảo mật.

```bash
sudo apt-get install dcfldd -y
```
## Sao chép ổ đĩa và tạo hash

```bash
    dcfldd if=/dev/sdb of=flashdrive.dd hash=md5 hashlog=flashdrive.md5
```

## Cài đặt ```Scalpel```
- Scalpel được sử dụng để khôi phục tệp từ hình ảnh ổ đĩa hoặc thiết bị khối thô dựa trên header và footer được chỉ định bởi người dùng.

```bash
sudo apt-get install scalpel -y
```

## Tạo bản sao cục bộ của tệp **scalpel.conf**

```bash
cp /etc/scalpel.conf /forensic/case/
```

## Chỉnh sửa cấu hình scalpel
- bỏ comment cấu hình .jpg
```bash
vim scalpel.conf
```
## Thập lục phân

```bash
cd /tmp
    
curl -0 https://www.photos-public-domain.com/wp-content/uploads/2017/12/gray-cat-with-green-eyes.jpg --output cat-0.jpg

hexdump cat-0.jpg | head
```

## Output của hexdump 'cat-0.jpg' (head)

```bash
0000000 d8ff e0ff 1000 464a 4649 0100 0101 4800
0000010 4800 0000 e1ff ce30 7845 6669 0000 4d4d
0000020 2a00 0000 0800 0900 0f01 0200 0000 0900
0000030 0000 7a00 1001 0200 0000 0700 0000 8400
0000040 1a01 0500 0000 0100 0000 8c00 1b01 0500
0000050 0000 0100 0000 9400 2801 0300 0000 0100
0000060 0200 0000 3201 0200 0000 1400 0000 9c00
0000070 1302 0300 0000 0100 0100 0000 6987 0400
0000080 0000 0100 0000 b000 2588 0400 0000 0100
0000090 0000 320f 0000 580f 6f4d 6f74 6f72 616c
```

## Carving tệp
```bash
scalpel -c scalpel.conf flashdrive.dd
```

## Kết quả
```bash
ls -R /forensic/case/scalpel-output
```

## Output

```bash
/forensic/case/scalpel-output:
audit.txt  jpg-6-0  rpm-41-0  tif-9-0

/forensic/case/scalpel-output/jpg-6-0:
00000000.jpg  00000001.jpg  00000002.jpg

/forensic/case/scalpel-output/rpm-41-0:
00000006.rpm  00000007.rpm  00000008.rpm  00000009.rpm  00000010.rpm  00000011.rpm  00000012.rpm  00000013.rpm  00000014.rpm  00000015.rpm  00000016.rpm  00000017.rpm  00000018.rpm  00000019.rpm  00000020.rpm

/forensic/case/scalpel-output/tif-9-0:
00000003.tif  00000004.tif  00000005.tif
```

Cách thay thế 
===========

## Sử dụng ```fdisk``` để lấy sector bắt đầu

```bash
fdisk -l flashdrive.dd

Disk flashdrive.dd: 512 MiB, 536870912 bytes, 1048576 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x238f1d05

Device     Boot Start     End Sectors  Size Id Type
flashdrive.dd1          2048 1048575 1046528  511M 83 Linux
```

### Sử dụng BC để tính offset
```bash
bc
2048 * 512
1048576
```
### Gắn kết hệ thống tệp

```bash
mount -o ro,loop,offset=1048576 flashdrive.dd /mnt/flashdrive/
```
### Liệt kê các tệp

```bash
ls -lia /mnt/flashdrive/*.jpg
```
### Output

```bash
14 -rw-r--r--. 1 root root 195148 Jun 27 11:26 /mnt/flashdrive/cat-0.jpg
13 -rw-r--r--. 1 root root 132203 Jun 27 11:26 /mnt/flashdrive/cat-1.jpg
12 -rw-r--r--. 1 root root 114895 Jun 27 11:26 /mnt/flashdrive/cat-2.jpg
```
### Gỡ gắn kết hệ thống tệp

```bash
cd 
umount /mnt/flashdrive
```

### Tài liệu tham khảo:

- [Man: Dcfldd](https://packages.ubuntu.com/xenial/dcfldd)
- [Man: Scalpel](https://manpages.ubuntu.com/manpages/precise/man1/scalpel.1.html)
- [Man: fdisk](https://linux.die.net/man/8/fdisk)
