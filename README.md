# 门店员工管理微信小程序

这是一个适合门店员工使用的微信小程序项目模板，功能包括：

- 登录
- 员工打卡
- 销售录入
- 客户信息备注
- 销售排行榜
- 老板看板
- 角色权限（员工 / 店长 / 老板 / 财务）

## 适用场景

- 门店员工管理
- 销售记录统计
- 客户回头率管理
- 店长/老板看板

## 运行方式

1. 打开微信开发者工具
2. 新建项目
3. 选择这个目录
4. 直接预览即可

## 项目结构

```text
store-mini-program/
├── app.js
├── app.json
├── app.wxss
├── project.config.json
├── sitemap.json
├── pages/
│   ├── login/
│   ├── index/
│   ├── punch/
│   ├── sales/
│   ├── customer/
│   ├── rank/
│   └── finance/
└── README.md
```

## 说明

这个版本优先考虑：
- 微信小程序直接使用
- 手机端操作体验
- 不依赖复杂后端
- 适合先做原型和验收

如果你想继续升级成真正上线版本，可以后续接：
- 微信云开发
- MySQL 后端
- 统一用户中心
- 管理后台

## 默认使用

- 打开小程序后，输入姓名即可登录
- 默认角色为 employee
- 也可以选择 boss / manager / finance

## 相关链接

- GitHub 仓库：https://github.com/luer498-dev/store-mini-program
