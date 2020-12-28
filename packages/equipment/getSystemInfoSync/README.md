# getSystemInfoSync 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-getSystemInfoSync.svg)](https://www.npmjs.com/package/evapi-getSystemInfoSync)

获取系统信息。

## 安装

```bash
$ npm install universal-getSystemInfoSync --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import getSystemInfoSync from 'universal-getSystemInfoSync';

let res = getSystemInfoSync();

```

你也可以从大包引入：
```js
import { getSystemInfoSync } from 'universal-api';
```

## 方法

### `getSystemInfoSync()`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| pixelRatio | `number` | 设备像素比 |
| screenWidth | `number` | 屏幕宽度，单位px |
| screenHeight | `number` | 屏幕高度，单位px |
| windowWidth | `number` | 可使用窗口宽度，单位px |
| windowHeight | `number` | 可使用窗口高度，单位px |
| language | `string` | 设置的语言 |
| version | `string` | 版本号 |
| platform | `string` | 客户端平台 |
