<template>
  <div>
    <h3>{{ name }}</h3>
    <user-profile />
  </div>
</template>

<script>
import UserProfile from './component/UserProfile.vue';
export default {
  data() {
    return {
      name: 'Vue.js 前端应用 #4 components',
    };
  },

  components: { UserProfile },
};
</script>

<style>
@import './styles/app.css';
</style>
