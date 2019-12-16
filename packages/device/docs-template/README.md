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
