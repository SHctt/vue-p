<template>
  <post-list></post-list>
</template>

<script>
import { defineComponent } from 'vue';
import postList from './components/post-list.vue';

export default defineComponent({
  title() {
    return '内容列表';
  },

  components: {
    postList,
  },
});
</script>
