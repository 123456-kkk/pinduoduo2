
import Vue from 'vue'
import App from './App'
import router from './router'


import '@/assets/reset.css'


import '@/assets/font.js'


import '../static/iconfont/iconfont.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import axios from 'axios'
Vue.prototype.axios=axios


import LyTab from 'ly-tab'
Vue.use(LyTab)


import Footer from './components/footer'
Vue.component('Footer',Footer)


router.beforeEach((to, from, next) => {
  let token=JSON.parse(localStorage.getItem('user'))
  if (to.meta.requiredAuth&&token === null) {
      next({
          path: "/login"
      })
  }
  next()
})

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import store from  './store'

import  FastClick  from  'fastclick'
FastClick.attach(document.body);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
