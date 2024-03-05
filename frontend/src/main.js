import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/messages'
import store from './config/store'
import router from './config/router'

import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikx1Y2FzIEUuIEZyZXkiLCJlbWFpbCI6Imx1Y2FzZnJleUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzA5NjAzNTQ1LCJleHAiOjE3MDk4NjI3NDV9.4gDMJLvDquqiTI4BBYVMTa13n0ggM1nozw_oGEHiAXU'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')