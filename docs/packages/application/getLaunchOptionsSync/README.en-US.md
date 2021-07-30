---
group:
  title: Application
title: getLaunchOptionsSync
---

# getLaunchOptionsSync 

[![npm](https://img.shields.io/npm/v/@uni/application.svg)](https://www.npmjs.com/package/@uni/application)
[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)

Obtains the parameters upon Mini Program startup.

## Support

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" />

Note: Baidu applet is not supported.

## Install

```bash
$ npm install @uni/application --save
```

## Usage

```js
import { createElement, useEffect, Fragment } from 'rax';
import { getLaunchOptionsSync } from '@uni/application';

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
import { application } from '@uni/apis';
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
