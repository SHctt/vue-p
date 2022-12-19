<template>
  <div class="page">
    <div class="card">
      <div class="card-header">
        <div class="card-title">{{ name }}</div>
        <div class="card-subtitle">Transition_Animation</div>
      </div>
      <div class="card-content">
        <div class="emoji">{{ animatedNumber }}</div>
      </div>
      <div class="card-action">
        <button :class="{ active: isActive }" @click="number += 10">+10</button>
      </div>
    </div>
    <div class="status">
      <small>isActive:{{ isActive }}</small>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import gsap from 'gsap';
export default {
  data() {
    return {
      name: 'Vue.js 前端应用 #7：过渡和动画',
      isActive: true,
      emojiList: ['🎄', '❄️', '🚢'],
      number: 0,
      tweenedNumber: 0,
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
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0);
    },
  },
  watch: {
    number(newValue) {
      gsap.to(this.$data, {
        duration: 0.5,
        tweenedNumber: newValue,
      });
    },
  },
};
</script>

<style>
@import './styles/app.css';
@import './styles/card.css';
@import './styles/animate.css';
</style>
