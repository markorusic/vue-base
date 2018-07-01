import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', value => {
  return value ? moment(value).format('dddd, D.M. u HH:mm') : ''
})

Vue.filter('dateHm', value => {
  return value ? moment(value).format('HH:mm') : ''
})

Vue.filter('day', value => {
  return value ? moment(value).format('dddd') : ''
})

Vue.filter('hm', minutes => {
  if (!minutes) {
    return ''
  }
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) {
    return `${m}m`
  }
  if (m === 0) {
    return `${h}h`
  }
  return `${h}h ${m}m`
})
