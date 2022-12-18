# Vue.js 前端应用 #6：数据管理

清理，使用 vuex 来管理 Vue 应用的状态

## 6.1 在 Vue 应用里创建与使用 Store

安装，创建，导入 store

## 6.1 State：数据

在 Vue 应用里需要用的数据，你可以把它放在 Store 的 state 里面，在 state 里的数据，你可以在任何一个 Vue 组件里使用。

## 6.2 mapState 部署数据

mapState 就是将 state 里面的数据，部署到组件中；
当组件中导入 mapState 后，可以在组件的 computed 属性中，使用`...mapState()`这样的方式部署数据；

```
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    nameApp() {
      // 在不使用mapStated的情况下，导入state里面的数据
      return this.$store.state.name;
    },
    ...mapState(['name']), //直接使用state里面的数据名称导入
    // -----
    ...mapState({ appName: 'name' }), //重命名state里面的数据名称
  },
};
</script>
```

## 6.3 Getters：获取器 与 mapGetters

在 Getters 里面，你可以根据 Store 里面已有的数据，做一些加工处理，再让它返回新的数据。在这个 Store 里面，我们可以定义一个获取器，先添加一个 getters 属性，要定义的获取器可以放在这个属性里面。

然后使用 mapGetters 部署到组件中

## 6.4 Mutations：修改器

如果你想修改 Store 里的数据，也就是 Store 里的 state ，必须要通过一种叫 Mutation 的东西。

## 6.5 mapMutations

使用 mapMutations 这个帮手方法可以把 store 里的 mutation 映射成组件里的一个方法。

## 6.6 Actions：动作

在 Vue 的 Store 里，你可以定义一些 Action 去处理应用的数据，比如从服务端接口那里请求获取数据，或者把数据发送给服务端应用的接口。在 Action 里你可以 commit Store 里的 mutaiton 去修改 Store 里的 state ，就是 Store 里的数据。

也就是如果你的应用需要请求服务端接口获取到一些数据，你可以先在 Store 里添加一个表示这个数据的 state，然后再定义一个修改这个 state 用的 mutation ，再定义一个获取数据用的 action，在这个 action 里面请求接口得到了数据以后，可以用 mutation 来修改 store 里的 state。这样你在组件里就可以使用请求回来的数据了。

## 6.7 mapActions

派发执行 Store 里的动作可以使用 dispatch 这个方法。在 Vue 应用的组件里我们可以把在 Store 里定义的 Action 映射成组件的方法。

这里需要用到 vuex 提供的一个帮手方法，叫 mapActions，把它从 vuex 里面导入进来。 然后在组件的 methods 属性里面，可以展开执行 mapActions 返回的东西，可以给它提供一个数组参数或者对象参数，如果是对象参数的话需要设置一下在组件里的方法的名字，比如 getName，它的值就是在 Store 里定义的 Action 的名字，这里就是 getName。
