import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwibmFtZSI6Ilh5IEluYWciLCJlbWFpbCI6Inh5aWdAZ21haWwuY29tIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE3MDk1ODc2ODQsImV4cCI6MTcwOTg0Njg4NH0.VkD04vfhWVIYnpiJy1xJ39Dw_A0dmMhYVugaDlwqSrc'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')