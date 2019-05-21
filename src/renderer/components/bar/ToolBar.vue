<template>
  <div class="tool-bar-wrap">
    <div class="tool-bar_bor">
      {{ title }} <i class="iconfont icon-right"></i>
    </div>

    <div class="tool-bar-mens">
      <span
        class="tool-bar-menu-item"
        v-for='item in list'
        :key='item.id'
        :class="{'actived': item.actived}">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tool-bar',
  props: {
    title: {
      type: String,
      default: '全部歌单'
    },
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
