---
  group:
    path: /en-US/packages/media
    title: media
---

# createVideoContext 

 [![npm](https://img.shields.io/npm/v/@uni/video.svg)](https://www.npmjs.com/package/@uni/video)

Creates the VideoContext object for the video.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

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
| id | `string`  | The video component's ID | ✔ |  - |
| context | `object`  | The this object of the current component instance in custom components. It is used with the video component（only for wechat, bytedance, kuaishou） | ✘ | - |

#### Return

| Property | Type | Description |
| --- | --- | --- |
| videoContext | `VideoContext` | VideoContext is bound to an video component with an id, to work with the video component. |

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
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01ZAWX1f1ok2kTcnO30_!!6000000005262-0-tps-666-650.jpg" width="220" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>
