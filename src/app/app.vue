<template>
  <div>
    <h3>{{ name }}</h3>
    <component :is="userComponent"></component>
    <small @click="onClickHintText">{{ hintText }}</small>
  </div>
</template>

<script>
import UserProfile from './component/UserProfile.vue';
import UserLogin from './component/UserLogin.vue';
import UserRegister from './component/UserRegister.vue';
export default {
  data() {
    return {
      name: 'Vue.js 前端应用 #4 components',
      userComponent: 'UserLogin',
      hintText: '还没有账户，点击注册',
    };
  },

  methods: {
    onClickHintText() {
      switch (this.userComponent) {
        case 'UserRegister':
          this.userComponent = 'UserLogin';
          this.hintText = '还没有账户，点击注册';
          break;
        case 'UserLogin':
          this.userComponent = 'UserRegister';
          this.hintText = '已有账户，点击登陆';
          break;
      }
    },
  },

  components: {
    UserProfile,
    UserLogin,
    UserRegister,
  },
};
</script>

<style>
@import './styles/app.css';
</style>
