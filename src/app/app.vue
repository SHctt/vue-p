<template>
  <div>
    <h3>{{ proTitle }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      proTitle: 'Vue.js 前端应用#12：应用架构',
    };
  },

  created() {
    console.log(this.$store.state);
  },
};
</script>

<style>
@import './styles/app.css';
</style>
