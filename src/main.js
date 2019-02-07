// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入当前的APP.vue文件
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'

// import './assets/common.css'
import './assets/fonts/iconfont.css'
import './assets/css/base.css'

// 阻止VUE在启动时生成生产提示
Vue.config.productionTip = false

// 设置axios
axios.defaults.baseURL = 'http://127.0.0.1:3333'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios

// 设置懒加载
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: './assets/images/err.png',
  loading: './assets/images/loading.gif',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
