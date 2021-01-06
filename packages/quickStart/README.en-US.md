---
group:
  title: Introduction
  order: 0
title: QuickStart
---

# QuickStart

To extend the capabilities of the Rax system, we provide a series of Universal apis that developers can use to quickly develop multiple applications.

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp">

## Usage

We provide three reference modes:

### Bigbag
Convenient and fast, install once, use many times

```bash
$ npm i universal-api
```

```js
import { 
  showModal,
  storage,
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
  storage } from 'universal-api';

showModal({content: 'Show modal'});
storage.getStorageSync({key: 'key'});

```
### Smallbag
Precise introduction

Example:
```bash
$ npm i universal-storage
```

```js
import { getStorageSync } from 'universal-storage';

getStorageSync({key: 'key'});

```
### Introduce by environment

For each api, it can be introduced in the following ways to minimize the size of the package

Example:
```bash
$ npm i universal-storage
```

#### ali-miniapp
```js
import { getStorageSync } from 'universal-storage/ali-miniapp';

getStorageSync({key: 'key'});

```
#### wechat-miniapp
```js
import { getStorageSync } from 'universal-storage/wechat-miniapp';

getStorageSync({key: 'key'});

```
#### byte-miniapp
```js
import { getStorageSync } from 'universal-storage/byte-miniapp';

getStorageSync({key: 'key'});

```
#### web
```js
import { getStorageSync } from 'universal-storage/web';

getStorageSync({key: 'key'});

```
### Large package introduction by environment

```bash
$ npm i universal-api
```

```js
import { request } from 'universal-api/ali-miniapp';
// import { request } from 'universal-api/wechat-miniapp';
// import { request } from 'universal-api/byte-miniapp';
// import { request } from 'universal-api/web';

request({key: 'key'});

```

