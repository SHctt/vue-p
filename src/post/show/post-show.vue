<template>
  <div v-if="showPost">
    <h1>{{ post.title }}</h1>
    <small>{{ post.user.name }}</small>
    <div>{{ post.content }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  title() {
    if (this.showPost) {
      return this.post.title;
    }
  },

  props: {
    postId: String,
  },

  created() {
    this.getPostById(this.postId);
  },

  computed: {
    ...mapGetters({
      loading: 'post/show/loading',
      post: 'post/show/post',
    }),
    showPost() {
      return !this.loading && this.post ? true : false;
    },
  },

  methods: {
    ...mapActions({
      getPostById: 'post/show/getPostById',
    }),
  },
});
</script>
