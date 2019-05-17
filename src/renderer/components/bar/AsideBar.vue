<template>
  <aside class="aside-bar">
    <!-- 用户头像 -->
    <div class="aside-avatar">
      <img class="avatar" src="http://p1.music.126.net/wOC5zaDbf2xJ5nfWXkk8gA==/109951163709850993.jpg?param=180y180" alt="">
      <span class="txt">わたし</span>
    </div>

    <!-- 菜单列表 -->
    <el-menu
      default-active="/find/recommend"
      :router='true'
      class="aside-menubar">
      <el-menu-item index="/find/recommend">
        <i class="iconfont icon-wangyiyunyinlezizhi-copy"></i>
        <span slot="title">发现音乐</span>
      </el-menu-item>
      <el-menu-item index="/fm">
        <i class="iconfont icon-asmkticon0143"></i>
        <span slot="title">私人FM</span>
      </el-menu-item>
      <el-menu-item index="/video/video">
        <i class="iconfont icon-shipin"></i>
        <span slot="title">视频</span>
      </el-menu-item>
      <el-menu-item index="/friend">
        <i class="iconfont icon-pengyou"></i>
        <span slot="title">朋友</span>
      </el-menu-item>

      <div class="menu-title">我的音乐</div>

      <el-menu-item index="/download/songs">
        <i class="iconfont icon-xiazai"></i>
        <span slot="title">下载管理</span>
      </el-menu-item>
      <el-menu-item index="/cloud">
        <i class="iconfont icon-yunpan"></i>
        <span slot="title">我的音乐云盘</span>
      </el-menu-item>
      <el-menu-item index="/radio">
        <i class="iconfont icon-leguandiantai"></i>
        <span slot="title">我的电台</span>
      </el-menu-item>
      <el-menu-item index="/collection/album">
        <i class="iconfont icon-shoucang1"></i>
        <span slot="title">我的收藏</span>
      </el-menu-item>

      <div class="menu-title">
        创建的歌单
      </div>

      <el-menu-item index="/like">
        <i class="iconfont icon-shoucang2"></i>
        <span slot="title">我喜欢的音乐</span>
      </el-menu-item>
      <el-menu-item index="12">
        <i class="iconfont icon-yinleliebiao"></i>
        <span slot="title">Beyond</span>
      </el-menu-item>
      <el-menu-item index="13">
        <i class="iconfont icon-yinleliebiao"></i>
        <span slot="title">Beyond Live</span>
      </el-menu-item>
    </el-menu>
  </aside>
</template>

<script>
export default {
  name: 'aside-bar',
  data () {
    return {}
  }
}
</script>
