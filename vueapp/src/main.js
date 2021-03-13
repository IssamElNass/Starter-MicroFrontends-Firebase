import './public-path';
import Vue from 'vue';
import App from './App.vue';
import routes from './router';
import VueRouter from 'vue-router';

import './style.css';

Vue.config.productionTip = false;

const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');