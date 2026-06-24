import { defineConfig } from 'vitepress'
import sidebar from './sidebar.js'

export default defineConfig({
  title: "Ducky Note",
  description: "Simple note have multiple content",

  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Categories', link: '/categories/overview' },
        ],
        sidebar,
        outline: [3, 3],
        search: {
          provider: 'local',
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next',
        },
      },
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi',
      themeConfig: {
        nav: [
          { text: 'Trang chủ', link: '/vi/' },
          { text: 'Danh mục', link: '/vi/categories/overview' },
        ],
        sidebar: getViSidebar(),
        outline: [3, 3],
        search: {
          provider: 'local',
        },
        docFooter: {
          prev: 'Trước',
          next: 'Tiếp',
        },
      },
    },
  },

  themeConfig: {
    footer: {
      message: 'Ducky Note',
      copyright: `Copyright © ${new Date().getFullYear()} by Ducky in Black`
    }
  }
})

function getViSidebar() {
  return [
    {
      text: 'Danh mục',
      items: [
        { text: 'Tổng quan', link: '/vi/categories/overview' },
        {
          text: 'Câu hỏi phỏng vấn',
          link: '/vi/categories/interview-questions/overview',
          collapsed: true,
          items: [
            { text: 'Initial Access', link: '/vi/categories/interview-questions/overview#initial-access' },
            { text: 'Windows Network', link: '/vi/categories/interview-questions/overview#windows-network' },
            { text: 'Active Directory', link: '/vi/categories/interview-questions/overview#active-directory' },
            { text: 'OS Language Programming', link: '/vi/categories/interview-questions/overview#os-language-programming' },
            { text: 'PowerShell', link: '/vi/categories/interview-questions/overview#powershell' },
            { text: 'Windows Internals', link: '/vi/categories/interview-questions/overview#windows-internals' },
            { text: 'DNS Server', link: '/vi/categories/interview-questions/overview#dns-server' },
            { text: 'Windows API', link: '/vi/categories/interview-questions/overview#windows-api' },
            { text: 'Macro Attack', link: '/vi/categories/interview-questions/overview#macro-attack' },
            { text: 'APT Groups', link: '/vi/categories/interview-questions/overview#apt-groups' },
            { text: 'EDR and Antivirus', link: '/vi/categories/interview-questions/overview#edr-and-antivirus' },
            { text: 'Malware Development', link: '/vi/categories/interview-questions/overview#malware-development' },
            { text: 'System & Kernel Programming', link: '/vi/categories/interview-questions/overview#system-kernel-programming' },
            { text: 'Privilege Escalation', link: '/vi/categories/interview-questions/overview#privilege-escalation' },
            { text: 'Post-exploitation', link: '/vi/categories/interview-questions/overview#post-exploitation-and-lateral-movement' },
            { text: 'Persistence', link: '/vi/categories/interview-questions/overview#persistence' },
            { text: 'Breaking Hash', link: '/vi/categories/interview-questions/overview#breaking-hash' },
            { text: 'C&C', link: '/vi/categories/interview-questions/overview#cc-command-and-control' },
            { text: 'DLL', link: '/vi/categories/interview-questions/overview#dll' },
            { text: 'DNS Rebinding', link: '/vi/categories/interview-questions/overview#dns-rebinding' },
            { text: 'LDAP', link: '/vi/categories/interview-questions/overview#ldap' },
            { text: 'Evasion', link: '/vi/categories/interview-questions/overview#evasion' },
            { text: 'Steganography', link: '/vi/categories/interview-questions/overview#steganography' },
            { text: 'Kerberoasting', link: '/vi/categories/interview-questions/overview#kerberoasting-and-kerberos' },
            { text: 'Mimikatz', link: '/vi/categories/interview-questions/overview#mimikatz' },
            { text: 'RDP', link: '/vi/categories/interview-questions/overview#rdp' },
            { text: 'NTLM', link: '/vi/categories/interview-questions/overview#ntlm' },
            { text: 'YARA', link: '/vi/categories/interview-questions/overview#yara-language' },
            { text: 'Windows API vs DLL', link: '/vi/categories/interview-questions/overview#windows-api-and-dll-difference' },
            { text: 'Antivirus vs EDR', link: '/vi/categories/interview-questions/overview#antivirus-and-edr-difference' },
            { text: 'NTDLL', link: '/vi/categories/interview-questions/overview#ntdll' },
            { text: 'Native API', link: '/vi/categories/interview-questions/overview#native-api' },
            { text: 'Windows Driver', link: '/vi/categories/interview-questions/overview#windows-driver' },
            { text: 'Tunneling', link: '/vi/categories/interview-questions/overview#tunneling' },
            { text: 'Shadow File', link: '/vi/categories/interview-questions/overview#shadow-file' },
            { text: 'SAM File', link: '/vi/categories/interview-questions/overview#sam-file' },
            { text: 'LSA', link: '/vi/categories/interview-questions/overview#lsa' },
            { text: 'LSASS', link: '/vi/categories/interview-questions/overview#lsass' },
            { text: 'WDIGEST', link: '/vi/categories/interview-questions/overview#wdigest' },
            { text: 'CredSSP', link: '/vi/categories/interview-questions/overview#credssp' },
            { text: 'MSV', link: '/vi/categories/interview-questions/overview#msv' },
            { text: 'LiveSSP', link: '/vi/categories/interview-questions/overview#livessp' },
            { text: 'TSpkg', link: '/vi/categories/interview-questions/overview#tspkg' },
            { text: 'CredMan', link: '/vi/categories/interview-questions/overview#credman' },
            { text: 'EDR NDR XDR', link: '/vi/categories/interview-questions/overview#edr-ndr-xdr' },
            { text: 'Polymorphic Malware', link: '/vi/categories/interview-questions/overview#polymorphic-malware' },
            { text: 'Pass-the-Hash', link: '/vi/categories/interview-questions/overview#pass-the-hash-pass-the-ticket-or-build-golden-tickets' },
            { text: 'Firewall', link: '/vi/categories/interview-questions/overview#firewall' },
            { text: 'WinDBG', link: '/vi/categories/interview-questions/overview#windbg-windows-debugger' },
            { text: 'PE', link: '/vi/categories/interview-questions/overview#pe-portable-executable' },
            { text: 'ICMP', link: '/vi/categories/interview-questions/overview#icmp' },
            { text: 'Microsoft Frameworks', link: '/vi/categories/interview-questions/overview#major-microsoft-frameworks-for-windows' },
            { text: 'Services & Processes', link: '/vi/categories/interview-questions/overview#services-and-processes' },
            { text: 'svchost', link: '/vi/categories/interview-questions/overview#svchost' },
            { text: 'CIM Class', link: '/vi/categories/interview-questions/overview#cim-class' },
            { text: 'Sysinternals', link: '/vi/categories/interview-questions/overview#sysinternals-suite-tools' },
            { text: 'Undocumented Functions', link: '/vi/categories/interview-questions/overview#undocumented-functions' },
            { text: 'Process Explorer vs Process Hacker', link: '/vi/categories/interview-questions/overview#process-explorer-vs-process-hacker' },
            { text: 'CLR', link: '/vi/categories/interview-questions/overview#clr-common-language-runtime' },
          ],
        },
        {
          text: 'Ethical Hacking Labs',
          collapsed: true,
          items: [
            {
              text: '0 - Kiến thức cơ bản',
              collapsed: true,
              items: [
                { text: 'Networking 101', link: '/vi/categories/ethical-hacking-labs/0-core-knowledge/0-Networking-101' },
                { text: 'Xây dựng Lab', link: '/vi/categories/ethical-hacking-labs/0-core-knowledge/1-Lab-Building' },
                { text: 'Giới thiệu Linux', link: '/vi/categories/ethical-hacking-labs/0-core-knowledge/2-Intro-to-Linux' },
                { text: 'Infosec 101', link: '/vi/categories/ethical-hacking-labs/0-core-knowledge/4-Infosec-101' },
              ],
            },
            {
              text: '1 - Footprinting & Reconnaissance',
              collapsed: true,
              items: [
                { text: 'Footprinting là gì', link: '/vi/categories/ethical-hacking-labs/1-footprinting-and-reconnaissance/0-What-is-Footprinting' },
                { text: 'Windows CommandLine', link: '/vi/categories/ethical-hacking-labs/1-footprinting-and-reconnaissance/1-Windows-CommandLine' },
                { text: 'Maltego', link: '/vi/categories/ethical-hacking-labs/1-footprinting-and-reconnaissance/2-Maltego-Basics' },
                { text: 'Recon-ng', link: '/vi/categories/ethical-hacking-labs/1-footprinting-and-reconnaissance/3-Recon-ng' },
                { text: 'OSRFramework', link: '/vi/categories/ethical-hacking-labs/1-footprinting-and-reconnaissance/4-OSRFramework' },
                { text: 'Metasploit', link: '/vi/categories/ethical-hacking-labs/1-footprinting-and-reconnaissance/5-Metasploit-Basics' },
                { text: 'theHarvester', link: '/vi/categories/ethical-hacking-labs/1-footprinting-and-reconnaissance/6-theHarvester' },
                { text: 'Công cụ khác', link: '/vi/categories/ethical-hacking-labs/1-footprinting-and-reconnaissance/7-Other-Tools' },
              ],
            },
            {
              text: '2 - Quét mạng',
              collapsed: true,
              items: [
                { text: 'Quét mạng mục tiêu', link: '/vi/categories/ethical-hacking-labs/2-scanning-networks/0-Scanning-a-Target-Network' },
                { text: 'hping3', link: '/vi/categories/ethical-hacking-labs/2-scanning-networks/1-hping3' },
                { text: 'Phát hiện TTL', link: '/vi/categories/ethical-hacking-labs/2-scanning-networks/2-TTL' },
                { text: 'MegaPing', link: '/vi/categories/ethical-hacking-labs/2-scanning-networks/3-MegaPing' },
                { text: 'Nmap', link: '/vi/categories/ethical-hacking-labs/2-scanning-networks/4-Nmap' },
                { text: 'Nmap Decoy IP', link: '/vi/categories/ethical-hacking-labs/2-scanning-networks/5-NmapDecoyIP' },
                { text: 'Công cụ Windows', link: '/vi/categories/ethical-hacking-labs/2-scanning-networks/6-WindowsTools' },
              ],
            },
            {
              text: '3 - Enumeration',
              collapsed: true,
              items: [
                { text: 'Giới thiệu', link: '/vi/categories/ethical-hacking-labs/3-enumeration/0-Introduction' },
                { text: 'Enumeration với Nmap', link: '/vi/categories/ethical-hacking-labs/3-enumeration/1-Enumerating-with-Nmap' },
                { text: 'SNMP Enumeration', link: '/vi/categories/ethical-hacking-labs/3-enumeration/2-SNMP-Enumeration' },
                { text: 'Enum4Linux', link: '/vi/categories/ethical-hacking-labs/3-enumeration/3-Enum4linux-Win-and-Samba-Enumeration' },
                { text: 'Công cụ Windows', link: '/vi/categories/ethical-hacking-labs/3-enumeration/4-Windows-EnumerationTools' },
              ],
            },
            {
              text: '4 - Phân tích lỗ hổng',
              collapsed: true,
              items: [
                { text: 'Tổng quan & Công cụ', link: '/vi/categories/ethical-hacking-labs/4-vulnerability-analysis/Overview-and-Tools' },
              ],
            },
            {
              text: '5 - System Hacking',
              collapsed: true,
              items: [
                { text: 'Giới thiệu', link: '/vi/categories/ethical-hacking-labs/5-system-hacking/0-Introduction' },
                { text: 'LLMNR / NBT-NS Spoofing', link: '/vi/categories/ethical-hacking-labs/5-system-hacking/1-LLMNR-NBT-NS' },
                { text: 'SAM Hashes', link: '/vi/categories/ethical-hacking-labs/5-system-hacking/2-SAM-Hashes' },
                { text: 'Rainbow Tables', link: '/vi/categories/ethical-hacking-labs/5-system-hacking/3-Rainbow-tables' },
                { text: 'VNC Session', link: '/vi/categories/ethical-hacking-labs/5-system-hacking/4-VNC-Session' },
                { text: 'Tăng quyền', link: '/vi/categories/ethical-hacking-labs/5-system-hacking/5-Escalating-Privileges' },
                { text: 'Hacking qua Doc File', link: '/vi/categories/ethical-hacking-labs/5-system-hacking/6-Hacking-Windows-with-Doc-file' },
                { text: 'Metasploit Post-Exploitation', link: '/vi/categories/ethical-hacking-labs/5-system-hacking/7-Hacking-Windows-with-Metasploit-PostExploitation' },
                { text: 'NTFS Streams', link: '/vi/categories/ethical-hacking-labs/5-system-hacking/8-NTFS-Streams' },
                { text: 'Steganography', link: '/vi/categories/ethical-hacking-labs/5-system-hacking/9-Steganography' },
                { text: 'Covert TCP', link: '/vi/categories/ethical-hacking-labs/5-system-hacking/10-Covert_TCP' },
                { text: 'Auditpol', link: '/vi/categories/ethical-hacking-labs/5-system-hacking/11-Auditpol' },
                { text: 'Công cụ Windows', link: '/vi/categories/ethical-hacking-labs/5-system-hacking/12-WindowsTools' },
              ],
            },
            {
              text: '6 - Malware',
              collapsed: true,
              items: [
                { text: 'Giới thiệu', link: '/vi/categories/ethical-hacking-labs/6-malware/0-Introduction' },
                { text: 'njRAT', link: '/vi/categories/ethical-hacking-labs/6-malware/1-Using-njRAT' },
                { text: 'HTTP RAT Trojan', link: '/vi/categories/ethical-hacking-labs/6-malware/2-HTTP-Trojan' },
                { text: 'Obfuscating Trojan', link: '/vi/categories/ethical-hacking-labs/6-malware/3-Obfuscating-Trojan-SwayzCryptor' },
                { text: 'Phân tích Malware', link: '/vi/categories/ethical-hacking-labs/6-malware/4-Malware-Analysis-Lab' },
                { text: 'Công cụ Windows', link: '/vi/categories/ethical-hacking-labs/6-malware/5-Windows-Tools' },
              ],
            },
            {
              text: '7 - Sniffing',
              collapsed: true,
              items: [
                { text: 'Giới thiệu', link: '/vi/categories/ethical-hacking-labs/7-sniffing/0-Introduction' },
                { text: 'MITM với BetterCAP', link: '/vi/categories/ethical-hacking-labs/7-sniffing/1-MITM-with-Bettercap' },
                { text: 'Spoofing MAC Address', link: '/vi/categories/ethical-hacking-labs/7-sniffing/2-Spoofing-MAC-address' },
                { text: 'Công cụ Windows', link: '/vi/categories/ethical-hacking-labs/7-sniffing/X-Windows-Tools' },
              ],
            },
            {
              text: '8 - Social Engineering',
              collapsed: true,
              items: [
                { text: 'Giới thiệu', link: '/vi/categories/ethical-hacking-labs/8-social-engineering/0-Introduction' },
                { text: 'Sử dụng SET', link: '/vi/categories/ethical-hacking-labs/8-social-engineering/1-Using-SET' },
                { text: 'Công cụ', link: '/vi/categories/ethical-hacking-labs/8-social-engineering/X-Tools' },
              ],
            },
            {
              text: '9 - Denial of Service',
              collapsed: true,
              items: [
                { text: 'Giới thiệu', link: '/vi/categories/ethical-hacking-labs/9-denial-of-service/0-Introduction' },
                { text: 'SYN Flooding', link: '/vi/categories/ethical-hacking-labs/9-denial-of-service/1-SYN-Flooding' },
                { text: 'DDoS với HOIC', link: '/vi/categories/ethical-hacking-labs/9-denial-of-service/2-DDoS-using-HOIC' },
                { text: 'Phát hiện DoS Traffic', link: '/vi/categories/ethical-hacking-labs/9-denial-of-service/3-Detecting-DoS-Traffic' },
              ],
            },
            {
              text: '10 - Session Hijacking',
              collapsed: true,
              items: [
                { text: 'Giới thiệu', link: '/vi/categories/ethical-hacking-labs/10-session-hijacking/0-Introduction' },
                { text: 'Sử dụng ZAP', link: '/vi/categories/ethical-hacking-labs/10-session-hijacking/1-Using-ZAP' },
                { text: 'Chặn HTTP Traffic', link: '/vi/categories/ethical-hacking-labs/10-session-hijacking/2-Intercepting-HTTP-Traffic' },
              ],
            },
            {
              text: '11 - Bonus (Forensics)',
              collapsed: true,
              items: [
                { text: 'TCPDump', link: '/vi/categories/ethical-hacking-labs/11-bonus/TCPDump-Tutorial' },
                { text: 'Phân tích Packets', link: '/vi/categories/ethical-hacking-labs/11-bonus/Dissecting-packets' },
                { text: 'ExifTool', link: '/vi/categories/ethical-hacking-labs/11-bonus/ExifTool-Tutorial' },
                { text: 'hdparm & dd', link: '/vi/categories/ethical-hacking-labs/11-bonus/Using-hdparm-and-dd-command' },
                { text: 'Khôi phục Partition', link: '/vi/categories/ethical-hacking-labs/11-bonus/Recovering-Deleted-Partition' },
                { text: 'Khôi phục File', link: '/vi/categories/ethical-hacking-labs/11-bonus/Recovering-Deleted-Files' },
              ],
            },
          ],
        },
      ],
    },
  ]
}
