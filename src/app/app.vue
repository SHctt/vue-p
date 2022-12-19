<template>
  <div class="page">
    <div class="card">
      <div class="card-header">
        <div class="card-title">{{ name }}</div>
        <div class="card-subtitle">Transition_Animation</div>
      </div>
      <div class="card-content">
        <transition name="pulse">
          <div v-if="isActive" class="emoji">😂</div>
        </transition>
      </div>
      <div class="card-action">
        <button :class="{ active: isActive }" @click="isActive = !isActive">
          请按这里
        </button>
      </div>
    </div>
    <div class="status">
      <small>isActive:{{ isActive }}</small>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Vue.js 前端应用 #7：过渡和动画',
      isActive: true,
    };
  },
};
</script>

<style>
@import './styles/app.css';
@import './styles/card.css';
</style>
