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

    <div class="block-wrap">
      <item-bar title='最新音乐' />
      <blend-cell :list='list3' :showIndex='true' />
    </div>

    <div class="block-wrap">
      <item-bar title='推荐MV' />
      <el-row :gutter="20" type="flex" style="flex-wrap: wrap;">
        <el-col
          :span="6"
          class="tibt"
          v-for='item in list4'
          :key='item.id'>
          <div class="img-box">
            <img :src="item.img" :alt="item.title">
            <div class="look-wrap">
              <i class="iconfont icon-bofang1"></i>
              <span class="look">{{ item.look }}</span>
            </div>
          </div>
          <p class="txt">{{ item.title }}</p>
          <p class="desc">
            <span
              v-for='(it, ind) in item.artists'
              :key='it.id'>{{ it.name }}<span v-if='ind+1 != item.artists.length'> / </span></span>
          </p>
        </el-col>
      </el-row>
    </div>

    <div class="block-wrap">
      <item-bar title='主播电台' />
      <blend-cell :list='list5' :bigImg='true' />
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
      ],
      list3: [
        {
          id: 1,
          title: '孤单心事',
          image: 'http://p4.music.126.net/0KCMOKHHbimwfdVvPPBpTA==/109951164034526943.jpg?param=100y100',
          desc: '颜人中'
        },
        {
          id: 2,
          title: '末日青春：补完计划',
          image: 'http://p4.music.126.net/RHILskW6QjAMpIAFiGm5Qg==/109951164032165872.jpg?param=100y100',
          desc: 'F.I.R.'
        },
        {
          id: 3,
          title: 'You Know I Know (Live In ShangHai)',
          image: 'http://p3.music.126.net/D4YTVFEHWqE8pVuMwd3BfQ==/109951164063718819.jpg?param=100y100',
          desc: 'Olly Murs'
        },
        {
          id: 4,
          title: 'Paint the Clouds',
          image: 'http://p4.music.126.net/Ldrg9ScUmVfwLPimRtqWjw==/109951164006741865.jpg?param=100y100',
          desc: 'Far East Movement / 袁娅维'
        },
        {
          id: 5,
          title: 'Pokémon Detective Pikachu (Original Motion Picture Soundtrack)',
          image: 'http://p3.music.126.net/xfKg1MRoALfg-StryciSQg==/109951164031502759.jpg?param=100y100',
          desc: 'Henry Jackman'
        },
        {
          id: 6,
          title: '路过人间',
          image: 'http://p4.music.126.net/Otu98pBAFmTF1oZtpclyCA==/109951164053279186.jpg?param=100y100',
          desc: '郁可唯'
        },
        {
          id: 7,
          title: 'I Don\'t Care',
          image: 'http://p3.music.126.net/jBpXM2nlImE7GF7AgBkktQ==/109951164063410613.jpg?param=100y100',
          desc: 'Ed Sheeran / Justin Bieber'
        },
        {
          id: 8,
          title: 'MARIA',
          image: 'http://p3.music.126.net/oH8it_bheo-odQObkaIIhw==/109951164073730138.jpg?param=100y100',
          desc: '黄明昊 (Justin) / KOHH'
        },
        {
          id: 9,
          title: 'ME! (feat. Brendon Urie of Panic! At The Disco)',
          image: 'http://p3.music.126.net/ARDzEUlZ8g9rEdrLKoeIMg==/109951164025958391.jpg?param=100y100',
          desc: 'Taylor Swift / Brendon Urie'
        },
        {
          id: 10,
          title: 'Dream Visit',
          image: 'http://p4.music.126.net/abJdL1HMhjPn926-IyxzWQ==/109951164033936763.jpg?param=100y100',
          desc: '李易峰'
        }
      ],
      list4: [
        {
          id: 1,
          title: 'Tough Love',
          img: 'https://p2.music.126.net/Zpj0SvhP5NT7j49ow47RlQ==/109951164074393472.jpg',
          look: '70173',
          artists: [
            { id: 45236, name: 'Avicii' },
            { id: 46524, name: 'Agnes' },
            { id: 12279249, name: 'Vargas & Lagola' }
          ]
        },
        {
          id: 2,
          title: 'Larger Than Life (Millennium 20 Edition)',
          img: 'https://p2.music.126.net/x3ErdZ7gOlxwqiezyuPhFQ==/109951164073616233.jpg',
          look: '970',
          artists: [
            { id: 88148, name: 'Backstreet Boys' }
          ]
        },
        {
          id: 3,
          title: '不礼貌的祝福',
          img: 'https://p2.music.126.net/BLmwsQcn-uYeCRP6sOXqxQ==/109951164075592480.jpg',
          look: '5222',
          artists: [
            { id: 28183064, name: '剑仙' }
          ]
        },
        {
          id: 4,
          title: '1st Shot (Cypher 2019)',
          img: 'https://p2.music.126.net/KsHBvoVTr38-WHagvep41g==/109951164073360183.jpg',
          look: '2351',
          artists: [
            { id: 30004947, name: '红孩儿唱片' },
            { id: 1158046, name: 'A-Mac' },
            { id: 12570417, name: 'e&m' },
            { id: 29026679, name: 'TheFEEX凯撒' }
          ]
        }
      ],
      list5: [
        {
          id: 1,
          title: '孤单心事',
          image: 'http://p4.music.126.net/0KCMOKHHbimwfdVvPPBpTA==/109951164034526943.jpg?param=100y100',
          desc: '颜人中'
        },
        {
          id: 2,
          title: '末日青春：补完计划',
          image: 'http://p4.music.126.net/RHILskW6QjAMpIAFiGm5Qg==/109951164032165872.jpg?param=100y100',
          desc: 'F.I.R.'
        },
        {
          id: 3,
          title: 'You Know I Know (Live In ShangHai)',
          image: 'http://p3.music.126.net/D4YTVFEHWqE8pVuMwd3BfQ==/109951164063718819.jpg?param=100y100',
          desc: 'Olly Murs'
        },
        {
          id: 4,
          title: 'Paint the Clouds',
          image: 'http://p4.music.126.net/Ldrg9ScUmVfwLPimRtqWjw==/109951164006741865.jpg?param=100y100',
          desc: 'Far East Movement / 袁娅维'
        },
        {
          id: 5,
          title: 'Pokémon Detective Pikachu (Original Motion Picture Soundtrack)',
          image: 'http://p3.music.126.net/xfKg1MRoALfg-StryciSQg==/109951164031502759.jpg?param=100y100',
          desc: 'Henry Jackman'
        },
        {
          id: 6,
          title: '路过人间',
          image: 'http://p4.music.126.net/Otu98pBAFmTF1oZtpclyCA==/109951164053279186.jpg?param=100y100',
          desc: '郁可唯'
        }
      ]
    }
  },
  components: {
    Banner
  }
}
</script>
