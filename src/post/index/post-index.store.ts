import { PostItem } from '@/post/post.store';
import { Module } from 'vuex';
import { appHttpClient } from '@/app/app.service';
import { RootState } from '@/app/app.store';

export interface PostIndexStoreState {
  loading: boolean;
  posts: Array<PostItem>;
}

export const postIndexStoreModule: Module<PostIndexStoreState, RootState> = {
  namespaced: true,

  // 准备数据
  state: {
    loading: false,
    posts: [],
  } as PostIndexStoreState,

  // 创建getters，用于在组件中展开数据
  getters: {
    loading(state) {
      return state.loading;
    },

    posts(state) {
      return state.posts;
    },
  },

  // 创建数据修改器
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setPosts(state, data) {
      state.posts = data;
    },
  },

  // 定义获取数据的动作，将数据修改为从服务器获取到的数据
  actions: {
    async getPosts({ commit }) {
      // commit数据修改器setLoading的修改动作，使loading的值变为true
      commit('setLoading', true);

      try {
        // 连接服务端，并获取数据
        const response = await appHttpClient.get('/posts');

        // commit数据修改器setPosts的修改动作，使posts的值变为从服务端获取到的数据
        commit('setPosts', response.data);
        commit('setLoading', false);

        return response;
      } catch (error) {
        commit('setLoading', false);
        throw error.response;
      }
    },
  },
};
