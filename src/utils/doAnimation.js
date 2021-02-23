class doAnimation {
  constructor(echartChart) {
    this.chart = echartChart
    this.intervalId = null
    this.showMovie = true
  }
  animate = () => {
    if (this.chart) {
      let i = 0
      const options = this.chart.getOption()
      const { series, dataZoom } = options
      // console.log(options, 'dataZoom')
      // eslint-disable-next-line no-unused-vars
      let showLength = 0
      if (dataZoom.length > 0) {
        // eslint-disable-next-line prefer-destructuring
        showLength = dataZoom[0].endValue
      }
      const dom = this.chart._dom
      dom.style.visibility = 'visible'
      var length = 0 //eslint-disable-line
      if (series[0].data) {
        length = series.map((item) => item.data.length).reduce((i, t) => (i > t ? i : t), 0)
      }
      this.chart.on('mouseover', () => {
        // console.log(this, '1')
        this.showMovie = false
        // for (let f = 0; f < series.length; f++) {
        //   this.chart.dispatchAction({
        //     type: 'downplay',
        //     seriesIndex: f,
        //   })
        // }
        // this.chart.dispatchAction({
        //   type: 'highlight',
        //   dataIndex: _.dataIndex,
        // })
      })
      this.chart.on('mouseout', () => {
        this.showMovie = true
      })
      this.intervalId = setInterval(() => {
        if (!this.showMovie) { return }
        if (i >= length) {
          i = 0
        }
        for (let f = 0; f < series.length; f++) {

          if (dataZoom.length > 0) {
            if (i > showLength && i < length) {
              this.chart.dispatchAction({
                type: 'dataZoom',
                startValue: i - showLength,
                // 结束位置的数值
                endValue: i,
              })

              setTimeout(() => {
                this.chart.dispatchAction({
                  type: 'showTip',
                  seriesIndex: f,
                  dataIndex: i - 1,
                })
              }, 100)
            } else if (i === 0) {
              this.chart.dispatchAction({
                type: 'dataZoom',
                startValue: 0,
                // 结束位置的数值
                endValue: showLength,
              })
              setTimeout(() => {
                this.chart.dispatchAction({
                  type: 'showTip',
                  seriesIndex: f,
                  dataIndex: 0,
                })
              }, 100)
            }
          }

          for (let j = 0; j < length; j++) {
            this.chart.dispatchAction({
              type: 'downplay',
              seriesIndex: f,
              dataIndex: j,
            })
          }
          this.chart.dispatchAction({
            type: 'highlight',
            seriesIndex: f,
            dataIndex: i,
          })
          this.chart.dispatchAction({
            type: 'showTip',
            seriesIndex: f,
            dataIndex: i,
          })
          // console.log(i, length, f, 'i')
        }
        i++
      }, 2500)
    }
  }
  destory = () => {
    clearInterval(this.intervalId)
    this.chart = null
  }
}

export default doAnimation
