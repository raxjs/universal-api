---
group:
  title: 基础
title: env
---

# env
[![npm](https://img.shields.io/npm/v/@uni/env.svg)](https://www.npmjs.com/package/@uni/env)

判断和获取运行时环境

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序"> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序"> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序">

## 安装
```bash
$ npm install @uni/env --save
```

## 示例
```javascript
import { isWeex, isWeb, isMiniApp, isNode, isWeChatMiniProgram, isByteDanceMicroApp, isBaiduSmartProgram, isKuaiShouMiniProgram } from '@uni/env';

```
你也可以从大包引入：

```js
import { env } from '@uni/apis';
```

## APIS
### `isWeex: boolean`
校验 Weex 环境

### `isWeb: boolean`
校验 Web 环境

### `isMiniApp: boolean`
校验阿里小程序环境

### `isWeChatMiniProgram: boolean`
校验微信小程序环境

### `isByteDanceMicroApp: boolean`
校验字节跳动小程序环境

### `isBaiduSmartProgram: boolean`
校验百度小程序环境

### `isKuaiShouMiniProgram: boolean`
校验快手小程序环境

### `isNode: boolean`
校验 Node.js 环境

## 各容器内返回结果

注：以下各小程序 WebView 内容器判断依赖 WebView 中注入容器的JS SDK。

|                     | isMiniApp | isWeChatMiniProgram | isByteDanceMicroApp | isBaiduSmartProgram | isKuaiShouMiniProgram | isWeb | isWeex | isNode |
| ------------------- | --------- | ------------------- | ------------------  | ------------------- | --------------------- | ------ | ----- | ------ |
| 阿里小程序            | ✔️         | ✘                   | ✘                   | ✘                   | ✘                     | ✘      | ✘     | ✘    |
| 阿里小程序 WebView    | ✔️         | ✘                   | ✘                   | ✘                   | ✘                     | ✔️      | ✘     | ✘   |
| 微信小程序            | ✘         | ✔️                   | ✘                   | ✘                   | ✘                     | ✘      | ✘     | ✘   |
| 微信小程序 WebView    | ✘         | ✔️                   | ✘                   | ✘                   | ✘                     | ✔️      | ✘     | ✘   |
| 字节跳动小程序         | ✘         | ✘                   | ✔️                   | ✘                   | ✘                     | ✘      | ✘     | ✘   |
| 字节跳动小程序 WebView | ✘         | ✘                   | ✔️                   | ✘                   | ✘                     | ✔️      | ✘     | ✘   |
| 百度小程序            | ✘         | ✘                    | ✘                   | ✔️                  | ✘                     | ✘      | ✘     | ✘   |
| 百度小程序 WebView    | ✘         | ✘                   | ✘                   | ✔️                   | ✘                     | ✔️      | ✘     | ✘   |
| 快手小程序            | ✘         | ✘                    | ✘                   | ✘                  | ✔️                     | ✘      | ✘     | ✘   |
| 快手小程序 WebView    | ✘         | ✘                   | ✘                   | ✘                   | ✔️                     | ✔️      | ✘     | ✘   |
| Node                 | ✘         | ✘                   | ✘                   | ✘                  | ✘                      | ✘      | ✘     | ✔️   |
| Web                  | ✘         | ✘                   | ✘                   | ✘                  | ✘                      | ✔️      | ✘     | ✘   |





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
