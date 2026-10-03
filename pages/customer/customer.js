Page({
  data: {
    products: [],
    selectedProduct: {},
    quantity: '',
    unitPrice: '',
    note: '',
    customers: []
  },

  onLoad() {
    const user = wx.getStorageSync('current_user');
    if (!user) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }

    const customers = (wx.getStorageSync('store_customers') || []).filter(item => item.store === user.store);
    this.setData({ customers });
  },

  onNameInput(e) {
    this.setData({ name: e.detail.value });
  },

  onPhoneInput(e) {
    this.setData({ phone: e.detail.value });
  },

  onFavInput(e) {
    this.setData({ favorite: e.detail.value });
  },

  onRemarkInput(e) {
    this.setData({ remark: e.detail.value });
  },

  saveCustomer() {
    const user = wx.getStorageSync('current_user');
    const customer = {
      id: Date.now(),
      store: user.store,
      name: this.data.name || '未知',
      phone: this.data.phone || '无电话',
      favorite: this.data.favorite || '无偏好',
      remark: this.data.remark || '无备注'
    };

    const list = wx.getStorageSync('store_customers') || [];
    list.push(customer);
    wx.setStorageSync('store_customers', list);
    wx.showToast({ title: '已保存', icon: 'success' });
    this.setData({ customers: list.filter(item => item.store === user.store) });
  }
});
