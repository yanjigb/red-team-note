# Giả mạo địa chỉ MAC
MAC spoofing là kỹ thuật thay đổi địa chỉ Media Access Control (MAC) được gán tại nhà máy của giao diện mạng trên thiết bị mạng. Địa chỉ MAC được mã hóa cứng trên bộ điều khiển giao diện mạng (NIC) không thể thay đổi. Tuy nhiên, nhiều trình điều khiển cho phép thay đổi địa chỉ MAC. Ngoài ra, có các công cụ có thể làm cho hệ điều hành tin rằng NIC có địa chỉ MAC do người dùng chọn. Quá trình che giấu địa chỉ MAC được gọi là MAC spoofing. Về cơ bản, MAC spoofing liên quan đến việc thay đổi danh tính của máy tính, vì bất kỳ lý do gì, và nó tương đối dễ dàng.

<p align="center">
  <img src="https://d5ngkkf53wl41.cloudfront.net/tutorials/ethical-hacking/mac-address-spoofing.png" />
</p>

### Tại sao phải thay đổi địa chỉ MAC?
* Tăng tính ẩn danh.
* Giả mạo thiết bị khác.
* Bỏ qua bộ lọc.

**lưu ý**: lab sẽ chỉ cho bạn cách thay đổi địa chỉ MAC chỉ trên bộ nhớ không phải vật lý.

### Mục tiêu
* Thay đổi địa chỉ MAC trên **Kali Linux**.
* Thay đổi địa chỉ MAC trên **Windows**.

### Yêu cầu
* Máy ảo Kali Linux.
* Bộ điều hợp mạng Alfa, hoặc bộ điều hợp khác với chipset tương tự. [[+]](https://kennyvn.com/best-wireless-adapters-kali-linux/)
* Máy ảo Windows 7, 8 hoặc 10.

## Sử dụng `macchanger` (Kali)
Macchanger là công cụ đi kèm với bất kỳ phiên bản Kali Linux rolling edition nào và có thể thay đổi địa chỉ MAC thành bất kỳ địa chỉ mong muốn nào cho đến khi khởi động lại. Trong lab này chúng ta sẽ giả mạo địa chỉ MAC của bộ điều hợp không dây với địa chỉ MAC ngẫu nhiên được tạo bởi **Macchanger trên Kali Linux.**

Kho lưu trữ: https://github.com/alobbs/macchanger

0. Sử dụng `ifconfig` để xem địa chỉ MAC hiện tại của bộ điều hợp mạng:
`ifconfig`

1. Tắt bộ điều hợp mạng:
`ifconfig wlan1 down`

2. Tiếp theo, thay đổi địa chỉ MAC thành địa chỉ MAC ngẫu nhiên mới bằng `macchanger`:
`macchanger -r wlan1`

```
Current MAC:   f2:30:a0:1a:41:b3 (unknown)
Permanent MAC: 00:c1:c8:a1:e7:d1 (ALFA, INC.)
New MAC:       ce:11:9a:98:fe:ad (unknown)
```

## Thay đổi địa chỉ MAC thủ công (Kali)
0. Tắt bộ điều hợp mạng:
`ifconfig wlan0 down`

1. Thay đổi địa chỉ bằng tùy chọn `hw ether` từ **ifconfig** sử dụng bất kỳ địa chỉ MAC nào bạn muốn:
`ifconfig wlan0 hw ether 00:11:22:33:44:55`

2. Bật giao diện:
`ifconfig wlan0 up`

3. Kiểm tra thay đổi của bộ điều hợp mạng:
`ifconfig`

***
## SMAC GUI Tool (Windows)
SMAC là công cụ mạnh mẽ và dễ sử dụng để thay đổi địa chỉ MAC (spoofer). Công cụ có thể kích hoạt địa chỉ MAC mới ngay sau khi thay đổi tự động.

https://smac.soft32.com/

![smac](https://thegeekpage.com/wp-content/uploads/2016/05/mac-address-changer-tool.gif)
