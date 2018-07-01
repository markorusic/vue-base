import auth from '@/services/auth/'

export default [
  function checkAuth (to, from, next) {
    const roles = to.meta.roles
    if (!roles) {
      return next()
    }
    const user = auth.getUser()
    if (!user) {
      return next('login')
    }
    if (!roles.includes(user.role)) {
      return next('denied')
    }
    next()
  }
]
