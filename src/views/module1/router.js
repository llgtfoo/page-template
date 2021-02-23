import * as router from './children/*/router.js'
// import module1 from './index.vue'
import layout from '@/components/Layout/index.vue'
const children = []
Object.keys(router).forEach(ele => {
  children.push(router[ele]())
})

export default () => ({
  path: '/module1',
  component: layout,
  redirect: '/module1/menu1',
  meta: {
    title: '模块一',
  },
  children,
})