# Vue.js 前端应用#12：应用架构

一个 vue 应用的架构实例

## 12.1 应用的数据管理（Vuex）：创建与使用 Store

## 12.2 应用的数据管理（Vuex）：定义使用 Store 模块

把应用里面出现的不同的东西放在各自的目录下面，比如在应用里跟内容相关的东西，放在 post 目录的下面，跟用户相关的东西可以放在 user 目录的下面。目录里面可以包含资源相关的组件，样式，路由，还有 store 。

每个资源目录可以再细分一下，比如创建，更新资源的东西都可以单独放在各自的目录下面。

## 12.3 应用的数据管理（Vuex）：解决 Store 模块的类型问题

一般在组件里使用 store 里的数据的时候，我们可以通过 getters 来做，在这个 post-create store 模块里添加一个 getters，一个对象，每个获取器都是一个方法，比如添加一个叫 loading 的获取器，getter 方法可以接收一个 state 参数，这个参数的值就是这个 store 模块里定义的这个 state。

在这个 getter 方法里，return 的东西就是这个 getter 提供的数据，返回的是 state 里的 loading 这个属性的值。

因为我们在项目里用了 TypeScript，所以这里你会发现编辑器会提示这个获取器的 state 参数的类型有点问题，现在这个参数应该可以是任意类型，也就是 any。

所以这里需要定义导出一个 interface ，用这个 interface 描述一下这个 store 模块里的 state 。

## 12.4 应用的路由：Vue Router

将对应的路由模块，放在对应的文件夹中

## 12.5 HTTP 客户端（axios）：请求服务端应用接口

## 12.6 Vue 应用的环境变量配置

## 12.7 在 Vue 应用里定义与使用组件
