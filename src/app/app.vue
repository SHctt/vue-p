<template>
  <div>
    <h3>{{ name }}</h3>
    <div>
      <textarea v-model="content"></textarea>
      <span> -> {{ content }} </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Vue.js前端应用#3:forms表单元素',
      content: '初始文本',
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
