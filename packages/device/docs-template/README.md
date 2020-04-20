# universal-device [![npm](https://img.shields.io/npm/v/universal-device.svg)](https://www.npmjs.com/package/universal-device)

System info.

## Supported
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__

## Install
```bash
$ npm install universal-device --save
```

## Usage

```javascript
import { platform, appName, screenWidth, screenHeight, appVersion } from 'universal-device';

```

## APIS

### `appName: string`
app name or browser name

### `appVersion: string`
app version or browser version info

### `platform: string`
platform: 'Android'、'iOS'、'MacIntel', etc.

### `screenWidth: number`
Screen width in px

### `screenHeight: number`
Screen height in px

### `devicePixelRatio: number`
 The ratio of the resolution in physical pixels to the resolution in CSS pixels for the current display device.
