import axios from 'axios'
import auth from '@/services/auth/'
import { API_URL } from '@/config/app'

const axiosInstance = axios.create({
  baseURL: API_URL
})

axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

axiosInstance.interceptors.request.use(
  request => {
    const token = auth.getToken()
    if (token) {
      request.headers['Authorization'] = 'Bearer ' + token
    }
    return request
  },
  error => {
    console.log(error)
    const originalRequest = error.config
    if (error.response.status !== 401 && originalRequest._retry) {
      return Promise.reject(error)
    }
    originalRequest._retry = true
    return auth.refreshToken(error)
      .then(response => {
        auth.setData(response.data)
        axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + auth.getToken()
        originalRequest.headers['Authorization'] = 'Bearer ' + auth.getToken()
        return axiosInstance(originalRequest)
      })
  }
)

export default axiosInstance
