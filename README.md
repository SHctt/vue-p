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
