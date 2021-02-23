<template>
  <div class="layout-box">
    <!-- 顶部导航栏 -->
    <div class="layout-header" :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo">loglogologoo</div>
      <a-menu
        mode="horizontal"
        :selectedKeys="selectedKeys"
        :style="{ lineHeight: '66px',height: '66px' }"
        @click="selectedItem"
      >
        <a-menu-item :key="v.cnameKey" v-for="v in menuList">
          <icon-font v-if="v.icon" :type="v.icon"></icon-font>
          {{v.cname}}
        </a-menu-item>
      </a-menu>
    </div>
    <!-- 内容区 -->
    <div class="wraper-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import menuJson from '@/mock/menu/menu.json'
import { Icon } from 'ant-design-vue'
//阿里图标库引用
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2287282_0cednzk5tnru.js',
})

export default {
  name: 'Layout',
  components: {
    IconFont,
  },
  data() {
    return {
      menuList: menuJson,
      selectedKeys: [],
      menus: [],
    }
  },
  watch: {
    $route: {
      handler(route) {
        this.selectedKeys = [this.getSelectorMenu()]
        const menus = this.menuList.filter(ele => {
          return ele.cnameKey === route.matched[0].path
        })
        this.$store.dispatch('common/user/doCurrentMenu', menus[0])
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    this.selectedKeys = [this.getSelectorMenu()]
  },
  methods: {
    //获取选中的菜单
    getSelectorMenu() {
      return this.$route.matched[0].path
    },
    //点击跳转路由
    // eslint-disable-next-line no-unused-vars
    selectedItem({ item, key, keyPath }) {
      this.$router.push(key)
      const menus = this.menuList.filter(ele => {
        return ele.cnameKey === key
      })
      //存储二级菜单
      this.$store.dispatch('common/user/doCurrentMenu', menus[0])
    },
  },
}
</script>

<style scoped lang='scss'>
.layout-box {
  height: 100%;
  overflow: inherit;
  box-sizing: border-box;
  .layout-header {
    display: flex;
    align-items: center;
    padding: 0 50px;
    background: #1890ff;
    height: 66px;

    .logo {
      margin-right: 30px;
      font-size: 30px;
      font-weight: bolder;
      color: #fff;
    }

    /deep/.anticon {
      font-size: 20px !important;
      margin-right: 0px !important;
    }
  }

  .wraper-content {
    height: calc(100% - 0px);
    padding-top: 64px;
    overflow: hidden;
  }

  .ant-menu-horizontal {
    background: #1890ff;
    color: #fff;
    border: transparent;
    display: flex;
    align-items: flex-start;

    > li {
      box-sizing: border-box;
      height: 65px;
    }
  }

  .ant-menu-item-selected,
  .ant-menu-item:hover {
    color: #fff;
    font-weight: bolder;
    background: #0383fa;
    border-bottom: 3px solid #fff;
    position: relative;
    height: 65px;
  }
}
</style>
