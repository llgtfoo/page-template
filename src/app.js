import '@/assets/css/init.css' //默认css
import '@/assets/css/scroll.scss' //默认滚动条css
import '@/lib/http/axios' //axios
import { http } from '@/lib/http/index' //封装后的axios
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import * as echarts from 'echarts'
import Vue from 'vue'
// 设置cookie
import VueCookies from 'vue-cookies'
import Fragment from 'vue-fragment'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import components from './components/index'
import directives from './directives/index'
import router from './router'
import store from './store'
import utils from './utils/index'
import views from './views/index'

Vue.use(VueCookies)

Vue.use(components)//全局组件
Vue.use(directives)//全局指令
Vue.use(utils)//全局工具函数
// Vue.use(Http)//this.http
sync(store, router)//route和store结合

Vue.use(Antd)//ui框架

Vue.use(Fragment.Plugin)//跟元素

Vue.prototype.http = http
Vue.prototype.echarts = echarts
Vue.use(views, router, store)

Vue.config.productionTip = false
export default new Vue({
  router,
  store,
  render: h => h(App),
})