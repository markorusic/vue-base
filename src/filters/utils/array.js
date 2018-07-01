import Vue from 'vue'

Vue.filter('ucArray', arr => arr.map(item => {
  if (!item && item.length === 0) {
    return ''
  }
  return item.charAt(0).toUpperCase() + item.slice(1)
}))
Vue.filter('join', (arr, delimiter = ', ') => arr ? arr.join(delimiter) : '')
