<template>
  <div
    class="cell-container cell-container__blend"
    :class="{
      'cell-container__vertical': vertical,
      'cell-container__bigimg': bigImg
    }">
    <div
      class="blend_cell"
      v-for='(item, ind) in list'
      :key='item.id'>
      <div class="blend-img">
        <img :src="item.image" alt="">
      </div>
      <div
        class="blend-body"
        :class="{'blend-index': showIndex}">
        <span class="index" v-if='showIndex'>{{ ind+1 }}</span>
        <div style="width:100%;">
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blend-cell',
  props: {
    /**
     * 渲染数据
     */
    list: {
      type: Array,
      default () {
        return []
      }
    },
    /**
     * 是否垂直布局，即，一行显示一个
     */
    vertical: {
      type: Boolean,
      default: false
    },
    /**
     * 是否显示索引
     */
    showIndex: {
      type: Boolean,
      default: false
    },
    /**
     * 是否显示大图片
     */
    bigImg: {
      type: Boolean,
      default: false
    }
  }
}
</script>
