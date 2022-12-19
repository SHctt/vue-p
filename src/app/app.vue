<template>
  <div class="page">
    <div class="card">
      <div class="card-header">
        <div class="card-title">{{ name }}</div>
        <div class="card-subtitle">Transition_Animation</div>
      </div>
      <div class="card-content">
        <div class="emoji">😊</div>
      </div>
      <div class="card-action">
        <button>请按这里</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Vue.js 前端应用 #7：过渡和动画',
    };
  },
};
</script>

<style>
@import './styles/app.css';
@import './styles/card.css';
</style>
