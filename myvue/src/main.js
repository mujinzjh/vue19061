import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import topHead from "./components/topHead"
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.component("top-head",topHead);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
