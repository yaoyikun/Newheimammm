import axios from 'axios'
// axios基本信息
export const service = axios.create({
  baseURL: process.env.VUE_APP_BASEURL, // api的base_url
  // timeout: 300000 // 响应时间
})


// 请求发出前的拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

// 请求响应数据返回后的拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  })

/**
 * 返回一个Promise
 * url:接口地址
 * type:请求类型
 * params:请求参数，对象写法
 */
export function fetch(url, type = 'get', params = {}) {

  return new Promise((resolve, reject) => {
    let _config = {
      url: url,
      method: type
    }
    if (type == "get") {
      _config.params = params
    } else {
      _config.data = params
    }
    service(_config).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
