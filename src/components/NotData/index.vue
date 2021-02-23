<template>
  <div class="page page-notData">
    <img class="img-notData" src="./assets/not-data.png" alt="notData">
    <p class="msg-notData">暂无数据</p>
  </div>
</template>
<script>
export default {
  name: 'NotData',
}
</script>

<style lang="scss" scoped>
.page-notData{
  width:100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .img-notData{
    width: 300px;
    height: 165px;
    transform: translateX(24px);
  }
  .msg-notData{
    font-size: 18px;
    color: #666;
    margin: 16px 0 24px;
  }
}
</style>
