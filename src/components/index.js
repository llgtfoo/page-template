/**
 * @name: 注册全局组件
 */
import * as components from './*/index.vue'
import { formatComponentName } from '../utils'
export default {
  install: function (Vue) {
    Object.keys(components).forEach(key => {
      const c = components[key]
      Vue.component(formatComponentName(c.name), c)
    })
  },
}
