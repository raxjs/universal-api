# openLocation 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-openLocation.svg)](https://www.npmjs.com/package/evapi-openLocation)

Views location using the built-in map. The GCJ-02 coordinate system of the State Bureau of Surveying and Mapping is used.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## Supported

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp">

## Install

```bash
$ npm install universal-openLocation --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import openLocation from 'universal-openLocation';

openLocation({
  longitude: '120.126293',
  latitude: '30.274653',
  name: 'cityname',
  address: 'stree name',
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
  name: 'ctyname',
  address: 'stree name'})
  .then(response => {})
  .catch(error => {})
  .finally(res => {});

```

You can also import from the big package：
```js
import { location } from 'universal-api';

location.openLocation({
  longitude: '120.126293',
  latitude: '30.274653',
  name: '黄龙万科中心',
  address: '学院路77号'})
  .then(response => {})
  .catch(error => {})
  .finally(res => {});
```

## Methods

### `openLocation(options)`

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.latitude | `number` | Latitude | ✔️ | - |
| options.longtitude | `number` | Longtitude | ✔️ | - |
| options.name | `string`  | Location name | ✔️ | - |
| options.address | `string`  | Detailed address | ✔️ | - |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |

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
    }} src='https://herbox.online/p/109000004/app_1aKtEd7SK?previewZoom=100&view=preview&defaultPage=pages/universal-location/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01WN6zf81kTmDe4NlZ4_!!6000000004685-0-tps-694-648.jpg" width="200" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>
