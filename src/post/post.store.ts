import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import {
  postCreateStoreModule,
  PostCreateStoreState,
} from './create/post-create.store';
import { postIndexStoreModule } from './index/post-index.store';
import { postShowStoreModule } from './show/post-show.store';

// 导出并申明state的类型
export interface PostStoreState {
  create: PostCreateStoreState;
}

export interface PostItem {
  id: number;
  title: string;
  content: string;
}

// 导出并创建模块
export const postStoreModule: Module<PostStoreState, RootState> = {
  namespaced: true, //启用命名空间

  modules: {
    create: postCreateStoreModule, //使用create命名导入的store模块
    index: postIndexStoreModule, //使用index命名导入的store模块
    show: postShowStoreModule,
  },
};
