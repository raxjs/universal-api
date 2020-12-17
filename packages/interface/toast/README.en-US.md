---
title: toast
---

# universal-toast [![npm](https://img.shields.io/npm/v/universal-toast.svg)](https://www.npmjs.com/package/universal-toast)

Universal toast, you can choose how many seconds after disappearing

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px"> <img alt="quickApp" src="https://gw.alicdn.com/tfs/TB1MP7EwQT2gK0jSZPcXXcKkpXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-toast --save
```

## Usage

```js
import Toast from 'universal-toast';

// How to use it in quickapp
// import Toast from 'universal-toast/lib/quickapp;

Toast.show('Hi');
```

## Methods

### `Toast.show(message: string, duration?: number, options?: object)`

#### Arguments
| Property | Type     | Description                                 | Default |
| -------- | -------- | ------------------------------------------- | :-----: |
| message  | `string` | content of the message                      |    -    |
| duration | `number` | Time in millisecond before Toast is closed. |  2000   |
| options | `object` | Other options used by WeChat MiniProgram/ByteDance MicroApp, see [docs](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html)  |  {}   |
