<template>
  <div @click="onClickText">首页</div>
</template>

<script>
export default {
  methods: {
    onClickText() {
      // this.$router.push('/about');
      this.$router.replace('/about');
    },
  },
};
</script>
