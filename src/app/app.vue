<template>
  <div>
    <h3>{{ title }}</h3>
    <div v-for="(post, index) in postsList" :key="index">
      <div>
        <small>{{ index + 1 }} - </small> {{ post.title }} --
        {{ post.content }} --- {{ post.user.name }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      title: '前端应用 #9：请求接口',
      postsList: [],
    };
  },

  created() {
    axios.get('http://localhost:3001/posts').then((response) => {
      this.postsList = response.data;
      console.log(this.postsList);
    });
  },
};
</script>

<style>
@import './styles/app.css';
</style>
