---
group:
  title: 介绍
  order: 0
title: 快速开始
---

# 快速开始

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

## 使用

我们提供两种引用模式：

### 小包（推荐）
精确引入，指哪打哪

示例：
```bash
$ npm i @uni/storage
```

```js
import { getStorageSync } from '@uni/storage';

getStorageSync({key: 'key'});

```

### 大包
方便快捷，一次安装，多次使用

```bash
$ npm i @uni/apis
```

```js
import { 
  application,
  env,
  unitTool,
  canvas,
  accelerometer,
  clipboard,
  systemInfo,
  file,
  actionSheet,
  alert,
  toast,
  loading,
  element,
  intersectionObserver,
  confirm,
  location,
  image,
  navigate,
  request,
  recorder,
  video,
  scan,
  pullDownRefresh,
  storage } from '@uni/apis';

confirm({content: '显示模态框'});
storage.getStorageSync({key: 'key'});

```