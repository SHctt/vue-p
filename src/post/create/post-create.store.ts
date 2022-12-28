import { RootState } from '@/app/app.store';
import { Module } from 'vuex';

// 导出并申明state的类型
export interface PostCreateStoreState {
  loading: boolean;
}
export const postCreateStoreModule: Module<PostCreateStoreState, RootState> = {
  namespaced: true, //启用命名空间

  state: {
    loading: false,
  } as PostCreateStoreState, //将这个state定义为申命的类型

  getters: {
    loading(state) {
      return state.loading;
    },
  },
};
