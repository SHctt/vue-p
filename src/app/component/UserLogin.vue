<template>
  <div>
    <div>用户登陆</div>
    <input type="text" ref="userName" />
    <input type="text" />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$refs);
    this.$refs.userName.focus();
  },
};
</script>
