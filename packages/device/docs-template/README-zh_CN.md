# universal-device [![npm](https://img.shields.io/npm/v/universal-device.svg)](https://www.npmjs.com/package/universal-device)

系统信息。

## 支持
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__

## 安装
```bash
$ npm install universal-device --save
```

## 使用

```javascript
import { platform, appName, screenWidth, screenHeight, appVersion } from 'universal-device';
```

## APIS

### `appName: String`
app 名称或浏览器名称。

### `appVersion: String`
app 版本号或浏览器版本信息。

### `platform: String`
平台： 'Android'、'iOS'、'MacIntel' 等。

### `screenWidth: Number`
屏幕宽度，单位为px。

### `screenHeight: Number`
屏幕高度，单位为px。
