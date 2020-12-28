---
group:
  title: 应用级事件
title: errorEvent
---

# errorEvent 
[![npm](https://img.shields.io/npm/v/universal-error-event.svg)](https://www.npmjs.com/package/universal-error-event)

错误事件的监听与取消

## 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## 安装

```bash
$ npm install universal-error-event --save
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
import errorEvent from 'universal-error-event';

errorEvent.onError(e => {
  console.log(e);
});

errorEvent.offError();
```

