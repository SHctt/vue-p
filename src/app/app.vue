<template>
  <div>
    <h3>{{ name }}</h3>
    {{ processStatus }}
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
