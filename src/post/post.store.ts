import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import {
  postCreateStoreModule,
  PostCreateStoreState,
} from './create/post-create.store';

// 导出并申明state的类型
export interface PostStoreState {
  create: PostCreateStoreState;
}
export const postStoreModule: Module<PostStoreState, RootState> = {
  namespaced: true, //启用命名空间

  modules: {
    create: postCreateStoreModule, //使用create命名导入的store模块
  },
};
