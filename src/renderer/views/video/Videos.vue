<template>
  <div class="video">
    <tool-bar title='全部视频' :list='list' />

    <el-row :gutter="20" type="flex" style="flex-wrap: wrap;">
      <el-col
        :span="8"
        class="tibt elli1"
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
        <p class="desc">by {{ item.artistName }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'videos',
  data () {
    return {
      list: [
        {
          id: 1,
          name: '听BGM'
        },
        {
          id: 2,
          name: '现场'
        },
        {
          id: 3,
          name: '翻唱'
        },
        {
          id: 4,
          name: 'MV'
        },
        {
          id: 5,
          name: '舞蹈'
        },
        {
          id: 6,
          name: 'ACG音乐'
        },
        {
          id: 7,
          name: '韩舞'
        }
      ],
      list2: [
        {
          id: 1,
          name: '洛丽塔',
          picUrl: 'http://p1.music.126.net/wKNwDLbXscBxR_70vwpLmQ==/109951164063360981.jpg',
          playCount: '55663',
          artistName: '果味VC'
        },
        {
          id: 2,
          name: 'Players',
          picUrl: 'http://p1.music.126.net/5bYWYJtc5TVCJQbAUCP2Tw==/109951164077585730.jpg',
          playCount: '18439',
          artistName: '上北健'
        },
        {
          id: 3,
          name: 'Rescue Me',
          picUrl: 'http://p1.music.126.net/oqqW2r6l_iJ2eu9DNtVmnA==/109951164079781906.jpg',
          playCount: '114895',
          artistName: 'OneRepublic'
        },
        {
          id: 4,
          name: '让水倒流',
          picUrl: 'http://p1.music.126.net/LzjSY8z5FHg1F4-Yy9p7vA==/109951164078888396.jpg',
          playCount: '14298',
          artistName: '伍佰 & China Blue'
        },
        {
          id: 5,
          name: 'Higher',
          picUrl: 'http://p1.music.126.net/rLDw4jDLZi_z-P932q3iWg==/109951164079802508.jpg',
          playCount: '22324',
          artistName: 'DJ Khaled'
        },
        {
          id: 6,
          name: 'Blank Marquee',
          picUrl: 'http://p1.music.126.net/OXiHR4n78OkRbs3sID0AKg==/109951164079766033.jpg',
          playCount: '10235',
          artistName: 'Yuna'
        },
        {
          id: 7,
          name: '小花猫',
          picUrl: 'http://p1.music.126.net/5orjI-NLzKY8nitSEhl8Uw==/109951164073785111.jpg',
          playCount: '13076',
          artistName: '南游记乐队'
        },
        {
          id: 8,
          name: '我只喜欢你',
          picUrl: 'http://p1.music.126.net/mnkQEYCvsYna_2W0ytsoXA==/109951164073925490.jpg',
          playCount: '159507',
          artistName: '胡夏'
        },
        {
          id: 9,
          name: 'ANXIETY',
          picUrl: 'http://p1.music.126.net/kiRRQcUMKsHnhdr_mCNN4Q==/109951164063692447.jpg',
          playCount: '38742',
          artistName: '直火帮 Straight Fire Gang'
        }
      ]
    }
  }
}
</script>
