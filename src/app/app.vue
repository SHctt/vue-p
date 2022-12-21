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
import axios from 'axios';
export default {
  data() {
    return {
      title: '前端应用 #9：请求接口',
      postsList: [],
      errorMessage: '',
    };
  },

  async created() {
    try {
      const response = await axios({
        method: 'get',
        url: '/posts',
        baseURL: 'http://localhost:3001',
        // headers: {
        //   'X-Custom:': 'hello~',
        // },
      });
      this.postsList = response.data;
    } catch (error) {
      this.errorMessage = error.message;
    }
  },
};
</script>

<style>
@import './styles/app.css';
</style>
