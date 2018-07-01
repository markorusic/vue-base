import Vue from 'vue'
import { abilitiesPlugin } from '@casl/vue'
import App from './App'
import router from './router/'
import store from './store/'
import ability from './config/ability'
import './registerServiceWorker'
import './assets/main.css'

Vue.config.productionTip = false

Vue.use(abilitiesPlugin, ability)

// debug only
window.ability = ability

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
