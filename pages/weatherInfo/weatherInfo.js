// pages/weatherInfo/weatherInfo.js
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
import {Request} from "../../utils/request.js";

var request =new Request()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '汐说天气',
    city: '',
    district: '',
    weatherData: {},
    dailyForecast: [],
    lifeStyle: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var qqmapsdk = new QQMapWX({
      key: 'N2YBZ-SGJCF-YLNJZ-JJO2X-IUO72-7KFJG' // 必填
    });
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: options.latitude,
        longitude: options.longitude
      },
      success: (res, data) => {
        console.log(data)

        this.setData({
          city: data.reverseGeocoderSimplify.city,
          district: data.reverseGeocoderSimplify.district,
        });

       request.getData({
        url: '/weather?location=CN101110205&key=7afdbb48602442c3b32124b3e1f064bd', 
         method: 'GET'
        }).then( res => {
          console.log(res);
          this.setData({
            weatherData: res,
            dailyForecast: res.daily_forecast,
            lifeStyle: res.lifestyle
          });
        })
        // console.log(weatherData)

      }
    });


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