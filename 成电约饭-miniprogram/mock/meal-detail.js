/**
 * 约饭详情 Mock 数据
 */

module.exports = {
  meal: {
    id: 1,
    host: {
      nickname: '爱吃火锅的小张',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhang',
      creditScore: 95,
      gender: 'male',
      hasHealthReport: true,
      grade: '大三',
      college: '计算机学院',
    },
    time: '今天 18:30',
    location: '老码头火锅（南门商业街）',
    peopleLimit: 4,
    currentPeople: 2,
    costType: 'AA',
    tags: ['无辣不欢', '火锅控', '社交达人'],
    note: '3=1，已经定好位置，来一个不事儿多的小伙伴！\n\n预计人均 80-100 元，辣度中辣，能吃辣的欢迎~',
    createdAt: '10分钟前',
    onlyGirls: false,
    requireHealth: false,
    status: 'open',
  },
  participants: [
    {
      id: 101,
      nickname: '小李',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=li',
      creditScore: 92,
      gender: 'male',
      hasHealthReport: true,
      status: 'confirmed',
    },
  ],
  messages: [
    {
      id: 1,
      user: { nickname: '小李', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=li' },
      content: '我能吃辣，可以带个朋友吗？',
      time: '5分钟前',
    },
    {
      id: 2,
      user: { nickname: '爱吃火锅的小张', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhang' },
      content: '可以的，刚好还差两人',
      time: '3分钟前',
    },
  ],
}
