const mockMeals = require('../../mock/meals.js')
const mockGroups = require('../../mock/groups.js')

const MAX_PAGE = 3
const MEAL_DELAY = 500
const GROUP_DELAY = 400

Page({
  data: {
    currentTab: 'meal',
    tabs: [
      { key: 'meal', label: '约饭' },
      { key: 'group', label: '凑单' },
    ],
    meals: [],
    groups: [],
    loading: true,
    hasMore: true,
    page: 1,
    filters: {
      timeRange: 'all',
      onlyGirls: false,
      onlyHealth: false,
    },
    showFilterPanel: false,
  },

  onLoad() {
    this.loadMeals()
  },

  onPullDownRefresh() {
    this.setData({ page: 1, meals: [] })
    this.loadMeals().finally(() => {
      wx.stopPullDownRefresh()
    })
  },

  onReachBottom() {
    if (this.data.hasMore && !this.data.loading) {
      this.setData({ page: this.data.page + 1 })
      this.loadMeals()
    }
  },

  async loadMeals() {
    this.setData({ loading: true })

    try {
      // Simulate API delay
      await new Promise(r => setTimeout(r, MEAL_DELAY))

      const currentPage = this.data.page
      const newMeals = currentPage === 1 ? mockMeals : [...this.data.meals, ...mockMeals]

      this.setData({
        meals: newMeals,
        loading: false,
        hasMore: currentPage < MAX_PAGE,
      })
    } catch (err) {
      wx.showToast({ title: '加载失败，请重试', icon: 'none' })
      this.setData({ loading: false, hasMore: false })
    }
  },

  switchTab(e) {
    const key = e.currentTarget.dataset.key
    this.setData({ currentTab: key, page: 1 })
    if (key === 'meal') {
      this.loadMeals()
    } else {
      this.loadGroups()
    }
  },

  async loadGroups() {
    this.setData({ loading: true })

    try {
      await new Promise(r => setTimeout(r, GROUP_DELAY))
      this.setData({
        groups: mockGroups,
        loading: false,
      })
    } catch (err) {
      wx.showToast({ title: '加载失败，请重试', icon: 'none' })
      this.setData({ loading: false })
    }
  },

  toggleFilterPanel() {
    this.setData({ showFilterPanel: !this.data.showFilterPanel })
  },

  onFilterChange(e) {
    const { field } = e.currentTarget.dataset
    const { value } = e.detail
    this.setData({
      [`filters.${field}`]: value,
      page: 1,
      meals: [],
    })
    this.loadMeals()
  },

  goToCreate() {
    wx.navigateTo({ url: '/pages/create-meal/index' })
  },

  goToDetail(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/meal-detail/index?id=${id}` })
  },

  goToGroupDetail(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/meal-detail/index?type=group&id=${id}` })
  },
})
