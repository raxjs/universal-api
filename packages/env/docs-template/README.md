# universal-env [![npm](https://img.shields.io/npm/v/universal-env.svg)](https://www.npmjs.com/package/universal-env)

判断和获取运行时环境

## 支持
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__ __icon_quick_app__ __icon_smartprogram_bd__ __icon_miniprogram_ks__

## 安装
```bash
$ npm install universal-env --save
```

## 示例
```javascript
import { isWeex, isWeb, isMiniApp, isNode, isWeChatMiniProgram, isByteDanceMicroApp, isQuickApp, isBaiduSmartProgram, isKuaiShouMiniProgram } from 'universal-env';

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

### `isQuickApp: boolean`
校验快应用环境

### `isNode: boolean`
校验 Node.js 环境

## 各容器内返回结果

注：以下各小程序 WebView 内容器判断依赖 WebView 中注入容器的JS SDK。

|                               | isMiniApp | isWeChatMiniProgram | isByteDanceMicroApp | isQuickApp | isWeb | isWeex | isNode | isKuaiShouMiniProgram | isBaiduSmartProgram |
| ----------------------------- | --------- | ------------------- | ------------------- | ---------- | ----- | ------ | ------ | ------ | ------ |
| 阿里小程序                  | ✔️         | ✘                   | ✘                   | ✘          | ✘     | ✘      | ✘      |✘|✘|
| 阿里小程序 WebView       | ✔️         | ✘                   | ✘                   | ✘          | ✔️     | ✘      | ✘      |✘|✘|
| 微信小程序            | ✘         | ✔️                   | ✘                   | ✘          | ✘     | ✘      | ✘      |✘|✘|
| 微信小程序 WebView    | ✘         | ✔️                   | ✘                   | ✘          | ✔️     | ✘      | ✘      |✘|✘|
| 字节跳动小程序            | ✘         | ✘                   | ✔️                   | ✘          | ✘     | ✘      | ✘      |✘|✘|
| 字节跳动小程序 WebView    | ✘         | ✘                   | ✔️                   | ✘          | ✔️     | ✘      | ✘      |✘|✘|
| 快手小程序            | ✘         | ✘                   | ✔️                   | ✘          | ✘     | ✘      | ✘      |✔️|✘|
| 快手小程序  WebView    | ✘         | ✘                   | ✔️                   | ✘          | ✔️     | ✘      | ✘      |✔️|✘|
| 百度小程序 | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ |✘|✔️|
| 百度小程序 WebView | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ |✘|✔️|
| 快应用                      | ✘         | ✘                   | ✘                   | ✔️          | ✘     | ✘      | ✘      |✘|✘|
| 快应用 WebView              | ✘         | ✘                   | ✘                   | ✘          | ✔️     | ✘      | ✘      |✘|✘|
| Weex                          | ✘         | ✘                   | ✘                   | ✘          | ✘     | ✔️      | ✘      |✘|✘|
| Node                          | ✘         | ✘                   | ✘                   | ✘          | ✘     | ✘      | ✔️      |✘|✘|
| Web                           | ✘         | ✘                   | ✘                   | ✘          | ✔️     | ✘      | ✘      |✘|✘|

