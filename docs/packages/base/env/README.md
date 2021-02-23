---
group:
  title: 基础
title: env
---

# env
[![npm](https://img.shields.io/npm/v/@uni/env.svg)](https://www.npmjs.com/package/@uni/env)

判断和获取运行时环境

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装
```bash
$ npm install @uni/env --save
```

## 示例
```javascript
import { isWeex, isWeb, isMiniApp, isNode, isWeChatMiniProgram, isByteDanceMicroApp } from '@uni/env';

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

### `isNode: boolean`
校验 Node.js 环境

## 各容器内返回结果

注：以下各小程序 WebView 内容器判断依赖 WebView 中注入容器的JS SDK。

|                     | isMiniApp | isWeChatMiniProgram | isByteDanceMicroApp | - | isWeb | isWeex | isNode |
| ------------------- | --------- | ------------------- | ------------------  | ---------- | ----- | ------ | ------ |
| 阿里小程序            | ✔️         | ✘                   | ✘                   | ✘          | ✘     | ✘      | ✘      |
| 阿里小程序 WebView    | ✔️         | ✘                   | ✘                   | ✘          | ✔️     | ✘      | ✘      |
| 微信小程序            | ✘         | ✔️                   | ✘                   | ✘          | ✘     | ✘      | ✘      |
| 微信小程序 WebView    | ✘         | ✔️                   | ✘                   | ✘          | ✔️     | ✘      | ✘      |
| 字节跳动小程序         | ✘         | ✘                   | ✔️                   | ✘          | ✘     | ✘      | ✘      |
| 字节跳动小程序 WebView | ✘         | ✘                   | ✔️                   | ✘          | ✔️     | ✘      | ✘      |
| Weex                 | ✘         | ✘                   | ✘                   | ✘          | ✘     | ✔️      | ✘      |
| Node                 | ✘         | ✘                   | ✘                   | ✘          | ✘     | ✘      | ✔️      |
| Web                  | ✘         | ✘                   | ✘                   | ✘          | ✔️     | ✘      | ✘      |



