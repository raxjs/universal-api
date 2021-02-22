---
group:
  title: Introduction
  order: 0
title: QuickStart
---

# QuickStart

To uni provides a set of cross-terminal api to help users quickly develop multi-terminal applications..

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp">

## Usage

We provide three reference modes:

### Bigbag
Convenient and fast, install once, use many times

```bash
$ npm i @uni/apis
```

```js
import { 
  showModal,
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
  showModal,
  location,
  chooseImage,
  compressImage,
  getImageInfo,
  navigate,
  request,
  storage } from '@uni/apis';

showModal({content: 'Show modal'});
storage.getStorageSync({key: 'key'});

```
### Smallbag
Precise introduction

Example:
```bash
$ npm i @uni/storage
```

```js
import { getStorageSync } from '@uni/storage';

getStorageSync({key: 'key'});

```
### Introduce by environment

For each api, it can be introduced in the following ways to minimize the size of the package

Example:
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
### Large package introduction by environment

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

