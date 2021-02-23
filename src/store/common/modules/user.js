import { http } from '@/lib/http/index.js'
// 定义action type
export const LOGIN = 'LOGIN'
// 指定对应api
export const api = {
  [LOGIN]: `/login`, // 登录
}
// 初始化store对象
const state = {
  userInfo: {//用户信息
    orgId: '1',
  },
  currentMenu: {}, //当前菜单项
  userTheme: 'default', //主题
}

// 异步操作放到action handler里
const actions = {
  doLogin({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const rst = await http.post(api[LOGIN], payload)
        if (rst.code === '200') {
          const { sessionId, user } = rst.data // eslint-disable-line
          commit('SET_USER_INFO', user)
          resolve(rst)
        }
      } catch (error) {
        reject(error)
      }
    })
  },
  //异步更新当前菜单
  doCurrentMenu({ commit }, payload) {
    commit('SET_CURRENT_MENU', payload)
  },
}

// 根据commit更新store
const mutations = {
  SET_USER_INFO(state, info) {
    state.userInfo = info
  },
  SET_USER_THEME(state, theme) {
    state.userTheme = theme
  },
  //改变菜单项方发
  SET_CURRENT_MENU(state, info) {
    state.currentMenu = info
  },
}

const getters = {
  //用户信息
  userInfo(state) {
    return state.userInfo
  },
  //主题
  userTheme(state) {
    return state.userTheme
  },
  //获取菜单项
  getCurrentMenu(state) {
    return state.currentMenu
  },
}

// 导出vuex模块
export default {
  // 模块开启命名空间
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
