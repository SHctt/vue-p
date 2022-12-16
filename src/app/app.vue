<template>
  <h3>{{ name }}</h3>
</template>

<script>
export default {
  data() {
    return {
      name: 'VUE lesson 2-2、 data()方法返回数据',
    };
  },

  created() {
    console.log('3秒后，本节标题将会替代原有标题');

    setTimeout(() => {
      this.name =
        'VUE lesson 2-3、 created()组件被创建后这个生命周期所执行的方法';
    }, 3000);
  },
};
</script>
