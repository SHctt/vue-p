<template>
  <div>
    <h3>{{ mainTitle }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainTitle: 'Vue.js 前端应用 #8： 反应系统',
    };
  },

  created() {
    const user = {
      name: 'Scatty',
      lessonOne: 'JavaScript：Proxy 与 Reflect',
    };

    const handler = {
      // 通过get这个方法，来获取被代理对象的数据
      // get 方法有个默认的行为，接收一个 target 参数，还有一个 property 参数。
      // target 就是对象，property 就是要访问的对象里的某个属性的名字。
      get(target, property) {
        return target[property];
      },

      //通过set这个方法，去设置被代理对象的数据
      set(target, property, value) {
        if (property === 'name') {
          if (value.length > 10) {
            throw new Error('超出字数限制');
          }
        }
        Reflect.set(target, property, value);
      },
    };

    // 定义userProxy做为一个新的proxy，代理user这个对象，并对这个对象添加handler方法
    const userProxy = new Proxy(user, handler);

    try {
      userProxy.name = 'yumfok is a foolish women';
    } catch (error) {
      console.log('error:', error.message);
    }

    console.log(userProxy.name);
  },
};
</script>

<style>
@import './styles/app.css';
</style>
