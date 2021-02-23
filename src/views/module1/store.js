import * as modules from './children/*/store.js'

export default () => {
  return {
    namespaced: true,
    modules,
  }
}