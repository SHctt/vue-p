<template>
  <div>
    <h3>{{ name }}</h3>
    {{ appName }}
    <small>{{ nameApp }}</small>
    <h3>{{ newName }}</h3>
    <button @click="mutationData">触发mutations</button>
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

  methods: {
    mutationData() {
      if (this.$store.state.name !== 'mutations') {
        this.$store.commit('setName', '使用mutations改变了name的值');
      } else {
        this.$store.commit('setName', 'mutations');
      }
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>
