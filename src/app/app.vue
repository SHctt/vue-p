<template>
  <div>
    <h3 @click="title = '理解 Vue 的反应系统'">
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vue.js 前端应用 #8： 反应系统',
    };
  },

  created() {
    console.log(this.$data);
  },
};
</script>

<style>
@import './styles/app.css';
</style>
