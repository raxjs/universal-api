---
group:
  title: Introduction
  order: 0
title: QuickStart
---

# QuickStart
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

confirm({content: 'Show modal'});
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