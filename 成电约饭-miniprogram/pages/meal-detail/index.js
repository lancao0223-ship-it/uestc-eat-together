const mockDetail = require('../../mock/meal-detail.js')

const DETAIL_DELAY = 300
const NAVIGATE_BACK_DELAY = 800

Page({
  data: {
    meal: null,
    participants: [],
    isHost: false,
    hasJoined: false,
    messages: [],
  },

  onLoad(options) {
    const { id, type } = options
    this.loadDetail(id, type)
  },

  async loadDetail(id, type) {
    try {
      await new Promise(r => setTimeout(r, DETAIL_DELAY))

      this.setData({
        meal: mockDetail.meal,
        participants: mockDetail.participants,
        messages: mockDetail.messages,
        isHost: false,
        hasJoined: false,
      })
    } catch (err) {
      wx.showToast({ title: '加载详情失败', icon: 'none' })
    }
  },

  joinMeal() {
    wx.showModal({
      title: '确认加入',
      content: '加入后请准时赴约，多次爽约将降低信用分',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '加入成功', icon: 'success' })
          this.setData({ hasJoined: true })
        }
      },
    })
  },

  cancelMeal() {
    wx.showModal({
      title: '确认取消',
      content: '取消约饭将影响您的信用分，确定取消吗？',
      confirmColor: '#EF4444',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '已取消', icon: 'success' })
          setTimeout(() => wx.navigateBack(), NAVIGATE_BACK_DELAY)
        }
      },
    })
  },

  goToProfile(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/profile/index?userId=${id}` })
  },
})
