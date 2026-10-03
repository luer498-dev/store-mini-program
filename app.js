App({
  onLaunch() {
    const defaultProducts = [
      { id: 1, name: '洗发水', price: 39.9, stock: 120 },
      { id: 2, name: '牙刷', price: 12, stock: 300 },
      { id: 3, name: '护发素', price: 49, stock: 80 }
    ];

    const defaultUsers = [
      { id: 1, name: '老板', role: 'boss', store: '门店A', title: '老板' },
      { id: 2, name: '店长A', role: 'manager', store: '门店A', title: '店长' },
      { id: 3, name: '员工A', role: 'employee', store: '门店A', title: '销售员' }
    ];

    if (!wx.getStorageSync('store_products')) {
      wx.setStorageSync('store_products', defaultProducts);
    }

    if (!wx.getStorageSync('store_users')) {
      wx.setStorageSync('store_users', defaultUsers);
    }

    if (!wx.getStorageSync('store_sales')) {
      wx.setStorageSync('store_sales', []);
    }

    if (!wx.getStorageSync('store_punch')) {
      wx.setStorageSync('store_punch', []);
    }

    if (!wx.getStorageSync('store_customers')) {
      wx.setStorageSync('store_customers', []);
    }
  },

  globalData: {
    currentUser: null
  }
});
