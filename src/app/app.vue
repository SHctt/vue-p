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
import { axios } from '@/app/app.service';
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
      const response = await axios.get('/posts');
      this.postsList = response.data;
      console.log(axios.defaults);
    } catch (error) {
      this.errorMessage = error.message;
    }
  },
};
</script>

<style>
@import './styles/app.css';
</style>
