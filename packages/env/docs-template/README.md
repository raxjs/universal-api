# universal-env [![npm](https://img.shields.io/npm/v/universal-env.svg)](https://www.npmjs.com/package/universal-env)

Judge runtime environment

## Support
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__ __icon_quick_app__

## Install
```bash
$ npm install universal-env --save
```

## Usage
```javascript
import { isWeex, isWeb, isMiniApp, isNode, isWeChatMiniProgram, isByteDanceMicroApp, isQuickApp } from 'universal-env';

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


