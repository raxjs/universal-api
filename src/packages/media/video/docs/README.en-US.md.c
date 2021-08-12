# chooseVideo 

 [![npm](https://img.shields.io/npm/v/@uni/video.svg)](https://www.npmjs.com/package/@uni/video)

Takes a video or selects a video from the mobile album.

## Supported

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" />

## Install

```bash
$ npm install @uni/video --save
```
or
```bash
$ npm install @uni/apis --save
```
## Usage

```javascript
import { chooseVideo } from '@uni/video';

chooseVideo({
  sourceType: ['album', 'camera'],
  compressed: true,
  camera: 'back',
  maxDuration: 100,
  success (res) {
    console.log(res);
  }
});

// promise
chooseVideo({
  sourceType: ['camera'],
  compressed: false,
  camera: 'front',
  maxDuration: 20,
}).then(res => {
  console.log(res);
});

```

You can also import from the big package：
```js
import { video } from '@uni/apis';

video.chooseVideo({
  sourceType: ['album', 'camera'],
  compressed: true,
  camera: 'back',
  maxDuration: 100,
  success (res) {
    console.log(res);
  }
});

// promise
video.chooseVideo({
  sourceType: ['camera'],
  compressed: false,
  camera: 'front',
  maxDuration: 20,
}).then(res => {
  console.log(res);
});

```

## Methods

### `chooseVideo(options)`

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✘ | - |
| options.sourceType | `Array<string>`  | The source of the video | ✘ | ['album', 'camera'] |
| options.maxDuration | `number` | The maximum duration of a recorded video | ✘ | 60 |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |

#### Special Arguments

| Property | Type | Description | required | Default | Supported |
| --- | --- | --- | --- | --- | -- |
| options.camera | `string`  | Indicates the default camera to be enabled. can be 'back' or 'front' | ✘ | 'back' | <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" /> |
| options.compressed | `boolean`  | Indicates whether to compress the selected video file | ✘ | true | <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" /> |

#### Return

| Property | Type | Description |
| --- | --- | --- |
| tempFilePath | `string`  | Temporary file path of the selected video |
| duration | `number` | Duration of the selected video |
| size | `number` | Amount of data of the selected video |
| width | `number` | Returns the height of the selected video |
| height | `number` | Returns the width of the selected video |

# createVideoContext 

 [![npm](https://img.shields.io/npm/v/@uni/video.svg)](https://www.npmjs.com/package/@uni/video)

Creates the VideoContext object for the video.

## Supported

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" />

## Install

```bash
$ npm install @uni/video --save
```
or
```bash
$ npm install @uni/apis --save
```
## Usage

```javascript
import { createVideoContext } from '@uni/video';

const videoContext = createVideoContext('videoId');

```


You can also import from the big package：
```js
import { video } from '@uni/apis';

const videoContext = video.createVideoContext('videoId');

```

## Methods

### `createVideoContext(id, context)`

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| id | `string`  | The video components ID | ✔ |  - |
| context | `object`  | The this object of the current component instance in custom components. It is used with the video component（only for wechat and bytedance） | ✘ | - |

#### Return

| Property | Type | Description |
| --- | --- | --- |
| videoContext | `VideoContext` | VideoContext is bound to an video component with an id, to work with the video component. |
