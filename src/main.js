import Vue from 'vue';

import router from './router';
import store from './store';
import './css/main.css';

import { BootstrapVue, LayoutPlugin,   CardPlugin, ButtonPlugin, FormPlugin  } from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(LayoutPlugin);
Vue.use(CardPlugin);
Vue.use(ButtonPlugin);
Vue.use(FormPlugin);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
