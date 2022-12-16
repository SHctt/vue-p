# Vue.js 前端应用#3:forms 表单元素

清理，并添加表单的样式

## 3.1 文本框

添加一个文本框，并使用`v-model`，将文本框被输入的内容实时显示在组件上

## 3.2 `textarea`多行文本区域

添加一组`textarea`多行文本区域，同样也可以使用`v-model`，将输入的内容实时显示在组件上

## 3.3 复选框 checkbox

添加一个 `checkbox`，并为之添加一个 `label`。要使点击 `label` 也可以切换状态，需要在 `label` 上添加`for`等于`checkbox`的`id`

## 3.4 多值复选框

定义一个`tags`的空的数组，收集所有`v-model`是`tags`的复选框中`value`的值。

## 3.5 单选按钮

定义`sex`代表性别数据，`v-model`等于`sex`的单选按钮中，按钮被选中，`value`的值将会被传递给`sex`

## 3.6 select:下拉菜单

将`select`中`option`的`value`值，传递给`v-model`

---

## input 事件：元素的值发生变化时，发生的事情

在 input，textarea，或者 select 这些表单元素上，可以绑定元素的 input 事件，元素的值发生变化的时候就会触发这个事件，你可以绑定这个事件，然后设置一下在这种事件发生的时候要做的事情

本节的 input，textarea，或者 select 这些表单元素上，都绑定了输出`event`到控制台上的 input 事件，观察控制台上的输出，可以看到相关事件信息
