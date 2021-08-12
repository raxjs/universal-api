---
group:
  title: Introduction
  order: 0
title: Introduce by environment
---

# Introduce by environment

The Uni API provides a supporting babel plug-in to introduce the smallest package according to the environment, and remove the code that is not available in the current environment.

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="web" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali-minipp" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechat-miniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedance-microapp"> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" />
## Install

```
npm i @uni/babel-plugin-universal-api-import
```

## Usage

Add the plug-in to the babel configuration:

```
[
  'babel-plugin-universal-api-import',
  {
    target: 'miniapp'
  }
]
```
Optional values ​​for target are:

|name|value|
|:---|:---|
|ali-miniapp|miniapp|
|wechat-miniprogram|wechat-miniprogram|
|web|web|
|bytedance-microapp|bytedance-microapp|
|baidu-smartprogram|baidu-smartprogram|
|kuaishou-miniprogram|kuaishou-miniprogram|

### Rax
If you are using rax, because rax uses the build-scripts packaging tool, we provide a build-scripts plug-in, and its underlying dependency is still babel-plugin-universal-api-import.

#### Install
```
npm i @uni/build-plugin-rax-api-import
```
#### Usage
Add in the build.json file:

```
"plugins" : [
  [
    "build-plugin-rax-api-import"
  ]
]
```

No longer need to pass in target
