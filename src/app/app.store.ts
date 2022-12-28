import { createStore } from 'vuex';

// 创建store
const store = createStore({
  state: {
    appName: '应用的数据管理（Vuex）：创建与使用 Store',
  },
});

// 导出store
export default store;
