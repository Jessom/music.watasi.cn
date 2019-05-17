<template>
  <div class="item-bar-container">
    <div class="item-bar-left">
      <span class="txt">{{ title }}</span> <i class="iconfont icon-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item-bar',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  
</style>
