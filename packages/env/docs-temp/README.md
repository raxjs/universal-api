# universal-env [![npm](https://img.shields.io/npm/v/universal-env.svg)](https://www.npmjs.com/package/universal-env)

Judge runtime environment

## Support
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__

## Install
```bash
$ npm install universal-env --save
```

## Usage
```javascript
import { isWeex, isWeb, isMiniApp, isNode, isWeChatMiniprogram } from 'universal-env';

```

## APIS
### `isWeex: boolean`
Checks if environment is a weex environment.

### `isWeb: boolean`
Checks if environment is a web environment.

### `isMiniApp: boolean`
Checks if environment is an alibaba miniprogram environment.

### `isWeChatMiniprogram: boolean`
Checks if environment is a wechat miniprogram environment.

### `isNode: boolean`
Checks if environment is a Node.js environment.

## Results in each container

|                    | isMiniApp | isWeChatMiniprogram | isWeb | isWeex | isNode |
| ------------------ | --------- | ------------------- | ----- | ------ | ------ |
| Alibaba MiniApp         | ✔️         | ✘                   | ✘     | ✘      | ✘      |
| Alibaba MiniApp WebView | ✔️         | ✘                   | ✔️     | ✘      | ✘      |
| Wechat Miniprogram         | ✘         | ✔️                   | ✘     | ✘      | ✘      |
| Wechat Miniprogram WebView | ✘         | ✔️                   | ✔️     | ✘      | ✘      |
| Weex               | ✘         | ✘                   | ✘     | ✔️      | ✘      |
| Node               | ✘         | ✘                   | ✘     | ✘      | ✔️      |
| Web                | ✘         | ✘                   | ✔️     | ✘      | ✘      |


