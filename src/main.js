import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
import './style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')