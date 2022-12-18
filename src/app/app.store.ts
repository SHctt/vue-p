import { createStore } from 'vuex';

// 创建 Store
const store = createStore({
  state: {
    name: 'Vue.js 前端应用 #6：数据管理',
  },

  getters: {
    newName(state) {
      return `getters${state.name}`;
    },
  },
});

export default store;
