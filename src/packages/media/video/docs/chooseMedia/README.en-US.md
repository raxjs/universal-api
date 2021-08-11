---
  group:
    path: /en-US/packages/media
    title: media
---

# chooseMedia 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis) [![npm](https://img.shields.io/npm/v/@uni/video.svg)](https://www.npmjs.com/package/@uni/video)

(H5 supports any file program type; ByteDance applet, Ali applet, Baidu applet, and Kuaishou applet only support selecting pictures)

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" />

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
import { chooseMedia } from '@uni/video';

chooseMedia({
  sourceType: ['album', 'camera'],
  camera: 'back',
  success (res) {
    console.log(res);
  }
});

// promise
chooseMedia({
  sourceType: ['camera'],
  camera: 'front',
  maxDuration: 20,
}).then(res => {
  console.log(res);
});

```

你也可以从大包引入：
```js
import { video } from '@uni/apis';

video.chooseMedia({
  sourceType: ['album', 'camera'],
  camera: 'back',
  success (res) {
    console.log(res);
  }
});

// promise
video.chooseMedia({
  sourceType: ['camera'],
  camera: 'front',
  maxDuration: 20,
}).then(res => {
  console.log(res);
});

```

## Methods

### `chooseMedia(options)`

#### Arguments

| 成员 | 类型 | 描述 | 必选 | 默认值 | 支持度 |
| --- | --- | --- | --- | --- | -- |
| options | `object`  |  | ✘ | - |  |
| opthons.count | `number`  | 最多可以选择的文件个数 | ✘ | 9 |  |
| opthons.mediaType | `Array<string>` | 文件类型 | ✘ | ['image', 'video'] | web不支持 |
| opthons.accept | `string` | 文件类型 | ✘ | all | 仅web支持，如：'image/*' |
| opthons.sourceType | `Array<string>` | 图片和视频选择的来源 | ✘ | ['album', 'camera'] | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" /> |
| opthons.sizeType | `Array<string>` | 仅对 mediaType 为 image 时有效，是否压缩所选文件 | ✘ | ['original', 'compressed'] |  <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" /> |
| opthons.maxDuration | `number` | 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 30s 之间 | ✘ | 10 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" />  |
| opthons.camera | `string`  | 仅在 sourceType 为 camera 时生效，使用前置或后置摄像头 | ✘ | 'back' | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" />  |
| options.success | `Function`  | 成功的回调 | ✘ | - | |
| options.fail | `Function`  | 失败的回调 | ✘ | - | |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - | |


#### Return

| 成员 | 类型 | 描述 | 支持度 |
| --- | --- | --- | --- |
| tempFiles | `Array<Object>` | 本地临时文件列表 |  |
| type | `string` | 文件类型，有效值有 image 、video | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" />  |

##### tempFiles' structure

| 成员 | 类型 | 描述 | 支持度 |
| --- | --- | --- | --- |
| tempFilePath | `string`  | 选定视频的临时文件路径 |  |
| duration | `number` | 选定视频的时间长度 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |
| size | `number` | 选定视频的数据量大小 | |
| width | `number` | 返回选定视频的高度 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |
| height | `number` | 返回选定视频的宽度 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |
| thumbTempFilePath | `string` | 视频缩略图临时文件路径 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/video/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01glSUyh1FfucijRlur_!!6000000000515-0-tps-608-622.jpg" width="220" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
