<template>
  <post-list-item
    v-for="post in posts"
    :item="post"
    :key="post.id"
  ></post-list-item>
</template>

<script>
import { defineComponent } from 'vue';
import postListItem from './post-list-item.vue';
import { appHttpClient } from '@/app/app.service';

export default defineComponent({
  data() {
    return {
      posts: [],
    };
  },

  async created() {
    const response = await appHttpClient.get('/posts');

    this.posts = response.data;
  },

  components: { postListItem },
});
</script>
