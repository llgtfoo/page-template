/**
 * @name:  404页面
 */
<template>
  <div class="page page-404">
    <img class="img-404" src="./assets/404.png" alt="404">
    <p class="msg-404">抱歉，你访问的页面不存在！</p>
    <a-button type="primary" @click="$router.replace('/')">返回首页</a-button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style lang="scss" scoped>
.page-404{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .img-404{
    width: 342px;
    height: 321px;
    transform: translateX(24px);
  }
  .msg-404{
    font-size: 20px;
    color: #999999;
    margin: 16px 0 24px;
  }
}
</style>
