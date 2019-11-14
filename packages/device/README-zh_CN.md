# universal-device [![npm](https://img.shields.io/npm/v/universal-device.svg)](https://www.npmjs.com/package/universal-device)

系统信息。

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

## 安装
```bash
$ npm install universal-device --save
```

## 使用

```javascript
import { platform, appName, screenWidth, screenHeight, px2rpx  } from 'universal-device';

```

## APIS

### `appName: string`
app 名称或浏览器名称。

### `platform: string`
平台： 'Android'、'iOS'、'MacIntel' 等。

### `screenWidth: number`
屏幕宽度，单位为px。

### `screenHeight: number`
屏幕高度，单位为px。

### `px2rpx(val)`
px 转 rpx 方法。

### `rpx2px(val)`
rpx 转 px 方法。

#### 入参
| 成员 | 类型     | 描述  | 默认值 | 支持  |
| ---- | -------- | ----- | :----: | :---: |
| val  | `number` | px 值 |   -    |       |

