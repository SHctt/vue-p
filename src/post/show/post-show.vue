<template>
  <div>内容详情{{ postId }}</div>
</template>

<script>
export default {
  props: {
    postId: String,
  },
  created() {
    console.log(this.$route.params.postId);
  },
};
</script>
