# 使用官方的node基础镜像
FROM node:14

# 创建app目录（在docker内部，不是在你的机器上）
WORKDIR /app

# 将你的package.json 和 package-lock.json复制到工作目录
COPY . .

# 安装你的应用需要的依赖
RUN npm install

# 复制你的app源代码到工作目录
COPY . .

# 需要暴露的端口（如果你的应用监听在某个端口上的话）
EXPOSE 8080

# 启动你的应用
CMD [ "npm", "run", "serve" ]