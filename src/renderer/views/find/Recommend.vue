<template>
  <div id="wrapper">
    <banner :banners='banners' />

    <div class="block-wrap">
      <item-bar title='推荐歌单' />
      <el-row :gutter="20" type="flex" style="flex-wrap: wrap;">
        <el-col :span="50" class="tibt">
          <div class="img-box">
            <img src="https://pic.52112.com/180710/JPG-180710_173/UZuAHiafUi_small.jpg" alt="">
            <i class="iconfont icon-rili"></i>
            <time class="time">{{ time }}</time>
          </div>
          <p class="txt">每日歌曲推荐</p>
        </el-col>

        <el-col
          :span="50"
          class="tibt"
          v-for='item in songs'
          :key='item.id'>
          <div class="img-box">
            <img :src="item.picUrl" :alt="item.name">
            <div class="look-wrap">
              <i class="iconfont icon-bofang1"></i>
              <span class="look">{{ item.playCount }}</span>
            </div>
          </div>
          <p class="txt">{{ item.name }}</p>
        </el-col>
      </el-row>
    </div>


    <div class="block-wrap">
      <item-bar title='独家放送' />
      <el-row :gutter="20">
        <el-col
          :span="6"
          class="tibt"
          v-for='item in exclusive'
          :key='item.id'>
          <div class="img-box">
            <img :src="item.picUrl" :alt="item.name">
          </div>
          <p class="txt">{{ item.name }}</p>
        </el-col>
      </el-row>
    </div>

    <!-- <div class="block-wrap">
      <item-bar title='最新音乐' />
      <blend-cell :list='list3' :showIndex='true' />
    </div> -->

    <div class="block-wrap">
      <item-bar title='推荐MV' />
      <el-row :gutter="20" type="flex" style="flex-wrap: wrap;">
        <el-col
          :span="6"
          class="tibt elli1"
          v-for='item in mvs'
          :key='item.id'>
          <div class="img-box">
            <img :src="item.picUrl" :alt="item.name">
            <div class="look-wrap">
              <i class="iconfont icon-bofang1"></i>
              <span class="look">{{ item.playCount }}</span>
            </div>
          </div>
          <p class="txt">{{ item.name }}</p>
          <p class="desc">
            <span
              v-for='(it, ind) in item.artists'
              :key='it.id'>{{ it.name }}<span v-if='ind+1 != item.artists.length'> / </span></span>
          </p>
        </el-col>
      </el-row>
    </div>

    <!-- <div class="block-wrap">
      <item-bar title='主播电台' />
      <blend-cell :list='list5' :bigImg='true' />
    </div> -->
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'recommend-find',
  computed: {
    ...mapState({
      // 轮播图
      banners: state => state.Recommend.banner,
      // 独家放送
      exclusive: state => state.Recommend.exclusive,
      // 推荐mv
      mvs: state => state.Recommend.mvs
    }),
    ...mapGetters({
      songs: 'GET_SONGS'
    })
  },

  data () {
    const time = new Date().getDate()
    return {
      time: time
    }
  },

  created () {
    this.$store.dispatch('GET_BANNER')
    this.$store.dispatch('GET_SONGS')
    this.$store.dispatch('GET_EXCLUSIVE')
    this.$store.dispatch('GET_MV')
  },

  components: {
    Banner
  }
}
</script>
