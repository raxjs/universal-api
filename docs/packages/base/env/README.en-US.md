---
title: env
---

# env
[![npm](https://img.shields.io/npm/v/@unienv.svg)](https://www.npmjs.com/package/@unienv)

Judge runtime environment

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp"> <img alt="quickApp" src="https://gw.alicdn.com/tfs/TB1MP7EwQT2gK0jSZPcXXcKkpXa-200-200.svg" width="25px" height="25px">

## Install
```bash
$ npm install @unienv --save
```

## Usage
```javascript
import { isWeex, isWeb, isMiniApp, isNode, isWeChatMiniProgram, isByteDanceMicroApp, isQuickApp } from '@unienv';

```
You can also import from the big package:

```js
import {env} from '@uni/apis';
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

### `isQuickApp: boolean`
Checks if environment is a quickapp environment.

### `isNode: boolean`
Checks if environment is a Node.js environment.

## Results in each container

Note：To judge MiniProgram env in WebView, please insert JS SDK accordingly.

|                               | isMiniApp | isWeChatMiniProgram | isByteDanceMicroApp | isQuickApp | isWeb | isWeex | isNode |
| ----------------------------- | --------- | ------------------- | ------------------- | ---------- | ----- | ------ | ------ |
| Alibaba MiniApp               | ✔️         | ✘                   | ✘                   | ✘          | ✘     | ✘      | ✘      |
| Alibaba MiniApp WebView       | ✔️         | ✘                   | ✘                   | ✘          | ✔️     | ✘      | ✘      |
| Wechat MiniProgram            | ✘         | ✔️                   | ✘                   | ✘          | ✘     | ✘      | ✘      |
| Wechat MiniProgram WebView    | ✘         | ✔️                   | ✘                   | ✘          | ✔️     | ✘      | ✘      |
| ByteDance MicroApp            | ✘         | ✘                   | ✔️                   | ✘          | ✘     | ✘      | ✘      |
| ByteDance MicroApp WebView    | ✘         | ✘                   | ✔️                   | ✘          | ✔️     | ✘      | ✘      |
| QuickApp                      | ✘         | ✘                   | ✘                   | ✔️          | ✘     | ✘      | ✘      |
| QuickApp WebView              | ✘         | ✘                   | ✘                   | ✘          | ✔️     | ✘      | ✘      |
| Weex                          | ✘         | ✘                   | ✘                   | ✘          | ✘     | ✔️      | ✘      |
| Node                          | ✘         | ✘                   | ✘                   | ✘          | ✘     | ✘      | ✔️      |
| Web                           | ✘         | ✘                   | ✘                   | ✘          | ✔️     | ✘      | ✘      |


