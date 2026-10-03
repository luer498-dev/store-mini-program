Page({
  data: {
    rankList: []
  },

  onShow() {
    const user = wx.getStorageSync('current_user');
    if (!user) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }

    const sales = wx.getStorageSync('store_sales') || [];
    const map = {};

    sales.forEach(item => {
      const key = item.userName;
      if (!map[key]) map[key] = 0;
      map[key] += Number(item.total || 0);
    });

    const rankList = Object.keys(map).map(name => ({ name, total: map[name] })).sort((a, b) => b.total - a.total);
    this.setData({ rankList });
  }
});
