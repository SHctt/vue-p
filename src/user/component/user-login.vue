<template>
  <div>
    <input type="text" placeholder="用户名" v-model="name" />
    <input type="password" placeholder="密码" v-model="password" />
    <button @click="login">登陆</button>
  </div>
</template>

<script>
import { appPostsClient } from '@/app/app.service';
export default {
  data() {
    return {
      name: '',
      password: '',
    };
  },

  methods: {
    async login() {
      console.log(this.name, this.password);

      //login的post请求
      try {
        const response = await appPostsClient.post('/login', {
          name: this.name,
          password: this.password,
        });
        console.log(response.data);

        // 登陆成功事件
        this.$emit('loginSuccess', response.data);
      } catch (error) {
        this.errorMessage = error.message;

        // 登陆失败事件
        this.$emit('loginError', error.response);
      }
    },
  },
};
</script>
