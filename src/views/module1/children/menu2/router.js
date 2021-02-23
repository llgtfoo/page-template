import SideMenu from '@/components/SideMenu/index.vue'
import moduleMenu from './views/children/menu/index.vue'
export default () => (
  {
    path: '/module1/menu2',
    component: SideMenu,
    redirect: '/module1/menu2/moduleMenu1',
    meta: {
      title: '实有房屋',
    },
    children: [
      {
        path: '/module1/menu2/moduleMenu1',
        component: moduleMenu,
      }
    ]
  }
)