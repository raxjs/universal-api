# universal-device [![npm](https://img.shields.io/npm/v/universal-device.svg)](https://www.npmjs.com/package/universal-device)

System info.

## Supported
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="quickApp" src="https://gw.alicdn.com/tfs/TB1MP7EwQT2gK0jSZPcXXcKkpXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## Install
```bash
$ npm install universal-device --save
```

## Usage

```javascript

// How to use it in quickapp
// import { platform, appName, screenWidth, screenHeight, appVersion } from 'universal-device/lib/quickapp;

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
