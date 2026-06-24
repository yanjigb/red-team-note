import{_ as e,c as t,a1 as n,o as d}from"./chunks/framework.BDxlaA_J.js";const m=JSON.parse('{"title":"hdparm","description":"","frontmatter":{},"headers":[],"relativePath":"vi/categories/ethical-hacking-labs/11-bonus/Using-hdparm-and-dd-command.md","filePath":"vi/categories/ethical-hacking-labs/11-bonus/Using-hdparm-and-dd-command.md"}'),i={name:"vi/categories/ethical-hacking-labs/11-bonus/Using-hdparm-and-dd-command.md"};function o(r,a,h,c,u,s){return d(),t("div",null,a[0]||(a[0]=[n(`<h1 id="hdparm" tabindex="-1">hdparm <a class="header-anchor" href="#hdparm" aria-label="Permalink to &quot;hdparm&quot;">​</a></h1><p>hdparm cung cấp giao diện dòng lệnh cho nhiều giao diện kernel được hỗ trợ bởi hệ thống con &quot;libata&quot; SATA/PATA/SAS của Linux và hệ thống con trình điều khiển IDE cũ hơn. Nhiều ổ đĩa USB mới hơn (2008 trở đi) hiện cũng hỗ trợ &quot;SAT&quot; (SCSI-ATA Command Translation) và do đó cũng có thể hoạt động với hdparm. Ví dụ: các model WD &quot;Passport&quot; gần đây và các vỏ bọc NexStar-3 gần đây. Một số tùy chọn có thể chỉ hoạt động chính xác với các kernel mới nhất.</p><h3 id="muc-tieu" tabindex="-1">Mục tiêu: <a class="header-anchor" href="#muc-tieu" aria-label="Permalink to &quot;Mục tiêu:&quot;">​</a></h3><ul><li>Học những kiến thức cơ bản về <strong>hdparm</strong>, <strong>dd</strong> và <strong>hexedit</strong></li></ul><h3 id="yeu-cau" tabindex="-1">Yêu cầu: <a class="header-anchor" href="#yeu-cau" aria-label="Permalink to &quot;Yêu cầu:&quot;">​</a></h3><ul><li>Bất kỳ bản phân phối Linux nào</li></ul><hr><h3 id="cai-đat-hdparm" tabindex="-1">Cài đặt <code>hdparm</code> <a class="header-anchor" href="#cai-đat-hdparm" aria-label="Permalink to &quot;Cài đặt \`hdparm\`&quot;">​</a></h3><ul><li>Fedora:</li></ul><div><pre><code>dnf -y install hdparm
</code></pre></div><ul><li>Ubuntu:</li></ul><div><pre><code>sudo apt-get install -y hdparm
</code></pre></div><h3 id="chay-hdparm" tabindex="-1">Chạy hdparm <a class="header-anchor" href="#chay-hdparm" aria-label="Permalink to &quot;Chạy hdparm&quot;">​</a></h3><div><pre><code>hdparm -giI /dev/sda
</code></pre></div><ul><li><p><code>-g</code> : Hiển thị hình học ổ đĩa (cylinders, heads, sectors), kích thước (tính bằng sector) của thiết bị, và offset bắt đầu (tính bằng sector) của thiết bị từ đầu ổ đĩa.</p></li><li><p><code>-i và -I</code> : Hiển thị thông tin nhận dạng mà các trình điều khiển kernel (IDE, libata) đã lưu từ thời điểm khởi động/cấu hình.</p></li><li><p>Thông tin thêm: <a href="https://man7.org/linux/man-pages/man8/hdparm.8.html" target="_blank" rel="noreferrer">hdparm linux manual</a></p></li></ul><h4 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h4><div><pre><code>/dev/sda:
 geometry      = 981/255/63, sectors = 15761088, start = 0

 Model=SSDPAMM0008G1, FwRev=Ver2.I0H, SerialNo=CVPA83108257W
 Config={ HardSect NotMFM Fixed DTR&gt;10Mbs }
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
    Standby timer values: spec&#39;d by Standard, no device specific minimum
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
</code></pre></div><h3 id="kich-thuoc" tabindex="-1">Kích thước <a class="header-anchor" href="#kich-thuoc" aria-label="Permalink to &quot;Kích thước&quot;">​</a></h3><div><pre><code>echo With MBytes=1024 the hard drive size is $[15761088*512/1024/1024/1024]GB
</code></pre></div><h4 id="output-1" tabindex="-1">Output <a class="header-anchor" href="#output-1" aria-label="Permalink to &quot;Output&quot;">​</a></h4><div><pre><code>With MBytes=1024 the hard drive size is 7GB
</code></pre></div><div><pre><code>echo With MBytes=1000 the hard drive size is $[15761088*512/1000/1000/1000]GB
</code></pre></div><h4 id="output-2" tabindex="-1">Output <a class="header-anchor" href="#output-2" aria-label="Permalink to &quot;Output&quot;">​</a></h4><div><pre><code>With MBytes=1000 the hard drive size is 8GB
</code></pre></div><h2 id="xoa-sach-o-đia" tabindex="-1">Xóa sạch ổ đĩa <a class="header-anchor" href="#xoa-sach-o-đia" aria-label="Permalink to &quot;Xóa sạch ổ đĩa&quot;">​</a></h2><div><pre><code>dd if=/dev/zero of=/dev/sdb bs=4K conv=noerror,sync
</code></pre></div><h4 id="output-3" tabindex="-1">Output <a class="header-anchor" href="#output-3" aria-label="Permalink to &quot;Output&quot;">​</a></h4><div><pre><code>262145+0 registos in
262144+0 registos out
1073741824 bytes (1,1 GB) copied, 2,17486 s, 494 MB/s
</code></pre></div><h1 id="su-dung-lenh-dd" tabindex="-1">Sử dụng lệnh <code>dd</code> <a class="header-anchor" href="#su-dung-lenh-dd" aria-label="Permalink to &quot;Sử dụng lệnh \`dd\`&quot;">​</a></h1><ul><li>Sử dụng <code>dd</code>, có thể đọc và/hoặc ghi trực tiếp từ/đến các tệp khác nhau miễn là hàm đã được triển khai trong các trình điều khiển tương ứng.</li><li>Nó rất hữu ích cho các mục đích như sao lưu boot sector, lấy dữ liệu ngẫu nhiên, v.v.</li><li>Chuyển đổi dữ liệu, ví dụ: chuyển đổi mã hóa ASCII sang EBCDIC.</li><li><a href="https://linuxhint.com/linux_dd_command/" target="_blank" rel="noreferrer">Thông tin thêm</a></li></ul><h3 id="tao-thu-muc-moi" tabindex="-1">Tạo thư mục mới <a class="header-anchor" href="#tao-thu-muc-moi" aria-label="Permalink to &quot;Tạo thư mục mới&quot;">​</a></h3><div><pre><code>mkdir /CaseStudies &amp;&amp; cd /CaseStudies
</code></pre></div><h2 id="nguon-đau-vao" tabindex="-1">Nguồn đầu vào <a class="header-anchor" href="#nguon-đau-vao" aria-label="Permalink to &quot;Nguồn đầu vào&quot;">​</a></h2><h3 id="su-dung-dd-đe-tao-tep-trong-mau-1mb" tabindex="-1">Sử dụng dd để tạo tệp trống mẫu 1MB <a class="header-anchor" href="#su-dung-dd-đe-tao-tep-trong-mau-1mb" aria-label="Permalink to &quot;Sử dụng dd để tạo tệp trống mẫu 1MB&quot;">​</a></h3><div><pre><code>dd if=/dev/zero of=/CaseStudies/sample.dd bs=1M count=1
</code></pre></div><h3 id="cai-đat-hexedit" tabindex="-1">Cài đặt <code>hexedit</code> <a class="header-anchor" href="#cai-đat-hexedit" aria-label="Permalink to &quot;Cài đặt \`hexedit\`&quot;">​</a></h3><ul><li>hexedit hiển thị tệp ở cả dạng ASCII và thập lục phân. Tệp có thể là thiết bị vì tệp được đọc từng phần một. Bạn có thể sửa đổi tệp và tìm kiếm trong đó.</li><li>Trình soạn thập lục phân được sử dụng để kiểm tra các tệp thực thi đã biên dịch hoặc tệp nhị phân. Bạn có thể dễ dàng sử dụng trình soạn thập lục phân để thay đổi cách phần mềm hoạt động với đủ kinh nghiệm.</li></ul><div><pre><code>dnf -y install hexedit
</code></pre></div><h3 id="chinh-sua-tep-mau" tabindex="-1">Chỉnh sửa tệp mẫu <a class="header-anchor" href="#chinh-sua-tep-mau" aria-label="Permalink to &quot;Chỉnh sửa tệp mẫu&quot;">​</a></h3><div><pre><code>hexedit sample.dd

ENTER

0x20000

68 65 72 65  20 49 20 61  6D 0A

Ctrl-X
</code></pre></div><h3 id="nhay-đen-van-ban-đa-nhap-truoc-đo" tabindex="-1">Nhảy đến văn bản đã nhập trước đó <a class="header-anchor" href="#nhay-đen-van-ban-đa-nhap-truoc-đo" aria-label="Permalink to &quot;Nhảy đến văn bản đã nhập trước đó&quot;">​</a></h3><div><pre><code>dd bs=512 skip=256 count=1 if=/CaseStudies/sample.dd | xxd
</code></pre></div><h3 id="output-4" tabindex="-1">Output <a class="header-anchor" href="#output-4" aria-label="Permalink to &quot;Output&quot;">​</a></h3><div><pre><code>1+0 records in
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
</code></pre></div><h2 id="đich-đau-ra" tabindex="-1">Đích đầu ra <a class="header-anchor" href="#đich-đau-ra" aria-label="Permalink to &quot;Đích đầu ra&quot;">​</a></h2><h3 id="tao-ban-sao" tabindex="-1">Tạo bản sao <a class="header-anchor" href="#tao-ban-sao" aria-label="Permalink to &quot;Tạo bản sao&quot;">​</a></h3><div><pre><code>dd if=/CaseStudies/sample.dd bs=4k of=/CaseStudies/copy.dd
</code></pre></div><h3 id="tao-hash-md5-cua-tep" tabindex="-1">Tạo hash MD5 của tệp <a class="header-anchor" href="#tao-hash-md5-cua-tep" aria-label="Permalink to &quot;Tạo hash MD5 của tệp&quot;">​</a></h3><div><pre><code>dd if=/CaseStudies/sample.dd bs=4k | md5sum
</code></pre></div><h3 id="output-5" tabindex="-1">Output <a class="header-anchor" href="#output-5" aria-label="Permalink to &quot;Output&quot;">​</a></h3><div><pre><code>56+0 records in
256+0 records out
1048576 bytes (1.0 MB) copied, 0.0187227 s, 56.0 MB/s
fc3ef9193baf3a1d3fc67da5aa4510ae  -
</code></pre></div><h3 id="sao-chep-tu-xa" tabindex="-1">Sao chép từ xa <a class="header-anchor" href="#sao-chep-tu-xa" aria-label="Permalink to &quot;Sao chép từ xa&quot;">​</a></h3><h3 id="khoi-đong-listener-su-dung-netcat-tren-may-kiem-tra" tabindex="-1">Khởi động listener sử dụng <code>netcat</code> trên máy kiểm tra <a class="header-anchor" href="#khoi-đong-listener-su-dung-netcat-tren-may-kiem-tra" aria-label="Permalink to &quot;Khởi động listener sử dụng \`netcat\` trên máy kiểm tra&quot;">​</a></h3><div><pre><code>nc -lp 4444 &gt; sample.dd
</code></pre></div><h3 id="chuyen-output-qua-netcat" tabindex="-1">Chuyển output qua <code>netcat</code> <a class="header-anchor" href="#chuyen-output-qua-netcat" aria-label="Permalink to &quot;Chuyển output qua \`netcat\`&quot;">​</a></h3><div><pre><code>dd if=/CaseStudies/sample.dd bs=4k | nc -w3 127.0.0.1 4444
</code></pre></div><h3 id="so-sanh-hash" tabindex="-1">So sánh hash <a class="header-anchor" href="#so-sanh-hash" aria-label="Permalink to &quot;So sánh hash&quot;">​</a></h3><div><pre><code>md5sum sample.dd
</code></pre></div><h3 id="output-6" tabindex="-1">Output <a class="header-anchor" href="#output-6" aria-label="Permalink to &quot;Output&quot;">​</a></h3><div><pre><code>fc3ef9193baf3a1d3fc67da5aa4510ae  sample.dd
</code></pre></div><h3 id="tai-lieu-tham-khao" tabindex="-1">Tài liệu tham khảo <a class="header-anchor" href="#tai-lieu-tham-khao" aria-label="Permalink to &quot;Tài liệu tham khảo&quot;">​</a></h3><ul><li><a href="https://www.man7.org/linux/man-pages/man8/hdparm.8.html" target="_blank" rel="noreferrer">https://www.man7.org/linux/man-pages/man8/hdparm.8.html</a></li><li><a href="https://www.man7.org/linux/man-pages/man1/dd.1.html#DESCRIPTION" target="_blank" rel="noreferrer">https://www.man7.org/linux/man-pages/man1/dd.1.html#DESCRIPTION</a></li><li><a href="https://linuxhint.com/linux_dd_command/" target="_blank" rel="noreferrer">https://linuxhint.com/linux_dd_command/</a></li><li><a href="https://linuxhint.com/hex_editor_linux/" target="_blank" rel="noreferrer">https://linuxhint.com/hex_editor_linux/</a></li></ul>`,62)]))}const p=e(i,[["render",o]]);export{m as __pageData,p as default};
