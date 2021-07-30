---
group:
  path: /packages/media
  title: 多媒体
---

# getImageInfo 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis) [![npm](https://img.shields.io/npm/v/@uni/image.svg)](https://www.npmjs.com/package/@uni/image)

获取图片信息。网络图片需先配置download域名才能生效。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## 支持

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" />

## 安装

```bash
$ npm install @uni/image --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

```javascript
import { getImageInfo } from '@uni/image';

getImageInfo({
  src: 'http://img.icon.com/a.png',
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
getImageInfo({
  src: 'http://img.icon.com/a.png'
}).then(response => {})
  .catch(error => {})
  .finally(res => {});

```


你也可以从大包引入：
```js
import { image } from '@uni/apis';

image.getImageInfo({
  src: 'http://img.icon.com/a.png',
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
image.getImageInfo({
  src: 'http://img.icon.com/a.png'
}).then(response => {})
  .catch(error => {})
  .finally(res => {});

```

## 方法

### `getImageInfo(options)`

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.src | `string`  | 图片的路径，支持网络路径、相对路径 | ✔️ |  - |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| width | `number`  | 图片原始宽度，单位px |
| height | `number`  | 图片原始高度，单位px |
| path | `number`  | 图片的本地路径	|

#### 差异化返回值

| 成员 | 类型 | 描述 | 支持度 |
| --- | --- | --- | --- |
| orientation | `string`  | 拍照时设备方向 | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |
| type | `string`  | 图片格式 | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> 钉钉不支持 |

##### orientation

| 值 | 说明 |
| --- | --- |
| up	| 默认方向（手机横持拍照） |
| up-mirrored	| 同 up，但镜像翻转 |
| down | 旋转180度 |
| down-mirrored	| 同 down，但镜像翻转 |
| left-mirrored |	同 left，但镜像翻转 |
| right | 顺时针旋转90度 |
| right-mirrored | 同 right，但镜像翻转 |
| left | 逆时针旋转90度 |

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/image/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN018P0jBN1Spc1Asc3d4_!!6000000002296-0-tps-690-618.jpg" width="220" height="200" />
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
