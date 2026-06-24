# Sử dụng Social Engineering Toolkit (SET)
Social Engineering Toolkit (SET) là một công cụ mã nguồn mở được viết bằng Python, được thiết kế cho kiểm thử thâm nhập (pentesting). SET được thiết kế đặc biệt để thực hiện các cuộc tấn công nâng cao chống lại con người bằng cách khai thác hành vi của họ. Các cuộc tấn công được tích hợp trong toolkit được thiết kế để nhắm mục tiêu cụ thể vào một cá nhân hoặc tổ chức được sử dụng trong quá trình kiểm thử thâm nhập.

*Hướng dẫn sử dụng SET bởi TrustedSec: https://github.com/trustedsec/social-engineer-toolkit/raw/master/readme/User_Manual.pdf*


### Mục tiêu
* Sao chép một trang web
* Thu thập tên người dùng và mật khẩu
* Tạo báo cáo cho bài kiểm thử thâm nhập đã thực hiện

### Yêu cầu
* Máy ảo Kali Linux
* Bất kỳ máy ảo Windows nào

## Khởi chạy SET

Đăng nhập vào Kali Linux; Hãy nhớ rằng mỗi phiên bản Kali đều đi kèm với SET được cài đặt sẵn, để khởi chạy _(trên Kali 2019.4)_ hãy vào **Kali Menu > 13 - Social Engineering Tools > SET (Social Engineering Toolkit).** 

Chấp nhận Điều khoản Dịch vụ bằng cách gõ **y**.

## Sao chép một trang Web

![set-0](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/4fa403cfe8f17a4771b15cab4dfa28cbcaff1385/set-0.png)

Trên menu chính của SET, chọn tùy chọn đầu tiên **1) Social-Engineering Attacks** bằng cách nhập số:

```
 Select from the menu:

   1) Social-Engineering Attacks
   2) Penetration Testing (Fast-Track)
   3) Third Party Modules
   4) Update the Social-Engineer Toolkit
   5) Update SET configuration
   6) Help, Credits, and About

  99) Exit the Social-Engineer Toolkit
```

Tiếp theo, chọn **2) Website Attack Vectors**:
```
 Select from the menu:

   1) Spear-Phishing Attack Vectors
   2) Website Attack Vectors
   3) Infectious Media Generator
   4) Create a Payload and Listener
   5) Mass Mailer Attack
   6) Arduino-Based Attack Vector
   7) Wireless Access Point Attack Vector
   8) QRCode Generator Attack Vector
   9) Powershell Attack Vectors
  10) Third Party Modules

  99) Return back to the main menu.
```
**Web Attack Vector** là một cách độc đáo để sử dụng nhiều cuộc tấn công dựa trên web nhằm xâm phạm mục tiêu dự định.

Trong menu tiếp theo, chọn **3) Credential Harvester Attack Method**.

```
   1) Java Applet Attack Method
   2) Metasploit Browser Exploit Method
   3) Credential Harvester Attack Method
   4) Tabnabbing Attack Method
   5) Web Jacking Attack Method
   6) Multi-Attack Web Method
   7) HTA Attack Method

  99) Return to Main Menu
```
Phương pháp Credential Harvester sẽ sử dụng việc sao chép web của một trang web có trường đăng nhập (trường tên người dùng và mật khẩu) và thu thập tất cả thông tin được gửi đến trang web.

Tiếp theo, chọn **2) Site Cloner**:
```
   1) Web Templates
   2) Site Cloner
   3) Custom Import

  99) Return to Webattack Menu
```
Site cloner được sử dụng để sao chép một tr web theo lựa chọn của bạn.

Tiếp theo, nhập **địa chỉ IP của Kali Linux** và URL cần sao chép, trong ví dụ này chúng ta sẽ sử dụng _facebook.com_ như hình dưới:

![set-1](https://gist.github.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/91679b70b9db90d2be07da923f17f8ff74341609/set-1.png)

Sau đó, để tab terminal này chạy.

## Gửi một Email được tạo sẵn
Bây giờ bạn phải gửi **địa chỉ IP** của máy **Kali** đến mục tiêu, và lừa họ nhấp vào liên kết.

Trong demo này, chúng ta sẽ sử dụng **Gmail**; Khởi chạy trình duyệt web trên Kali và đăng nhập vào tài khoản Gmail để soạn email.

Ví dụ này sẽ chỉ trình bày khía cạnh kỹ thuật của kỹ thuật này.

![set-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/1097d5dacdd68740924956c6632fb4e0be50ee3a/set-2.png)

Để tạo một liên kết đúng, nhấp vào **edit link** và trước tiên nhập địa chỉ thực vào mục **Link to**, sau đó nhập URL giả vào trường **Text to display**.

![set-3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/22c46de6cebebea15399154a331120c8a3721090/set-3.png)

Bạn có thể xác minh URL giả bằng cách nhấp một lần, nó sẽ hiển thị URL thực.

![set-4](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/1097d5dacdd68740924956c6632fb4e0be50ee3a/set-4.png)

## Đăng nhập vào trang Web đã sao chép
Đăng nhập vào **Windows** với tư cách là nạn nhân, khởi chạy trình duyệt web và đăng nhập vào email của bạn (tài khoản mà bạn đã gửi email phishing).

![set-5](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/a896b360ac4d9ff1fabcf2825ac0488151defa86/set-5.png)

Khi nạn nhân nhấp vào URL, họ sẽ thấy một bản sao của facebook.com. Nạn nhân sẽ được yêu cầu nhập tên người dùng và mật khẩu vào các trường biểu mẫu. Sau khi nạn nhân nhập Tên người dùng và Mật khẩu và nhấp đăng nhập, hệ thống không cho phép đăng nhập; thay vào đó, nó chuyển hướng đến trang đăng nhập Facebook hợp pháp, hãy quan sát URL.

## Thu thập thông tin đăng nhập
**SET** trên Kali Linux sẽ lấy **tên người dùng** và **mật khẩu** đã nhập, có thể được sử dụng bởi kẻ tấn công để truy cập trái phép vào tài khoản của nạn nhân.

![set-7](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/4f9889f8bf9605f0e4cd1a415f71a77d73eedaee/set-7.png)
