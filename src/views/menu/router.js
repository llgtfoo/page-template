import home from '@/components/Layout/index.vue'
import index1 from './views/children/menu-1/cell/index.vue'
import index2 from './views/children/menu-2/cell/index.vue'
export default () => ({
  path: '/home',
  component: home,
  redirect: '/home/index1',
  meta: {
    title: '测试',
  },
  children: [
    {
      path: '/home/index1',
      component: index1,
      meta: {
        title: '测试1',
      },
    },
    {
      path: '/home/index2',
      component: index2,
      meta: {
        title: '测试2',
      },
    },
  ],
})