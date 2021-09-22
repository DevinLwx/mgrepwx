import { WXRequest } from './api.js'

export const Login = options => {
  return WXRequest({
    url: 'user/login',
    method: 'post',
    data: options.data,
    success: options.success,
    fail: options.fail,
    complete: options.complete,
  })
}
