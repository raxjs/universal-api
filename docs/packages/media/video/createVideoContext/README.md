---
  group:
    path: /packages/media
    title: 多媒体
---


# createVideoContext 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis) [![npm](https://img.shields.io/npm/v/@uni/video.svg)](https://www.npmjs.com/package/@uni/video)

创建 video 上下文 VideoContext 对象。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

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


#### videoContext 通用方法

| 方法名 | 参数 | 类型 | 说明 |
| --- | --- | --- | --- |
| play | - | - | 播放 |
| pause | - | - | 暂停 |
| stop | - | - | 终止 |
| seek | position | number | 定位，单位为秒（s） |
| requestFullScreen | direction | number | 进入全屏（字节固定为横屏），取值0， -90， 90 |
| exitFullScreen | - | - | 退出全屏 |

#### videoContext 差异化方法

| 方法名 | 说明 | 文档 | 支持度 |
| --- | --- | --- | --- |
| snapshot | 截图 | https://developers.dingtalk.com/document/app/dd-createvideocontext-videoid | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> |
| sendDanmu | 发送弹幕 | https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.sendDanmu.html | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> |
| playbackRate | 设置倍速播放 | https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.playbackRate.html | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> |
| showStatusBar | 显示状态栏，仅在iOS全屏下有效 | https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.showStatusBar.html | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> |
| hideStatusBar | 隐藏状态栏，仅在iOS全屏下有效 | https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.hideStatusBar.html | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> |
| exitPictureInPicture | 退出小窗，该方法可在任意页面调用 | https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.exitPictureInPicture.html | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> |
| requestBackgroundPlayback | 进入后台音频播放模式 | https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.requestBackgroundPlayback.html | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> |
| exitBackgroundPlayback | 退出后台音频播放模式 | https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.exitBackgroundPlayback.html | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> |

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
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01ZAWX1f1ok2kTcnO30_!!6000000005262-0-tps-666-650.jpg" width="220" height="200" />
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
