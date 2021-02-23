
import * as router from './children/*/router.js'
import home from '@/components/Layout/index.vue'

const children = []
Object.keys(router).forEach(ele => {
  children.push(router[ele]())
})

export default () => ({
  path: '/home',
  component: home,
  redirect: '/home/index',
  meta: {
    title: '首页',
  },
  children,
})