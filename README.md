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

## 5.4 用代码切换路由地址（$router.push 与 $router.replace）

除了用 router-link 创建的路由链接打开路由地址以外，我们也可以在 Vue 组件里使用代码的方式切换路由地址。

例如：这里将 index 组件上的这个文字标签添加`@click`事件，在这个事件里，我们可以使用`this.$router.replace('/about')`或者`this.$router.push('/about')`这样的方式，让点击这个文字的时候，将路由地址切换成`/about`

这两个方法类似，区别在于 push 方法会添加新的浏览历史，但是 replace 方法会替换掉当前的这个浏览历史。

## 5.5 给路由起个名字

在 Vue 应用里定义路由的时候可以给路由起个名字,

例如：在定义路由的对象中可以绑定一个 name 属性，它的值就是这个路由的名字。
这样，就可以在 router-link 中，通过`:to="{ name: 'about' }"`这样，绑定 to 的对象参数的形式，来访问路由定义的 path

可以想见的是，这种方式的好处就是，在项目不断开发的过程中，path 可能会发生变化，如果全部都是直接引用 path，可能会有很多地方需要修改；
同时，开发中，遇到带参数的 path，直接引用 path 可能也不太方便
