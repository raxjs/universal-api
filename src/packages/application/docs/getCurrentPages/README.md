---
group:
  title: 应用级接口
title: getCurrentPages
---

# getCurrentPages 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@uni/application.svg)](https://www.npmjs.com/package/@uni/application)

获取当前页面栈。数组中第一个元素为首页，最后一个元素为当前页面。

注意：

不要尝试修改页面栈，会导致路由以及页面状态错误。
不要在 App.onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install @uni/application --save
```

## 使用

```js
import { createElement, useEffect, Fragment } from 'rax';
import { getCurrentPages } from '@uni/application';

function App() {
  useEffect(() => {
    const app = getCurrentPages();
  }, []);

  return (<>
    <View></View>
  </>)
}
```
也可以从大包中引入：

```js
import { application } from '@uni/apis';
```

## 注意：

- 不要尝试修改页面栈，会导致路由以及页面状态错误。
- 不要在 App.onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成。

</div>
<div>

```jsx | inline
/**
 * iframe: true
 */
import React from 'react';
export default () => (
  <iframe style={{
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
      width: '375px',
      height: '700px'
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/application/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i2/O1CN01s3EQfw20xZqFHXpBM_!!6000000006916-0-tps-706-636.jpg" width="220" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
