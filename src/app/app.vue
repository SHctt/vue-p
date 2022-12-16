<template>
  <h3>{{ name }}</h3>
</template>

<script>
export default {
  data() {
    return {
      name: 'VUE lesson 2-4、 methods:在methods对象中定义方法',
    };
  },

  created() {
    console.log('3秒后，调用setName（）这个方法定义的标题');

    this.setName();
  },

  methods: {
    setName() {
      setTimeout(() => {
        this.name =
          'VUE lesson 2-4、 在methods:对象中定义setName（）方法，被created（）这个生命周期调用';
      }, 3000);
    },
  },
};
</script>
