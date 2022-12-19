<template>
  <div class="page">
    <div class="card">
      <div class="card-header">
        <div class="card-title">{{ name }}</div>
        <div class="card-subtitle">Transition_Animation</div>
      </div>
      <div class="card-content">
        <transition-group
          name="listChange"
          leave-active-class="animate__animated animate__backOutDown"
        >
          <div class="emoji" v-for="emoji in emojiList" :key="emoji">
            {{ emoji }}
          </div>
        </transition-group>
      </div>
      <div class="card-action">
        <button :class="{ active: isActive }" @click="shuffle">打乱顺序</button>
        <button :class="{ active: isActive }" @click="pop">移除一个</button>
      </div>
    </div>
    <div class="status">
      <small>isActive:{{ isActive }}</small>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  data() {
    return {
      name: 'Vue.js 前端应用 #7：过渡和动画',
      isActive: true,
      emojiList: ['🎄', '❄️', '🚢'],
    };
  },
  methods: {
    shuffle() {
      this.emojiList = _.shuffle(this.emojiList);
    },
    pop() {
      this.emojiList.pop();
    },
  },
};
</script>

<style>
@import './styles/app.css';
@import './styles/card.css';
@import './styles/animate.css';
</style>
