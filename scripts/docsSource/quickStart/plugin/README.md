---
group:
  title: 介绍
  order: 0
title: 分端构建
---

# 分端构建

uni 提供了配套的babel插件用来按环境引入最小包，去除非当前环境可用的代码。

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```
npm i babel-plugin-universal-api-import
```

## 使用

在babel配置中加入插件：
```
[
  'babel-plugin-universal-api-import',
  {
    target: 'miniapp'
  }
]
```
target可选的值有：

|名称|值|
|:---|:---|
|阿里小程序|miniapp|
|微信小程序|wechat-miniprogram|
|web|web|
|头条小程序|byte-miniprogram|

### Rax
如果你使用的是rax，由于rax使用的是build-scripts打包工具，所以我们提供了build-scripts的插件，他底层依赖的还是babel-plugin-universal-api-import。

#### 安装：
```
npm i build-plugin-rax-api-import
```
#### 使用：
在build.json文件中加入：

```
"plugins" : [
  [
    "build-plugin-rax-api-import"
  ]
]
```

不再需要传入target
