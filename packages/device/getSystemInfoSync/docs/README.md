# getSystemInfoSync 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@uni/system-info.svg)](https://www.npmjs.com/package/@uni/system-info)

获取系统信息。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install @uni/system-info --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

```javascript
import getSystemInfoSync from '@uni/system-info';

let res = getSystemInfoSync();

```

你也可以从大包引入：
```js
import { getSystemInfoSync } from '@uni/apis';
```

## 方法

### `getSystemInfoSync()`

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| pixelRatio | `number` | 设备像素比 |
| screenWidth | `number` | 屏幕宽度，单位px |
| screenHeight | `number` | 屏幕高度，单位px |
| windowWidth | `number` | 可使用窗口宽度，单位px |
| windowHeight | `number` | 可使用窗口高度，单位px |
| language | `string` | 设置的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 |
| version | `string` | 版本号 |
| platform | `string` | 客户端平台 |

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/getsysteminfosync/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01XDvKVV1DKGftHeaEp_!!6000000000197-0-tps-616-638.jpg" width="200" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
