/**
 * @name: 拖拽
 * @param {type}
 */
export default (Vue) => {
  Vue.directive('drag', {
    inserted: function (el, binding) {
      const { value } = binding
      const dragTarget = el.querySelector(value) || el // 如果指令的子节点设置了id为dragTarget，则会转移目标dom
      dragTarget.onmousedown = function (ev) {
        const disX = ev.clientX - el.offsetLeft
        const disY = ev.clientY - el.offsetTop
        document.onmousemove = function (ev) {
          const l = ev.clientX - disX
          const t = ev.clientY - disY
          el.style.left = `${l}px`
          el.style.top = `${t}px`
        }
        document.onmouseup = function () {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    },
  })
}
