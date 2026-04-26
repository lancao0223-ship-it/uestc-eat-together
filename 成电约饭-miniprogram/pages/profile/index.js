const { formatDate } = require('../../utils/date.js')

const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000
const UPLOAD_TIMEOUT = 1500

Page({
  data: {
    user: {
      nickname: '爱吃火锅的小张',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhang',
      creditScore: 95,
      gender: 'male',
      grade: '大三',
      college: '计算机学院',
      campus: '清水河校区',
      hasHealthReport: true,
      healthReportDate: '2026-03-15',
      healthReportExpiry: '2027-03-15',
    },
    stats: {
      hosted: 12,
      joined: 28,
      noShow: 0,
    },
    tasteTags: ['无辣不欢', '火锅控', '社交达人'],
    menuItems: [
      { icon: '📋', label: '我的约饭', url: '' },
      { icon: '⭐', label: '我的评价', url: '' },
      { icon: '⚙️', label: '设置', url: '' },
    ],
  },

  onLoad() {
    // Load user data
  },

  uploadHealthReport() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        wx.showLoading({ title: '上传中...' })
        // Simulate upload
        const uploadTimer = setTimeout(() => {
          wx.hideLoading()
          this.setData({
            'user.hasHealthReport': true,
            'user.healthReportDate': formatDate(new Date()),
            'user.healthReportExpiry': formatDate(new Date(Date.now() + ONE_YEAR_MS)),
          })
          wx.showToast({ title: '上传成功', icon: 'success' })
        }, UPLOAD_TIMEOUT)

        this._uploadTimer = uploadTimer
      },
    })
  },

  onUnload() {
    if (this._uploadTimer) {
      clearTimeout(this._uploadTimer)
    }
  },

  previewReport() {
    wx.previewImage({
      urls: ['https://placehold.co/600x800/10B981/FFFFFF?text=体检报告预览'],
    })
  },

  deleteReport() {
    wx.showModal({
      title: '确认删除',
      content: '删除后其他用户将无法看到您的体检报告标识',
      confirmColor: '#EF4444',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            'user.hasHealthReport': false,
            'user.healthReportDate': '',
            'user.healthReportExpiry': '',
          })
          wx.showToast({ title: '已删除', icon: 'success' })
        }
      },
    })
  },

  editTags() {
    wx.showToast({ title: '功能开发中', icon: 'none' })
  },

  goToMenu(e) {
    const { url } = e.currentTarget.dataset
    if (url) {
      wx.navigateTo({ url })
    } else {
      wx.showToast({ title: '功能开发中', icon: 'none' })
    }
  },
})
