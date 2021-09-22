import { Login } from '../../api/user'

Page({
  data: {
    username: '',
    password: '',
    loading: false,
    dialog: {
      visible: false,
      text: '',
      type: '',
    },
  },
  loginFn() {
    if (this.data.loading) return false

    this.setData({
      loading: true
    })
    Login({
      data: {
        userName: this.data.username,
        password: this.data.password,
      },
      success: (res) => {
        this.setData({
          dialog: {
            visible: true,
            text: res.statusCode === 200 ? `用户“${this.data.username}”登录成功！` : res.data.message,
            type: res.statusCode === 200 ? '登录成功' : '登录失败'
          }
        })
      },
      complete: () =>{
        this.setData({
          loading: false
        })
      },
    })
  },
  tapDialogButton() {
    this.setData({
      dialog: {
        visible: false
      },
  })
  },
  bindUsername(e) {
    this.setData({
      username: e.detail.value
    })
  },
  bindPassword(e) {
    this.setData({
      password: e.detail.value
    })
  },
})
