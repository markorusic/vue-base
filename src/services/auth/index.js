import { STORAGE_AUTH_KEY } from '@/config/app'

export default {
  getData () {
    let data
    try {
      data = JSON.parse(localStorage.getItem(STORAGE_AUTH_KEY))
    } catch {
      localStorage.removeItem(STORAGE_AUTH_KEY)
    }
    return data
  },
  getUser () {
    const data = this.getData()
    if (!data) {
      return
    }
    return data.user
  },
  getToken () {
    const data = this.getData()
    if (!data) {
      return
    }
    return data.token
  },
  setData (data) {
    localStorage.setItem(STORAGE_AUTH_KEY, JSON.stringify(data))
  },
  refreshToken () {
    return new Promise ((resolve, reject) => {
      // handle this...
      resolve(true)
    })
  }
}