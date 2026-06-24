# Phân tích gói tin TCP, ICMP và ARP
Giao thức Internet cung cấp một số giao thức gói tin khác nhau, từ rất nhanh đến rất đáng tin cậy. Tất cả đều dựa trên lớp thấp nhất — gói IP cơ bản. Tuy nhiên, mỗi lớp đã được phát triển để giải quyết các vấn đề cụ thể. Để chọn đúng loại gói tin, bạn phải biết về những gì bạn đang truyền tải.

Các loại gói tin có nhiều khả năng quan tâm nhất là TCP, UDP, ICMP và raw. Biết ưu và nhược điểm của mỗi loại có thể giúp bạn chọn loại phù hợp nhất cho ứng dụng của mình. Mỗi loại gói tin có lợi ích khác nhau, được tóm tắt trong bảng dưới đây:

## Lợi ích của từng loại gói tin:
<table cellspacing="2" cellpadding="2" border="2">
  <colgroup> <col width="108"> <col width="60"> <col width="62"> <col width="63"> 
  <col width="67"> </colgroup> <thead> 
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>&nbsp;</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p>Raw</p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p>ICMP</p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p>UDP</p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p>TCP</p>
    </td>
  </tr>
  </thead> <tbody> 
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>Overhead (bytes)</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p>20–60</p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p>20–60+[4]</p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p>20–60+[8]</p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p>20–60 +[20–60]</p>
    </td>
  </tr>
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>Message Size (bytes)</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p>65,535</p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p>65,535</p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p>65,535</p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p>(unlimited)</p>
    </td>
  </tr>
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>Reliability</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p>Low</p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p>Low</p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p>Low</p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p>High</p>
    </td>
  </tr>
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>Message Type</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p>Datagram</p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p>Datagram</p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p>Datagram</p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p>Stream</p>
    </td>
  </tr>
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>Throughput</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p>High</p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p>High</p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p>Medium</p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p>Low</p>
    </td>
  </tr>
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>Data Integrity</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p>Low</p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p>Low</p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p>Medium</p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p>High</p>
    </td>
  </tr>
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>Fragmentation</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p>Yes</p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p>Yes</p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p>Yes</p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p>Low</p>
    </td>
  </tr>
  </tbody> 
</table>



* * * 

## Chụp gói tin ICMP


- **Lưu ý**: Nên sử dụng hai máy ảo để gửi các gói ICMP, TCP và ARP cho nhau; Máy thứ nhất sẽ chụp gói tin bằng ```TCPDUMP``` và máy thứ hai sẽ tạo lưu lượng bằng cách gửi các gói tin.

```bash
tcpdump -nnvvXXS -s0 -c2 icmp
```

```-nnvvXXS``` : Xem gói tin nặng; Chữ "S" cuối cùng tăng snaplength, chụp toàn bộ gói tin; ```-c2``` để chỉ chụp 2 gói tin (request/reply)

```log
17:11:16.213822 IP (tos 0x0, ttl 64, id 38756, offset 0, flags [none], proto ICMP (1), length 84)
    192.168.64.3 > 192.168.64.1: ICMP echo reply, id 6157, seq 0, length 64
        0x0000:  aa20 66d2 5364 ca3b cc0e 1069 0800 4500  ..f.Sd.;...i..E.
        0x0010:  0054 9764 0000 4001 e1ef c0a8 4003 c0a8  .T.d..@.....@...
        0x0020:  4001 0000 3534 180d 0000 601a d934 0002  @...54....`..4..
        0x0030:  8e6a 0809 0a0b 0c0d 0e0f 1011 1213 1415  .j..............
        0x0040:  1617 1819 1a1b 1c1d 1e1f 2021 2223 2425  ...........!"#$%
        0x0050:  2627 2829 2a2b 2c2d 2e2f 3031 3233 3435  &'()*+,-./012345
        0x0060:  3637     

```

## Trích xuất chỉ giá trị HEX dump từ echo reply

```
aa20 66d2 5364 ca3b cc0e 1069 0800 4500 
0054 9764 0000 4001 e1ef c0a8 4003 c0a8
4001 0000 3534 180d 0000 601a d934 0002
8e6a 0809 0a0b 0c0d 0e0f 1011 1213 1415
1617 1819 1a1b 1c1d 1e1f 2021 2223 2425
2627 2829 2a2b 2c2d 2e2f 3031 3233 3435
3637
```

Lưu ý:

- 4 bit --> 1 chữ số hex --> ```A```
- 1 byte --> 2 chữ số hex  --> ```AA```
- 2 byte --> 1 khối 4 chữ số hex --> ```AA20```
- 4 byte --> 2 khối 4 chữ số hex --> ```AA20 66d2```
- 6 byte --> 3 khối 4 chữ số hex --> ```AA20 66d2 5364```

## Gói tin ICMP có thể được chia thành các phần tử giao thức sau:
1) **Ethernet Header** (14 byte đầu tiên); Phương tiện truyền thông mạng là Ethernet.
    - ```aa20 66d2 5364 ca3b cc0e 1069 0800```
        - Địa chỉ MAC Đích (0-5, 6 byte)
            - ```AA-20-66-D2-53-64 ```
        - Địa chỉ MAC Nguồn (6-11, 6 byte)
            - ```CA-3B-CC-0e-10-69```
        - Ethernet Type Field (12-13, 2 byte)
            - ```0800``` (Ethernet Type: IPv4)

2) **IP Datagram (gói tin)** - 60 byte còn lại (14-73) tạo thành IP datagram:
    - **IP Header** 
        - ```4500 0054 9764 0000 4001 e1ef c0a8 4003 c0a8 4001```
            - [```4```] : IP Version (4 bit) → IPv4
            - [```5```] : IP Header Length (4 bit) → 32-bit words
            - [```00```] : Type of service (1 byte) → Giao hàng bình thường
            - [```0054```] : Total length (2 byte) → Gói tin 84 byte
            - [```9764```] : Identification (2 byte) → 38756 
            - [```0```] : Flags (3 bit) → 000, không cờ nào được đặt
            - [```000```] : Fragment Offset (13 bit) → 000, vị trí fragment
            - [```40```] : Time to Live (TTL) (1 byte) → 64 hops (thập phân)
            - [```01```] : Protocol (1 byte) → ICMP
            - [```e1ef```] : Header Checksum (2 byte) → 0xe1ef
            - [```c0a8 4003```] : Địa chỉ IP Nguồn → 192.168.64.3 
            - [```c0a8 4001```] : Địa chỉ IP Đích - 192.168.64.1
    - **IP Data** - Bốn mươi (40) byte IP Data theo sau IP Header (34-73):
        - ```0000 3534 180d 0000 601a d934 0002 8e6a 0809 0a0b 0c0d 0e0f 1011 1213 1415 1617 1819 1a1b 1c1d 1e1f 2021 2223 2425 2627 2829 2a2b 2c2d 2e2f 3031 3233 3435 3637```
            - IP Data trong trường hợp này thực chất là một ICMP Echo reply, bao gồm ba mươi hai (32) byte Echo Data (42-73)
            - [```00```] : Type (1 byte) → Echo reply
            - [```00```] : Code (1 byte) → (Mặc định)
            - [```3534```] : Checksum (2 byte)
            - [```180d 0000 601a d934 0002 8e6a 0809 0a0b 0c0d 0e0f 1011 1213 1415 1617 1819 1a1b 1c1d 1e1f 2021 2223 2425 2627 2829 2a2b 2c2d 2e2f 3031 3233 3435 3637```]
                - [```180d```] : Identifier (2 byte) → 6157,3352
                - [```0000```] : Sequence Number (2 byte) → 0
                - [```601a d934 0002 8e6a```] : ICMP Payload (8 byte) 
                - [```0809 0a0b 0c0d 0e0f 1011 1213 1415 1617 1819 1a1b 1c1d 1e1f 2021 2223 2425 2627 2829 2a2b 2c2d 2e2f 3031 3233 3435 3637```] : ICMP Data (48 byte)

## Phiên bản minh họa:
![icmp](https://user-images.githubusercontent.com/3259997/106795623-35bf1a00-6652-11eb-9b2e-a2cdc0d104c0.png)


### Tài liệu tham khảo:
- https://www.informit.com/articles/article.aspx?p=130895&seqNum=3
- https://hpd.gasmi.net/
- http://academy.delmar.edu/courses/itsy2430/Handouts/PingPacketDecoded.html
