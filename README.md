# 组件基础

启动一个全新的 vue 项目，项目参考为https://github.com/ninghao/ninghao-vue.git，这里我们从start这个远程分支创建初始项目。

## 2.1-准备项目

拷贝 starter 分支下的相关文件到项目目录下。

### 初始化项目

```
yarn install
```

## 2.2-创建 vue 应用实例

main.ts 入口文件
app/app.vue 根组件（主组件）

```
yarn serve
```

## 2.2-data（）：vue 组件里的数据

在 app.vue 里面使用一组`<script>`标签，标签中就可以添加相关的 javascript 代码。在这里，我们可以到处导出一个默认的函数。在这个函数中，可以直接使用 vue 的`data()`方法，返回相应的对象数据，返回的这个对象中的数据，就可以直接在`<temptele>`中调用。

## 2.3-created（）:组件的生命周期方法

vue 在组件中提供了一些生命周期的方法，就是可以在组件的不同阶段去做一些不同的事情。详细的生命周期方法介绍可以查看：https://cn.vuejs.org/api/options-lifecycle.html

这里，本节主要演示`created`，也就时组件在被创建以后，就会执行的一些事情。

## 2.4-methods 对象，组件里的方法（函数）

我们可以添加一个`methods`对象，在这个对象中，我们可以自定义一些函数，这些函数也就可以在其他地方被调用的方法。

例如本节，我们就会将‘3 秒后变换标题’的这个`setName()`函数，定义在`methods`这个对象中，最终这个函数将在`created()`这个生命周期中被调用

## 2.5-computed 属性:组件里的计算属性

在`computed`这个属性对象中，可以添加一些计算方法，在本节的演示中，先在`computed`定义了计算方法`processStatus()`,这个计算方法就时检查`data`中的`name`的值是否等于指定的值，在实际的应用中，可以用类似的方法初始化数据；

注意：同样的`processStatus()`也可以在 motheds 中被定义，在单一的模版调用时，会有相同的结果。不同之处可以详情参考：https://cn.vuejs.org/guide/essentials/computed.html

## 2.6-watch 属性：vue 组件里的数据监视器

可以使用`watch`属性去监视数据发生的变化，在本节的实例中，我们使用`computed`属性计算了`dat`这个数据的值，在`created()`方法中，让组件的值在 3 秒后发生变化，在控制台输出的结果中可以表明，数据被创建后，在 3 秒后会发生变化，被控制台输出了，而在`computed`赋值计算产生的变化，并没有被侦听；

ps:在数据的侦听方法中，第一个参数是变化后的值，一开始弄错了。

## 2.7-v-on:处理 vue 组件里发生的事件（事件处理）

在 vue 的组件元素上，可以使用`v-on`绑定一些事件，例如本节就会演示，点击一个按钮，将会使标题数据发生变化

写法说明：`v-on:click` 等效于 `@click`

`v-on`的深度用法示例参考：https://cn.vuejs.org/guide/essentials/event-handling.html

## 2.8 v-for:在 vue 组件里显示内容的列表

先准备一个数据列表，一般这个数据列表都是来自服务端，这里我们将这个列表数组直接添加在 data 中演示

```
<div v-for="(post,index) in postList" :key="index">
      {{ post.id }}-{{ post.content }}- <small> {{ post.author }} </small>
    </div>
```

`post`:是为在`postList`这个数组列表中的项目定义的名字
`index`:将`postList`数组列表的序号定义为`index`

v-for 使用时，必须定义一个`:key`的值，这里的 key 必须为唯一值，这里我们可以使用`index`,当然`post`数据本身也有一个`id`属性，本来也是唯一值。也可以被当作`:key`
