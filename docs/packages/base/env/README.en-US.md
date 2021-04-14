---
title: env
---

# env
[![npm](https://img.shields.io/npm/v/@uni/env.svg)](https://www.npmjs.com/package/@uni/env)

Judge runtime environment

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp"> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram"> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram">

## Install
```bash
$ npm install @uni/env --save
```

## Usage
```javascript
import { isWeex, isWeb, isMiniApp, isNode, isWeChatMiniProgram, isByteDanceMicroApp, isBaiduSmartProgram, isKuaiShouMiniProgram } from '@uni/env';

```
You can also import from the big package:

```js
import { env } from '@uni/apis';
```

## APIS
### `isWeex: boolean`
Checks if environment is a weex environment.

### `isWeb: boolean`
Checks if environment is a web environment.

### `isMiniApp: boolean`
Checks if environment is an alibaba miniprogram environment.

### `isWeChatMiniProgram: boolean`
Checks if environment is a wechat miniprogram environment.

### `isByteDanceMicroApp: boolean`
Checks if environment is a bytedance microapp environment.

### `isBaiduSmartProgram: boolean`
Checks if environment is a baidu smartprogram environment.

### `isKuaiShouMiniProgram: boolean`
Checks if environment is a kuaishou miniprogram environment.
### `isNode: boolean`
Checks if environment is a Node.js environment.

## Results in each container

Note：To judge MiniProgram env in WebView, please insert JS SDK accordingly.

|                              | isMiniApp | isWeChatMiniProgram | isByteDanceMicroApp | isBaiduSmartProgram | isKuaiShouMiniProgram | isWeb | isWeex | isNode |
| ---------------------------- | --------- | ------------------- | ------------------  | ------------------- | --------------------- | ------ | ----- | ------ |
| Alibaba MiniApp              | ✔️         | ✘                   | ✘                   | ✘                   | ✘                     | ✘      | ✘     | ✘    |
| Alibaba MiniApp WebView      | ✔️         | ✘                   | ✘                   | ✘                   | ✘                     | ✔️      | ✘     | ✘   |
| Wechat MiniProgram           | ✘         | ✔️                   | ✘                   | ✘                   | ✘                     | ✘      | ✘     | ✘   |
| Wechat MiniProgram WebView   | ✘         | ✔️                   | ✘                   | ✘                   | ✘                     | ✔️      | ✘     | ✘   |
| ByteDance MicroApp           | ✘         | ✘                   | ✔️                   | ✘                   | ✘                     | ✘      | ✘     | ✘   |
| ByteDance MicroApp WebView   | ✘         | ✘                   | ✔️                   | ✘                   | ✘                     | ✔️      | ✘     | ✘   |
| Baidu SmartProgram           | ✘         | ✘                    | ✘                   | ✔️                  | ✘                     | ✘      | ✘     | ✘   |
| Baidu SmartProgram WebView   | ✘         | ✘                   | ✘                   | ✔️                   | ✘                     | ✔️      | ✘     | ✘   |
| KuaiShou MiniProgram         | ✘         | ✘                    | ✘                   | ✘                  | ✔️                     | ✘      | ✘     | ✘   |
| KuaiShou MiniProgram WebView | ✘         | ✘                   | ✘                   | ✘                   | ✔️                     | ✔️      | ✘     | ✘   |
| Node                         | ✘         | ✘                   | ✘                   | ✘                  | ✘                      | ✘      | ✘     | ✔️   |
| Web                          | ✘         | ✘                   | ✘                   | ✘                  | ✘                      | ✔️      | ✘     | ✘   |

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
