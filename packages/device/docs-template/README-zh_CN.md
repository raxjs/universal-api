# universal-device [![npm](https://img.shields.io/npm/v/universal-device.svg)](https://www.npmjs.com/package/universal-device)

系统信息。

## 支持
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__

## 安装
```bash
$ npm install universal-device --save
```

## 使用

```javascript
import { platform, appName, screenWidth, screenHeight, appVersion } from 'universal-device';
```

## APIS

### `appName: string`
app 名称或浏览器名称。

### `appVersion: string`
app 版本号或浏览器版本信息。

### `platform: string`
平台： 'Android'、'iOS'、'MacIntel' 等。

### `screenWidth: number`
屏幕宽度，单位为px。

### `screenHeight: number`
屏幕高度，单位为px。

### `devicePixelRatio: number`
当前显示设备的物理像素分辨率与CSS像素分辨率的比值。
