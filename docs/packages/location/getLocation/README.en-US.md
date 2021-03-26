# getLocation 

[![npm](https://img.shields.io/npm/v/@uni/location.svg)](https://www.npmjs.com/package/@uni/location)

Gets current geographic location（WGS84）.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp">

## Install

```bash
$ npm install @uni/location --save
```
or
```bash
$ npm install @uni/apis --save
```
## Usage

```javascript
import { getLocation } from '@uni/location';

getLocation({
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
getLocation().then(response => {})
  .catch(error => {})
  .finally(res => {});

```

You can also import from the big package:

```js
import { location } from '@uni/apis';

location.getLocation().then(response => {})
  .catch(error => {})
  .finally(res => {});
```

## Methods

### `getLocation(options)`

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |

#### Return

| Property | Type | Description |
| --- | --- | --- |
| latitude | `string`  | Latitude |
| longitude | `string`  | Longitude |
| accuracy | `string`  | Location accuracy	|
| horizontalAccuracy | `string`  | Horizontal accuracy |

## 注意

微信中使用地理位置相关的api，需要在app.json配置中打开权限
https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission

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
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>


```jsx | inline
  import React from 'react';
  export default class Home extends React.Component {
    componentDidMount() {
      if (location.search.split(/[?&]/).some(i => i === 'clear=1')) {
        document.querySelector('.__dumi-default-navbar').style.display = 'none';
        document.querySelector('.__dumi-default-layout').classList = [];
        document.querySelector('.__dumi-default-menu').style.display = 'none';
        document.querySelector('.__dumi-default-layout-toc').style.display = 'none';
        document.querySelector('.__dumi-default-layout-content').style.padding = '50px 100px';
      }
    }

    render() {
      return null;
    }
  }
```
