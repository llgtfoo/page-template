import * as modules from './views/children/*/store.js'
export default () => {
    return {
        namespaced: true,
        modules,
    }
}