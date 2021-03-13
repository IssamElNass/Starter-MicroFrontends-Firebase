import './public-path';
import Vue from 'vue';
import App from './App.vue';
import routes from './router';
import VueRouter from 'vue-router';

import './style.css';

Vue.config.productionTip = false;

let instance = null;

function render (props = {}) {
  const { container, routerBase } = props;
  const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: 'history',
    routes
  });

  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped');
}

export async function mount (props) {
  console.log('[vue] props from main framework', props);

  render(props);
}

export async function unmount () {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}