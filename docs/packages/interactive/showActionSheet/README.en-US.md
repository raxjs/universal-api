# showActionSheet 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@unishowActionSheet.svg)](https://www.npmjs.com/package/@unishowActionSheet)

Displays the operation menu.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## Supported

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp">

## Install

```bash
$ npm install @uni/showActionSheet --save
```
or
```bash
$ npm install @uni/apis --save
```
## Usage

```javascript
import showActionSheet from '@uni/showActionSheet';

showActionSheet({
  itemList: ['A', 'B', 'C'],
  success (res) {
    console.log(res.tapIndex)
  },
  fail (res) {
    console.log(res.errMsg)
  }
});

// promise
showActionSheet({
  itemList: ['A', 'B', 'C']
}).then(res => {
    console.log(res.tapIndex)
});

```

You can also import from the big package:

```js
import { showActionSheet } from '@uni/apis';
```

## Methods

### `showActionSheet(options)`

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object` |  | ✔️ | - |
| options.itemList | `Array<string>`  | The text array of the button, with a length limited to 6 | ✔️ | - |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |

#### Return

| Property | Type | Description |
| --- | --- | --- |
| tapIndex | `number` | The sequence number of the button tapped by the user, from top to bottom and starting from 0 |

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/action-sheet/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01yrQhve1aE4Tgjctph_!!6000000003297-0-tps-640-650.jpg" width="200" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>
