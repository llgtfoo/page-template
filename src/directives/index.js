/**
 * @name:注册全局指令
 */
import * as directives from './*/index.js'

export default {
  install: function (Vue) {
    Object.keys(directives).forEach(key => {
      const d = directives[key]
      Vue.use(d)
    })
  },
}
