<template>
  <div>
    <component :is="currentComponent"></component>
    <small @click="onClickHintText">{{ hintText }}</small>
  </div>
</template>
<script>
import UserLogin from './UserLogin.vue';
import UserRegister from './UserRegister.vue';

export default {
  data() {
    return {
      currentComponent: 'UserLogin',
      hintText: '还没有帐户，点击注册',
    };
  },
  methods: {
    onClickHintText() {
      switch (this.currentComponent) {
        case 'UserRegister':
          this.currentComponent = 'UserLogin';
          this.hintText = '还没有帐户，点击注册';
          break;
        case 'UserLogin':
          this.currentComponent = 'UserRegister';
          this.hintText = '已有帐户，点击登录';
          break;
      }
    },
  },
  components: {
    UserLogin,
    UserRegister,
  },
};
</script>
