// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入css样式全局控制
import './assets/css/global.css'

// 引入element-ui
import ElementUI from 'element-ui'

// 引入字体图标库
import './assets/fonts/iconfont.css'

// 引入axios
import axios from 'axios'
// 配置axios
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(function(config) {
  var token = window.sessionStorage.getItem('token')
  config.headers.Authorization = token
  // Do something before request is sent
  return config
}, function(error) {
  // Do something with request error
  return Promise.reject(error)
})
Vue.prototype.$http = axios

// 注册标签组件
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
