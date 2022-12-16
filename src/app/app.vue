<template>
  <div>
    <h3>{{ name }}</h3>
    <AppButton />
    <app-button />
    <AppButton></AppButton>
    <app-button></app-button>
    <app-demo-button></app-demo-button>
  </div>
</template>

<script>
import AppButton from './component/app-button.vue';
import AppDemoButton from './component/app-demo-button.vue';

export default {
  data() {
    return {
      name: 'Vue.js 前端应用 #4 components',
    };
  },

  components: {
    AppButton,
    AppDemoButton,
  },
};
</script>

<style>
@import './styles/app.css';
</style>
