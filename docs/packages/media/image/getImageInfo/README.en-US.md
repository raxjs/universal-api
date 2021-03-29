# getImageInfo 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis) [![npm](https://img.shields.io/npm/v/@uni/image.svg)](https://www.npmjs.com/package/@uni/image)

Obtains image information. For network images, it only takes effect when the download domain name is configured.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## Supported

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp">

## Install

```bash
$ npm install @uni/image --save
```
or
```bash
$ npm install @uni/apis --save
```
## Usage

```javascript
import { getImageInfo } from '@uni/image';

getImageInfo({
  src: 'http://img.icon.com/a.png',
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
getImageInfo({
  src: 'http://img.icon.com/a.png'
}).then(response => {})
  .catch(error => {})
  .finally(res => {});

```

You can also import from the big package：
```js
import { image } from '@uni/apis';

image.getImageInfo({
  src: 'http://img.icon.com/a.png',
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
image.getImageInfo({
  src: 'http://img.icon.com/a.png'
}).then(response => {})
  .catch(error => {})
  .finally(res => {});

```

## Methods

### `getImageInfo(options)`

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.src | `string`  | The path to the image. It can be a relative path or a path to a network image. | ✔️ |  - |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |

#### Return

| Property | Type | Description |
| --- | --- | --- |
| width | `number`  | The original width of the image (in px). |
| height | `number`  | The original height of the image (in px).  |
| path | `number`  | The local path to the image		|

#### Special Return

| Property | Type | Description | Supported |
| --- | --- | --- | --- |
| orientation | `string`  | Device orientation when taking photos | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> |
| type | `string`  | Image format	| <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp"> no Dingding |

##### orientation

| Value | Description |
| --- | --- |
| up	| Default orientation (landscape) |
| up-mirrored	| Mirrored orientation of up |
| down | Rotates the device 180 degrees |
| down-mirrored	| Mirrored orientation of down |
| left-mirrored |	Mirrored orientation of left |
| right | Rotates the device 90 degrees clockwise |
| right-mirrored | Mirrored orientation of right |
| left | Rotates the device 90 degrees counterclockwise |

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/image/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN018P0jBN1Spc1Asc3d4_!!6000000002296-0-tps-690-618.jpg" width="200" height="200" />
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
        document.querySelector('.__dumi-default-layout-content').querySelector('.markdown').querySelector('h1').style.marginTop = 0;
        parent.postMessage && parent.postMessage("syncIframeHeight", 800, '*'); // 800 即页面实际高度
        // document.querySelector('.__dumi-default-layout-content').style.padding = '50px 100px';
      }
    }

    render() {
      return null;
    }
  }
```
