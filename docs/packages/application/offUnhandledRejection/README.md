---
group:
  title: 应用级接口
title: offUnhandledRejection
---

# offUnhandledRejection 
[![npm](https://img.shields.io/npm/v/@uni/application.svg)](https://www.npmjs.com/package/@uni/application)

错误事件的监听与取消

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install @uni/application --save
```

## 方法

### `offUnhandledRejection(callback): void`

取消监听未处理的 Promise 拒绝事件。

#### 参数
function callback
小程序错误事件的回调函数

## 示例

```js
import { onUnhandledRejection, offUnhandledRejection } from '@uni/application';

onUnhandledRejection(e => {
  console.log(e);
});

offUnhandledRejection();
```

你也可以从大包引入：

```js
import { application } from '@uni/apis';

application.onUnhandledRejection(e => {
  console.log(e);
});

application.offUnhandledRejection();
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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/application/index&topSlider=false'></iframe>
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

```jsx | inline
  import React from 'react';
  export default class Home extends React.Component {
    componentDidMount() {
      if (location.search.split(/[?&]/).some(i => i === 'clear=1')) {
        document.querySelector('.__dumi-default-navbar').style.display = 'none';
        document.querySelector('.__dumi-default-layout').classList = [];
        document.querySelector('.__dumi-default-menu').style.display = 'none';
        document.querySelector('.__dumi-default-layout-toc').style.display = 'none';
        document.querySelector('.__dumi-default-layout-content').style.padding = '50px 100px';
      }
    }

    render() {
      return null;
    }
  }
```
