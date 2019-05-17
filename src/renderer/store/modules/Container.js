import * as types from './types'

const state = {
  // 页面跳转动画，判断底部播放的图片上icon
  animation: false
}

const mutations = {
  [types.SET_ANIMATION] (state, payload) {
    console.log(payload)
    state.animation = payload
  }
}

const actions = {
  [types.SET_ANIMATION] ({ commit }, payload) {
    console.log(payload)
    commit(types.SET_ANIMATION, payload)
  }
}

export default {
  state,
  mutations,
  actions
}
