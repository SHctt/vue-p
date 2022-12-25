<template>
  <div>
    <h3>{{ projectTitle }}</h3>
    <userLogin
      v-if="!isLoggedIn"
      @loginSuccess="onLoginSuccess"
      @loginError="onLoginError"
    />
    <div v-if="currentUser ? true : false">
      当前用户：{{ currentUser.name }}
    </div>
    <div v-if="isLoggedIn">
      <input type="text" v-model="newPost.title" placeholder="请输入标题" />
      <input type="text" v-model="newPost.content" placeholder="请输入内容" />
      <button @click="createPost">提交新文章</button>
    </div>
    <div v-for="(post, index) in postsList" :key="index">
      <div>
        <small>{{ index + 1 }} - </small> {{ post.title }} --
        {{ post.content }} --- {{ post.user.name }}
        <input
          type="text"
          :value="post.title"
          @keyup.enter="updatePostTitle($event, post.id)"
        />
        <button @click="deletePost(post.id)">删除</button>
      </div>
    </div>
    <div v-if="showError">{{ errorMessage }}</div>
  </div>
</template>

<script>
import { appPostsClient } from '@/app/app.service';
import userLogin from '@/user/component/user-login.vue';
export default {
  data() {
    return {
      projectTitle: 'Vue.js 前端应用 #10：身份验证',
      postsList: [],
      errorMessage: '',
      currentUser: null,
      // user: {
      //   name: 'yum',
      //   password: '123123',
      // },
      token: '',
      newPost: { title: '', content: '' },
    };
  },

  computed: {
    isLoggedIn() {
      return this.token ? true : false;
    },
    showError() {
      return this.errorMessage ? true : false;
    },
  },

  methods: {
    async getCurrentUser(userId) {
      try {
        const response = await appPostsClient.get(`/users/${userId}`);

        this.currentUser = response.data;
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    onLoginSuccess(data) {
      this.getCurrentUser(data.id);
      this.token = data.token;
    },

    onLoginError(error) {
      this.errorMessage = error.data.message;
    },

    async deletePost(postId) {
      try {
        await appPostsClient.delete(`posts/${postId}`, {
          headers: { Authorization: `Bearer ${this.token}` },
        });

        this.getPost();
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    async updatePostTitle(event, postId) {
      try {
        console.log(event.target.value);
        console.log(postId);
        await appPostsClient.patch(
          `/posts/${postId}`,
          {
            title: event.target.value,
          },
          {
            headers: { Authorization: `Bearer ${this.token}` },
          },
        );

        this.getPost();
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

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
  },

  components: {
    userLogin,
  },
};
</script>

<style>
@import './styles/app.css';
</style>
