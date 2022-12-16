<template>
  <div>
    <h3>{{ name }}</h3>
    {{ processStatus }}
    <h5>------以下演示v-on组件的事件处理------</h5>
    <button @click="setName">点击重置标题</button>
    <button @click="resetName">点击变换标题</button>
    <h5>------以下演示v-for显示内容列表------</h5>
    <div v-for="(post, index) in postList" :key="index">
      {{ post.id }}-{{ post.content }}- <small> {{ post.author }} </small>
    </div>
    <h5>------以下演示v-if按条件显示内容------</h5>
    <div v-if="showOrHide">按条件显示的内容元素</div>
    <button @click="showOrHide = !showOrHide">
      {{ showOrHide ? '隐藏内容' : '显示内容' }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '2.9 v-if:按条件显示内容',
      dat: '当前状态',
      showOrHide: false,
      postList: [
        {
          id: 1,
          content: '故人西辞黄鹤楼，烟花三月下扬州',
          author: '李白',
        },
        {
          id: 2,
          content: '好雨知时节，当春乃发生',
          author: '杜甫',
        },
        {
          id: 3,
          content: '浔阳江头夜送客，枫叶荻花秋瑟瑟',
          author: '白居易',
        },
      ],
    };
  },

  methods: {
    setName() {
      this.name = 'v-on:重置标题事件';
    },
    resetName() {
      this.name = 'v-on:变换标题事件';
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
