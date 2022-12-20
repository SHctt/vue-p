<template>
  <div>
    <h3 @click="title = '声明具有反应特性的数据（ref）'">
      {{ title }}
    </h3>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const title = ref('Vue.js 前端应用 #8： 反应系统');
    // 先在控制台看看title
    console.log(title);
    // console.log(title.value);

    return {
      title, //绑定输出的title，vue会自动处理成为输出title.value
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
