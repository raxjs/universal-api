---
  group:
    path: /packages/media
    title: 多媒体
---

# chooseVideo 

 [![npm](https://img.shields.io/npm/v/@uni/video.svg)](https://www.npmjs.com/package/@uni/video)

拍摄视频或从手机相册中选视频。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

## 安装

```bash
$ npm install @uni/video --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

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

你也可以从大包引入：
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

## 方法

### `chooseVideo(options)`

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✘ | - |
| options.sourceType | `Array<string>`  | 视频选择的来源 | ✘ | ['album', 'camera'] |
| options.maxDuration | `number` | 视频最大时长，阿里取值范围[5, 60]，字节取值范围(0, 180]，maxDuration <= 0 时取值 60, maxDuration > 180 时取值 180，在取值范围内为传入值 | ✘ | 60 |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |

#### 差异化参数

| 成员 | 类型 | 描述 | 必选 | 默认值 | 支持度 |
| --- | --- | --- | --- | --- | --- |
| options.camera | `string`  | 默认拉起的是前置或者后置摄像头，取值'back'或'front' | ✘ | 'back' | <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |
| options.compressed | `boolean`  | 是否压缩选择的视频 | ✘ | true | <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| tempFilePath | `string`  | 选定视频的临时文件路径 |
| duration | `number` | 选定视频的时间长度 |
| size | `number` | 选定视频的数据量大小 |
| width | `number` | 返回选定视频的高度 |
| height | `number` | 返回选定视频的宽度 |

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


```jsx | inline
  import React from 'react';
  export default class Home extends React.Component {
    componentDidMount() {
      document.querySelector('.__dumi-default-menu').style.background = '#fff';
      if (location.search.split(/[?&]/).some(i => i === 'clear=1')) {
        document.querySelector('.__dumi-default-navbar').style.display = 'none';
        document.querySelector('.__dumi-default-layout').classList = [];
        document.querySelector('.__dumi-default-menu').style.display = 'none';
        document.querySelector('.__dumi-default-layout-toc').style.display = 'none';
        document.querySelector('.__dumi-default-layout-content').querySelector('.markdown').querySelector('h1').style.marginTop = 0;
        parent.postMessage && parent.postMessage(parent.postMessage({ event: 'syncIframeHeight', height: document.querySelector('.__dumi-default-layout-content').offsetHeight }, '*'));
      }
    }

    render() {
      return null;
    }
  }
```
