<template>
  <div>
    <h3>{{ name }}</h3>
    <AppButton
      text="确定"
      @tap="onTapAppButton"
      @init="onInitAppButton"
    ></AppButton>
  </div>
</template>

<script>
import AppButton from './component/app-button.vue';
export default {
  data() {
    return {
      name: 'Vue.js 前端应用 #4 components',
    };
  },

  methods: {
    onTapAppButton(text) {
      console.log('监听到子组件的tap事件', text);
    },
    onInitAppButton() {
      console.log('监听到子组件的init事件');
    },
  },

  components: {
    AppButton,
  },
};
</script>

<style>
@import './styles/app.css';
</style>
