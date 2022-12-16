# Vue.js 前端应用 #4 高级组件

清理，准备开始 components 项目

## 4.1 定义与使用 vue 组件

SFC: 在 Vue 应用里，一个组件可以是一个单独的文件，这种组件叫 single file component ，单文件组件，简称 SFC。组件就是应用里的一块可以重复使用的界面，你可以定义组件的模板，样式，还有组件可以做的事情

```
<AppButton /> //自关闭的方法，PascalCase 的写法
<app-button /> //kebab-case 的写法
<AppButton></AppButton>//成组的写法，中间可以包装一些东西
<app-button></app-button>
```

## 4.2 组件的样式

可以在组件中直接导入样式文件

```
<style>
@import './button.css';
</style>
```

## 4.3 scoped：限定组件样式的应用范围

```
<style scoped>
...
</style>
```

在这个带有 scoped 属性的标签中包含的样式，只会影响到当前组件内元素的样式。<注意：如果这里使用了`@import`来导入样式表文件，样式表的文件依然会影响到其他组件内的元素>
