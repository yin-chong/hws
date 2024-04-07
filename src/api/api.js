import axios from 'axios'
import qs from 'qs'
axios.defaults.withCredentials = true
const env = process.env.NODE_ENV;
const NO_BODY_METHODS = ['get', 'delete', 'head', 'option']
const REG_COLON_URL = /:([^/]+)/g
const api = {}

/**
 * 判断请求url是否携带参数
 * @param url
 * @returns {*|boolean}
 */
function isHasUrlParams (url) {
  return url && /:([^/]+)/.test(url)
}

function pickUpUrlParams (url, params) {
  return url.replace(REG_COLON_URL, (n, $1) => {
    if (params && params[$1]) {
      return params[$1]
    }
    return n
  })
}

/**
 * 请求处理
 * @param baseRequestConfig
 * @param data
 * @returns {*}
 */
const requestHandler = (baseRequestConfig, data = {}) => {
  let { method, url } = baseRequestConfig

  const isNoBody = NO_BODY_METHODS.includes(method)

  if (isNoBody && Object.keys(data).length) {
    url = `${url}?${qs.stringify(data, { arrayFormat: 'repeat' })}`
  } else if (!isNoBody) {
    // TODO 请求体处理
    // data = JSON.stringify(data)
  }
  let baseConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
      // 'X-Requested-with': 'XMLHttpRequest',
    }
  }
  // 令牌
  const token = window.sessionStorage.getItem('token')
  // 将令牌写入请求头
  // if (token) {
  //   baseRequestConfig.headers = {
  //     Authorization: `Bearer ${token}`,
  //     ...(baseRequestConfig['headers'] || {})
  //   }
  // }
  // if(baseRequestConfig.upload) {
  //   Object.assign(baseRequestConfig, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   })
  // }
  const instance = axios.create(baseConfig);
  // 发起请求
  return instance(Object.assign({}, { ...baseRequestConfig }, {
    ...(isNoBody ? { url } : { data })
  })).then(async res => {
    // console.log(res)
    switch (res.data.code) {
      case 200:
        // TODO 返回消息处理
        break
      case 402:
        // Toast.fail('网络错误!')
    }
    // eslint-disable-next-line no-prototype-builtins
    return [void 666, res.hasOwnProperty('data') ? res.data : res]
  }).catch(err => {
    // 请求异常
    console.error(err)
    return [err]
  })
}

const makeRequestHandler = (baseURL, url, type, upload = false) => {
  type = type.toLowerCase();
  const baseRequestConfig = {
    baseURL,
    method: type,
    url,
    upload: upload
  }

  if (isHasUrlParams(url)) {
    return (params) => {
      Object.assign(baseRequestConfig, { url: pickUpUrlParams(url, params) })
      return requestHandler(baseRequestConfig, params)
    }
  }
  return requestHandler.bind(null, baseRequestConfig)
}

export default function processApiConfig (apiConfig) {
  let { baseUrl, apiList = [] } = apiConfig

  apiList.forEach(apiConfigItem => {
    let { name, method, url, upload = false } = apiConfigItem

    if (!Array.isArray(method)) return

    method.forEach(methodItem => {
      const apiName = name;
      let requestUrl = baseUrl[env]
      api[apiName] = makeRequestHandler(requestUrl, url, methodItem, upload)
    })
  })

  return { ...api }
}

export const apiTarget = { ...api }
