import Vue from 'vue'
import App from './App'
import router from './router/'
import store from './store/'
import './registerServiceWorker'
import './assets/main.css'

// import { abilitiesPlugin } from '@casl/vue'
// import ability from './config/ability'
import { Permission } from '@/services/permission'

import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'

Vue.config.productionTip = false

Vue.use(Toaster, { timeout: 5000 })
Vue.use(Permission)
// Vue.use(abilitiesPlugin, ability)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
