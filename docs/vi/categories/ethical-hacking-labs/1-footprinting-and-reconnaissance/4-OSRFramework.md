# Thu thập tình báo mã nguồn mở sử dụng OSRFramework
OSRFramework là một tập hợp các thư viện để thực hiện các tác vụ Open Source Intelligence. Chúng bao gồm tham chiếu đến nhiều ứng dụng khác nhau liên quan đến kiểm tra tên người dùng, tra cứu DNS, nghiên cứu rò rỉ thông tin, tìm kiếm deep web, trích xuất biểu thức chính quy và nhiều hơn nữa.

### Mục tiêu:
* Trình bày cách xác định tên người dùng của mục tiêu trên các nền tảng mạng xã hội khác nhau.

### Yêu cầu:
* Máy ảo Kali Linux.
***
1. Đăng nhập vào máy **Kali Linux** và mở cửa sổ **Terminal**.

1. Cập nhật APT và cài đặt OSRFramework:

`apt update && apt -y install osrframework`

## Sử dụng usufy.py
`usufy.py` kiểm tra sự tồn tại của hồ sơ cho một chi tiết người dùng nhất định trên các nền tảng khác nhau.

Cách sử dụng: **usufy.py -n `target` -p twitter facebook youtube**

`usufy.py -n cehuser us -p twitter facebook youtube`
```
+-----------------------------+---------------+------------------+
|         i3visio_uri         | i3visio_alias | i3visio_platform |
+=============================+===============+==================+
| `http://twitter.com/us`       | us            | Twitter          |
+-----------------------------+---------------+------------------+
| `https://www.facebook.com/us` | us            | Facebook         |
+-----------------------------+---------------+------------------+
| `http://twitter.com/cehuser`  | cehuser       | Twitter          |
+-----------------------------+---------------+------------------+
```
**usufy.py** sẽ tìm kiếm chi tiết người dùng trên nền tảng được đề cập và cung cấp cho bạn thông tin về sự tồn tại của người dùng như hiển thị ở trên.

## Sử dụng searchfy.py
`searchfy.py` kiểm tra với những người dùng hiện có của các trang/handler cho một chi tiết nhất định trên tất cả các mạng xã hội.

Cách sử dụng: `searchfy.py -q "Page Name or Handler Name"`

`searchfy.py -q "ECCouncil"`

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c07e9574a732bbd239c81d4b1e24bee3de20e62b/searchfy-eccouncil.png "serachfy eccouncil screenshot")

Nó sẽ trích xuất tất cả chi tiết người dùng đã đăng ký theo dõi các trang mạng xã hội mục tiêu được cung cấp.

## Các lệnh con CLI của OSRFramework:
Lệnh con | Mô tả
 --- | ---
usufy.py | Công cụ xác minh tên người dùng có tồn tại trên 249 nền tảng mạng xã hội hay không.
mailfy.py | Module kiểm tra tên người dùng đã được đăng ký trên tối đa 22 nhà cung cấp email hay không.
searchfy.py | Module tìm kiếm hồ sơ bằng tên đầy đủ và thông tin khác trên 7 nền tảng.
domainfy.py | Module kiểm tra sự tồn tại của một tên miền nhất định trên tối đa 879 TLD khác nhau.
phonefy.py | Module kiểm tra số điện thoại có liên kết với hành vi spam trên 4 nền tảng hay không.
entify.py | Module tìm kiếm biểu thức chính quy sử dụng 13 mẫu.
