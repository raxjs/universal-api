# application 
[![npm](https://img.shields.io/npm/v/@uni/application.svg)](https://www.npmjs.com/package/@uni/application)

应用接口

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" />

## 安装

```bash
$ npm install @uni/application --save
```

## 方法
### `getApp(): AppObject`

获取应用实例

### `getCurrentPages(): PageObject[]`

获取当前页面栈。数组中第一个元素为首页，最后一个元素为当前页面。

### `getLaunchOptionsSync(): LaunchObject`

获取小程序启动时的参数

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
import { getApp, getCurrentPages, getLaunchOptionsSync, onError, offError } from '@uni/application';

const appInstance = getApp();
const currentPages = getCurrentPages();
const launchOptions = getLaunchOptionsSync();

onError(e => {
  console.log(e);
});

offError();
```

你也可以从大包引入：

```js
import { application } from '@uni/apis';

const appInstance = application.getApp();
const currentPages = application.getCurrentPages();
const launchOptions = application.getLaunchOptionsSync();

application.onError(e => {
  console.log(e);
});

application.offError();
```

</div>
<div>

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01HrOhz21r6bUKtdIOe_!!6000000005582-0-tps-622-634.jpg" width="220" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>

```jsx | inline
  import React from 'react';
  export default class Home extends React.Component {
    componentDidMount() {
      document.querySelector('.__dumi-default-menu').style.background = '#fff';
      if (location.search.split(/[?&]/).some(i => i === 'clear=1')) {
        document.querySelector('.__dumi-default-navbar').style.display = 'none';
        document.querySelector('.__dumi-default-layout').classList = [];
        document.querySelector('.__dumi-default-menu').style.display = 'none';
        document.querySelector('.__dumi-default-layout-toc').style.display = 'none';
        document.querySelector('.__dumi-default-layout-content').querySelector('.markdown').querySelector('h1').style.marginTop = 0;
        parent.postMessage && parent.postMessage(parent.postMessage({ event: 'syncIframeHeight', height: document.querySelector('.__dumi-default-layout-content').offsetHeight }, '*'));
      }
    }

    render() {
      return null;
    }
  }
```
