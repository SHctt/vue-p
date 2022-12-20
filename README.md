# Vue.js 前端应用 #8： 反应系统

学会使用 Vue 框架新的组合式接口创建 Vue 组件。

## 8.1 JavaScript：Proxy 与 Reflect

在 JavaScript 语言里，你可以基于一个对象去创建一个 Proxy 对象，这样你就可以拦截对这个对象的一些操作了，比如访问或者设置对象属性的时候，你可以做一些额外的检查。

这里我们可以在这个 Vue 组件里试一下 JavaScript 的 Proxy。

## 8.1 理解 Vue 的反应系统

Reactivity System 是 Vue 框架里的一个很重要的功能，可以翻译成反应系统。我们在组件里添加了数据，把它绑定在组件的模板上使用。这个数据的值发生了变化以后，组件会被重新渲染，显示更新之后的内容。

在组件里添加的数据， Vue 都会特别处理一下，让它们拥有反应性。 Vue 用的是 JavaScript 里的 Proxy ，在这个 Proxy 对象里可以设置一些 hander 来处理对这个对象的一些操作。

## 8.2 Composition API：组合式接口

之前我们介绍的创建 Vue 组件用的是 Options API，选项式的接口。就是我们可以在组件里使用 data，computed，watch ，methods 这些选项，定义组件的数据，计算属性，监视数据，还有组件的方法等等。

Vue 3 里面添加了一种新的创建 Vue 组件的方法，就是使用 Composition API，可以翻译成组合式接口。

使用组合式接口的时候，可以在组件里面添加一个 setup 方法，这个 setup 是 Composition API 的入口，组件在创建之前会执行这个方法，这个方法返回的东西都可以在这个组件里使用。

注意：此时的演示代码中，元素的 click 事件失效了
