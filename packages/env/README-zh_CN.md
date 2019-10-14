# universal-env [![npm](https://img.shields.io/npm/v/universal-env.svg)](https://www.npmjs.com/package/universal-env)

判断和获取运行时环境

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px"> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px"> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px"> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

## 安装
```bash
$ npm install universal-env --save
```

## 示例
```javascript
import { isWeex, isWeb, isMiniApp, isNode, isWeChatMiniprogram } from 'universal-env';

```

## APIS
### `isWeex: boolean`
校验 Weex 环境

### `isWeb: boolean`
校验 Web 环境

### `isMiniApp: boolean`
校验阿里小程序环境

### `isWeChatMiniprogram: boolean`
校验微信小程序环境

### `isNode: boolean`
校验 Node.js 环境

## 各容器内返回结果

|                    | isMiniApp | isWeChatMiniprogram | isWeb | isWeex | isNode |
| ------------------ | --------- | ------------------- | ----- | ------ | ------ |
| 阿里小程序         | ✔️         | ✘                   | ✘     | ✘      | ✘      |
| 阿里小程序 WebView | ✔️         | ✘                   | ✔️     | ✘      | ✘      |
| 微信小程序         | ✘         | ✔️                   | ✘     | ✘      | ✘      |
| 微信小程序 WebView | ✘         | ✔️                   | ✔️     | ✘      | ✘      |
| Weex               | ✘         | ✘                   | ✘     | ✔️      | ✘      |
| Node               | ✘         | ✘                   | ✘     | ✘      | ✔️      |
| Web                | ✘         | ✘                   | ✔️     | ✘      | ✘      |



