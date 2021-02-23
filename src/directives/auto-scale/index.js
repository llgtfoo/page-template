/**
 * @name: 页面自动缩放
 * @param {type}
 */
import { Debounce } from '../../utils'
import './children.polyfill'
export default (Vue) => {
  Vue.directive('auto-scale', {
    inserted: function (el, { value = { width: 1920, height: 1080 }}) {
      const { width = 1920, height = 1080 } = value
      const wrapper = el
      console.dir(wrapper.children)
      if (wrapper.children.length !== 1) {
        throw new Error('v-auto-scale 指定的标签只能含有一个子节点！')
      }
      const [content] = wrapper.children
      const objDom = document.createElement('object')
      // eslint-disable-next-line no-unused-vars
      const _handleObjectLoad = () => {
        objDom.contentDocument.defaultView.addEventListener('resize', Debounce(() => {
          const { width: cW, height: cH } = wrapper.getBoundingClientRect()
          // 初始化即进行缩放
          const hScale = cH / height
          const wScale = cW / width
          content.style.transform = `scaleX(${wScale}) scaleY(${hScale})`
        }))
        const { width: cW, height: cH } = wrapper.getBoundingClientRect()

        const hScale = cH / height
        const wScale = cW / width
        content.style.transform = `scaleX(${wScale}) scaleY(${hScale})`
        content.style.position = 'absolute'
        content.style.display = 'block'
        content.style.overflow = 'hidden'
        content.style.transformOrigin = '0 0'
        content.style.height = `${height}px`
        content.style.width = `${width}px`
      }
      objDom.style.cssText = `
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        opacity: 0;
        pointer-events: none;
        z-index: -1;
      `
      objDom.onload = _handleObjectLoad
      objDom.type = 'text/html'
      objDom.data = 'about:blank'
      wrapper.appendChild(objDom)
    },
  })
}
