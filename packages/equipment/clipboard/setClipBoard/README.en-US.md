# setClipboard 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-setClipboard.svg)](https://www.npmjs.com/package/evapi-setClipboard)

Sets the content on the system clipboard.

## Install

```bash
$ npm install universal-setClipboard --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import setClipboard from 'universal-setClipboard';

setClipboard({
  text: 'text',
  success (res){
    console.log(res);
  }
});

// promise
setClipboard({
  text: 'text'
}).then(res => {
  console.log(res);
});

```

## Methods

### `setClipboard()`

#### Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object` |  | ✔️ | - |
| options.text | `string` | The clipboard content | ✔️ | - |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |