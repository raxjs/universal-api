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
import { platform, appName, screenWidth, screenHeight, appVersion } from 'universal-device';

```

## APIS

### `appName: String`
app name or browser name

### `appVersion: String`
app version or browser version info

### `platform: String`
platform: 'Android'、'iOS'、'MacIntel', etc.

### `screenWidth: Number`
Screen width in px

### `screenHeight: Number`
Screen height in px
