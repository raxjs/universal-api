# universal-device [![npm](https://img.shields.io/npm/v/universal-device.svg)](https://www.npmjs.com/package/universal-device)

System info.

## Supported
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__

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

