<template>
  <h3>{{ processStatus }}</h3>
</template>

<script>
export default {
  data() {
    return {
      name: 'computed:组件里的计算属性',
    };
  },

  computed: {
    processStatus() {
      return this.name === 'computed'
        ? 'VUE lesson 2-5、'
        : 'VUE lesson 2-5、 computed:组件里的计算属性';
    },
  },

  created() {
    console.log('App组件已经被创建');
  },
};
</script>
