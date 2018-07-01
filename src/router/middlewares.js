import auth from '@/services/auth/'

export default [
  function checkAuth (to, from, next) {
    const roles = to.meta.roles
    if (!roles) {
      return next()
    }
    if (!auth.isAuthenticated()) {
      return next('login')
    }
    if (!roles.includes(auth.getUser().role)) {
      return next('denied')
    }
    next()
  }
]
