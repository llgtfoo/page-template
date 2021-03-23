<template>
  <div class="echarts-demo">
    <echart-common :options="options"></echart-common>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '5%',
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: false,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
        }],
      },
    }
  },
}
</script>

<style scoped lang='scss'>
.echarts-demo {
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
