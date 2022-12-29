<template>
  <div v-if="loading">加载中...</div>
  <post-list-item
    v-for="post in posts"
    :item="post"
    :key="post.id"
  ></post-list-item>
</template>

<script>
import { defineComponent } from 'vue';
import postListItem from './post-list-item.vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  async created() {
    this.getPosts();
  },

  computed: {
    ...mapGetters({
      loading: 'post/index/loading',
      posts: 'post/index/posts',
    }),
  },

  methods: {
    ...mapActions({
      getPosts: 'post/index/getPosts',
    }),
  },

  components: { postListItem },
});
</script>
