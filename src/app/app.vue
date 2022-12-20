<template>
  <div>
    <h3 @click="title = 'Composition API：组合式接口'">
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  setup() {
    const title = 'Vue.js 前端应用 #8： 反应系统';
    return {
      title,
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
