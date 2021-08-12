# openLocation 



Opens the map to select a location.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## Supported

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> 

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
import chooseLocation from '@uni/chooseLocation';

chooseLocation({
  longitude: 120.126293,
  latitude: 30.274653,
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
chooseLocation({
  longitude: 120.126293,
  latitude: 30.274653,})
  .then(response => {})
  .catch(error => {})
  .finally(res => {});

```

You can also import from the big package：
```js
import { location } from '@uni/apis';

location.chooseLocation({
  longitude: 120.126293,
  latitude: 30.274653,})
  .then(response => {})
  .catch(error => {})
  .finally(res => {});
```

## Methods

### `chooseLocation(options)`

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✘ | - |
| options.latitude | `number` | Latitude (not for ali develop platform) | ✘ | - |
| options.longtitude | `number` | Longtitude (not for ali develop platform) | ✘ | - |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |

#### Return

| Property | Type | Description |
| --- | --- | --- |
| name | `string`  | Location name	|
| address | `string`  | Detailed address	|
| latitude | `number`  | Latitude, which is expressed by a floating point number ranging from -90 to +90, and the negative number means south latitude. |
| longitude | `number`  | Longitude, which is expressed by a floating point number ranging from -180 to +180, and the negative number means west longitude.  |
| provinceName | `string`  | province name（only for ali）	|
| cityName | `string`  | city name（only for ali）	|

## Attention

微信中使用地理位置相关的api，需要在app.json配置中打开权限
https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission

User authorization is required for scope.userLocation before this API is called.

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
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01WN6zf81kTmDe4NlZ4_!!6000000004685-0-tps-694-648.jpg" width="220" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>


```jsx | inline
  import React from 'react';
  export default class Home extends React.Component {
    componentDidMount() {
      document.querySelector('.__dumi-default-menu').style.background = '#fff';
      if (location.search.split(/[?&]/).some(i => i === 'clear=1')) {
        document.querySelector('.__dumi-default-navbar').style.display = 'none';
        document.querySelector('.__dumi-default-layout').classList = [];
        document.querySelector('.__dumi-default-menu').style.display = 'none';
        document.querySelector('.__dumi-default-layout-toc').style.display = 'none';
        document.querySelector('.__dumi-default-layout-content').querySelector('.markdown').querySelector('h1').style.marginTop = 0;
        parent.postMessage && parent.postMessage(parent.postMessage({ event: 'syncIframeHeight', height: document.querySelector('.__dumi-default-layout-content').offsetHeight }, '*'));
      }
    }

    render() {
      return null;
    }
  }
```
