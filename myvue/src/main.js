import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import topHead from "./components/topHead"
import bottomfooter from "./components/bottomfooter"



Vue.use(ElementUI);
Vue.config.productionTip = false

//定义全局axios的公用服务端口
axios.defaults.baseURL="http://localhost:8888"

//向原型上追加通用方法
Vue.prototype.axios=axios

//定义全局组件
Vue.component("bottom-footer",bottomfooter)
Vue.component("top-head",topHead);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
