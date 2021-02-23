
import moduleRouters from './router'
import modulesStores from './store'

export default (Vue, store, router) => { // eslint-disable-line
  router.addRoutes([moduleRouters()])
  store.registerModule('home', modulesStores())
}