# hdparm

hdparm cung cấp giao diện dòng lệnh cho nhiều giao diện kernel được hỗ trợ bởi hệ thống con "libata" SATA/PATA/SAS của Linux và hệ thống con trình điều khiển IDE cũ hơn. Nhiều ổ đĩa USB mới hơn (2008 trở đi) hiện cũng hỗ trợ "SAT" (SCSI-ATA Command Translation) và do đó cũng có thể hoạt động với hdparm. Ví dụ: các model WD "Passport" gần đây và các vỏ bọc NexStar-3 gần đây. Một số tùy chọn có thể chỉ hoạt động chính xác với các kernel mới nhất.


### Mục tiêu:
* Học những kiến thức cơ bản về **hdparm**, **dd** và **hexedit**

### Yêu cầu:
* Bất kỳ bản phân phối Linux nào

* * * 

### Cài đặt `hdparm`
* Fedora:

<div>

    dnf -y install hdparm

</div>

* Ubuntu:

<div>

    sudo apt-get install -y hdparm

</div>

### Chạy hdparm

<div>

    hdparm -giI /dev/sda

</div>

* `-g` : Hiển thị hình học ổ đĩa (cylinders, heads, sectors), kích thước (tính bằng sector) của thiết bị, và offset bắt đầu (tính bằng sector) của thiết bị từ đầu ổ đĩa.

* `-i và -I` : Hiển thị thông tin nhận dạng mà các trình điều khiển kernel (IDE, libata) đã lưu từ thời điểm khởi động/cấu hình.

* Thông tin thêm: [hdparm linux manual](https://man7.org/linux/man-pages/man8/hdparm.8.html)

#### Output

<div>

    /dev/sda:
     geometry      = 981/255/63, sectors = 15761088, start = 0

     Model=SSDPAMM0008G1, FwRev=Ver2.I0H, SerialNo=CVPA83108257W
     Config={ HardSect NotMFM Fixed DTR>10Mbs }
     RawCHS=15636/16/63, TrkSize=32256, SectSize=512, ECCbytes=4
     BuffType=DualPort, BuffSize=1kB, MaxMultSect=1, MultSect=off
     CurCHS=15636/16/63, CurSects=15761088, LBA=yes, LBAsects=15761088
     IORDY=yes, tPIO={min:120,w/IORDY:120}, tDMA={min:120,rec:120}
     PIO modes:  pio0 pio1 pio2 pio3 pio4 
     DMA modes:  mdma0 mdma1 mdma2 
     UDMA modes: udma0 udma1 udma2 udma3 *udma4 
     AdvancedPM=no
     Drive conforms to: Unspecified:  ATA/ATAPI-4,5

     * signifies the current active mode

    CompactFlash ATA device
        Model Number:       SSDPAMM0008G1                           
        Serial Number:      CVPA83108257W       
        Firmware Revision:  Ver2.I0H
    Standards:
        Supported: 5 4 
        Likely used: 6
    Configuration:
        Logical     max current
        cylinders   15636   15636
        heads       16  16
        sectors/track   63  63
        --
        CHS current addressable sectors:   15761088
        LBA    user addressable sectors:   15761088
        Logical/Physical Sector size:           512 bytes
        device size with M = 1024*1024:        7695 MBytes
        device size with M = 1000*1000:        8069 MBytes (8 GB)
        cache/buffer size  = 1 KBytes (type=DualPort)
    Capabilities:
        LBA, IORDY(cannot be disabled)
        Standby timer values: spec'd by Standard, no device specific minimum
        R/W multiple sector transfer: Max = 1   Current = 0
        DMA: mdma0 mdma1 mdma2 udma0 udma1 udma2 udma3 *udma4 
             Cycle time: min=120ns recommended=120ns
        PIO: pio0 pio1 pio2 pio3 pio4 
             Cycle time: no flow control=120ns  IORDY flow control=120ns
    Commands/features:
        Enabled Supported:
           *    Power Management feature set
           *    WRITE_BUFFER command
           *    READ_BUFFER command
           *    NOP cmd
           *    CFA feature set
           *    Mandatory FLUSH_CACHE
           *    CFA advanced modes: pio5 pio6 mdma3 mdma4 
    Integrity word not set (found 0x0000, expected 0x20a5)

</div>

### Kích thước

<div>

    echo With MBytes=1024 the hard drive size is $[15761088*512/1024/1024/1024]GB

</div>

#### Output

<div>

    With MBytes=1024 the hard drive size is 7GB

</div>

<div>

    echo With MBytes=1000 the hard drive size is $[15761088*512/1000/1000/1000]GB

</div>

#### Output

<div>

    With MBytes=1000 the hard drive size is 8GB

</div>

## Xóa sạch ổ đĩa

<div>

    dd if=/dev/zero of=/dev/sdb bs=4K conv=noerror,sync

</div>

#### Output

<div>

    262145+0 registos in
    262144+0 registos out
    1073741824 bytes (1,1 GB) copied, 2,17486 s, 494 MB/s

</div>

# Sử dụng lệnh `dd`

- Sử dụng `dd`, có thể đọc và/hoặc ghi trực tiếp từ/đến các tệp khác nhau miễn là hàm đã được triển khai trong các trình điều khiển tương ứng.
- Nó rất hữu ích cho các mục đích như sao lưu boot sector, lấy dữ liệu ngẫu nhiên, v.v.
- Chuyển đổi dữ liệu, ví dụ: chuyển đổi mã hóa ASCII sang EBCDIC.
- [Thông tin thêm](https://linuxhint.com/linux_dd_command/)


### Tạo thư mục mới

<div>

    mkdir /CaseStudies && cd /CaseStudies

</div>

## Nguồn đầu vào

### Sử dụng dd để tạo tệp trống mẫu 1MB

<div>

    dd if=/dev/zero of=/CaseStudies/sample.dd bs=1M count=1

</div>

### Cài đặt `hexedit`
- hexedit hiển thị tệp ở cả dạng ASCII và thập lục phân. Tệp có thể là thiết bị vì tệp được đọc từng phần một. Bạn có thể sửa đổi tệp và tìm kiếm trong đó.
- Trình soạn thập lục phân được sử dụng để kiểm tra các tệp thực thi đã biên dịch hoặc tệp nhị phân. Bạn có thể dễ dàng sử dụng trình soạn thập lục phân để thay đổi cách phần mềm hoạt động với đủ kinh nghiệm.


<div>

    dnf -y install hexedit

</div>

### Chỉnh sửa tệp mẫu

<div>

    hexedit sample.dd

    ENTER

    0x20000

    68 65 72 65  20 49 20 61  6D 0A

    Ctrl-X

</div>

### Nhảy đến văn bản đã nhập trước đó

<div>

    dd bs=512 skip=256 count=1 if=/CaseStudies/sample.dd | xxd

</div>

### Output

<div>

    1+0 records in
    1+0 records out
    512 bytes (512 B) copied, 0.00044093 s, 1.2 MB/s
    0000000: 6865 7265 2049 2061 6d0a 0000 0000 0000  here I am.......
    0000010: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000020: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000030: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000040: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000050: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000060: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000070: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000080: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000090: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00000a0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00000b0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00000c0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00000d0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00000e0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00000f0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000100: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000110: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000120: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000130: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000140: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000150: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000160: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000170: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000180: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000190: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00001a0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00001b0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00001c0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00001d0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00001e0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00001f0: 0000 0000 0000 0000 0000 0000 0000 0000  ................

</div>

## Đích đầu ra

### Tạo bản sao

<div>

    dd if=/CaseStudies/sample.dd bs=4k of=/CaseStudies/copy.dd

</div>

### Tạo hash MD5 của tệp

<div>

    dd if=/CaseStudies/sample.dd bs=4k | md5sum

</div>

### Output

<div>

    56+0 records in
    256+0 records out
    1048576 bytes (1.0 MB) copied, 0.0187227 s, 56.0 MB/s
    fc3ef9193baf3a1d3fc67da5aa4510ae  -

</div>

### Sao chép từ xa

### Khởi động listener sử dụng `netcat` trên máy kiểm tra

<div>

    nc -lp 4444 > sample.dd

</div>

### Chuyển output qua `netcat`

<div>

    dd if=/CaseStudies/sample.dd bs=4k | nc -w3 127.0.0.1 4444

</div>

### So sánh hash

<div>

    md5sum sample.dd

</div>

### Output

<div>

    fc3ef9193baf3a1d3fc67da5aa4510ae  sample.dd

</div>

### Tài liệu tham khảo
- https://www.man7.org/linux/man-pages/man8/hdparm.8.html
- https://www.man7.org/linux/man-pages/man1/dd.1.html#DESCRIPTION
- https://linuxhint.com/linux_dd_command/
- https://linuxhint.com/hex_editor_linux/
