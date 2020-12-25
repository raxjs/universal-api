---
group:
  title: Application
title: getLaunchOptionsSync
---

# getLaunchOptionsSync 

[![npm](https://img.shields.io/npm/v/universal-getlaunchoptionssync.svg)](https://www.npmjs.com/package/universal-getlaunchoptionssync)
[![npm](https://img.shields.io/npm/v/universal-api.svg)](https://www.npmjs.com/package/universal-api)

Obtains the parameters upon Mini Program startup.

## Support

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-getlaunchoptionssync --save
```

## Usage

```js
import { createElement, useEffect, Fragment } from 'rax';
import getLaunchOptionsSync from 'universal-getlaunchoptionssync';

function App() {
  useEffect(() => {
    const options = getLaunchOptionsSync();
    console.log(options.path);
  }, []);

  return (<>
    <View></View>
  </>)
}
```
It can also be imported from the big package:

```js
import {getLaunchOptionsSync} from 'universal-api';
```
## Return

| Property | Type     | Description  | Default |
| ---- | -------- | ----- | :----: |
| query  | `Object` | The query parameter for Mini Program startup |   -    |
| scene  | `Number` | The scene value for Mini Program startup [wechat](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html) [ali](https://opendocs.alipay.com/mini/framework/scene) [byte](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/framework/scene-value/) |   -    |
| path  | `String` | The path for Mini Program startup |   -    |
| referrerInfo  | `Object` | The source information |   -    |

### referrerInfo

| Property | Type     | Description  | Default |
| ---- | -------- | ----- | :----: |
| appId  | `String` | The appId of the source Mini Program |   -    |
| extraData  | `Object` | The data transfered from the source Mini Program |   -    |