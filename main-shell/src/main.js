import Vue from 'vue';
import App from './App.vue';
import { registerMicroApps, start, setDefaultMountApp } from "qiankun";
import microApps from "./micro-apps";
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');


const apps = microApps.map((item) => {
  return {
    ...item,
  };
});

registerMicroApps(apps, {
  beforeLoad: (app) => {
    console.log("before load app.name====>>>>>", app.name);
  },
  beforeMount: [
    (app) => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    },
  ],
  afterMount: [
    (app) => {
      console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    },
  ],
});
setDefaultMountApp("/reactapp");
start();