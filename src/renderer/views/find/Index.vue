<template>
  <div class="find">
    <menu-bar :routes='routes' />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'find',
  data () {
    return {
      routes: [
        { route: '/find/recommend', title: '个性推荐' },
        { route: '/find/songs', title: '歌单' },
        { route: '/find/radio', title: '主播电台' },
        { route: '/find/ranking', title: '排行榜' },
        { route: '/find/singer', title: '歌手' },
        { route: '/find/new', title: '最新音乐' }
      ]
    }
  }
}
</script>
