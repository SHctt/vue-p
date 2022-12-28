import { createStore } from 'vuex';
import { postStoreModule, PostStoreState } from '@/post/post.store';

// 导出并申明state的类型
export interface RootState {
  appName: string;
  post: PostStoreState;
}

// 创建store
const store = createStore({
  state: {
    appName: '应用的数据管理（Vuex）：创建与使用 Store',
  } as RootState,

  modules: {
    post: postStoreModule, //使用post命名导入的store模块
  },
});

// 导出store
export default store;
