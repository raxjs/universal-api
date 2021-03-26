# saveImage 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis) [![npm](https://img.shields.io/npm/v/@uni/image.svg)](https://www.npmjs.com/package/@uni/image)

Saves images to the system album.

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
import { saveImage } from '@uni/image';

saveImage({
  url: 'http://img.icon.com/a.png',
});

```

You can also import from the big package：
```js
import { image } from '@uni/apis';

image.saveImage({
  url: 'http://img.icon.com/a.png',
});

```

## Methods

### `saveImage(options)`

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.url | `string`  | The path to the image file. It can be a temporary or permanent file path. The path to a network image is not supported | ✔️ |  - |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |

#### Special Arguments

| Property | Type | Description | required | Default | Supported |
| --- | --- | --- | --- | --- | -- |
| options.showActionSheet | `boolean`  | show operation menus for image | ✘ | true |<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> |

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
        document.querySelector('.__dumi-default-layout-content').style.padding = '50px 100px';
      }
    }

    render() {
      return null;
    }
  }
```
