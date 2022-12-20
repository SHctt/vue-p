# Vue.js 前端应用 #9：请求接口

空白的 vue 项目，安装一个 HTTP 客户端，请求使用应用的服务端接口。

## 准备服务端应用接口

在这里，使用 docker 挂载启动了`~/desktop/done/xb2-demo`这个项目，
这个项目是使用 nodejs 创建的一个服务端应用，进入项目所在的目录后

```
docker compose up -d
```

然后在 insomnia 导入相关接口的模版，使用 tablePlus 连接数据库
