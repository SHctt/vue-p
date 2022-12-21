<template>
  <div>
    <h3>{{ title }}</h3>
    <div v-for="(post, index) in postsList" :key="index">
      <div>
        <small>{{ index + 1 }} - </small> {{ post.title }} --
        {{ post.content }} --- {{ post.user.name }}
      </div>
    </div>
    <div>{{ errorMessage }}</div>
  </div>
</template>

<script>
import { appPostsClient } from '@/app/app.service';
export default {
  data() {
    return {
      title: '前端应用 #9：请求接口',
      postsList: [],
      errorMessage: '',
      user: {
        name: '张三',
        password: '123123',
      },
      token: '',
    };
  },

  async created() {
    try {
      const response = await appPostsClient.get('/posts');
      this.postsList = response.data;
      // console.log(appPostsClient);
    } catch (error) {
      this.errorMessage = error.message;
    }

    //login的post请求
    try {
      const response = await appPostsClient.post('/login', this.user);
      this.token = response.data.token;
      console.log(response.data);
    } catch (error) {
      this.errorMessage = error.message;
    }
  },
};
</script>

<style>
@import './styles/app.css';
</style>
