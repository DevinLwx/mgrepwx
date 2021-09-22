// me.js
const util = require('../../utils/util.js')

Page({
  data: {
  },
  login() {
    wx.navigateTo({
      url: '../login/login',
    })
  }
})
