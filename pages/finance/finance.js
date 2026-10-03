Page({
  data: {
    totalSales: 0,
    orderCount: 0,
    userCount: 0
  },

  onShow() {
    const user = wx.getStorageSync('current_user');
    if (!user) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }

    const sales = wx.getStorageSync('store_sales') || [];
    const users = wx.getStorageSync('store_users') || [];
    const totalSales = sales.reduce((sum, item) => sum + Number(item.total || 0), 0);

    this.setData({
      totalSales,
      orderCount: sales.length,
      userCount: users.length
    });
  }
});
