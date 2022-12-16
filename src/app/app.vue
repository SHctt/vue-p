<template>
  <div>
    <h3>{{ name }}</h3>
    {{ processStatus }}
    <button @click="setName">点击重置标题</button>
    <button @click="resetName">点击变换标题</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '2.6-watch 属性：vue组件里的数据监视器',
      dat: '当前状态',
    };
  },

  methods: {
    setName() {
      this.name = '重置标题';
    },
    resetName() {
      this.name = '2.7 v-on:处理vue组件里发生的事情（事件处理）';
    },
  },

  created() {
    console.log('App组件已经被创建');
    setTimeout(() => {
      this.dat = '变一下';
    }, 3000);
  },

  computed: {
    processStatus() {
      return this.dat === '状态' ? '当前状态' : '初始化状态';
    },
  },

  watch: {
    dat(newDat, oldDat) {
      console.log(`dat的值发生了变化: ${oldDat} -> ${newDat}`);
    },
  },
};
</script>

<style>
button {
  margin: 4px;
}
</style>
