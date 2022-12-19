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

## 6.8 动作的 Context 参数

在 Vue Store 里定义的动作都支持一个 Context 参数，我们可以检查一下它里面都有什么，在这个 getName 动作里，可以在控制台上输出它的 context 参数。

回到浏览器，在控制台上会输出动作里的 context 参数，你会发现，它里面有 commit 方法，用这个方法可以 commit store 里的 mutation 去修改 store 里的数据。

这里还有一个 dispatch 方法，在动作里可以用这个方法派发 store 里的动作，也就是你可以在一个动作里派发 store 里的其它的动作。

getters 是当前这个 store 里的获取器，这里有个叫 name 的 getter。 下面还有一个 rootGetters，你可以在这里找到 store 里所有的 getter。因为在 store 里可以配置使用模块，每个 store 模块里都可以有自己的 state，getters 这些东西。

这个 rootState 是所有 store 里的 state， 最后这个 state 是当前这个 store 里的 state。

在 action 里面，如果你只想使用 context 里的某些东西，可以直接把它解构出来，给它一个对象，在这个 action 里需要用的只有 commit 。

这样我们就可以在这个 action 里，直接使用 commit 这个方法了。

## 6.9 实践：加载状态

在 Vue Store 的动作里经常会包含一些异步的动作，也就是执行动作以后不能马上得到需要数据，等待的时候可以在界面上显示一个加载状态，成功得到了数据以后，再去掉加载状态，显示真正的内容。

## 6.10 modules：Vuex Store 模块

Vuex 提供的模块功能，可以让我们把应用的 Store 分割成不同的 Store 模块。也就是我们不需要把所有的东西全部放在一个 Store 里面，可以根据应用的需求去创建各自的 Store 模块。每个 Store 模块都可以有自己的 state，mutations，还有 actions 这些东西。

## 6.11 namespaced：Vuex Store 模块的命名空间

在创建 Vuex Store 模块的时候可以设置一下让这个模块使用命名空间。打开 user 这个 store 模块，里面可以添加一个 namespaced 把它的值设置成 true，表示要使用命名空间。

使用 命名空间 可以让我们在创建组件时，快速知道，组件中使用的各种数据及方法，到底是来自那个路由模块

## 6.12 创建与使用 Vuex Store 插件

应用的 Store 发生变化的时候，你可以通过 Store 的插件选择去做一些事情。
