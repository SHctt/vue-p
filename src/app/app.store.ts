import { createStore, createLogger } from 'vuex';
import user, { UserState } from '@/user/user.store'; //将user.store这个文件，以userD作为模块的名字导入，同时也导入UserState这个数据类型
import { logger } from './app.plugins';

// 定义这个模块中的数据属于RootState这个类型
// 其中有一个可选的user属性，数据类型为UserState
export interface RootState {
  name: string;
  loading: boolean;
  user?: UserState;
}

// 创建 Store
const store = createStore({
  state: {
    name: '',
    loading: false,
  },

  getters: {
    newName(state) {
      return `getters---${state.name}`;
    },
  },

  mutations: {
    setName(state, data) {
      state.name = data;
    },
    setLoading(state, data) {
      state.loading = data;
    },
  },

  actions: {
    getName({ commit, rootState }) {
      commit('setLoading', true);

      console.log(rootState);

      setTimeout(() => {
        const nameInActions = '在Actions中定义获取name的值的方法';

        // 调用mutations中定义的setName
        commit('setName', nameInActions);
        commit('setLoading', false);
        // console.log(context);
      }, 2000);
    },
  },

  // 添加user这个路由模块
  modules: {
    user,
  },

  // 添加vuex自带的插件
  // plugins: [createLogger()],

  // 使用自定义的插件
  plugins: [logger],
});

export default store;
