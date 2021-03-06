import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import ItemBar from '@/components/bar/ItemBar.vue'
import MeunBar from '@/components/bar/MenuBar.vue'
import BlendCell from '@/components/cell/BlendCell.vue'
import ToolBar from '@/components/bar/ToolBar.vue'
import './assets/scss/index.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.component(ItemBar.name, ItemBar)
Vue.component(MeunBar.name, MeunBar)
Vue.component(BlendCell.name, BlendCell)
Vue.component(ToolBar.name, ToolBar)
Vue.use(ElementUI)
Vue.use(VueLazyload, {
  loading: 'data-loading',
  error: 'data-error'
})
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
