import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import middlewares from './middlewares'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: routes.map(route => ({ ...route, component: () => import(`@/views/${route.component}`) }))
})

router.beforeEach((...args) => {
  middlewares.forEach(f => f(...args))
})

export default router
