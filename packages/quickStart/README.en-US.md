---
group:
  title: Introduction
  order: 0
title: QuickStart
---

# QuickStart

To extend the capabilities of the Rax system, we provide a series of Universal apis that developers can use to quickly develop multiple applications.

## QuickStart

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

