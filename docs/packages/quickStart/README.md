---
group:
  title: 介绍
  order: 0
title: 快速开始
---

# 快速开始

uni 提供一套跨端api帮助用户快速开发多端应用。

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 使用

我们提供三种引用模式：
### 大包
方便快捷，一次安装，多次使用

```bash
$ npm i @uni/apis
```

```js
import { 
  errorEvent,
  getApp,
  getCurrentPages,
  getLaunchOptionsSync,
  env,
  unitTool,
  createCanvasContext,
  accelerometer,
  clipboard,
  getSystemInfoSync,
  file,
  actionsheet,
  alert,
  toast,
  loading,
  element,
  intersectionObserver,
  confirm,
  location,
  chooseImage,
  compressImage,
  getImageInfo,
  navigate,
  request,
  storage } from '@uni/apis';

confirm({content: '显示模态框'});
storage.getStorageSync({key: 'key'});

```
### 小包
精确引入，指哪打哪

示例：
```bash
$ npm i @uni/storage
```

```js
import { getStorageSync } from '@uni/storage';

getStorageSync({key: 'key'});

```
### 按环境引入
对每个api，都可以通过以下方式引入，最小化包的体积

示例：
```bash
$ npm i @uni/storage
```

#### ali-miniapp
```js
import { getStorageSync } from '@uni/storage/ali-miniapp';

getStorageSync({key: 'key'});

```
#### wechat-miniprogram
```js
import { getStorageSync } from '@uni/storage/wechat-miniprogram';

getStorageSync({key: 'key'});

```
#### bytedance-microapp
```js
import { getStorageSync } from '@uni/storage/bytedance-microapp';

getStorageSync({key: 'key'});

```
#### web
```js
import { getStorageSync } from '@uni/storage/web';

getStorageSync({key: 'key'});

```
### 大包的按环境引入
```bash
$ npm i @uni/apis
```

```js
import { request } from '@uni/apis/ali-miniapp';
// import { request } from '@uni/apis/wechat-miniprogram';
// import { request } from '@uni/apis/bytedance-microapp';
// import { request } from '@uni/apis/web';

request({key: 'key'});

```