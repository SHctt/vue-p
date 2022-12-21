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

  created() {
    axios
      .get('http://localhost:3001/posts1')
      .then((response) => {
        this.postsList = response.data;
        // console.log(response);
      })
      .catch((error) => {
        // console.log(error.message);
        // console.log(error.response);
        if (error.response.status === 404) {
          this.errorMessage = '数据连接失败，错误的接口地址';
        }
      });
  },
};
</script>

<style>
@import './styles/app.css';
</style>
