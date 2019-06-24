import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import axios from 'axios'

// 安装axios
Vue.prototype.$http = axios

// 引入路由
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
