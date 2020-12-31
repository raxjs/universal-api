# getSystemInfoSync 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-getSystemInfoSync.svg)](https://www.npmjs.com/package/evapi-getSystemInfoSync)

Gets system information.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-getSystemInfoSync --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import getSystemInfoSync from 'universal-getSystemInfoSync';

let res = getSystemInfoSync();

```

You can also import from the big package:
```js
import { getSystemInfoSync } from 'universal-api';
```


## Methods

### `getSystemInfoSync()`

#### Return

| Property | Type | Description |
| --- | --- | --- |
| pixelRatio | `number` | Device's pixel ratio |
| screenWidth | `number` | Screen width in px |
| screenHeight | `number` | Screen height in px |
| windowWidth | `number` | Available window width in px	 |
| windowHeight | `number` | Available window height in px |
| language | `string` | Language |
| version | `string` | version |
| platform | `string` | Client platform |

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
    }} src='https://herbox.online/p/109000004/app_1aKtEd7SK?previewZoom=100&view=preview&defaultPage=pages/universal-getsysteminfosync/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01XDvKVV1DKGftHeaEp_!!6000000000197-0-tps-616-638.jpg" width="200" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>
