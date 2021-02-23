/* eslint-disable indent */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  pluginOptions: {
    PROJ_TYPE: 'screen', // 项目类型
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
  },
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.fastmock.site/mock/a76ff711b33a233cdeac2112d8d909d0/llgtfoo/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  productionSourceMap: false,
}
