import axios from 'axios'
import { Notification } from 'element-ui'

axios.defaults.baseURL = 'http://music.watasi.cn/api'
axios.defaults.timeout = 10000

axios.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

axios.interceptors.response.use(response => {
  return response.data
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 301:
        Notification({
          title: '警告',
          message: '该操作需要登录后才可执行',
          type: 'warning'
        })
        break
    }
  }
})

export default axios
