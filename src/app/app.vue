<template>
  <div>
    <h3>{{ projectTitle }}</h3>
    <div @keyup.enter="createPost">
      <input type="text" v-model="newPost.title" />
      <input type="text" v-model="newPost.content" />
      <!-- <button @click="createPost">提交新文章</button> -->
    </div>
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
      projectTitle: '前端应用 #9：请求接口',
      postsList: [],
      errorMessage: '',
      user: {
        name: '张三',
        password: '123123',
      },
      token: '',
      newPost: { title: '', content: '' },
    };
  },

  methods: {
    async getPost() {
      try {
        const response = await appPostsClient.get('/posts');
        this.postsList = response.data;
        // console.log(response.data);
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    async createPost() {
      try {
        const response = await appPostsClient.post('/posts', this.newPost, {
          headers: {
            // 添加用户的头部信息
            Authorization: `Bearer ${this.token}`,
          },
        });
        if (response) {
          console.log(response.data);
          // 重置表单
          this.newPost = {};
          // 立刻更新列表
          this.getPost();
        }
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },

  async created() {
    // 初始化列表
    this.getPost();

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
