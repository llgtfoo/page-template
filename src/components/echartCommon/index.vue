/**
 * @description: echarts动画统一封装
 * @param {echarts 选项options}
 * @return:
 */
<template>
  <div class="chart-box relative">
    <div ref="echartCommon" class="chart" />
  </div>
</template>

<script>
import doAnimation from '@/utils/doAnimation.js'
export default {
  name: 'EchartCommon',
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      chart: null,
      showNoData: true,
      animate: null,
    }
  },
  watch: {
    options: {
      handler() {
        this.updateChartView()
      },
      deep: true,
    },
  },

  mounted() {
    this.chart = this.echarts.init(this.$refs.echartCommon)
    this.updateChartView()
    window.addEventListener('resize', this.handleWindowResize)

    // 通过hook监听组件销毁钩子函数，并取消监听事件
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this.handleWindowResize)
    })
  },
  beforeDestroy() {
    if (this.animate) {
      this.animate.destory()
    }
  },
  methods: {
    /**
     * 更新echart视图
     */
    updateChartView() {
      if (!this.chart || Object.keys(this.options).length === 0) {
        return
      }
      // eslint-disable-next-line no-unused-vars
      new Promise((resolve, reject) => {
        this.chart.clear()
        this.chart.setOption(this.options, true)
        resolve()
      }).then(() => {
        if (this.animate) {
          this.animate.destory()
          this.animate = null
        }
        this.animate = new doAnimation(this.chart)
        this.animate.animate()
      })
    },
    /**
     * 当窗口缩放时，echart动态调整自身大小
     */
    handleWindowResize() {
      if (!this.chart) {
        return
      }
      this.chart.resize()
    },
  },
}
</script>

<style lang="scss" scoped>
.chart,
.chart-box {
  width: 100%;
  height: 100%;
}
</style>
