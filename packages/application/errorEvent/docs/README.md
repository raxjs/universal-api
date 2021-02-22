---
group:
  title: 应用级事件
title: errorEvent
---

# errorEvent 
[![npm](https://img.shields.io/npm/v/@uni/error-event.svg)](https://www.npmjs.com/package/@uni/error-event)

错误事件的监听与取消

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install @uni/error-event --save
```

## 方法

### `onError(callback): void`

监听小程序错误事件。如脚本错误或 API 调用报错等。

#### 参数
function callback
小程序错误事件的回调函数

##### 参数
string error
错误信息，包含堆栈

### `offError(callback): void`

取消监听小程序错误事件。

#### 参数
function callback
小程序错误事件的回调函数

### `onUnhandledRejection(callback): void`

监听未处理的 Promise 拒绝事件。

#### 参数
function callback
小程序错误事件的回调函数

##### 参数
Object res
|属性	|类型	|说明|
|:--|:--|:--|
|reason	|string or Error|	拒绝原因，一般是一个 Error 对象|
|promise|	Promise.<any>|	被拒绝的 Promise 对象|

### `offUnhandledRejection(callback): void`

取消监听未处理的 Promise 拒绝事件。

#### 参数
function callback
小程序错误事件的回调函数

## 示例

```js
import errorEvent from '@uni/error-event';

errorEvent.onError(e => {
  console.log(e);
});

errorEvent.offError();
```

你也可以从大包引入：

```js
import {errorEvent} from '@uni/apis';

errorEvent.onError(e => {
  console.log(e);
});

errorEvent.offError();
```

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/error-event/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01HrOhz21r6bUKtdIOe_!!6000000005582-0-tps-622-634.jpg" width="200" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>