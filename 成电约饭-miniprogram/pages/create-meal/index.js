const { formatDate } = require('../../utils/date.js')

const MAX_TAG_COUNT = 5
const MAX_LOCATION_LENGTH = 50
const MAX_NOTE_LENGTH = 200
const MIN_PEOPLE = 2
const MAX_PEOPLE_OPTIONS = [2, 3, 4, 5, 6, 8]
const COST_TYPES = ['AA', '我请', '求请']
const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000
const TOAST_DURATION = 1500
const NAVIGATE_BACK_DELAY = 1000
const LOADING_DURATION = 800

Page({
  data: {
    form: {
      time: '',
      location: '',
      peopleLimit: 4,
      costType: 'AA',
      tags: [],
      note: '',
      onlyGirls: false,
      requireHealth: false,
    },
    tagOptions: ['无辣不欢', '清淡口味', '火锅控', '烧烤爱好者', '减脂期', '社交达人', '话痨', '安静吃饭'],
    today: '',
    maxDate: '',
  },

  onLoad() {
    const now = new Date()
    const today = formatDate(now)
    const maxDate = formatDate(new Date(now.getTime() + ONE_WEEK_MS))
    this.setData({ today, maxDate })
  },

  onInput(e) {
    const { field } = e.currentTarget.dataset
    const { value } = e.detail
    this.setData({ [`form.${field}`]: value })
  },

  onPeopleChange(e) {
    this.setData({ 'form.peopleLimit': MAX_PEOPLE_OPTIONS[e.detail.value] })
  },

  onCostChange(e) {
    this.setData({ 'form.costType': COST_TYPES[e.detail.value] })
  },

  onTagToggle(e) {
    const { tag } = e.currentTarget.dataset
    const tags = [...this.data.form.tags]
    const idx = tags.indexOf(tag)
    if (idx > -1) {
      tags.splice(idx, 1)
    } else if (tags.length < MAX_TAG_COUNT) {
      tags.push(tag)
    } else {
      wx.showToast({ title: `最多选择${MAX_TAG_COUNT}个标签`, icon: 'none' })
      return
    }
    this.setData({ 'form.tags': tags })
  },

  onSwitchChange(e) {
    const { field } = e.currentTarget.dataset
    this.setData({ [`form.${field}`]: e.detail.value })
  },

  onTimeChange(e) {
    this.setData({ 'form.time': e.detail.value })
  },

  validateForm(form) {
    if (!form.time) {
      return '请选择时间'
    }

    const selectedDate = new Date(form.time)
    const now = new Date()
    if (selectedDate < now) {
      return '约饭时间不能早于当前时间'
    }

    if (!form.location.trim()) {
      return '请输入地点'
    }

    if (form.location.trim().length > MAX_LOCATION_LENGTH) {
      return `地点长度不能超过${MAX_LOCATION_LENGTH}个字`
    }

    if (form.note.length > MAX_NOTE_LENGTH) {
      return `备注长度不能超过${MAX_NOTE_LENGTH}个字`
    }

    return null
  },

  submit() {
    const { form } = this.data
    const error = this.validateForm(form)
    if (error) {
      wx.showToast({ title: error, icon: 'none' })
      return
    }

    wx.showLoading({ title: '发布中...' })

    setTimeout(() => {
      wx.hideLoading()
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: TOAST_DURATION,
      })

      setTimeout(() => {
        wx.navigateBack()
      }, NAVIGATE_BACK_DELAY)
    }, LOADING_DURATION)
  },
})
