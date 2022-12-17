<template>
  <div class="page">
    <div class="page-header">
      <h3 class="brand">{{ name }}</h3>
      <div class="menu">
        <router-link class="menu-item" to="/">首页</router-link>
        <router-link class="menu-item" :to="{ name: 'aboutUs' }"
          >重定向</router-link
        >
        <router-link class="menu-item" :to="{ name: 'about' }"
          >关于我们</router-link
        >
        <router-link class="menu-item" :to="{ name: 'postIndex' }"
          >bolg</router-link
        >
      </div>
    </div>
    <div class="page-body">
      <router-view> </router-view>
    </div>
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
