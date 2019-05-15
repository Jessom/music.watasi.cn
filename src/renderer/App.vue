<template>
  <div id="app">
    <topbar />
    <transition :name="transitionStatus ? 'slide-top' : 'slide-bottom'">
      <router-view></router-view>
    </transition>
    <footer-bar />
  </div>
</template>

<script>
import FooterBar from '@/components/bar/FooterBar.vue'
import Topbar from '@/components/bar/Topbar.vue'
import { mapState } from 'vuex'
export default {
  name: 'app',

  computed: {
    ...mapState({
      transitionStatus: state => state.Container.animation
    })
  },

  watch: {
    $route (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      const transitionStatus = toDepth < fromDepth
      this.$store.dispatch('SET_ANIMATION', transitionStatus)
    }
  },

  components: {
    FooterBar,
    Topbar
  }
}
</script>

<style lang='scss'>
@import './assets/iconfont/iconfont.css';
.slide-bottom-enter-active,
.slide-bottom-leave-active,
.slide-top-enter-active,
.slide-top-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-bottom-enter {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
.slide-bottom-leave-active {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
.slide-top-enter {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
.slide-top-leave-active {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
</style>
