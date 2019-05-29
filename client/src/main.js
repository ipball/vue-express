import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

import jQuery from "jquery";
window.jQuery = window.$ = jQuery
// import 'bootstrap/dist/js/bootstrap.min.js';
require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter)
import { routes } from './routes';
const router = new VueRouter({ routes });

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
