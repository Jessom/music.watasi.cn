<template>
  <div class="songs-container">
    <div class="banner">
      <img class="img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4259498833,3464883428&fm=26&gp=0.jpg" alt="">
      <div class="banner-info">
        <div class="btn">精品歌单</div>
        <div class="meta">
          <div class="title">『凉风青叶』天然呆、永远积极向上的思考的女孩</div>
          <p class="desc">穿着职场套装，因穿法错误让光误以为是学生制服。</p>
        </div>
      </div>
    </div>

    <tool-bar :title='title' :list='list' />

    <el-row :gutter="20" type="flex" style="flex-wrap: wrap;">
      <el-col
        :span="6"
        class="tibt elli2"
        v-for='item in list2'
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
</template>

<script>
export default {
  name: 'songs-find',
  data () {
    return {
      title: '全部歌单',
      list: [
        {
          id: 1,
          name: '华语'
        },
        {
          id: 2,
          name: '流行'
        },
        {
          id: 3,
          name: '摇滚'
        },
        {
          id: 4,
          name: '民谣'
        },
        {
          id: 5,
          name: '电子'
        },
        {
          id: 6,
          name: '轻音乐'
        },
        {
          id: 7,
          name: '影视原声'
        },
        {
          id: 8,
          name: 'ACG'
        },
        {
          id: 9,
          name: '怀旧'
        },
        {
          id: 10,
          name: '治愈'
        }
      ],
      list2: [
        {
          id: 1,
          name: '一周日语新歌推荐（05/11~05/17)',
          picUrl: 'https://p2.music.126.net/32LZ4aEz7KALQNfqgwtHyw==/109951164080328373.jpg',
          playCount: '9530248'
        },
        {
          id: 2,
          name: '520来啦，空气中都弥漫着恋爱的柠檬味',
          picUrl: 'https://p2.music.126.net/Mu9_yGCJ7_m6OScFX1x-qQ==/109951164078097849.jpg',
          playCount: '2838010'
        },
        {
          id: 3,
          name: '保持清醒，越孤独越强大',
          picUrl: 'https://p2.music.126.net/dSpyWAap70ix_fswD6DmhA==/109951164073053348.jpg',
          playCount: '4119090'
        },
        {
          id: 4,
          name: '【旋律控】超级好听的欧美良曲',
          picUrl: 'https://p2.music.126.net/2MsstS-M9w5-li0aRy3sUQ==/1380986606815861.jpg',
          playCount: '250605760'
        },
        {
          id: 5,
          name: '放下一个人需要多久？',
          picUrl: 'https://p2.music.126.net/Z2xENonXlIyXpd6QshlIcA==/109951164061168611.jpg',
          playCount: '7359764'
        },
        {
          id: 6,
          name: '云村腻歪小情歌，给你的夏日补满糖',
          picUrl: 'https://p2.music.126.net/4Nf0Axz2oe2aI2bP8GWcGA==/109951164059142470.jpg',
          playCount: '3717859'
        },
        {
          id: 7,
          name: '100首好听的翻唱',
          picUrl: 'https://p2.music.126.net/p8UsKXA-qjfYuicFEZ_bbw==/109951163822176249.jpg',
          playCount: '15320949'
        },
        {
          id: 8,
          name: '520来啦，空气中都弥漫着恋爱的柠檬味',
          picUrl: 'https://p2.music.126.net/Mu9_yGCJ7_m6OScFX1x-qQ==/109951164078097849.jpg',
          playCount: '2838010'
        },
        {
          id: 9,
          name: '在枕头下放一颗糖 做一个甜甜的梦',
          picUrl: 'https://p2.music.126.net/9JxqiAGqNWOER-gsIByrLg==/109951164037381374.jpg',
          playCount: '1279043'
        },
        {
          id: 10,
          name: '人言可畏，想拥抱一个为我捂住耳朵的人',
          picUrl: 'https://p2.music.126.net/Nb-I-kDx0mNn3e7RpA7i4w==/109951164080264703.jpg',
          playCount: '4793138'
        },
        {
          id: 11,
          name: '华语民谣大合辑：一人一首代表作',
          picUrl: 'https://p2.music.126.net/e28fdWUoiMH-UBPGClkG9w==/109951164034537044.jpg',
          playCount: '1489686'
        },
        {
          id: 12,
          name: '【精选】欧美踩点混剪bgm燃向/剧情向',
          picUrl: 'https://p2.music.126.net/Vul1lVY04aTjJU984riRXw==/19056735533185390.jpg',
          playCount: '27630386'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
$btnColor: #deab67;
.songs-container {
  .banner {
    @include horizontal(flex-start, true);
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
    background-image: linear-gradient(to right, #5c4f3d, #736b62 80%, #5c4f3d);
    .img {
      width: 110px;
      height: 110px;
    }
    .banner-info {
      padding-left: 10px;

      .btn {
        display: inline-block;
        padding: 5px 14px;
        font-size: 15px;
        color: $btnColor;
        border-radius: 31px;
        border: 1px solid $btnColor;
      }

      .meta {
        line-height: 1.5;
        margin-top: 8px;
      }
      .title {
        color: #fff;
        font-weight: bold;
      }
      .desc {
        margin: 0;
        color: rgba(255,255,255,.8);
        font-size: 13px;
      }
    }
  }
}
</style>
