import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import views from './views/index'
import '@/lib/http/axios'//axios
import { http } from '@/lib/http/index'//封装后的axios

import components from './components/index'
import directives from './directives/index'
import utils from './utils/index'
import echarts from 'echarts'
// 设置cookie
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

Vue.use(components)//全局组件
Vue.use(directives)//全局指令
Vue.use(utils)//全局工具函数
// Vue.use(Http)//this.http
sync(store, router)//route和store结合

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);//ui框架

import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)//跟元素

Vue.prototype.http = http
Vue.prototype.echarts = echarts
Vue.use(views, router, store)

import '@/assets/css/init.css'//默认css
import '@/assets/css/scroll.scss'//默认滚动条css
Vue.config.productionTip = false
export default new Vue({
  router,
  store,
  render: h => h(App),
})