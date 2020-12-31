# showModal 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-showModal.svg)](https://www.npmjs.com/package/evapi-showModal)

Displays the modal dialog box.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-showModal --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import showModal from 'universal-showModal';

showModal({
  title: '提示',
  content: '这是一个模态弹窗',
  success (res) {
    if (res.confirm) {
      console.log('用户点击确定')
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
});

// promise
showModal({
  title: '提示',
  content: '这是一个模态弹窗'
}).then(res => {
  if (res.confirm) {
    console.log('用户点击确定')
  } else if (res.cancel) {
    console.log('用户点击取消')
  }
});

```


You can also import from the big package:

```js
import { showModal } from 'universal-api';
```

## Methods

### `showModal(options)`

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.title | `string`  | Prompt title | ✘ | - |
| options.content | `string`  | Prompt content | ✘ | - |
| options.showCancel | `boolean`  | Indicates whether to display the "Cancel" button | ✘ | true |
| options.confirmText | `string`  | The text of the "OK "button, not more than 4 characters | ✘ | "OK" |
| options.cancelText | `string`  | The text of the "Cancel" button, not more than 4 characters | ✘ | "Cancel" |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |

#### Return

| Property | Type | Description |
| --- | --- | --- |
| confirm | `boolean`  | When the value is "true", it indicates that the user tapped the "OK" button. |
| cancel | `boolean`  | When the value is "true", it indicates that the user tapped the "Cancel" button. (this is used for Android system to distinguish whether "Mask" or "Cancel" is tapped) |

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
    }} src='https://herbox.online/p/109000004/app_1aKtEd7SK?previewZoom=100&view=preview&defaultPage=pages/universal-show-modal/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01RnrL8i1MP9RAdNEXP_!!6000000001426-0-tps-738-662.jpg" width="200" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>
