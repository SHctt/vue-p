<template>
  <div>
    <h3>{{ name }}</h3>
    <app-input v-model="username" />
    <span>输入的文字是{{ username }}</span>
  </div>
</template>

<script>
import AppInput from './component/app-input.vue';
export default {
  data() {
    return {
      name: 'Vue.js 前端应用 #4 components',
      username: '',
    };
  },

  components: { AppInput },
};
</script>

<style>
@import './styles/app.css';
</style>
