import { RootState } from '@/app/app.store';
import { Module } from 'vuex';
import { appHttpClient } from '../../app/app.service';

export interface PostShowStoreState {
  loading: boolean;
  post: Post;
}

export interface Post {
  id: number;
  title: string;
  content: string;
}

export const postShowStoreModule: Module<PostShowStoreState, RootState> = {
  namespaced: true,

  state: {
    loading: false,
    post: {},
  } as PostShowStoreState,

  getters: {
    loading(state) {
      return state.loading;
    },

    post(state) {
      return state.post;
    },
  },

  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setPost(state, data) {
      state.post = data;
    },
  },

  actions: {
    async getPostById({ commit }, postId) {
      commit('setLoading', true);

      try {
        const response = await appHttpClient.get(`/posts/${postId}`);

        commit('setPost', response.data);
        commit('setLoading', false);

        return response;
      } catch (error) {
        commit('setLoading', false);
        throw error.response;
      }
    },
  },
};
