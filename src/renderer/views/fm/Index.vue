<template>
  <div class="lyric">
    <audio id="audio" controls preload ref="audio" :src="src">
    </audio>
    <div class="lyric-content" ref="lyric">
      <div class="lyric-item-wrapper">
        <div :class="['lyric-item', {'active': activeIndex === index}]" v-for="(item,index) in lyricContent" :key="index" @click="lyricClick(item)">
          {{item.content}}
        </div>
      </div>
      <div class="play-btn" @click="playClick">{{playBtnText}}</div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    src: {
      type: String,
      default: 'https://static.timefile.cn/timefile/audio/zuijiasunyou.mp3'
    }
  },
  data () {
    return {
      scroll: null,
      activeIndex: 0,
      lyricContent: [
        {
          'time': '00: 00.10',
          'ms': 100,
          'content': '最佳损友 (Live) - 陈奕迅 (Eason Chan)'
        },
        {
          'time': '00: 00.20',
          'ms': 200,
          'content': '词：黄伟文'
        },
        {
          'time': '00: 00.30',
          'ms': 300,
          'content': '曲：Eric Kwok'
        },
        {
          'time': '00: 01.77',
          'ms': 1770,
          'content': '朋友 我当你一秒朋友'
        },
        {
          'time': '00: 08.50',
          'ms': 8500,
          'content': '朋友 我当你一世朋友'
        },
        {
          'time': '00: 15.19',
          'ms': 15190,
          'content': '奇怪 过去再不堪回首'
        },
        {
          'time': '00: 22.07',
          'ms': 22070,
          'content': '怀缅 时时其实还有'
        },
        {
          'time': '00: 29.02',
          'ms': 29020,
          'content': '朋友 你试过将我营救'
        },
        {
          'time': '00: 35.86',
          'ms': 35860,
          'content': '朋友 你试过把我批斗'
        },
        {
          'time': '00: 42.82',
          'ms': 42820,
          'content': '无法 再与你交心联手'
        },
        {
          'time': '00: 48.71',
          'ms': 48710,
          'content': '毕竟 难得有过最佳损友'
        },
        {
          'time': '00: 54.78',
          'ms': 54780,
          'content': '从前共你 促膝把酒'
        },
        {
          'time': '00: 57.59',
          'ms': 57590,
          'content': '倾通宵都不够'
        },
        {
          'time': '00: 59.33',
          'ms': 59330,
          'content': '我有痛快过 你有没有'
        },
        {
          'time': '01: 03.57',
          'ms': 63570,
          'content': '很多东西今生只可给你'
        },
        {
          'time': '01: 06.13',
          'ms': 66130,
          'content': '保守至到永久'
        },
        {
          'time': '01: 07.92',
          'ms': 67920,
          'content': '别人如何明白透'
        },
        {
          'time': '01: 10.47',
          'ms': 70470,
          'content': '实实在在 踏入过我宇宙'
        },
        {
          'time': '01: 13.05',
          'ms': 73050,
          'content': '即使相处到 有个裂口'
        },
        {
          'time': '01: 16.45',
          'ms': 76450,
          'content': '命运决定了 以后再没法聚头'
        },
        {
          'time': '01: 19.89',
          'ms': 79890,
          'content': '但说过去 却那样厚'
        },
        {
          'time': '01: 23.01',
          'ms': 83010,
          'content': '问我有没有 确实也没有'
        },
        {
          'time': '01: 26.34',
          'ms': 86340,
          'content': '一直躲避的藉口 非什么大仇'
        },
        {
          'time': '01: 29.74',
          'ms': 89740,
          'content': '为何旧知己 在最后'
        },
        {
          'time': '01: 33.12',
          'ms': 93120,
          'content': '变不到老友'
        },
        {
          'time': '01: 36.48',
          'ms': 96480,
          'content': '不知你是我敌友 已没法望透'
        },
        {
          'time': '01: 40.33',
          'ms': 100330,
          'content': '被推着走 跟着生活流'
        },
        {
          'time': '01: 43.31',
          'ms': 103310,
          'content': '来年陌生的'
        },
        {
          'time': '01: 45.41',
          'ms': 105410,
          'content': '是昨日最亲的某某'
        },
        {
          'time': '01: 54.73',
          'ms': 114730,
          'content': '生死之交当天不知罕有'
        },
        {
          'time': '01: 57.25',
          'ms': 117250,
          'content': '到你变节了 至觉未够'
        },
        {
          'time': '02: 01.53',
          'ms': 121530,
          'content': '多想一天 彼此都不追究'
        },
        {
          'time': '02: 04.04',
          'ms': 124040,
          'content': '相邀再次喝酒'
        },
        {
          'time': '02: 05.99',
          'ms': 125990,
          'content': '待 葡萄成熟透'
        },
        {
          'time': '02: 08.25',
          'ms': 128250,
          'content': '但是命运入面 每个邂逅'
        },
        {
          'time': '02: 10.86',
          'ms': 130860,
          'content': '一起走到了 某个路口'
        },
        {
          'time': '02: 14.25',
          'ms': 134250,
          'content': '是敌与是友 各自也没有自由'
        },
        {
          'time': '02: 17.65',
          'ms': 137650,
          'content': '位置变了 各有队友'
        },
        {
          'time': '02: 20.81',
          'ms': 140810,
          'content': '问我有没有 确实也没有'
        },
        {
          'time': '02: 23.99',
          'ms': 143990,
          'content': '一直躲避的藉口 非什么大仇'
        },
        {
          'time': '02: 27.38',
          'ms': 147380,
          'content': '为何旧知己 在最后'
        },
        {
          'time': '02: 30.76',
          'ms': 150760,
          'content': '变不到老友'
        },
        {
          'time': '02: 34.20',
          'ms': 154200,
          'content': '不知你是我敌友 已没法望透'
        },
        {
          'time': '02: 38.04',
          'ms': 158040,
          'content': '被推着走 跟着生活流'
        },
        {
          'time': '02: 40.98',
          'ms': 160980,
          'content': '来年陌生的'
        },
        {
          'time': '02: 43.08',
          'ms': 163080,
          'content': '是昨日最亲的某某'
        },
        {
          'time': '02: 46.52',
          'ms': 166520,
          'content': '早知解散后 各自有际遇作导游'
        },
        {
          'time': '02: 51.22',
          'ms': 171220,
          'content': '奇就奇在 接受了 各自有路走'
        },
        {
          'time': '02: 54.68',
          'ms': 174680,
          'content': '却没人像你 让我 眼泪背着流'
        },
        {
          'time': '02: 57.99',
          'ms': 177990,
          'content': '严重似情侣 讲分手'
        },
        {
          'time': '03: 15.94',
          'ms': 195940,
          'content': '有没有 确实也没有'
        },
        {
          'time': '03: 18.52',
          'ms': 198520,
          'content': '一直躲避的藉口 非什么大仇'
        },
        {
          'time': '03: 21.87',
          'ms': 201870,
          'content': '为何旧知己 在最后 变不到老友'
        },
        {
          'time': '03: 28.81',
          'ms': 208810,
          'content': '不知你又有没有 挂念这旧友'
        },
        {
          'time': '03: 32.71',
          'ms': 212710,
          'content': '或者自己 早就想通透'
        },
        {
          'time': '03: 35.75',
          'ms': 215750,
          'content': '来年陌生的 是昨日 最亲的某某'
        },
        {
          'time': '03: 41.41',
          'ms': 221410,
          'content': '总好于 那日我 没有'
        },
        {
          'time': '03: 46.79',
          'ms': 226790,
          'content': '没有 遇过 某某'
        }
      ],
      playBtnText: '暂停'
    }
  },
  methods: {
    init () {
      this.$refs.audio.addEventListener('timeupdate', e => {
        let timeStamp = e.target.currentTime * 1000
        this.activeIndex = this.lyricContent.findIndex((item, index) => {
          return item.ms < timeStamp && this.lyricContent[index + 1] ? this.lyricContent[index + 1].ms > timeStamp : true
        })
        this.scroll.scrollTo(0, -27 * this.activeIndex + 54, 500)
      })
    },
    lyricScrollInit () {
      this.scroll = new BScroll(this.$refs.lyric)
      this.scroll.scrollTo(0, 54)
    },
    playClick () {
      if (this.playBtnText === '暂停') {
        this.$refs.audio.pause()
        this.playBtnText = '播放'
      } else {
        this.$refs.audio.play()
        this.playBtnText = '暂停'
      }
    },
    lyricClick (item) {
      this.$refs.audio.currentTime = item.ms / 1000
    }
  },
  mounted () {
    this.init()
    this.lyricScrollInit()
  }
}
</script>

<style lang="scss" scoped>
.lyric {
  .lyric-content {
    position: relative;
    height: 108px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    user-select: none;
    .lyric-item-wrapper {
      .lyric-item {
        color: #999;
        height: 27px;
        transition: all 1s;
        cursor: pointer;
        padding-left: 1em;
        &.active {
          color: #333;
        }
      }
    }
    .play-btn {
      position: absolute;
      right: 10px;
      top: 10px;
      color: #999;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        color: #333;
      }
    }
  }
}
</style>