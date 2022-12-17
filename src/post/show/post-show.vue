<template>
  <div>内容详情</div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params.postId);
  },
};
</script>
