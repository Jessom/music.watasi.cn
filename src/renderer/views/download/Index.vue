<template>
  <div class="down">
    <menu-bar :routes='routes' />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'download',
  data () {
    return {
      routes: [
        { route: '/download/songs', title: '已下载歌单' },
        { route: '/download/program', title: '已下载节目' },
        { route: '/download/wait', title: '正在下载' }
      ]
    }
  }
}
</script>
