
import axios from 'axios'
import store from '../store'
import { getToken } from '../utils/auth'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.BASE_URL, // url = base url + request url
  timeout: 5000, // request timeout
})


service.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      // For reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    console.log(error, 'Have Error') // for debug
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  response => {
    const res = response.data
    // Invalid token
    if (res.code === 401) {
      ElMessage({
        type: 'warning',
        message: "登录失效，请重新登录"
      })

      return Promise.reject(new Error(res.data || 'Error'))

    }
    if (res.code !== 200) {
      ElMessage({
        type: 'warning',
        message: '后台接口信息报错' + res.message
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    ElMessage({
      type: 'warning',
      message: 'http连接报错' + error
    })
    
    return Promise.reject(error)
  },
)

export default service
