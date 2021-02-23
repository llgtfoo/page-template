import SideMenu from '@/components/SideMenu/index.vue'
import moduleMenu1 from './views/children/menu1-1/index.vue'
export default () => (
  {
    path: '/module1/menu1',
    component: SideMenu,
    redirect: '/module1/menu1/moduleMenu1',
    meta: {
      title: '实有人口',
    },
    children: [
      {
        path: '/module1/menu1/moduleMenu1',
        component: moduleMenu1,
        meta: {
          title: '菜单一',
        },
      },
    ],
  }
)