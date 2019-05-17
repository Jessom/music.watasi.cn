<template>
  <div>
    <menu-bar :routes='routes' />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routes: [
        { route: '/collection/album', title: '专辑' },
        { route: '/collection/singer', title: '歌手' },
        { route: '/collection/videos', title: '视频' },
        { route: '/collection/column', title: '专栏' }
      ]
    }
  }
}
</script>
