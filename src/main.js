// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入当前的APP.vue文件
import App from './App'
import router from './router'

// import './assets/common.css'
import './assets/fonts/iconfont.css'
import './assets/css/base.css'

// 阻止VUE在启动时生成生产提示
Vue.config.productionTip = false

// 模块化

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
