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

## 9.1 处理在 Vue 应用里使用 axios 发送请求时发生的错误

下面我们可以故意制造一个错误，经绍修改一下这个接口地址，换成一个不存在的接口地址。你会发现，在控制台上会提示 Uncaught Error，后面会有这个具体的错误。因为这次客户端请求的地址在服务端不存在，所以请求得到了一个状态码是 404 的响应，表示没找到。

这种在发送请求的时候出现的错误，你可能希望在应用里处理一下，也就是你的应用需要对这些错误情况做出不同的反应。比如给用户一个提示。

使用 axios 发送 http 请求会得到一个 Promise，成功兑现了这个承诺会执行 then 里提供的回调，如果发生了错误，会执行 catch 里的回调。所以这里可以再给它加上一个 catch。 提供一个回调参数，一个 error 参数，这里可以在控制台上输出 error 里的 message ，还有 error 里的 resposne。

## 9.3 使用 async await 处理 axios 请求

将 created 方法标记为 async 函数，在这个方法中，用 try 尝试获取 response 的数据，catch 到 error，就返回错误信息
