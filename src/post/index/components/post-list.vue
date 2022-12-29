<template>
  <post-list-item></post-list-item>
</template>

<script>
import { defineComponent } from 'vue';
import postListItem from './post-list-item.vue';

export default defineComponent({
  components: { postListItem },
});
</script>
