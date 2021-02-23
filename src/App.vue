<template>
  <a-config-provider :locale="locale">
    <div class="wrapper">
      <keep-alive :include="['Layout']">
       <router-view></router-view>
      </keep-alive>
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  data() {
    return {
      locale: zhCN,
    }
  },
  mounted() {},
}
</script>

<style lang="scss">
.wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
}
</style>
