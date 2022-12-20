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
    <div>----------</div>
    <div @click="changeName()">
      {{ userName }}
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

    const changeName = () => {
      // 在这里，一定用指定，设定的值是这个反应特性对象的value属性
      userName.value = '这个点击事件，使用了组合式接口中定义的方法';
    };

    return {
      title,
      user,
      ...toRefs(user), //可以在这里直接展开user，并将里面的数据全部赋予反应特性
      userName, //让组件可以绑定输出userName
      changeName, //让组件可以使用这个方法作为事件处理器
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
