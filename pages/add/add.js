// pages/add/add.js
// 按需导入对应的方法或模块。解构赋值
import { formatTime } from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 用来接收用户输入
    ipt:"",
    // 规划下要保存的数据格式
    list:[
      {
        title:"忘穿秋裤",
        time:"2020年11月21日10:41:35"
      }
    ]
  },
  // 写函数体，直接写在外面即可，没有methods包裹
  add(){
    // console.log(this.data.ipt);
    // 将其保存到本地存储中
    // 在更新或保存之前，想要到本地存储中看看，如果有则更新，如果没有，则表示他是第一次提交数据，
    var list=wx.getStorageSync('list')||[];
    // 更新数据
    list.unshift({
      title:this.data.ipt,
      time:formatTime(new Date())
    });
    // 清空输入框的内容
    // this.data.ipt="";
    this.setData({
      ipt:''
    })
    // console.log(list);
    // 将最新的数据保存到本地存储中，以便在其他页面使用
    wx.setStorageSync('list', list)
    // 保存后再跳转到列表页
    wx.navigateTo({
      url: '/pages/list/list',
    })

  },
  // 点击取消按钮时，跳转到首页
  notok(){
    // 跳转页面的第二种方式：用JS方法
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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