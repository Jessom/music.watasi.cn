<template>
  <div id="wrapper">
    <banner />

    <div class="block-wrap">
      <item-bar title='推荐歌单' />
      <el-row :gutter="20" type="flex" style="flex-wrap: wrap;">
        <el-col :span="50" class="tibt">
          <div class="img-box">
            <img src="https://pic.52112.com/180710/JPG-180710_173/UZuAHiafUi_small.jpg" alt="">
            <i class="iconfont icon-rili"></i>
            <time class="time">15</time>
          </div>
          <p class="txt">每日歌曲推荐</p>
        </el-col>

        <el-col
          :span="50"
          class="tibt"
          v-for='item in list'
          :key='item.id'>
          <div class="img-box">
            <img :src="item.img" :alt="item.title">
            <div class="look-wrap">
              <i class="iconfont icon-bofang1"></i>
              <span class="look">{{ item.look }}</span>
            </div>
          </div>
          <p class="txt">{{ item.title }}</p>
        </el-col>
      </el-row>
    </div>


    <div class="block-wrap">
      <item-bar title='独家放送' />
      <el-row :gutter="20">
        <el-col
          :span="6"
          class="tibt"
          v-for='item in list2'
          :key='item.id'>
          <div class="img-box">
            <img :src="item.img" :alt="item.title">
          </div>
          <p class="txt">{{ item.title }}</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
  name: 'recommend-find',
  data () {
    return {
      list: [
        {
          id: 1,
          title: '华语搞笑 | 一不小心歌名就抬杠系列',
          img: 'http://p1.music.126.net/6TfTiBv0ockhMkSgbMUUkQ==/109951164027813893.jpg?param=140y140',
          look: '74万'
        },
        {
          id: 2,
          title: '「ACG」少女系列 可爱迷人 怦然心动',
          img: 'http://p1.music.126.net/vftAI_vrvxt9-FSkjJnOXQ==/109951164053392171.jpg?param=140y140',
          look: '86909'
        },
        {
          id: 3,
          title: '适合学习50音又好听的日语慢歌',
          img: 'http://p1.music.126.net/I9QMnYFYTI5CzVYTJJ15kw==/3382097767995452.jpg?param=140y140',
          look: '42万'
        },
        {
          id: 4,
          title: '才华有限公司（cover金玟岐）',
          img: 'http://p2.music.126.net/Ha5KLL77FkYL4xw1jVshMQ==/18720284976439653.jpg?param=140y140',
          look: '10万'
        },
        {
          id: 5,
          title: '稀饭的片尾BGM',
          img: 'http://p1.music.126.net/ev7rZIyACFRwJwMugCE0_g==/109951163741851149.jpg?param=140y140',
          look: '3625万'
        },
        {
          id: 6,
          title: '英语早读：生命太短暂',
          img: 'http://p1.music.126.net/yVihM8BIgd2NSjtRez4qGA==/3295236353488995.jpg?param=140y140',
          look: '18万'
        },
        {
          id: 7,
          title: '歌ってみよう！可以在KTV里唱的日文歌',
          img: 'http://p1.music.126.net/2ATbJXSMSmPy_4eDAhNJMg==/3405187514299421.jpg?param=140y140',
          look: '96838'
        },
        {
          id: 8,
          title: '☀全面向☀大力蓄能掌控日语',
          img: 'https://p2.music.126.net/T1skn9oWcbCV4t36tdkiEw==/18900604881791964.jpg?param=140y140',
          look: '28万'
        },
        {
          id: 9,
          title: '他没那么喜欢你，只是刚好遇见你',
          img: 'https://p2.music.126.net/HDwLd_yXK0wUBzpbtLPagg==/109951163508894004.jpg?param=140y140',
          look: '24万'
        }
      ],
      list2: [
        {
          id: 1,
          img: 'https://prodpublic-1253428821.cos.ap-guangzhou.myqcloud.com/ows%2Fnews148581a180819500a31b5556e283acc089.jpg',
          title: '释放你的创造力|不凡觉醒'
        },
        {
          id: 2,
          img: 'http://www.music887.com/uploadimg/20173716322828209.jpg',
          title: '打造专注你的音乐电台'
        },
        {
          id: 3,
          img: 'http://www.zhaoanan.com/upload/products/201811/12/1810525be951ac0591bExH9IB.jpg',
          title: '优酷土豆|强强联合'
        },
        {
          id: 4,
          img: 'https://sowebsite.oss-cn-shanghai.aliyuncs.com/files/2017/12/1101514287208_.pic_hd.jpg',
          title: 'AMANI'
        }
      ]
    }
  },
  components: {
    Banner
  }
}
</script>
