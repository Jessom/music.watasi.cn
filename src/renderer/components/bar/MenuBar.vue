<template>
  <div class="menu-bar-box">
    <el-menu
      :default-active="activeIndex"
      class="menu-bar"
      mode="horizontal"
      :router='true'>
      <el-menu-item
        v-for='(item, ind) in routes'
        :key='ind'
        :index="item.route">{{ item.title }}</el-menu-item>
      <!-- <el-menu-item index="2">歌单</el-menu-item>
      <el-menu-item index="3">主播电台</el-menu-item>
      <el-menu-item index="4">排行榜</el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'menu-bar',

  props: {
    routes: {
      type: Array,
      default () {
        return []
      }
    }
  },

  computed: {
    activeIndex () {
      return this.$route.path
    }
  }
}
</script>
