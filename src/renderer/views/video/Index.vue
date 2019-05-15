<template>
  <div>
    <menu-bar :routes='routes' />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index-videp',
  data () {
    return {
      routes: [
        { route: '/video/video', title: '视频' },
        { route: '/video/mv', title: 'MV' }
      ]
    }
  }
}
</script>
