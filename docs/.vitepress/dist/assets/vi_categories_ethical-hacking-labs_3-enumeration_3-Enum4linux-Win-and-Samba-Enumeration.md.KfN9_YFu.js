import{_ as a,c as s,a1 as i,o as e}from"./chunks/framework.BDxlaA_J.js";const d=JSON.parse('{"title":"Enumerate Windows và Samba sử dụng Enum4linux","description":"","frontmatter":{},"headers":[],"relativePath":"vi/categories/ethical-hacking-labs/3-enumeration/3-Enum4linux-Win-and-Samba-Enumeration.md","filePath":"vi/categories/ethical-hacking-labs/3-enumeration/3-Enum4linux-Win-and-Samba-Enumeration.md"}'),t={name:"vi/categories/ethical-hacking-labs/3-enumeration/3-Enum4linux-Win-and-Samba-Enumeration.md"};function p(l,n,c,h,o,u){return e(),s("div",null,n[0]||(n[0]=[i(`<h1 id="enumerate-windows-va-samba-su-dung-enum4linux" tabindex="-1">Enumerate Windows và Samba sử dụng Enum4linux <a class="header-anchor" href="#enumerate-windows-va-samba-su-dung-enum4linux" aria-label="Permalink to &quot;Enumerate Windows và Samba sử dụng Enum4linux&quot;">​</a></h1><p>Một công cụ thay thế trên Linux cho enum.exe để enumerate dữ liệu từ các host Windows và Samba.</p><p>Enum4linux là một công cụ để enumerate thông tin từ các hệ thống Windows và Samba. Với tư cách là người làm bảo mật, bạn phải bảo vệ quy trình mà qua đó kẻ tấn công có thể thiết lập kết nối chủ động với nạn nhân và cố gắng phát hiện càng nhiều vector tấn công càng tốt, có thể được sử dụng để khai thác hệ thống sâu hơn.</p><h3 id="muc-tieu" tabindex="-1">Mục tiêu <a class="header-anchor" href="#muc-tieu" aria-label="Permalink to &quot;Mục tiêu&quot;">​</a></h3><p>Enumeration:</p><ul><li>Các thiết bị đã kết nối</li><li>Tên host và thông tin</li><li>Miền (Domain)</li><li>Thông tin phần cứng và lưu trữ</li><li>Các thành phần phần mềm</li><li>Tổng bộ nhớ</li></ul><h3 id="yeu-cau" tabindex="-1">Yêu cầu <a class="header-anchor" href="#yeu-cau" aria-label="Permalink to &quot;Yêu cầu&quot;">​</a></h3><ul><li>Kali Linux (Kẻ tấn công)</li><li>Windows Server 2012 R2 (Mục tiêu)</li></ul><h2 id="lay-thong-tin-nguoi-dung" tabindex="-1">Lấy thông tin người dùng <a class="header-anchor" href="#lay-thong-tin-nguoi-dung" aria-label="Permalink to &quot;Lấy thông tin người dùng&quot;">​</a></h2><p>Truy cập Kali Linux và mở một cửa sổ Terminal mới. Gõ <code>enum4linux -h</code> để xem các tùy chọn.</p><p>Tiếp theo, gõ một số thông tin xác thực đã biết:</p><p><code>enum4linux -u CEH -p Pa55w.rd -U 10.0.2.23</code></p><p>-u: Tên người dùng, -p Mật khẩu, -U thông tin người dùng</p><p>Enum4linux bắt đầu enumerate các workgroup/domain trước và hiển thị tất cả kết quả.</p><p>Nó liệt kê thông tin Người dùng cùng với RID tương ứng như hiển thị bên dưới:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>index: 0xf4d RID: 0x1f4 acb: 0x00000010 Account: Administrator  Name: (null)    Desc: Built-in account for administering the computer/domain</span></span>
<span class="line"><span>index: 0x1025 RID: 0x453 acb: 0x00000014 Account: bobby Name: Bobby     Desc: (null)</span></span>
<span class="line"><span>index: 0x1024 RID: 0x452 acb: 0x00000010 Account: CEH   Name: (null)    Desc: (null)</span></span>
<span class="line"><span>index: 0xf4e RID: 0x1f5 acb: 0x00000214 Account: Guest  Name: (null)    Desc: Built-in account for guest access to the computer/domain</span></span>
<span class="line"><span>index: 0xf85 RID: 0x1f6 acb: 0x00020011 Account: krbtgt Name: (null)    Desc: Key Distribution Center Service Account</span></span>
<span class="line"><span>index: 0x102b RID: 0x459 acb: 0x00000010 Account: shmurdance    Name: (null)    Desc: (null)</span></span></code></pre></div><h2 id="lay-thong-tin-he-đieu-hanh" tabindex="-1">Lấy thông tin hệ điều hành <a class="header-anchor" href="#lay-thong-tin-he-đieu-hanh" aria-label="Permalink to &quot;Lấy thông tin hệ điều hành&quot;">​</a></h2><p>Tùy chọn này enumerate hệ thống mục tiêu và liệt kê thông tin chi tiết về hệ điều hành như hiển thị bên dưới</p><p><code>enum4linux -u CEH -p Pa55w.rd -o 10.0.2.23</code></p><p>-o: Lấy thông tin hệ điều hành</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> =================================== </span></span>
<span class="line"><span>|    OS information on 10.0.2.23    |</span></span>
<span class="line"><span> =================================== </span></span>
<span class="line"><span>Use of uninitialized value $os_info in concatenation (.) or string at ./enum4linux.pl line 464.</span></span>
<span class="line"><span>[+] Got OS info for 10.0.2.23 from smbclient: </span></span>
<span class="line"><span>[+] Got OS info for 10.0.2.23 from srvinfo:</span></span>
<span class="line"><span>        10.0.2.23      Wk Sv Sql PDC Tim NT </span></span>
<span class="line"><span>        platform_id     :       500</span></span>
<span class="line"><span>        os version      :       6.3</span></span>
<span class="line"><span>        server type     :       0x80102f</span></span></code></pre></div><h2 id="lay-thong-tin-chinh-sach-mat-khau" tabindex="-1">Lấy thông tin Chính sách Mật khẩu <a class="header-anchor" href="#lay-thong-tin-chinh-sach-mat-khau" aria-label="Permalink to &quot;Lấy thông tin Chính sách Mật khẩu&quot;">​</a></h2><p>Tùy chọn này enumerate hệ thống mục tiêu và hiển thị toàn bộ thông tin chính sách mật khẩu như hiển thị bên dưới:</p><p><code>enum4linux -u CEH -p Pa55w.rd -P 10.0.2.23</code></p><p>-P: Lấy thông tin chính sách mật khẩu</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> ================================================= </span></span>
<span class="line"><span>|    Password Policy Information for 10.0.2.23    |</span></span>
<span class="line"><span> ================================================= </span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Attaching to 10.0.2.23 using shmurdance:Pa55w.rd</span></span>
<span class="line"><span>[+] Trying protocol 445/SMB...</span></span>
<span class="line"><span>[+] Found domain(s):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [+] LAB</span></span>
<span class="line"><span>        [+] Builtin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Password Info for Domain: LAB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [+] Minimum password length: 7</span></span>
<span class="line"><span>        [+] Password history length: 24</span></span>
<span class="line"><span>        [+] Maximum password age: 41 days 23 hours 53 minutes </span></span>
<span class="line"><span>        [+] Password Complexity Flags: 000001</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                [+] Domain Refuse Password Change: 0</span></span>
<span class="line"><span>                [+] Domain Password Store Cleartext: 0</span></span>
<span class="line"><span>                [+] Domain Password Lockout Admins: 0</span></span>
<span class="line"><span>                [+] Domain Password No Clear Change: 0</span></span>
<span class="line"><span>                [+] Domain Password No Anon Change: 0</span></span>
<span class="line"><span>                [+] Domain Password Complex: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [+] Minimum password age: 1 day 4 minutes </span></span>
<span class="line"><span>        [+] Reset Account Lockout Counter: 30 minutes </span></span>
<span class="line"><span>        [+] Locked Account Duration: 30 minutes </span></span>
<span class="line"><span>        [+] Account Lockout Threshold: None</span></span>
<span class="line"><span>        [+] Forced Log off Time: Not Set</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Retieved partial password policy with rpcclient:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Password Complexity: Enabled</span></span>
<span class="line"><span>Minimum Password Length: 7</span></span></code></pre></div><h2 id="lay-thong-tin-nhom" tabindex="-1">Lấy thông tin Nhóm <a class="header-anchor" href="#lay-thong-tin-nhom" aria-label="Permalink to &quot;Lấy thông tin Nhóm&quot;">​</a></h2><p>Tùy chọn này enumerate hệ thống mục tiêu và hiển thị thông tin chính sách nhóm, hiển thị các nhóm miền, thành viên, nhóm cục bộ và nhiều hơn nữa.</p><p><code>enum4linux -u CEH -p Pa55w.rd -G 10.0.2.23</code></p><h2 id="lay-thong-tin-share" tabindex="-1">Lấy thông tin Share <a class="header-anchor" href="#lay-thong-tin-share" aria-label="Permalink to &quot;Lấy thông tin Share&quot;">​</a></h2><p>Tùy chọn này enumerate thông tin chính sách share của máy mục tiêu</p><p><code>enum4linux -u CEH -p Pa55w.rd -S 10.0.2.23</code></p><p>-S: Lấy danh sách share</p>`,33)]))}const m=a(t,[["render",p]]);export{d as __pageData,m as default};
