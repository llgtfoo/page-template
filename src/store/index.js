import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import common from './common/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    email: 'llgtfoo@163.com',
  },
  mutations: {},
  actions: {},
  modules: {
    common,
  },
  plugins: [createPersistedState({ paths: ['common'] })],
})
console.log(store, 'store')
export default store