import{_ as a,c as s,a1 as e,o as i}from"./chunks/framework.BDxlaA_J.js";const m=JSON.parse('{"title":"Enumerating Windows and Samba using Enum4linux","description":"","frontmatter":{},"headers":[],"relativePath":"categories/ethical-hacking-labs/3-enumeration/3-Enum4linux-Win-and-Samba-Enumeration.md","filePath":"categories/ethical-hacking-labs/3-enumeration/3-Enum4linux-Win-and-Samba-Enumeration.md"}'),p={name:"categories/ethical-hacking-labs/3-enumeration/3-Enum4linux-Win-and-Samba-Enumeration.md"};function o(t,n,l,r,c,u){return i(),s("div",null,n[0]||(n[0]=[e(`<h1 id="enumerating-windows-and-samba-using-enum4linux" tabindex="-1">Enumerating Windows and Samba using Enum4linux <a class="header-anchor" href="#enumerating-windows-and-samba-using-enum4linux" aria-label="Permalink to &quot;Enumerating Windows and Samba using Enum4linux&quot;">​</a></h1><p>A Linux alterantive to enum.exe for enumerating data from Windows and Samba hosts.</p><p>Enum4linux is a tool for enumerating information from Windows and Samba systems. As a security person you have to secure process where the attacker can establish an active connection with the victim and try to discover as many attack vectors as possible, which can be used to exploit the systems further.</p><h3 id="objectives" tabindex="-1">Objectives <a class="header-anchor" href="#objectives" aria-label="Permalink to &quot;Objectives&quot;">​</a></h3><p>Enumeration:</p><ul><li>Connected Devices</li><li>Hostname and information</li><li>Domain</li><li>Hardware and storage information</li><li>Software Components</li><li>Total Memory</li></ul><h3 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h3><ul><li>Kali Linux (Attacker)</li><li>Windows Server 2012 R2 (Target)</li></ul><h2 id="get-user-info" tabindex="-1">Get user info <a class="header-anchor" href="#get-user-info" aria-label="Permalink to &quot;Get user info&quot;">​</a></h2><p>Go to the Kali Linux and Open a new Terminal window. Type <code>enum4linux -h</code> to view the options.</p><p>Next, type some existing credentials:</p><p><code>enum4linux -u CEH -p Pa55w.rd -U 10.0.2.23</code></p><p>-u: Username, -p Password, -U users information</p><p>The enum4linux starts enumerating the workgroups/domains first and displays the results all the results.</p><p>It lists out the Users info with their respective RIDs as show below:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>index: 0xf4d RID: 0x1f4 acb: 0x00000010 Account: Administrator  Name: (null)    Desc: Built-in account for administering the computer/domain</span></span>
<span class="line"><span>index: 0x1025 RID: 0x453 acb: 0x00000014 Account: bobby Name: Bobby     Desc: (null)</span></span>
<span class="line"><span>index: 0x1024 RID: 0x452 acb: 0x00000010 Account: CEH   Name: (null)    Desc: (null)</span></span>
<span class="line"><span>index: 0xf4e RID: 0x1f5 acb: 0x00000214 Account: Guest  Name: (null)    Desc: Built-in account for guest access to the computer/domain</span></span>
<span class="line"><span>index: 0xf85 RID: 0x1f6 acb: 0x00020011 Account: krbtgt Name: (null)    Desc: Key Distribution Center Service Account</span></span>
<span class="line"><span>index: 0x102b RID: 0x459 acb: 0x00000010 Account: shmurdance    Name: (null)    Desc: (null)</span></span></code></pre></div><h2 id="get-os-info" tabindex="-1">Get OS info <a class="header-anchor" href="#get-os-info" aria-label="Permalink to &quot;Get OS info&quot;">​</a></h2><p>This option enumerates the target system and lists out its OS details as show below</p><p><code>enum4linux -u CEH -p Pa55w.rd -o 10.0.2.23</code></p><p>-o: Get OS information</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> =================================== </span></span>
<span class="line"><span>|    OS information on 10.0.2.23    |</span></span>
<span class="line"><span> =================================== </span></span>
<span class="line"><span>Use of uninitialized value $os_info in concatenation (.) or string at ./enum4linux.pl line 464.</span></span>
<span class="line"><span>[+] Got OS info for 10.0.2.23 from smbclient: </span></span>
<span class="line"><span>[+] Got OS info for 10.0.2.23 from srvinfo:</span></span>
<span class="line"><span>        10.0.2.23      Wk Sv Sql PDC Tim NT </span></span>
<span class="line"><span>        platform_id     :       500</span></span>
<span class="line"><span>        os version      :       6.3</span></span>
<span class="line"><span>        server type     :       0x80102f</span></span></code></pre></div><h2 id="get-password-policy-info" tabindex="-1">Get Password Policy info <a class="header-anchor" href="#get-password-policy-info" aria-label="Permalink to &quot;Get Password Policy info&quot;">​</a></h2><p>This options enumerates the target system and displays its entire password policy information as show below:</p><p><code>enum4linux -u CEH -p Pa55w.rd -P 10.0.2.23</code></p><p>-P: Get password policy information</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> ================================================= </span></span>
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
<span class="line"><span>Minimum Password Length: 7</span></span></code></pre></div><h2 id="get-group-info" tabindex="-1">Get Group Info <a class="header-anchor" href="#get-group-info" aria-label="Permalink to &quot;Get Group Info&quot;">​</a></h2><p>This options enumerates the target system and displays the group policy information, showing domain groups, memberships, local groups and so on.</p><p><code>enum4linux -u CEH -p Pa55w.rd -G 10.0.2.23</code></p><h2 id="get-share-info" tabindex="-1">Get Share info <a class="header-anchor" href="#get-share-info" aria-label="Permalink to &quot;Get Share info&quot;">​</a></h2><p>This option enumerate the share policy information of the target machine</p><p><code>enum4linux -u CEH -p Pa55w.rd -S 10.0.2.23</code></p><p>-S: Get sharelist</p>`,33)]))}const h=a(p,[["render",o]]);export{m as __pageData,h as default};
