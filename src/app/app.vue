<template>
  <div>
    <h3>{{ name }}</h3>
    <div>
      <textarea v-model="content"></textarea>
      <span> -> {{ content }} </span>
    </div>
    <div>
      <input id="check" type="checkbox" v-model="checked" />
      <label for="check">->Checked:{{ checked }}</label>
    </div>
    <div>
      <h4>-----多值复选框-----</h4>
      <label for="tag-1">
        <input type="checkbox" id="tag-1" v-model="tags" value="霍茵" />霍茵
      </label>
      <label for="tag-2">
        <input type="checkbox" id="tag-2" v-model="tags" value="小楚" />小楚
      </label>
      <label for="tag-3">
        <input type="checkbox" id="tag-3" v-model="tags" value="糖糖" />糖糖
      </label>
      <span>{{ tags }}</span>
    </div>
    <div>
      <h4>-----单选按钮-----</h4>
      <span>选择性别</span>
      <label for="sex-male">
        <input type="radio" id="sex-male" v-model="sex" value="男" />男
      </label>
      <label for="sex-famale">
        <input type="radio" id="sex-famale" v-model="sex" value="女" />女
      </label>
      <div>性别是：{{ sex }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Vue.js前端应用#3:forms表单元素',
      content: '初始文本',
      checked: true,
      tags: [],
      sex: '男',
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
