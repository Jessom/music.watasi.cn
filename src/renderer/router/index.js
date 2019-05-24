import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'music',
      redirect: { name: 'recommend' },
      meta: {
        keepAlive: true
      },
      component: require('@/views/Home.vue').default,
      children: [
        /**
         * 发现音乐
         */
        {
          path: 'find',
          name: 'find',
          meta: {
            keepAlive: true
          },
          component: require('@/views/find/Index.vue').default,
          children: [
            /**
             * 个性推荐
             */
            {
              path: 'recommend',
              name: 'recommend',
              meta: {
                keepAlive: true
              },
              component: require('@/views/find/Recommend.vue').default
            },
            /**
             * 歌单
             */
            {
              path: 'songs',
              name: 'songs',
              meta: {
                keepAlive: true
              },
              component: require('@/views/find/Songs.vue').default
            },
            /**
             * 主播电台
             */
            {
              path: 'radio',
              name: 'radio',
              meta: {
                keepAlive: true
              },
              component: require('@/views/find/Radio.vue').default
            },
            /**
             * 排行版
             */
            {
              path: 'ranking',
              name: 'ranking',
              meta: {
                keepAlive: true
              },
              component: require('@/views/find/Ranking.vue').default
            },
            /**
             * 歌手
             */
            {
              path: 'singer',
              name: 'singer',
              meta: {
                keepAlive: true
              },
              component: require('@/views/find/Singer.vue').default
            },
            /**
             * 最新音乐
             */
            {
              path: 'new',
              name: 'new-find',
              meta: {
                keepAlive: true
              },
              component: require('@/views/find/New.vue').default
            }
          ]
        },

        /**
         * 私人FM
         */
        {
          path: 'fm',
          name: 'fm',
          meta: {
            keepAlive: true
          },
          component: require('@/views/fm/Index.vue').default
        },

        /**
         * 视频
         */
        {
          path: 'video',
          name: 'video',
          component: require('@/views/video/Index.vue').default,
          children: [
            /**
             * 视频
             */
            {
              path: 'video',
              name: 'video-video',
              component: require('@/views/video/Videos.vue').default
            },
            /**
             * MV
             */
            {
              path: 'mv',
              name: 'mv',
              component: require('@/views/video/MV.vue').default
            }
          ]
        },

        /**
         * 朋友
         */
        {
          path: 'friend',
          name: 'friend',
          component: require('@/views/friend/Index.vue').default
        },

        /**
         * 下载管理
         */
        {
          path: 'download',
          name: 'download',
          component: require('@/views/download/Index.vue').default,
          children: [
            /**
             * 已下载歌单
             */
            {
              path: 'songs',
              name: 'songs-down',
              component: require('@/views/download/Songs.vue').default
            },

            /**
             * 已下载节目
             */
            {
              path: 'program',
              name: 'program-down',
              component: require('@/views/download/Program.vue').default
            },

            /**
             * 正在下载
             */
            {
              path: 'wait',
              name: 'wait-down',
              component: require('@/views/download/Wait.vue').default
            }
          ]
        },

        /**
         * 音乐云盘
         */
        {
          path: 'cloud',
          name: 'cloud',
          component: require('@/views/cloud/Index.vue').default
        },

        /**
         * 我的电台
         */
        {
          path: 'radio',
          name: 'radio',
          component: require('@/views/radio/Index.vue').default
        },

        /**
         * 我的收藏
         */
        {
          path: 'collection',
          name: 'collection',
          component: require('@/views/collection/Index.vue').default,
          children: [
            /**
             * 专辑
             */
            {
              path: 'album',
              name: 'album',
              component: require('@/views/collection/Album.vue').default
            },

            /**
             * 歌手
             */
            {
              path: 'singer',
              name: 'singer',
              component: require('@/views/collection/Singer.vue').default
            },

            /**
             * 视频
             */
            {
              path: 'videos',
              name: 'videos',
              component: require('@/views/collection/Videos.vue').default
            },

            /**
             * 专栏
             */
            {
              path: 'column',
              name: 'column',
              component: require('@/views/collection/Column.vue').default
            }
          ]
        },

        /**
         * 我的喜欢
         */
        {
          path: 'like',
          name: 'like',
          component: require('@/views/like/Index.vue').default
        }
      ]
    },
    {
      path: '/lyrics',
      name: 'lyrics',
      component: require('@/views/Lyrics.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
