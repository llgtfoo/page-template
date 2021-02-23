/**
 * @name: 注册全局组件
 */
import { formatComponentName } from '../utils'
import * as components from './*/index.vue'
export default {
  install: function (Vue) {
    Object.keys(components).forEach(key => {
      const c = components[key]
      Vue.component(formatComponentName(c.name), c)
    })
  },
}
