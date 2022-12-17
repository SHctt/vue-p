# Vue.js 前端应用 #5：应用路由

清理，空白的 vue 项目，更新了确认了 vscode 的 format 方式后，开启 router 的练习

## 5.1 创建 Vue 应用的路由器

package.json ，在 dependencies 里面,添加 vue-router，这里使用^4.0.0-0;`yarn`执行安装

然后，创建路由，导入路由

## 5.2 定义 Vue 应用的路由

在 approuter 中定义路由的路径（path）和访问的组件（component），在组件中使用一组`<router-view></router-view>`后,即可使用不通的地址，访问到组件内容。注意 router 的使用，和子组件的调用最大的区别就时体现在访问路径发生了变化

## 5.3 router-link：路由链接

在 Vue 应用的组件里使用 router-link 可以添加路由链接 ，打开 App 组件，在这个组件的模板里面，找个地方可以添加两个路由链接，用的是 router-link ，链接文字是 首页，具体的链接可以用 router-link 的 to 属性设置一下，比如 / 表示应用的根。

router-link 添加的路由链接，在项目编译后，其实就是`<a>`标记的元素，我们可以通过 css，来给页面添加样式
