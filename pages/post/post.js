Page({

  /**
   * 页面的初始数据
   */
  data: {
    post:[],
    comments:[],
    hidden:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?id='+options.id,
      success:function(res){
        that.setData({'post':res.data[0]})
      }
    })
    wx.request({
      url:'https://www.v2ex.com/api/replies/show.json?topic_id='+options.id,
      success:function(res){
        console.log('comments '+res.data)
        that.setData({'comments':res.data});
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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