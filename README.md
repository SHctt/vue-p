# Vue.js 前端应用 #7：过渡和动画

清理，空白的 vue 项目，新分支 transition_animation

## 7.1 准备演示用的组件

添加一个带按钮的卡片组件

## 7.2 过渡：基于 Class 的过渡

我们可以动态的在组件的元素上面添加类，在组件的样式里可以设计一下这个类的样式，给它添加点过渡或者动画的样式。这样在元素上添加或者移除这个类的时候就会应用一个过渡或者动画效果了。

## 7.3 动画：基于 Class 的动画

通过定义`@keyframes`添加一个 css 的动画

## 7.4 transition：进入与离开过渡

vi-if 指令可以，可以决定界面上是否显示某个元素，但是在 vue 中，使用 vi-if 控制的元素，在生效移除的时候，界面上会彻底移除这个元素标签。
以上基于 css 达成的隐藏效果是通过设置 opacity 属性，让元素的透明度变成 0，但元素的标签还是留在页面上。

所以，当我们想要某个元素移除时产生一定的过滤效果，就需要借助 vi-if 在 vue 中本身的一些特性

例如：这里用到 vue 提供的 transition 组件
当使用一组 transition 标签包裹住含有 v-if 指令的元素后，元素在被移除的过程中，会添加 v-leave-active 和 v-leave-to 的类。当元素出现或者说进入的过程中，元素会添加 v-enter-active 和 v-enter-to 的类；
因此，我们可以通过对定义这些类来实现过渡的效果

## 7.5 transition：指定过渡效果的名字

可以在 transition 标签上，定义一个 name 属性，这样过度效果过程中的 v-leave...或 v-enter...会变成自定义名字前缀的类名；

## 7.6 transition：进入与离开动画

元素或者组件进入还有离开的时候，除了可以使用 css 的过渡，也可以使用 css 动画。

## 7.7 使用第三方提供的动画效果-animate.css

可以在这个地址
https://github.com/animate-css/animate.css/blob/main/animate.css
将这个第三方的动画效果库复制到项目中，

可以在这个地址
https://animate.style/
去预览动画的效果

注意使用的命名格式
