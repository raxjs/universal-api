# universal-env [![npm](https://img.shields.io/npm/v/universal-env.svg)](https://www.npmjs.com/package/universal-env)

Judge runtime environment

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px"> <img alt="quickApp" src="https://gw.alicdn.com/tfs/TB1MP7EwQT2gK0jSZPcXXcKkpXa-200-200.svg" width="25px" height="25px"> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序">  <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序">

## Install
```bash
$ npm install universal-env --save
```

## Usage
```javascript
import { isWeex, isWeb, isMiniApp, isNode, isWeChatMiniProgram, isByteDanceMicroApp, isQuickApp, isBaiduSmartProgram, isKuaiShouMiniProgram } from 'universal-env';

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

### `isQuickApp: boolean`
Checks if environment is a quickapp environment.

### `isNode: boolean`
Checks if environment is a Node.js environment.

## Results in each container

Note：To judge MiniProgram env in WebView, please insert JS SDK accordingly.

|                               | isMiniApp | isWeChatMiniProgram | isByteDanceMicroApp | isQuickApp | isWeb | isWeex | isNode | isKuaiShouMiniProgram | isBaiduSmartProgram |
| ----------------------------- | --------- | ------------------- | ------------------- | ---------- | ----- | ------ | ------ | ------ | ------ |
| Alibaba MiniApp               | ✔️         | ✘                   | ✘                   | ✘          | ✘     | ✘      | ✘      |✘|✘|
| Alibaba MiniApp WebView       | ✔️         | ✘                   | ✘                   | ✘          | ✔️     | ✘      | ✘      |✘|✘|
| Wechat MiniProgram            | ✘         | ✔️                   | ✘                   | ✘          | ✘     | ✘      | ✘      |✘|✘|
| Wechat MiniProgram WebView    | ✘         | ✔️                   | ✘                   | ✘          | ✔️     | ✘      | ✘      |✘|✘|
| ByteDance MicroApp            | ✘         | ✘                   | ✔️                   | ✘          | ✘     | ✘      | ✘      |✘|✘|
| ByteDance MicroApp WebView    | ✘         | ✘                   | ✔️                   | ✘          | ✔️     | ✘      | ✘      |✘|✘|
| KuaiShou MiniProgram            | ✘         | ✘                   | ✔️                   | ✘          | ✘     | ✘      | ✘      |✔️|✘|
| KuaiShou MiniProgram WebView    | ✘         | ✘                   | ✔️                   | ✘          | ✔️     | ✘      | ✘      |✔️|✘|
| Baidu SmartProgram | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ |✘|✔️|
| Baidu SmartProgram WebView | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ |✘|✔️|
| QuickApp                      | ✘         | ✘                   | ✘                   | ✔️          | ✘     | ✘      | ✘      |✘|✘|
| QuickApp WebView              | ✘         | ✘                   | ✘                   | ✘          | ✔️     | ✘      | ✘      |✘|✘|
| Weex                          | ✘         | ✘                   | ✘                   | ✘          | ✘     | ✔️      | ✘      |✘|✘|
| Node                          | ✘         | ✘                   | ✘                   | ✘          | ✘     | ✘      | ✔️      |✘|✘|
| Web                           | ✘         | ✘                   | ✘                   | ✘          | ✔️     | ✘      | ✘      |✘|✘|


