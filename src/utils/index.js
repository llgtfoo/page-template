/**
 * 格式化全局注册组件名
 * @param {*} name 双驼峰组件名
 */
export const formatComponentName = (name) => {
  const firstIndex = 0
  const deleteCount = 1
  const str = name.replace(/([A-Z])/g, '-$1').toLowerCase()
  return str.indexOf('-') === firstIndex ? str.substr(deleteCount) : str
}

/**
 * 数字转为千分位格式
 * @param {*} num 参数数字
 */
export const toThousands = (num) => {
  return num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

/**
 * 日期格式化
 * @param {*} num 参数数字
 */
export const time = (val = new Date(), format = 'yy-mm-dd h:m:s') => {
  let date = val
  if (!date) { date = new Date() }
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const H = date.getHours()
  const M = date.getMinutes()
  const S = date.getSeconds()
  return format.replace('yy', y)
    .replace('mm', m >= 10 ? m : `0${m}`)
    .replace('dd', d >= 10 ? d : `0${d}`)
    .replace('h', H >= 10 ? H : `0${H}`)
    .replace('m', M >= 10 ? M : `0${M}`)
    .replace('s', S >= 10 ? S : `0${S}`)
}

/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 */
export const Debounce = (fn, t) => {
  const delay = t || 500
  let timer
  return function () {
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, delay)
  }
}
/**
 * 函数节流
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 */
export const Throttle = (fn, t) => {
  let last
  let timer
  const interval = t || 500
  return function () {
    const args = arguments
    const now = +new Date()
    if (last && now - last < interval) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fn.apply(this, args)
      }, interval)
    } else {
      last = now
      fn.apply(this, args)
    }
  }
}

//获取后台url参数
export const getUrlQuery = (url) => {
  const temp1 = url.split('?')
  // eslint-disable-next-line prefer-destructuring
  const pram = temp1[1]
  const keyValue = pram.split('&')
  const obj = {}
  for (let i = 0; i < keyValue.length; i++) {
    const item = keyValue[i].split('=')
    // eslint-disable-next-line prefer-destructuring
    const key = item[0]
    // eslint-disable-next-line prefer-destructuring
    const value = item[1]
    obj[key] = value
  }
  return obj
}
//递归菜单选中第一个
export const recursionMenu = (menu) => {
  function getKey(menu) {
    let value = ''
    if (menu.children) {
      value = getKey(menu.children[0])
    } else {
      value = menu.cnameKey
    }
    return value
  }
  return getKey(menu)
}

export default {
  install: (Vue) => {
    Vue.prototype.$time = time
    Vue.prototype.$Throttle = Throttle
    Vue.prototype.$Debounce = Debounce
    Vue.prototype.$toThousands = toThousands
    Vue.prototype.$getUrlQuery = getUrlQuery
    Vue.prototype.$recursionMenu = recursionMenu
  },
}
