import { createStore } from 'vuex';

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
    getName(context) {
      context.commit('setLoading', true);
      setTimeout(() => {
        const nameInActions = '在Actions中定义获取name的值的方法';

        // 调用mutations中定义的setName
        context.commit('setName', nameInActions);
        context.commit('setLoading', false);
        console.log(context);
      }, 2000);
    },
  },
});

export default store;
