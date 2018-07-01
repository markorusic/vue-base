import auth from '@/services/auth'
import { PERMISSIONS } from '@/config/permissions'

export const can = (action) => {
  const user = auth.getUser()
  if (!user) {
    return false
  }
  const permissions = PERMISSIONS[user.role]
  if (!permissions) {
    return false
  }
  if (permissions === '*') {
    return true
  }
  return permissions.includes(action)
}


export const Permission = {
  install: function (Vue, options) {
    Vue.prototype.$can = can
  }
}
