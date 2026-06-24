# Ẩn Dữ liệu sử dụng Steganography
Steganography là kỹ thuật giấu một file, thông điệp, hình ảnh hoặc video bên trong một file, thông điệp, hình ảnh hoặc video khác.

Steganography mạng mô tả tất cả các phương pháp được sử dụng để truyền dữ liệu qua mạng mà không bị phát hiện. Một số phương pháp ẩn dữ liệu trong mạng đã được đề xuất, nhưng nhược điểm chính của hầu hết chúng là không cung cấp lớp bảo mật thứ hai. Nếu steganography để truyền thông tin nhạy cảm ra khỏi hệ thống mục tiêu mà không bị phát hiện.

### Mục tiêu
* Sử dụng Steganography trong Windows và Linux.
* Sử dụng Snow steganography để ẩn file và dữ liệu.
* ẩn file sử dụng khoảng trắng và tab.
* Ẩn thông điệp văn bản bí mật trong hình ảnh sử dụng OpenStego.

## Ẩn Dữ liệu sử dụng Snow (Windows)
Trang web Snow: http://darkside.com.au/snow/index.html

Snow được sử dụng để giấu thông điệp trong văn bản ASCII bằng cách thêm khoảng trắng vào cuối dòng. Vì khoảng trắng và tab thường không hiển thị trong trình xem văn bản, thông điệp được ẩn hiệu quả khỏi người xem thông thường. Và nếu mã hóa tích hợp được sử dụng, thông điệp không thể đọc được ngay cả khi bị phát hiện.

Snow khai thác bản chất steganography của khoảng trắng. Tìm khoảng trắng cuối dòng trong văn bản giống như tìm gấu trắng trong bão tuyết, nó sử dụng thuật toán mã hóa ICE, vì vậy tên nhất quán về chủ đề.

**Mã hóa ICE**: Thuật toán mã hóa này là một block cipher 64-bit. Nó chạy ở chế độ 1-bit cipher-feedback (CFB), mặc dù không hiệu quả (yêu cầu mã hóa 64-bit đầy đủ cho mỗi bit output).

1. Khởi chạy **command prompt** và điều hướng đến thư mục Snow.
![snow-01](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/1e1e57a1a30bab7ad94f502b3bba5107098448c0/snow-01.png)

2. Tạo file readme.txt **bên trong thư mục SNOW** với một thông điệp ngẫu nhiên như: `hello world!`

3. Bây giờ quay lại **command prompt** và tạo thông tin bí mật
`snow -C -m "My sketchy wallet: 3FkenCiXpSLqD8L79intRNXUgjRoH9sjXy" -p "pa55" readme.txt readme2.txt`

`-m "message"`: chuỗi bí mật
`pa55`: là mật khẩu, bạn có thể nhập bất kỳ mật khẩu nào bạn muốn.
`readme2.txt`: là tên của một file khác sẽ được tạo tự động tại cùng vị trí.

Bây giờ dữ liệu (`"My sketchy wallet: 3FkenCiXpSLqD8L79intRNXUgjRoH9sjXy"`) được ẩn bên trong file **readme2.txt** với nội dung của **readme.txt**.

_readme2.txt = readme.txt + "My sketchy wallet: 3FkenCiXpSLqD8L79intRNXUgjRoH9sjXy"_

**Bạn có thể mở cả readme.txt và readme2.txt để kiểm tra xem có sự khác biệt nào không**, ngoài khoảng trắng như hình dưới đây:

![whitespaces-difference](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/1e1e57a1a30bab7ad94f502b3bba5107098448c0/snow-whitespaces-02.png)

4. Để hiển thị nội dung bị ẩn, nhập:
`snow -C -p "pa55" readme2.txt`
![snow3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/346be861372d685fe81d0a7dd3d9cb7687c2592a/snow-03.png)

***

# Steganography Hình ảnh sử dụng OpenStego (Windows)
OpenStego là công cụ steganography ẩn dữ liệu bên trong hình ảnh. OpenStego là ứng dụng dựa trên Java và hỗ trợ mã hóa dữ liệu dựa trên mật khẩu để tăng cường bảo mật. Nó sử dụng thuật toán DES để mã hóa dữ liệu, kết hợp với băm MDS để tạo khóa DES từ mật khẩu được cung cấp.

Trang web OpenStego: https://www.openstego.com/

1. Cài đặt OpenStego và Mở ứng dụng
![OpenStego-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/2a94c49858a92a09855df3edab939b2d731b8b8f/openstego-1.png)

2. Nhấp vào **nút ellipsis** trên ô nhập **Message File** và chọn file text có trong thư mục OpenStego (File text này chứa thông tin nhạy cảm 'giả' như số VISA và mã PIN).
![OpenSTego-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/3ece1184799bc34f54c0523fa8c0b6bd6efe9f30/openstego-2.png)

3. Tiếp theo, nhấp vào **nút ellipsis** thứ hai (**Cover File**) và chọn **Island.jpg** cũng nằm trong thư mục OpenStego.
![OpenStego-3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/ef22f60c5f3883f11031c0e2c3e18835e246c578/openStego-3.png)

4. Nhấp vào **nút ellipsis** thứ ba **(Output Stego File)**, chọn **Desktop** và đặt tên file là **stego**.

5. Bây giờ, nhấp **Hide Data** ở góc dưới bên phải.
![OpenStego-5](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6bcf0fc1ad730e4b8bfb0f29695cd3d5da026db4/openStego-5.png)

Mở file hình ảnh trên desktop, bạn sẽ chỉ thấy hình ảnh mà không thấy nội dung thông điệp (file text) được nhúng vào, như hình dưới đây:

![OpenStego-6](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/8265b66f9795426b604a8b602df5027d27a69897/stego-6.png)

### Thu thập File Text từ Hình ảnh

1. Quay lại cửa sổ OpenStego và nhấp nút **Extract Data** ở góc trái.

2. Nhấp vào **nút ellipsis** đầu tiên **(Input Stego File)**, chọn hình ảnh bạn đã tạo từ **Desktop** và **Output Folder** trên nút ellipsis tiếp theo.
![openstego7](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/80722e31e7a359444d428f12b87bf31d64cfb739/openstego-7.png)

3. Nhấp **Extract Data** ở góc dưới bên phải. Thao tác này sẽ trích xuất file thông điệp từ hình ảnh.

4. File hiển thị tất cả thông tin chứa trong tài liệu, như hình dưới đây:
![openstego8](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/80722e31e7a359444d428f12b87bf31d64cfb739/openstego-8.png)

***

# Sử dụng Quick Stego (Windows)
Quick Stego ẩn văn bản trong hình ảnh sao cho chỉ những người dùng Quick Stego khác mới có thể truy xuất và đọc các thông điệp bí mật bị ẩn.

Trang web QuickStego: http://quickcrypto.com/free-steganography-software.html

### Ẩn văn bản bên trong hình ảnh
1. Cài đặt Quick Stego.

2. Khởi chạy ứng dụng.
![QuickStego-0](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b3a67a059d4adeff6da89ec1b797b4ee7aa3c1c3/Quickstego-0.png)

3. Nhấp vào **Open Image**, dưới Picture, Image, Photo File.

4. Chọn hình ảnh bên trong **thư mục QuickStego**.
`02_nissan_gt-r_specv_opt.jpg`

5. Tiếp theo, nhấp vào **Open Text** dưới Text File, như hình dưới đây:
![QuickStego-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/48ad0711987d02ced80915853bf83f9650ae5d18/QuickStego-1.png)

6. Chọn **text file.txt** bên trong **thư mục QuickStego**.

7. Văn bản được chọn sẽ được thêm vào ô text ngay cạnh hình ảnh, như hình dưới đây
![QuickStego-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b3a67a059d4adeff6da89ec1b797b4ee7aa3c1c3/quickStego-2.png)

8. Nhấp vào **Hide Text** dưới Steganography
![QuickStego-3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b3a67a059d4adeff6da89ec1b797b4ee7aa3c1c3/quickstego-3.png)

9. Để lưu file hình ảnh (có chứa văn bản bị ẩn), nhấp vào **Save Image**, dưới Picture, Image, Photo File.

File bây giờ được lưu dưới dạng "stego". Mặc dù có vẻ là một file hình ảnh bình thường, nó có chứa văn bản bị ẩn bên trong, **có thể hiển thị bằng cách xem trong Quick Stego.**

***

# Ẩn Dữ liệu sử dụng Steghide (Kali Linux)
Steghide là chương trình steganography có khả năng ẩn dữ liệu trong nhiều loại file hình ảnh và âm thanh. Tần số màu sắc tương ứng mẫu không bị thay đổi, do đó việc nhúng dữ liệu chống lại các kiểm thử thống kê bậc một.

Kho lưu trữ chính thức: https://github.com/StefanoDeVuono/steghide

Cài đặt Steghide rất đơn giản trong Kali Linux, vì nó đã có sẵn trong kho lưu trữ Kali Linux.

Chạy lệnh sau:

`sudo apt-get update`
`sudo apt-get install steghide`

### Ẩn Văn bản trong File Hình ảnh
1. Tạo một thư mục trên Desktop với **file hình ảnh** và **file text bí mật**.
![Kali-Steg-Files-0](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/fdcd09b49b5f46b4e9c23ae266b41feadd1e7ce8/steg-kali-0.png)

2. Để ẩn văn bản trong hình ảnh, điều hướng đến thư mục /Desktop/steg/ và nhập:
`steghide embed -cf black-cat.jpg -ef secret-text.txt`
`-cf`: Cover file < filename >
`-ef`: Embedded File < filename >
![Steg-Kali-command](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c05066032cd10aa55749c47426d139d6abd14e09/Steg-Kali-1.png)
Lệnh này sẽ nhúng file secret-text.txt vào cover file black-cat.jpg được bảo vệ bằng mật khẩu.

### Trích xuất văn bản từ File Hình ảnh
Sau khi bạn đã nhúng dữ liệu bí mật, người nhận phải sử dụng steghide theo cách sau:

1. Trích xuất Dữ liệu
`steghide extract -sf black-cat.jpg `
`-sf`: Stego file
2. Nhập mật khẩu chính xác.
![KaliStego-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/bcbab9ca9f66ea7785cab8e15fc52d5492b0ea2e/KaliStego-3.png)
Nội dung của file gốc secret-text.txt sẽ được trích xuất từ stego file black-cat.jpg và lưu trong thư mục hiện tại.

### Xem Thông tin Dữ liệu được Nhúng
Nếu một file chứa dữ liệu được nhúng và bạn muốn lấy thông tin về nó trước khi trích xuất, nhập lệnh:

`steghide info black-cat.jpg`

![Embedded Data](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c0fc9841d6bd1d58adbea07cd0b71466cc7bf151/steg-kali-4-embedded.png)

Steghide sẽ cố gắng trích xuất dữ liệu được nhúng với mật khẩu đó và - nếu thành công - in một số thông tin về nó.

***

### Danh dự đề cập

StegoSuite cho Linux và Windows là công cụ steganography miễn phí và mã nguồn mở được viết bằng Java.

https://stegosuite.org/
