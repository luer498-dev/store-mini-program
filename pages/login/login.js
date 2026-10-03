Page({
  data: {
    roles: ['employee', 'manager', 'boss', 'finance'],
    role: 'employee',
    roleIndex: 0,
    stores: ['门店A', '门店B'],
    store: '门店A',
    storeIndex: 0,
    title: ''
  },

  onUsernameInput(e) {
    this.setData({ username: e.detail.value });
  },

  onRoleChange(e) {
    const idx = Number(e.detail.value);
    this.setData({ roleIndex: idx, role: this.data.roles[idx] });
  },

  onStoreChange(e) {
    const idx = Number(e.detail.value);
    this.setData({ storeIndex: idx, store: this.data.stores[idx] });
  },

  onTitleInput(e) {
    this.setData({ title: e.detail.value });
  },

  login() {
    const username = this.data.username || '';
    if (!username.trim()) {
      wx.showToast({ title: '请输入姓名', icon: 'none' });
      return;
    }

    const user = {
      id: Date.now(),
      name: username,
      role: this.data.role,
      store: this.data.store,
      title: this.data.title || '员工'
    };

    const users = wx.getStorageSync('store_users') || [];
    users.push(user);
    wx.setStorageSync('store_users', users);
    wx.setStorageSync('current_user', user);

    wx.showToast({ title: '登录成功', icon: 'success' });
    setTimeout(() => {
      wx.redirectTo({ url: '/pages/index/index' });
    }, 500);
  }
});
