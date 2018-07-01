import axios from 'axios'
import auth from '@/services/auth/'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api'
})

axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

axiosInstance.interceptors.request.use(
  config => {
    const token = auth.getToken()
    if (token) {
      config.headers['X-AUTH-TOKEN'] = token
    }
    return config
  },
  error => {
    console.log('nes majci')
    console.log(error)
    return Promise.reject(error)
  }
)

const http = axiosInstance

export { http }
