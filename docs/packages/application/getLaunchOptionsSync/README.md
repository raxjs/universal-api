---
group:
  title: 应用级接口
title: getLaunchOptionsSync
---

# getLaunchOptionsSync 

[![npm](https://img.shields.io/npm/v/@uni/application.svg)](https://www.npmjs.com/package/@uni/application)
[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)

获取小程序启动时的参数

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install @uni/application --save
```

## 使用

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
也可以从大包中引入：

```js
import { application } from '@uni/apis';
```
## 返回值

| 成员 | 类型     | 描述  | 默认值 |
| ---- | -------- | ----- | :----: |
| query  | `Object` | 当前小程序的 query，从启动参数的 query 字段解析而来。（注意：若没有启动参数，则不会返回 query 参数） |   -    |
| scene  | `Number` | 启动小程序的场景值 [微信场景值](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html) [支付宝场景值](https://opendocs.alipay.com/mini/framework/scene) [头条场景值](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/framework/scene-value/) |   -    |
| path  | `String` | 当前小程序的页面地址，从启动参数 page 字段解析而来，page 忽略时默认为首页。 |   -    |
| referrerInfo  | `Object` | 来源消息。 |   -    |

### referrerInfo

| 成员 | 类型     | 描述  | 默认值 |
| ---- | -------- | ----- | :----: |
| appId  | `String` | 来源小程序的 appId |   -    |
| extraData  | `Object` | 来源小程序传过来的数据 |   -    |

```jsx | inline
  import React from 'react';
  export default class Home extends React.Component {
    componentDidMount() {
      if (location.search.split(/[?&]/).some(i => i === 'clear=1')) {
        document.querySelector('.__dumi-default-navbar').style.display = 'none';
        document.querySelector('.__dumi-default-layout').classList = [];
        document.querySelector('.__dumi-default-menu').style.display = 'none';
        document.querySelector('.__dumi-default-layout-toc').style.display = 'none';
        document.querySelector('.__dumi-default-layout-content').querySelector('.markdown').querySelector('h1').style.marginTop = 0;
        parent.postMessage && parent.postMessage("syncIframeHeight", 800, '*'); // 800 即页面实际高度
        // document.querySelector('.__dumi-default-layout-content').style.padding = '50px 100px';
      }
    }

    render() {
      return null;
    }
  }
```
