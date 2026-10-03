Page({
  data: {
    punchType: 'morning',
    note: '',
    punchList: []
  },

  onLoad() {
    const user = wx.getStorageSync('current_user');
    if (!user) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }

    const list = wx.getStorageSync('store_punch') || [];
    const myPunch = list.filter(item => item.userId === user.id);
    this.setData({ punchList: myPunch.reverse() });
  },

  onTypeChange(e) {
    this.setData({ punchType: e.detail.value });
  },

  onNoteInput(e) {
    this.setData({ note: e.detail.value });
  },

  submit() {
    const user = wx.getStorageSync('current_user');
    const record = {
      id: Date.now(),
      userId: user.id,
      userName: user.name,
      type: this.data.punchType,
      note: this.data.note || '无备注',
      time: new Date().toLocaleString()
    };

    const list = wx.getStorageSync('store_punch') || [];
    list.push(record);
    wx.setStorageSync('store_punch', list);
    wx.showToast({ title: '打卡成功', icon: 'success' });
    this.setData({ note: '', punchList: [record].concat(this.data.punchList) });
  }
});
