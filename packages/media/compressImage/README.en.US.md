# compressImage 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-compressImage.svg)](https://www.npmjs.com/package/evapi-compressImage)

Compresses images. Multiple types of compression quality are available.

## Install

```bash
$ npm install universal-compressImage --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import compressImage from 'universal-compressImage';

compressImage({
  src: 'http://img.icon.com/a.png',
  quality: 1,
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
compressImage({
  src: 'http://img.icon.com/a.png',
  quality: 1
}).then(response => {})
  .catch(error => {})
  .finally(res => {});

```

## Methods

### `compressImage(options)`

#### Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.src | `string`  | The path to the image. It can be a relative path, a temporary file path, or a file storage path | ✔️ |  - |
| options.quality | `number`  | Compression quality. The value range is 0-3. | ✘ | - |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |

#### Return

| Property | Type | Description |
| --- | --- | --- |
| tempFilePath | `string` | The temporary file path to the compressed image |
