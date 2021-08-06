# chooseVideo 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis) [![npm](https://img.shields.io/npm/v/@uni/video.svg)](https://www.npmjs.com/package/@uni/video)

拍摄视频或从手机相册中选视频。

## 支持

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

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
| --- | --- | --- | --- | --- | -- |
| options.camera | `string`  | 默认拉起的是前置或者后置摄像头，取值'back'或'front' | ✘ | 'back' | <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序"> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> |
| options.compressed | `boolean`  | 是否压缩选择的视频 | ✘ | true | <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序"> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| tempFilePath | `string`  | 选定视频的临时文件路径 |
| duration | `number` | 选定视频的时间长度 |
| size | `number` | 选定视频的数据量大小 |
| width | `number` | 返回选定视频的高度 |
| height | `number` | 返回选定视频的宽度 |

# createVideoContext 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis) [![npm](https://img.shields.io/npm/v/@uni/video.svg)](https://www.npmjs.com/package/@uni/video)

创建 video 上下文 VideoContext 对象。

## 支持

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

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
import { createVideoContext } from '@uni/video';

const videoContext = createVideoContext('videoId');

```

你也可以从大包引入：
```js
import { video } from '@uni/apis';

const videoContext = video.createVideoContext('videoId');

```

## 方法

### `createVideoContext(id, context)`

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| id | `string`  | video 组件的 id | ✔ |  - |
| context | `object`  | 在自定义组件下，当前组件实例的this，以操作组件内 video 组件，微信和字节小程序需传入 | ✘ | - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| videoContext | `VideoContext` | VideoContext 通过 id 跟一个 video 组件绑定，操作对应的 video 组件 |


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
