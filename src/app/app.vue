<template>
  <div>
    <h3 @click="title = '声明具有反应特性的数据（ref）'">
      {{ title }}
    </h3>
    <div @click="user.name = 'rogolezhou'">{{ user.name }}</div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const title = ref('Vue.js 前端应用 #8： 反应系统');

    const user = reactive({
      name: 'yumfok',
    });
    console.log(title);
    console.log(user);
    // console.log(title.value);

    return {
      title,
      user, //让组件可以绑定输出user
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
