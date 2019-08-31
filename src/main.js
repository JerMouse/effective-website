import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'normalize.css'
import './styles/border.css'
import './styles/custom.scss'
import './styles/transition.scss'
import './permission'
import './assets/iconfont/iconfont.css'

Vue.use(ElementUI,{
  size:'small'
});
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
