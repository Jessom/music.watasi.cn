<template>
  <header class="topbar-con">
    <div class="topbar-left">
      <i class="iconfont icon-left2" @click="goRoute(0)" v-if='!transitionStatus'></i>
      <i class="iconfont icon-right" @click="goRoute(1)" v-if='!transitionStatus'></i>
      <i class="iconfont icon-down" @click="goRoute(0)" v-if='transitionStatus'></i>
    </div>

    <div class="topbar-right">
      <i class="iconfont icon-shezhi"></i>
      <div class="handle-bar" v-if="os === 'win32'"> <!-- 如果是windows系统 就加上模拟的操作按钮-->
        <i class="el-icon-minus" @click="minimizeWindow"></i>
        <i class="el-icon-circle-plus-outline" @click="openMiniWindow"></i>
        <i class="el-icon-close" @click="closeWindow"></i>
      </div>
    </div>
  </header>
</template>

<script>
import { remote } from 'electron'
import { mapState } from 'vuex'
const { BrowserWindow } = remote
export default {
  name: 'topbar',
  data () {
    return {
      os: ''
    }
  },

  computed: {
    ...mapState({
      transitionStatus: state => state.Container.animation
    })
  },

  created () {
    this.os = process.platform
  },

  methods: {
    // 最小化
    minimizeWindow () {
      const window = BrowserWindow.getFocusedWindow()
      window.minimize()
    },

    // 关闭
    closeWindow () {
      const window = BrowserWindow.getFocusedWindow()
      window.close()
    },

    openMiniWindow () {
      this.$electron.ipcRenderer.send('openMiniWindow')
    },

    goRoute (flag) {
      if (flag === 1) {
        console.log(this.$router)
      } else {
        this.$router.back()
      }
    }
  }
}
</script>
