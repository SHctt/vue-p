<template>
  <div>
    <h3>{{ name }}</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Vue.js 前端应用 #5：应用路由',
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
