Page({
  data: {
    user: null,
    actions: [
      { name: '打卡', url: '/pages/punch/punch', color: '#2d7ff9' },
      { name: '销售', url: '/pages/sales/sales', color: '#2cc36b' },
      { name: '客户', url: '/pages/customer/customer', color: '#f39c12' },
      { name: '排行', url: '/pages/rank/rank', color: '#9b59b6' },
      { name: '财务', url: '/pages/finance/finance', color: '#e74c3c' }
    ]
  },

  onShow() {
    const user = wx.getStorageSync('current_user');
    if (!user) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }
    this.setData({ user });
  },

  logout() {
    wx.removeStorageSync('current_user');
    wx.redirectTo({ url: '/pages/login/login' });
  }
});
