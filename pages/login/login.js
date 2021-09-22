Page({
  data: {
    username: '',
    password: ''
  },
  loginFn() {
    console.log(this.data)
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
