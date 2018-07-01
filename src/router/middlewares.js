export default [
  function checkAuth (to, from, next) {
    // check for to.meta for requiredAuth flag, or roles
    next()
  }
]
