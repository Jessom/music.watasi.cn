<template>
  <footer class="footer-bar">
    <div class="footer-left" @click="lyrics">
      <img src="http://p2.music.126.net/QsNhV67fys_Oq4xhAgjyvQ==/2533274791300914.jpg?param=34y34" alt="" class="footer-avatar">
      <div class="info">
        <div class="info-top">
          <span class="name">だんご大家族</span>
          <span class="un">&nbsp;-&nbsp;茶太</span>
        </div>

        <time class="time">01:23&nbsp;/&nbsp;&nbsp;04:21</time>
      </div>
    </div>

    <div class="footer-center">
      <!-- 收藏 -->
      <i class="iconfont icon-shoucang2"></i>
      <!-- 上一首 -->
      <i class="iconfont icon-shangyishou1 theme"></i>
      <!-- 播放 暂停 -->
      <i class="iconfont icon-bofang play theme"></i>
      <!-- 下一首 -->
      <i class="iconfont icon-xiayishou14 theme"></i>
      <!-- 分享 -->
      <i class="iconfont icon-fenxiang"></i>
    </div>

    <div class="footer-right">
      <!-- 循环方式 -->
      <el-tooltip effect="dark" content="单曲循环" placement="top">
        <i class="iconfont icon-shunxuchakan"></i>
      </el-tooltip>
      <!-- 歌单 -->
      <i class="iconfont icon-gedan"></i>
      <!-- 歌词 -->
      <i class="iconfont icon-ci"></i>
      <!-- 音量 -->
      <i class="iconfont icon-weibiaoti1"></i>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      status: true
    }
  },

  computed: {
    ...mapState({
      transitionStatus: state => state.Container.animation
    })
  },

  methods: {
    lyrics () {
      if (this.status) {
        this.$router.push({
          path: '/lyrics'
        })
      } else {
        this.$router.back()
      }
      this.status = !this.status
    }
  }
}
</script>

<style lang="scss">
  
</style>
