import{_ as a,c as t,a1 as i,o as r}from"./chunks/framework.BDxlaA_J.js";const p=JSON.parse('{"title":"hdparm","description":"","frontmatter":{},"headers":[],"relativePath":"categories/ethical-hacking-labs/11-bonus/Using-hdparm-and-dd-command.md","filePath":"categories/ethical-hacking-labs/11-bonus/Using-hdparm-and-dd-command.md"}'),n={name:"categories/ethical-hacking-labs/11-bonus/Using-hdparm-and-dd-command.md"};function d(o,e,s,l,h,c){return r(),t("div",null,e[0]||(e[0]=[i(`<h1 id="hdparm" tabindex="-1">hdparm <a class="header-anchor" href="#hdparm" aria-label="Permalink to &quot;hdparm&quot;">​</a></h1><p>hdparm provides a command line interface to various kernel interfaces supported by the Linux SATA/PATA/SAS &quot;libata&quot; subsystem and the older IDE driver subsystem. Many newer (2008 and later) USB drive enclosures now also support &quot;SAT&quot; (SCSI-ATA Command Translation) and therefore may also work with hdparm. E.g. recent WD &quot;Passport&quot; models and recent NexStar-3 enclosures. Some options may work correctly only with the latest kernels.</p><h3 id="objectives" tabindex="-1">Objectives: <a class="header-anchor" href="#objectives" aria-label="Permalink to &quot;Objectives:&quot;">​</a></h3><ul><li>Learn the basics of <strong>hdparm</strong>, <strong>dd</strong> and <strong>hexedit</strong></li></ul><h3 id="requisites" tabindex="-1">Requisites: <a class="header-anchor" href="#requisites" aria-label="Permalink to &quot;Requisites:&quot;">​</a></h3><ul><li>Any Linux distro</li></ul><hr><h3 id="install-hdparm" tabindex="-1">Install <code>hdparm</code> <a class="header-anchor" href="#install-hdparm" aria-label="Permalink to &quot;Install \`hdparm\`&quot;">​</a></h3><ul><li>Fedora:</li></ul><div><pre><code>dnf -y install hdparm
</code></pre></div><ul><li>Ubuntu:</li></ul><div><pre><code>sudo apt-get install -y hdparm
</code></pre></div><h3 id="running-hdparm" tabindex="-1">Running hdparm <a class="header-anchor" href="#running-hdparm" aria-label="Permalink to &quot;Running hdparm&quot;">​</a></h3><div><pre><code>hdparm -giI /dev/sda
</code></pre></div><ul><li><p><code>-g</code> : Display the drive geometry (cylinders, heads, sectors), the size (in sectors) of the device, and the starting offset (in sectors) of the device from the beginning of the drive.</p></li><li><p><code>-i and -I</code> : Display the identification info which the kernel drivers (IDE, libata) have stored from boot/configuration time.</p></li><li><p>More information: <a href="https://man7.org/linux/man-pages/man8/hdparm.8.html" target="_blank" rel="noreferrer">hdparm linux manual</a></p></li></ul><h4 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h4><div><pre><code>/dev/sda:
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
</code></pre></div><h3 id="size" tabindex="-1">Size <a class="header-anchor" href="#size" aria-label="Permalink to &quot;Size&quot;">​</a></h3><div><pre><code>echo With MBytes=1024 the hard drive size is $[15761088*512/1024/1024/1024]GB
</code></pre></div><h4 id="output-1" tabindex="-1">Output <a class="header-anchor" href="#output-1" aria-label="Permalink to &quot;Output&quot;">​</a></h4><div><pre><code>With MBytes=1024 the hard drive size is 7GB
</code></pre></div><div><pre><code>echo With MBytes=1000 the hard drive size is $[15761088*512/1000/1000/1000]GB
</code></pre></div><h4 id="output-2" tabindex="-1">Output <a class="header-anchor" href="#output-2" aria-label="Permalink to &quot;Output&quot;">​</a></h4><div><pre><code>With MBytes=1000 the hard drive size is 8GB
</code></pre></div><h2 id="sanitize-the-drive" tabindex="-1">Sanitize the drive <a class="header-anchor" href="#sanitize-the-drive" aria-label="Permalink to &quot;Sanitize the drive&quot;">​</a></h2><div><pre><code>dd if=/dev/zero of=/dev/sdb bs=4K conv=noerror,sync
</code></pre></div><h4 id="output-3" tabindex="-1">Output <a class="header-anchor" href="#output-3" aria-label="Permalink to &quot;Output&quot;">​</a></h4><div><pre><code>262145+0 registos in
262144+0 registos out
1073741824 bytes (1,1 GB) copied, 2,17486 s, 494 MB/s
</code></pre></div><h1 id="using-dd-command" tabindex="-1">Using <code>dd</code> command <a class="header-anchor" href="#using-dd-command" aria-label="Permalink to &quot;Using \`dd\` command&quot;">​</a></h1><ul><li>Using <code>dd</code>, it’s possible to directly read and/or write from/to different files provided that the function is already implemented in the respected drivers.</li><li>It’s super useful for purposes like backing up the boot sector, obtaining random data etc.</li><li>Data conversion, for example, converting ASCII to EBCDIC encoding.</li><li><a href="https://linuxhint.com/linux_dd_command/" target="_blank" rel="noreferrer">More info</a></li></ul><h3 id="create-a-new-directory" tabindex="-1">Create a new directory <a class="header-anchor" href="#create-a-new-directory" aria-label="Permalink to &quot;Create a new directory&quot;">​</a></h3><div><pre><code>mkdir /CaseStudies &amp;&amp; cd /CaseStudies
</code></pre></div><h2 id="input-sources" tabindex="-1">Input Sources <a class="header-anchor" href="#input-sources" aria-label="Permalink to &quot;Input Sources&quot;">​</a></h2><h3 id="use-dd-to-create-a-sample-empty-file-with-1mb" tabindex="-1">Use dd to create a sample empty file with 1MB <a class="header-anchor" href="#use-dd-to-create-a-sample-empty-file-with-1mb" aria-label="Permalink to &quot;Use dd to create a sample empty file with 1MB&quot;">​</a></h3><div><pre><code>dd if=/dev/zero of=/CaseStudies/sample.dd bs=1M count=1
</code></pre></div><h3 id="install-hexedit" tabindex="-1">Install <code>hexedit</code> <a class="header-anchor" href="#install-hexedit" aria-label="Permalink to &quot;Install \`hexedit\`&quot;">​</a></h3><ul><li>hexedit shows a file both in ASCII and in hexadecimal. The file can be a device as the file is read a piece at a time. You can modify the file and search through it.</li><li>Hex editors are used to inspect the compiled executables or binary files. You can easily use a hex editor to change how a software works with enough experience.</li></ul><div><pre><code>dnf -y install hexedit
</code></pre></div><h3 id="edit-the-sample-file" tabindex="-1">Edit the sample file <a class="header-anchor" href="#edit-the-sample-file" aria-label="Permalink to &quot;Edit the sample file&quot;">​</a></h3><div><pre><code>hexedit sample.dd

ENTER

0x20000

68 65 72 65  20 49 20 61  6D 0A

Ctrl-X
</code></pre></div><h3 id="skip-to-the-text-entered-previously" tabindex="-1">Skip to the text entered previously <a class="header-anchor" href="#skip-to-the-text-entered-previously" aria-label="Permalink to &quot;Skip to the text entered previously&quot;">​</a></h3><div><pre><code>dd bs=512 skip=256 count=1 if=/CaseStudies/sample.dd | xxd
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
</code></pre></div><h2 id="output-destinations" tabindex="-1">Output Destinations <a class="header-anchor" href="#output-destinations" aria-label="Permalink to &quot;Output Destinations&quot;">​</a></h2><h3 id="make-a-copy" tabindex="-1">Make a copy <a class="header-anchor" href="#make-a-copy" aria-label="Permalink to &quot;Make a copy&quot;">​</a></h3><div><pre><code>dd if=/CaseStudies/sample.dd bs=4k of=/CaseStudies/copy.dd
</code></pre></div><h3 id="create-a-md5-hash-of-the-file" tabindex="-1">Create a MD5 hash of the file <a class="header-anchor" href="#create-a-md5-hash-of-the-file" aria-label="Permalink to &quot;Create a MD5 hash of the file&quot;">​</a></h3><div><pre><code>dd if=/CaseStudies/sample.dd bs=4k | md5sum
</code></pre></div><h3 id="output-5" tabindex="-1">Output <a class="header-anchor" href="#output-5" aria-label="Permalink to &quot;Output&quot;">​</a></h3><div><pre><code>56+0 records in
256+0 records out
1048576 bytes (1.0 MB) copied, 0.0187227 s, 56.0 MB/s
fc3ef9193baf3a1d3fc67da5aa4510ae  -
</code></pre></div><h3 id="remote-copy" tabindex="-1">Remote Copy <a class="header-anchor" href="#remote-copy" aria-label="Permalink to &quot;Remote Copy&quot;">​</a></h3><h3 id="start-a-listener-using-netcat-on-the-examiner-machine" tabindex="-1">Start a listener using <code>netcat</code> on the examiner machine <a class="header-anchor" href="#start-a-listener-using-netcat-on-the-examiner-machine" aria-label="Permalink to &quot;Start a listener using \`netcat\` on the examiner machine&quot;">​</a></h3><div><pre><code>nc -lp 4444 &gt; sample.dd
</code></pre></div><h3 id="pipe-the-output-off-to-netcat" tabindex="-1">Pipe the output off to <code>netcat</code> <a class="header-anchor" href="#pipe-the-output-off-to-netcat" aria-label="Permalink to &quot;Pipe the output off to \`netcat\`&quot;">​</a></h3><div><pre><code>dd if=/CaseStudies/sample.dd bs=4k | nc -w3 127.0.0.1 4444
</code></pre></div><h3 id="compare-the-hashes" tabindex="-1">Compare the hashes <a class="header-anchor" href="#compare-the-hashes" aria-label="Permalink to &quot;Compare the hashes&quot;">​</a></h3><div><pre><code>md5sum sample.dd
</code></pre></div><h3 id="output-6" tabindex="-1">Output <a class="header-anchor" href="#output-6" aria-label="Permalink to &quot;Output&quot;">​</a></h3><div><pre><code>fc3ef9193baf3a1d3fc67da5aa4510ae  sample.dd
</code></pre></div><h3 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h3><ul><li><a href="https://www.man7.org/linux/man-pages/man8/hdparm.8.html" target="_blank" rel="noreferrer">https://www.man7.org/linux/man-pages/man8/hdparm.8.html</a></li><li><a href="https://www.man7.org/linux/man-pages/man1/dd.1.html#DESCRIPTION" target="_blank" rel="noreferrer">https://www.man7.org/linux/man-pages/man1/dd.1.html#DESCRIPTION</a></li><li><a href="https://linuxhint.com/linux_dd_command/" target="_blank" rel="noreferrer">https://linuxhint.com/linux_dd_command/</a></li><li><a href="https://linuxhint.com/hex_editor_linux/" target="_blank" rel="noreferrer">https://linuxhint.com/hex_editor_linux/</a></li></ul>`,62)]))}const m=a(n,[["render",d]]);export{p as __pageData,m as default};
