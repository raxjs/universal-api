# openLocation 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@uniopenLocation.svg)](https://www.npmjs.com/package/@uniopenLocation)

使用内置地图查看位置。各平台内置地图均要求火星坐标，即使用 gcj02 国测局坐标系。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install @uni/openLocation --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

```javascript
import openLocation from '@uni/openLocation';

openLocation({
  longitude: '120.126293',
  latitude: '30.274653',
  name: '黄龙万科中心',
  address: '学院路77号',
  success: (res) => {
    console.log('success', res);
  },
  fail: (res) => {
    console.log('fail', res);
  },
  complete: (res) => {
    console.log('complete', res);
  }
});

// promise
openLocation({
  longitude: '120.126293',
  latitude: '30.274653',
  name: '黄龙万科中心',
  address: '学院路77号'})
  .then(response => {})
  .catch(error => {})
  .finally(res => {});

```

你也可以从大包引入：
```js
import { location } from '@uni/apis';

location.openLocation({
  longitude: '120.126293',
  latitude: '30.274653',
  name: '黄龙万科中心',
  address: '学院路77号'})
  .then(response => {})
  .catch(error => {})
  .finally(res => {});
```

## 方法

### `openLocation(options)`

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.latitude | `number` | 纬度 | ✔️ | - |
| options.longtitude | `number` | 经度 | ✔️ | - |
| options.name | `string`  | 位置名 | ✔️ | - |
| options.address | `string`  | 地址的详细说明 | ✔️ | - |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |

## 注意

微信中使用地理位置相关的api，需要在app.json配置中打开权限

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/location/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01WN6zf81kTmDe4NlZ4_!!6000000004685-0-tps-694-648.jpg" width="200" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
