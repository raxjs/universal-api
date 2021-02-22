---
group:
  title: 多媒体
---

# chooseImage 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis) [![npm](https://img.shields.io/npm/v/@uni/choose-image.svg)](https://www.npmjs.com/package/@uni/choose-image)

从本地相册选择图片或使用相机拍照。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install @uni/choose-image --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

```javascript
import chooseImage from '@uni/choose-image';

chooseImage({
  count: 1,
  sourceType: ['album', 'camera'],
  success (res) {
    const tempFilePaths = res.tempFilePaths
  }
});

// promise
chooseImage({
  count: 1,
  sourceType: ['album', 'camera']
}).then(res => {
  const tempFilePaths = res.tempFilePaths
});

```

你也可以从大包引入：
```js
import { chooseImage } from '@uni/apis';
```

## 方法

### `chooseImage(options)`

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.count | `number` | 最大可选照片数，默认1张 | ✔️ | 1 |
| opthons.sourceType | `Array<string>`  | 相册选取或者拍照，默认 ['camera','album']，`h5不支持拍照` | ✔️ | ['album', 'camera'] |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| tempFilePaths | `Array<string>`  | 图片的本地临时文件路径列表，h5为base64图片数据列表 |

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/choose-image/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01glSUyh1FfucijRlur_!!6000000000515-0-tps-608-622.jpg" width="200" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
