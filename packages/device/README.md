# universal-device [![npm](https://img.shields.io/npm/v/universal-device.svg)](https://www.npmjs.com/package/universal-device)

System info.

## Supported
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

## Install
```bash
$ npm install universal-device --save
```

## Usage

```javascript
import { platform, appName, screenWidth, screenHeight, px2rpx  } from 'universal-device';

```

## APIS

### `appName: string`
app name or browser name

### `platform: string`
platform: 'Android'、'iOS'、'MacIntel', etc.

### `screenWidth: number`
Screen width in px

### `screenHeight: number`
Screen height in px

### `px2rpx(val)`
px to rpx method

### `rpx2px(val)`
rpx to px method

#### Arguments
| Property | Type     | Describes | Default | Supports |
| -------- | -------- | --------- | :-----: | :------: |
| val      | `number` | px value  |    -    |          |

