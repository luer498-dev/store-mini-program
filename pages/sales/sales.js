Page({
  data: {
    types: ['morning', 'afternoon', 'night'],
    punchType: 'morning',
    typeIndex: 0,
    note: '',
    products: [],
    saleList: []
  },

  onLoad() {
    const user = wx.getStorageSync('current_user');
    if (!user) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }

    const products = wx.getStorageSync('store_products') || [];
    const sales = wx.getStorageSync('store_sales') || [];
    const mySales = sales.filter(item => item.userId === user.id);
    this.setData({ products, saleList: mySales.reverse() });
  },

  onTypeChange(e) {
    const idx = Number(e.detail.value);
    this.setData({ typeIndex: idx, punchType: this.data.types[idx] });
  },

  onNoteInput(e) {
    this.setData({ note: e.detail.value });
  },

  saveSale(e) {
    const user = wx.getStorageSync('current_user');
    const productId = Number(e.detail.value.productId);
    const quantity = Number(e.detail.value.quantity);
    const unitPrice = Number(e.detail.value.unitPrice);

    if (!productId || !quantity || !unitPrice) {
      wx.showToast({ title: '请填写完整', icon: 'none' });
      return;
    }

    const product = (wx.getStorageSync('store_products') || []).find(item => item.id === productId);
    if (!product) {
      wx.showToast({ title: '商品不存在', icon: 'none' });
      return;
    }

    const sale = {
      id: Date.now(),
      userId: user.id,
      userName: user.name,
      productName: product.name,
      quantity,
      unitPrice,
      total: quantity * unitPrice,
      time: new Date().toLocaleString(),
      note: this.data.note || '无备注'
    };

    const sales = wx.getStorageSync('store_sales') || [];
    sales.push(sale);
    wx.setStorageSync('store_sales', sales);

    const products = wx.getStorageSync('store_products') || [];
    const target = products.find(item => item.id === productId);
    if (target) {
      target.stock = Math.max(0, target.stock - quantity);
      wx.setStorageSync('store_products', products);
    }

    wx.showToast({ title: '录入成功', icon: 'success' });
    this.setData({ note: '', saleList: [sale].concat(this.data.saleList) });
  }
});
