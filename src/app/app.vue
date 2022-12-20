<template>
  <div>
    <h3 @click="title = '声明具有反应特性的数据（ref）'">
      {{ title }}
    </h3>
    <div
      @click="user.name = '这里是使用reactive处理了对象后，具有反应特性的数据'"
    >
      {{ user.name }}
    </div>
    <div>----------</div>
    <div
      @click="userName = '这里是单独从user里面解构出来的，具有反应特性的数据'"
    >
      {{ userName }}
    </div>
    <div>----------</div>
    <div @click="name = '这里是通过toRefs展开返回的，具有反应特性的数据'">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';
export default {
  setup() {
    const title = ref('Vue.js 前端应用 #8： 反应系统');

    const user = reactive({
      name: 'yumfok',
    });

    // 想要解构出来的数据具有反应特性，需要使用toRefs这个方法处理一下啊user这个对象
    const { name: userName } = toRefs(user);

    console.log(title);
    console.log(user);
    console.log(userName);

    return {
      title,
      user,
      ...toRefs(user), //可以在这里直接展开user，并将里面的数据全部赋予反应特性
      userName, //让组件可以绑定输出userName
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
