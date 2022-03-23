---
group:
  title: 介绍
title: 分端构建
---

# 分端构建

Uni API 提供了配套的babel插件用来按环境引入最小包，去除非当前环境可用的代码。

## 提示
使用 webpack5 时，无法使用本插件，Uni Api 本身已对 webpack5 做了支持优化，在 webpack5 构建时，不使用插件即可达到分端构建的效果。 
## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

## 安装

```bash
npm i @uni/babel-plugin-universal-api-import
```

## 使用

在 babel 配置中加入插件：
```js
[
  '@uni/babel-plugin-universal-api-import',
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
|头条小程序|bytedance-microapp|
|百度小程序|baidu-smartprogram|
|快手小程序|kuaishou-miniprogram|

### Rax
如果你使用的是 Rax，由于 Rax 使用的是 build-scripts 打包工具，所以我们提供了 build-scripts 的插件，他底层依赖的还是 babel-plugin-universal-api-import。

#### 安装：

```shell
npm i @uni/build-plugin-rax-api-import
```
#### 使用：
在build.json文件中加入：

```js
"plugins" : [
  [
    "@uni/build-plugin-rax-api-import"
  ]
]
```

不再需要传入 target
