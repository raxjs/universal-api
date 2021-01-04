# getStorageSync 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-getStorageSync.svg)](https://www.npmjs.com/package/evapi-getStorageSync)

从本地缓存中同步获取指定 key 的内容。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## 安装

```bash
$ npm install universal-getStorageSync --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import getStorageSync from 'universal-getStorageSync';

let res = getStorageSync({
  key: 'key'
});

```

你也可以从大包引入：
```js
import { storage } from 'universal-api';

let res = storage.getStorageSync({
  key: 'key'
});

```

## 方法

### `getStorageSync(options)`

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.key | `string`  | 本地缓存中指定的 key | ✔️ |  - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| data | `any`  | key对应的内容 |

</div>
<div>

```jsx | inline
/**
 * iframe: true
 */
import React from 'react';
export default () => (
  <iframe style={{
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
      width: '375px',
      height: '700px'
    }} src='https://herbox.online/p/109000004/app_1aKtEd7SK?previewZoom=100&view=preview&defaultPage=pages/universal-storage/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i2/O1CN01uDGumH1UwbI5mxYOZ_!!6000000002582-0-tps-646-638.jpg" width="200" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
