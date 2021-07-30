---
  group:
    path: /packages/media
    title: 多媒体1
---

# RecorderManager

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@uni/recorder.svg)](https://www.npmjs.com/package/@uni/recorder)

获取全局唯一的录音管理器 RecorderManager

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" />

## 安装

```bash
$ npm install @uni/recorder --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

```javascript
import getRecorderManager from '@uni/recorder';

const recorderManager = getRecorderManager();

```

你也可以从大包引入：
```js
import { getRecorderManager } from '@uni/apis';
```

## 方法

### `getRecorderManager()`

#### 音频管理器提供的方法

| 方法 | 说明 | 参数 |
| --- | -- | -- |
| start | 开始录音 | 见下表 |
| pause | 暂停录音（阿里小程序不支持） | - |
| resume | 继续录音（阿里小程序不支持） | - |
| stop | 停止录音 | - |
| onStart | 监听录音开始事件 | callback |
| onPause | 监听录音暂停事件（阿里小程序不支持） | callback |
| onResume | 监听录音继续事件（阿里小程序不支持） | callback |
| onStop | 监听录音结束事件 | callback |
| onFrameRecorded | 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。（阿里小程序不支持） | callback |
| onError | 监听录音错误事件 | callback |

##### start方法参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| duration | `number` | 录音的时长，单位 ms，最大值 600000（10 分钟）, 阿里小程序最长60s | ✘ | 60000 |
| sampleRate | `number`  | 采样率 | ✘ | 8000 |
| numberOfChannels | `number` | 录音通道数 | ✘ | 2 |
| encodeBitRate | `number`  | 编码码率 | ✘ | 48000 |
| frameSize | `number`  | 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。 在web中，这个参数指的是时间，传入一个毫秒值，每录制指定毫秒的内容后，会回调录制的文件内容，不指定则会在录音结束后返回全部音频数据 | ✘ | - |
| format | `string`  | 音频格式（仅微信支持） | ✘ | aac |
| audioSource | `string`  | 指定录音的音频输入源，可通过 wx.getAvailableAudioSources() 获取当前可用的音频源（仅微信支持） | ✘ | auto |

关于采样率、通道和编码码率的合法值参考：https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.start.html

##### onStop 回调返回值

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| tempFilePath | `string`  | 录音文件的临时路径 (本地路径) |
| duration | `number` | 录音总时长，单位：ms，（阿里小程序单位s） |
| fileSize | `number` | 录音文件大小，单位：Byte （阿里小程序不支持） |

#### onFrameRecorded 回调返回值

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| frameBuffer | `ArrayBuffer`  | 录音分片数据 |
| isLastFrame | `boolean` | 当前帧是否正常录音结束前的最后一帧 |

#### 差异化方法

| 方法 | 说明 | 支持度 |
| --- | --- | --- |
| onInterruptionBegin | 监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发 https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onInterruptionBegin.html | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |
| onInterruptionEnd | 监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功 https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onInterruptionEnd.html | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |

## 注意

web中暂不支持音频编码，可根据需要通过获取onFrameRecorded中的音频数据，自行编码。

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/recorder/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01RnrL8i1MP9RAdNEXP_!!6000000001426-0-tps-738-662.jpg" width="220" height="200" />
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
