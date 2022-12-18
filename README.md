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
