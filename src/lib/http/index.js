/**
 * @name: 二次封装post和get方法，统一传参方式{}
 * @param {type}
 */
const http = {
  async post(url, data) {
    const optipns = {
      method: 'post',
      url: url,
      data,
      ...(arguments[2]),
    }
    return await axios(optipns)
  },
  async get(url, data) {
    const optipns = {
      method: 'get',
      url: url,
      params: data,
      ...(arguments[2]),
    }
    return await axios(optipns)
  },
}
// export default {
//   install: function (Vue) {
//     Vue.prototype.http = _axios_
//   },
// }
export { http }
