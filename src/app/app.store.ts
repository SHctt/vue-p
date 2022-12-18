import { createStore } from 'vuex';

// 创建 Store
const store = createStore({
  state: {
    name: '',
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
  },

  actions: {
    getName(context) {
      const nameInActions = '在Actions中定义获取name的值的方法';

      // 调用mutations中定义的setName
      context.commit('setName', nameInActions);
    },
  },
});

export default store;
