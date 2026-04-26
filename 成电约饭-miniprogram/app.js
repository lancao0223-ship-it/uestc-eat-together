App({
  globalData: {
    userInfo: null,
    campus: '清水河校区',
    isAuthenticated: false,
  },

  onLaunch() {
    // Check authentication status
    const token = wx.getStorageSync('auth_token')
    if (token) {
      this.globalData.isAuthenticated = true
    }

    // Get system info for safe area
    const systemInfo = wx.getSystemInfoSync()
    this.globalData.systemInfo = systemInfo
    this.globalData.safeAreaBottom = systemInfo.safeArea ? (systemInfo.screenHeight - systemInfo.safeArea.bottom) : 0
  },
})
