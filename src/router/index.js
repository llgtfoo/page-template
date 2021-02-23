
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}//解决路由重复点击报错问题

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
})

export default router
