import { config } from '../constants/config'

export function WXRequest (options) {
  return wx.request({
    url: config.BASE_URL + options.url,
    timeout: 120 * 1000, // 请求超时时间
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    method: options.method,
    data: options.data,
    success: options.success,
    fail: options.fail,
    complete: options.complete,
  })
}