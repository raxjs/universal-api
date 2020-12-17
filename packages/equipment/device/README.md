---
title: device
---

# universal-device [![npm](https://img.shields.io/npm/v/universal-device.svg)](https://www.npmjs.com/package/universal-device)

系统信息。

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px"> <img alt="quickApp" src="https://gw.alicdn.com/tfs/TB1MP7EwQT2gK0jSZPcXXcKkpXa-200-200.svg" width="25px" height="25px">

## 安装
```bash
$ npm install universal-device --save
```

## 使用

```javascript

// 快应用中的引入方法
// import { platform, appName, screenWidth, screenHeight, appVersion } from 'universal-device/lib/quickapp;

import { platform, appName, screenWidth, screenHeight, appVersion } from 'universal-device';
```

## APIS

### `appName: string`
app 名称或浏览器名称。

### `appVersion: string`
app 版本号或浏览器版本信息。

### `platform: string`
平台： 'Android'、'iOS'、'MacIntel' 等。

### `screenWidth: number`
屏幕宽度，单位为px。

### `screenHeight: number`
屏幕高度，单位为px。

### `devicePixelRatio: number`
当前显示设备的物理像素分辨率与CSS像素分辨率的比值。
