import { createStore } from 'vuex';
import { postStoreModule } from '../post/post.store';

// 创建store
const store = createStore({
  state: {
    appName: '应用的数据管理（Vuex）：创建与使用 Store',
  },

  modules: {
    postStoreModule,
  },
});

// 导出store
export default store;
