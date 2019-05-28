//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '汐说天气',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onGetUserInfo(e){
    console.log(e);
  },

  onTap() {
    console.log(1111111);
      wx.getSetting({
        success: res => {
          console.log(res.authSetting)
          if(res.authSetting['scope.userLocation']){
            console.log('获取地理位置权限')
          } else {
            wx.authorize({
              scope: 'scope.userLocation'
            });
          }
        }
    })
    // wx.authorize({
    //   scope: 'scope.userLocation'
    // });
    // wx.navigateTo({
    //   url: '../weatherInfo/weatherInfo'
    // })
  },
  // getUserInfo() {
  //   console.log(1111111)
  //   wx.authorize({
  //     scope: 'scope.userLocation'
  //   });
  // },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
