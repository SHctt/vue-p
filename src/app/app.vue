<template>
  <div>
    <h3>{{ name }}</h3>
    {{ appName }}
    <small>{{ nameApp }}</small>
    <h3>{{ newName }}</h3>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  computed: {
    nameApp() {
      // 在不使用mapStated的情况下，导入state里面的数据
      return this.$store.state.name;
    },
    ...mapState(['name']), //直接使用state里面的数据名称导入

    ...mapState({ appName: 'name' }), //重命名state里面的数据名称

    ...mapGetters(['newName']),
  },
};
</script>

<style>
@import './styles/app.css';
</style>
