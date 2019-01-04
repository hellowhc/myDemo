// test/tes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day: '十八',
    mounth: "十",
    tit: "我在鼓楼的夜色中为你唱花香自，以后的每一天都为你而歌唱",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
createDom(){
  wx.request({
    url: '/mock/5bd149fab36f2c5eac3a9274/QM_magazine/getMarkTypeList HTTP/1.1', //仅为示例，并非真实的接口地址
    success (res) {
      console.log(res)
    },
    fail(){
      console.log('1111');
    }
  })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     this.createDom();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})