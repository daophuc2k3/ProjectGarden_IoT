# ProjectGarden_IoT
Đây là project cuối kì thực tập tại Yootek Holdings - Song Nam Group

## Hướng dẫn chạy dự án

### Yêu cầu trước khi chạy

- Cài đặt Node.js phiên bản 16 trở lên
- Có PostgreSQL đã được cài đặt và cấu hình sẵn
- MQTT Broker (có thể dùng public broker như HiveMQ: `https://www.hivemq.com/products/mqtt-cloud-broker/`)

### Các bước chạy

1. **Clone source code về máy:**
```bash
git clone https://github.com/daophuc2k3/ProjectGarden_IoT.git
cd ProjectGarden_IoT
```
2. **Cài đặt các package cần thiết:**
```bash
npm install
```

3. **Tạo file .env để cấu hình biến môi trường:**
- Tạo file .env ở thư mục gốc, nội dung ví dụ:
```bash
DATABASE_URL="postgresql://postgres:daophuc@localhost:5432/iot_thuctap?schema=garden"
SECRET="7b9a63fc3a43d4b7bb4535a75c6b36d29f8d5d0f85f9e3fe272bc742ca3156f4"

MQTT_URL="mqtts://32ae6b7356af462f9df4141386bdf71a.s1.eu.hivemq.cloud"
MQTT_PORT="8883"
MQTT_USERNAME="daophuc2k3"
MQTT_PASSWORD="Daophuc2003"
```
4. **Khởi tạo và migrate cơ sở dữ liệu bằng Prisma:**
```bash
npx prisma migrate dev --name init
```
5. **Chạy ứng dụng:**
```bash
npm start
```
6. **Kiểm tra API:**
- Mở trình duyệt vào truy cập 
```bash
http://localhost:3003/api
```
- Ngoài ra, có thể sử dụng Postman để test api

7. **Phần MQTT:**
- Sử dụng MqttX để test với url trong .env ví dụ
- Username và Password để kết nối:
```bash
daophuc2k3a Daophuc2003
daophuc2k3b Daophuc2003
```
### Link video demo: 
https://drive.google.com/drive/folders/1eZdBtfCJeCsoMGs5-a428vw0mRRPeE7D?hl=vi
