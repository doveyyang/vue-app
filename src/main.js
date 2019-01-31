// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入当前的APP.vue文件
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

// import './assets/common.css'
import './assets/fonts/iconfont.css'
import './assets/css/base.css'

// 阻止VUE在启动时生成生产提示
Vue.config.productionTip = false

// 设置axios
axios.defaults.baseURL = 'http://127.0.0.1:3333'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios

// 模块化

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
