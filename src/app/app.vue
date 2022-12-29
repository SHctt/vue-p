<template>
  <div>
    <h3>{{ proTitle }}</h3>
    <div>
      <router-link :to="{ name: 'home' }">home |</router-link>
      <router-link :to="{ name: 'postsIndex' }"> posts</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      proTitle: 'Vue.js 前端应用#12：应用架构',
    };
  },

  created() {
    console.log(this.$store.state);
  },
};
</script>

<style>
@import './styles/app.css';
</style>
