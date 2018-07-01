// import http from '@/services/http/'
import { STORAGE_AUTH_KEY } from '@/config/app'

export default {
  getData () {
    let data = null
    try {
      data = JSON.parse(localStorage.getItem(STORAGE_AUTH_KEY))
    } catch {
      localStorage.removeItem(STORAGE_AUTH_KEY)
    }
    return data
  },
  getUser () {
    return {
      name: 'marko rusic',
      role: 'dispatcher'
    }
    const data = this.getData()
    if (!data) return
    return data.user
  },
  getToken () {
    const data = this.getData()
    if (!data) return
    return data.token
  },
  getRefreshToken () {
    const data = this.getData()
    if (!data) return
    return data.refresh_token
  },
  isAuthenticated () {
    return this.getUser() && this.getToken()
  },
  setData (data) {
    localStorage.setItem(STORAGE_AUTH_KEY, JSON.stringify(data))
  },
  refreshToken (initialError) {
    return new Promise ((resolve, reject) => {
      const refreshToken = this.getRefreshToken()
      if (!refreshToken) {
        return reject(initialError)
      }
      // todo: make real http call
      return resolve({
        token: '123',
        refresh_token: '321',
        user: {
          name: 'marko rusic',
          role: 'admin'
        }
      })
    })
  }
}
