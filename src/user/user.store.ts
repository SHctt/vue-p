import { Module } from 'vuex';
import { RootState } from '@/app/app.store'; //导入RootState这个数据的类型

// 定义UserState这个数据类型,这个数据类型中，包含currentUser这个数据
export interface UserState {
  currentUser: string;
}

// 创建模块，模块包含UserState和 RootState这两个数据类型
const store: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    currentUser: '',
  },

  getters: {
    returnCurrentUser(state) {
      return `输出${state.currentUser}`;
    },
  },

  mutations: {
    setUserName(state, data) {
      state.currentUser = data;
    },
  },

  actions: {
    getUserName(context) {
      const user = 'yum';
      context.commit('setUserName', user);
    },
  },
};

export default store;
