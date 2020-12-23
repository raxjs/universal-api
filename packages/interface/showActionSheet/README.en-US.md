# showActionSheet 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-showActionSheet.svg)](https://www.npmjs.com/package/evapi-showActionSheet)

Displays the operation menu.

## Install

```bash
$ npm install universal-showActionSheet --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import showActionSheet from 'universal-showActionSheet';

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

## Methods

### `showActionSheet(options)`

#### Supported

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

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
