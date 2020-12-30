# showModal 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-showModal.svg)](https://www.npmjs.com/package/evapi-showModal)

Displays the modal dialog box.

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

#### Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

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
