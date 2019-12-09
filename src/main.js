import Vue from 'vue'
import App from './App.vue'
import router from './router'
import JQuery from 'jquery'
window.$ = window.JQuery = JQuery
import 'popper.js'
import 'bootstrap'
import './assets/app.scss'

Vue.component('Navbar', require('./components/Navbar.vue').default);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
