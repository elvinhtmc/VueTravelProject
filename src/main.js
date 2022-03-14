// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* tslint:disable:no-unused-variable */
import fastClick from 'fastclick'// 解决移动端300ms点击延迟
import 'styles/reset.css'/* 引入reset.css */
import 'styles/border.css'/* 防止边框粗细因手机像素不同而有差异 */
import 'styles/iconfont.css'// introduce iconfont
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
