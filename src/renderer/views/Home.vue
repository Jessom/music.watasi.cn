<template>
  <main class="home-container">
    <aside-bar class="aside-bar-container" />
    <router-view class="main-container"></router-view>
  </main>
</template>

<script>
import AsideBar from '@/components/bar/AsideBar.vue'
export default {
  name: 'home',
  data () {
    return {}
  },

  components: {
    AsideBar
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variable.scss';
.home-container {
  display: flex;
  flex-direction: row;
  .aside-bar-container { flex: 0 0 $asideWidth; padding-top: $topbarHeight; }
  .main-container {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    height: calc(100vh - 60px);
    padding: $topbarHeight 20px 0;
  }
}
</style>
