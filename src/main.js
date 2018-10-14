// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/style.css'
import store from './store/index'
import allapi from './api/modul/index'
import Vchart from 'v-charts'




Vue.prototype.$api = allapi
Vue.use(iview)
Vue.use(Vchart)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
