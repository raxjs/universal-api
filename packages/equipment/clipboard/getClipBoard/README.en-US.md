---
  group:
    path: /en-US/packages/equipment
---

# getClipboard 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-getClipboard.svg)](https://www.npmjs.com/package/evapi-getClipboard)

Gets the content on the system clipboard.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">


## Supported

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp">

## Install

```bash
$ npm install universal-getClipboard --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import getClipboard from 'universal-getClipboard';

getClipboard({
  success (res){
    console.log(res.text);
  }
});

// promise
getClipboard().then(res => {
  console.log(res.text);
});

```

You can also import from the big package：
```js
import { clipboard } from 'universal-api';

clipboard.getClipboard().then(res => {
  console.log(res.text);
});
```

## Methods

### `getClipboard()`

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
| res | `object` |  |
| res.text | `string` | The clipboard content |

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
    }} src='https://herbox.online/p/109000004/app_1aKtEd7SK?previewZoom=100&view=preview&defaultPage=pages/universal-clipboard/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i2/O1CN01KS0wJM1N4pU0izbfM_!!6000000001517-0-tps-666-646.jpg" width="200" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>