import Vue from 'vue'

Vue.filter('limitChars', (str, maxChars) => {
  if (str) {
    let slicedStr = str.slice(0, maxChars)
    if (str.length > slicedStr.length) {
      slicedStr += '...'
    }
    return slicedStr
  }
  return ''
})
Vue.filter('limitWords', (str, maxWords) => {
  if (str) {
    let slicedStr = str.split(' ').slice(0, maxWords).join(' ')
    if (str.length > slicedStr.length) {
      slicedStr += '...'
    }
    return slicedStr
  }
  return ''
})
