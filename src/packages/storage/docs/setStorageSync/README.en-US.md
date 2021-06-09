# setStorageSync 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@uni/storage.svg)](https://www.npmjs.com/package/@uni/storage)

Stores data in the specified key in the local cache. This operation will overwrite the original content of the key. The data storage lifecycle is consistent with the Mini Program, that is, data is always available unless manually deleted by the user or automatically deleted after a certain period of time.

> The maximum size of data stored in a single key is 1 MB, and the total size for data storage is limited to 10 MB.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

## Install

```bash
$ npm install @uni/storage --save
```
or
```bash
$ npm install @uni/apis --save
```
## Usage

```javascript
import {setStorageSync} from '@uni/storage';

setStorageSync({
  key: 'key',
  data: {
    value: 'value'
  }
});
```

You can also import from the big package：
```js
import { storage } from '@uni/apis';

storage.setStorageSync({
  key: 'key',
  data: {
    value: 'value'
  }
});
```

## Methods

### `setStorageSync(options)`

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.key | `string`  | The specified key in the local cache | ✔️ |  - |
| opthons.data | `object`  | Contents to be stored can only be native types, dates, and objects that can be serialized via JSON.stringify. | ✔️ | - |

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/storage/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i2/O1CN01uDGumH1UwbI5mxYOZ_!!6000000002582-0-tps-646-638.jpg" width="220" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>
