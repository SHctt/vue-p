# Vue.js 前端应用 #9：请求接口

空白的 vue 项目，安装一个 HTTP 客户端，请求使用应用的服务端接口。

## 准备服务端应用接口

在这里，使用 docker 挂载启动了`~/desktop/done/xb2-demo`这个项目，
这个项目是使用 nodejs 创建的一个服务端应用，进入项目所在的目录后

```
docker compose up -d
```

然后在 insomnia 导入相关接口的模版，使用 tablePlus 连接数据库

## 9.1 安装与使用 HTTP 客户端请求服务端接口（axios）

```
yarn add axios
```

使用 axios 上的 get 这个方法。 获取请求的接口的地址。会返回一个 Promise，所以，在它后面继续使用 then 处理一下正常得到响应以后要做的事情。提供一个回调参数，里面接收一个 response 参数。

在控制台上可以输出 response 检查一下。这个 response 就是请求以后从服务端那里得到的响应，这个响应会被 axios 处理过。

然后在 data 里面定义一个空的数组，将`response.$data`的数据，交给这个空的数组，这样就可以在组件模版中使用 v-for 列表显示获取到的数据了。
