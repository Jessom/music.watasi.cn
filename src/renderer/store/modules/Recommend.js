import * as types from './types'
import { get } from '../api'
import { filterNumber } from '../util'

const state = {
  // 推荐轮播图
  banner: [],

  // 歌单
  songs: [],

  // 独家放送
  exclusive: [],

  // 推荐mv
  mvs: []
}

const mutations = {
  // 设置轮播图
  [types.SET_BANNER] (state, payload) {
    state.banner = payload
  },

  // 设置歌单
  [types.SET_SONGS] (state, payload) {
    state.songs = payload
  },

  // 设置独家放送
  [types.SET_EXCLUSIVE] (state, payload) {
    state.exclusive = payload
  },

  // 设置mv
  [types.SET_MV] (state, payload) {
    state.mvs = payload
  }
}

const actions = {
  // 获取轮播图
  async [types.GET_BANNER] ({ commit }) {
    try {
      const res = await get('/banner')
      commit(types.SET_BANNER, res.banners)
    } catch (error) {
      console.log(error)
    }
  },

  // 获取推荐歌单
  async [types.GET_SONGS] ({ commit }) {
    try {
      const res = await get('/personalized')
      commit(types.SET_SONGS, res.result)
    } catch (error) {
      console.log(error)
    }
  },

  // 获取独家放送
  async [types.GET_EXCLUSIVE] ({ commit }) {
    try {
      const res = await get('/personalized/privatecontent')
      commit(types.SET_EXCLUSIVE, res.result)
    } catch (error) {
      console.log(error)
    }
  },

  // 获取推荐mv
  async [types.GET_MV] ({ commit }) {
    try {
      const res = await get('/personalized/mv')
      commit(types.SET_MV, res.result)
    } catch (error) {
      console.log(error)
    }
  }
}

const getters = {
  // 截取推荐歌单
  [types.GET_SONGS] (state) {
    const list = JSON.parse(JSON.stringify(state.songs)).splice(0, 9)
    return list.map(c => {
      return {
        ...c,
        playCount: filterNumber(c.playCount)
      }
    })
  },

  // 对banner进行筛选
  [types.GET_BANNER] (state) {
    const list = JSON.parse(JSON.stringify(state.banner))
    return list.filter(c => c.targetId !== 0)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
