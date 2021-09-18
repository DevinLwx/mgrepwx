Page({
  data: {
    text: "",
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'}
  },
  onLoad() {
    this.setData({
      text: '测试文本'
    })
  },
  onShow() {
    this.animate('.test', [
      { scale: [1, 1], rotate: 0, ease: 'ease-out'  },
      { scale: [1.5, 1.5], rotate: 45, ease: 'ease-in', offset: 0.9},
      { scale: [2, 2], rotate: 90 },
    ], 5000, function () {
      this.clearAnimation('.test', function () {
        console.log("清除了.block上的所有动画属性")
      })
    }.bind(this))
  }
})
