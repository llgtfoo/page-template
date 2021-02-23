<template>
  <a-layout style="height:100%">
    <!-- 菜单栏 -->
    <a-layout-sider v-model="collapsed" collapsible class="menu-layout">
      <a-menu
        theme="light"
        :openKeys="openKeys"
        :selectedKeys="selectedKeys"
        mode="inline"
        :inlineCollapsed="collapsed"
        @click="selectedItem"
        @openChange="onOpenChange"
      >
        <template v-for="v in menus">
          <template v-if="!v.children">
            <a-menu-item :key="v.cnameKey">
              <icon-font :type="v.icon" v-if="v.icon" />
              <span>{{v.cname}}</span>
            </a-menu-item>
          </template>
          <template v-else>
            <sub-menu :menuInfo="v" :key="v.cnameKey" />
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout style="padding: 0 10px 10px">
      <!-- 面包屑 -->
      <a-breadcrumb style="margin: 10px 0">
        <a-breadcrumb-item v-for="(v, i) in breadcrumb" :key="i">
{{v}}
</a-breadcrumb-item>
      </a-breadcrumb>
      <!-- 页面内容区 -->
      <a-layout-content class="layout-content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { Menu, Icon } from 'ant-design-vue'
import menuJson from '@/mock/menu/menu.json'
//阿里图标库引用
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2287282_0cednzk5tnru.js',
})
//菜单无限循环生成
const SubMenu = {
  template: `
   <a-sub-menu :key="menuInfo.cnameKey" v-bind="$props" v-on="$listeners">
     <template slot='title'>
        <span>
         <icon-font :type="menuInfo.icon" v-if='menuInfo.icon'/>
         <span>{{menuInfo.cname }}</span>
        </span>
      </template>
     <template v-for="v in menuInfo.children">
        <template v-if="!v.children">
         <a-menu-item :key="v.cnameKey">
          <icon-font :type="v.icon" v-if='v.icon'/>
            <span>{{v.cname}}</span>
          </a-menu-item>
        </template>
        <template v-else>
         <sub-menu :menu-info="v" :key="v.cnameKey" />
        </template>
    </template>
    </a-sub-menu>
  `,
  name: 'SubMenu',
  props: {
    ...Menu.SubMenu.props,
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    'icon-font': IconFont,
  },
}
export default {
  name: 'Layout',
  components: {
    'sub-menu': SubMenu,
    'icon-font': IconFont,
  },
  data() {
    return {
      collapsed: false,
      list: [],
      openKeys: [], //根据路由打开菜单
      selectedKeys: [], //根据路由选中菜单
      breadcrumb: [], //面包屑
    }
  },
  computed: {
    //获取二级菜单
    menus() {
      return menuJson
    },
  },
  watch: {
    $route: {
      handler(route) {
        this.openKeys = [route.matched[0].path]
        this.selectedKeys = [route.fullPath]
        this.getBreadcrumb(route.matched)
      },
      deep: true,
      immediate: true,
    },
    collapsed(val) {
      if (val) {
        this.openKeys = []
      } else {
        this.openKeys = [this.$route.matched[0].path]
      }
    },
  },
  mounted() {
    // console.log(this.menus, this.$route, "menus1");
  },
  created() {
    this.openKeys = [this.$route.matched[0].path]
    this.selectedKeys = [this.$route.fullPath]
    this.getBreadcrumb(this.$route.matched)
  },
  methods: {
    //获得面包屑数组
    getBreadcrumb(list) {
      const set = new Set()
      list.forEach((v) => {
        if (!v.meta.title) {
          return
        }
        set.add(v.meta.title)
      })
      this.breadcrumb = set
    },
    //控制只打开一个菜单组
    onOpenChange(openKeys) {
      console.log(openKeys, 'openKeys')
      if (openKeys.length !== 0) {
        this.openKeys = [openKeys[1]]
      } else {
        this.openKeys = ['']
      }
    },
    //跳转
    // eslint-disable-next-line no-unused-vars
    selectedItem({ item, key, keyPath }) {
      this.$router.push(key)
      // console.log(item, key, keyPath, "sideMenu");
    },
  },
}
</script>

<style lang="scss" scoped>
.layout-content {
  background: #fff;
  padding: 20px;
  margin: 0;
  // min-height: 480px;
  overflow: hidden;
  min-width: 1000px;
  padding-bottom: 0px;
}
.ant-layout-sider {
  background: #fff;
}
.menu-layout {
  /deep/.ant-layout-sider-trigger {
    background: rgba(24, 144, 255, 0.8);
  }

  /deep/.anticon {
    font-size: 20px !important;
    margin-right: 0px !important;
  }
}
</style>
