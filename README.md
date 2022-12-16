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

## 3.7 input 事件：元素的值发生变化时，发生的事情

在 input，textarea，或者 select 这些表单元素上，可以绑定元素的 input 事件，元素的值发生变化的时候就会触发这个事件，你可以绑定这个事件，然后设置一下在这种事件发生的时候要做的事情

本节的 input，textarea，或者 select 这些表单元素上，都绑定了输出`event`到控制台上的 input 事件，观察控制台上的输出，可以看到相关事件信息

## 3.8 change 事件： 当用户提交了修改元素值时，发生的事件

用户确定修改了表单元素值的时候，会在元素上触发一个 change 事件。不同的表单元素，触发这个 change 事件的行为会不太一样。在元素上发生这个事件不像 input 事件那么频繁，因为只有在表单元素的值发生变化，并且用户需要做某种确定动作以后，才会触发这个 change 事件。

本节，将 textarea 的 change 事件，改成在控制台输出`event.target.value`的值

## 3.9 keyup 事件： 按过某个按键后发生的事件

这个事件中记录包含了用户使用了哪些按键

类似还有 keydown 事件，表示按键被按下时就发生的事件等等

我们也可以使用`@keyup.enter`去定义，用户按了`enter`按键后发生的事件,当然也可以定义按下其他按键时发生的事件

---

## 3.10 理解在表单元素上用的 v-model 指令

Vue 提供的 v-model 指令可以在表单元素上绑定数据，表单元素的数据发生变化的时候会自动修改绑定在元素上的数据

本节，我们使用 input 事件的方式，来实现 v-model 指令同样的效果

## 3.11 v-model 的修饰符：.lazy

使用`v-model.lazy`，元素的事件监听行为就时 change 事件，效果就是，在用户提交了数据后，元素的值才会发生变化

## 3.12 v-model 的修饰符：.number

一般，我们使用了`v-model`指令一个数据后，会自动将数据的类型转化为`string`格式；
使用`v-model.number`后，如果输入的内容还是数字，可以保持得到的数据类型依然是数字型（ps：就算使用了`.number`，如果再输入的内容不实数字，类型依然会变成`string`）
