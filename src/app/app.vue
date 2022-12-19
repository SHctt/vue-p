<template>
  <div class="page">
    <div class="card">
      <div class="card-header">
        <div class="card-title">{{ name }}</div>
        <div class="card-subtitle">Transition_Animation</div>
      </div>
      <div class="card-content">
        <transition
          name="custom-classes"
          leave-active-class="animate__animated animate__heartBeat"
          enter-active-class="animate__animated animate__tada"
          mode="out-in"
        >
          <component :is="currentEmoji"></component>
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
import GhostEmoji from './components/ghost-emoji.vue';
import RobotEmoji from './components/robot-emoji.vue';
export default {
  data() {
    return {
      name: 'Vue.js 前端应用 #7：过渡和动画',
      isActive: true,
      emoji: 'GhostEmoji',
    };
  },

  computed: {
    currentEmoji() {
      return this.isActive ? 'RobotEmoji' : 'GhostEmoji';
    },
  },

  components: {
    GhostEmoji,
    RobotEmoji,
  },
};
</script>

<style>
@import './styles/app.css';
@import './styles/card.css';
@import './styles/animate.css';
</style>
