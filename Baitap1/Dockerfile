# Sử dụng node:18 làm base image
FROM node:18

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và package-lock.json (nếu có) vào container
COPY package*.json ./

# Cài đặt các phụ thuộc của ứng dụng
RUN npm install

# Copy toàn bộ mã nguồn của dự án vào container
COPY . .

# Expose cổng 3000 để ứng dụng có thể truy cập được
EXPOSE 3000

# Khởi chạy ứng dụng khi container chạy
CMD ["npm", "start"]