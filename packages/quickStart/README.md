---
group:
  title: 介绍
  order: 0
title: 快速开始
---

# universal-api

基于rax应用生态，我们提供一系列跨端api帮助用户快速开发多端应用。

## 快速开始

可以一次性引入所有apis，支持你的项目

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

showModal({content: '显示模态框'});
storage.getStorageSync({key: 'key'});

```

也可以按需引入，减小包体积


```bash
$ npm i universal-storage
```

```js
import { getStorageSync } from 'universal-storage';

getStorageSync({key: 'key'});

```
