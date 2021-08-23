---
  group:
    path: /packages/media
    title: media
---

# createAudioContext


[![npm](https://img.shields.io/npm/v/@uni/audio.svg)](https://www.npmjs.com/package/@uni/audio)

API to create and return audio (corresponding to background audio) AudioContext object in the applet. Also known as "foreground audio", the playback stops when the user leaves the page.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## Support

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

## Install

```bash
$ npm install @uni/audio --save
```
or
```bash
$ npm install @uni/apis --save
```
## Usage

```javascript
import { createAudioContext } from '@uni/audio';

const audioContext = createAudioContext();

```

You can also import from the big package:
```js
import { audio } from '@uni/apis';

const audioContext = audio.createAudioContext();
```

## Method

### `createAudioContext()`

### Parameter

| Property | Type | Description | required | Default | Supported |
| --- | -- | -- | --- | --- | --- |
| useWebAudioImplement |`boolean` |	是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现，对于长音频建议关闭此选项。 	| 否| false |	<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |

### Return

return value audioContext。

#### audioContext Property List

| 属性 | 类型 | 是否只读 | 说明 | 默认值 | 
| --- | -- | -- | --- | --- |
| src | `string` | 否 | 音频码，用于直接播放。支持音频格式：AAC，MP3。 | - | 
| autoplay | `boolean` | 否 | 是否自动开始播放。 | false | 
| loop | `boolean` | 否 | 是否循环播放。 | false | 
| duration | `number` | 是 | 当前音频的长度，单位为秒（s），只有在当前有合法的 src 时返回。 | - | 
| currentTime | `number` | 是 | 当前音频的播放位置，单位为秒（s），只有在当前有合法的 src 时返回，时间不取整。 | - | 
| paused | `boolean` | 是 | 当前是否为暂停或停止状态，true 表示暂停或停止，false 表示正在播放。 | - | 
| volume | `number` | 否 | 音量。范围 0~1。 | - | 

#### audioContext Non-universal Parameter List (due to the destruction of the multi-code capability, it is not recommended to use)

| 属性 | 类型 | 是否只读 | 说明 | 默认值 | 支持 |
| --- | -- | -- | --- | --- | --- |
| startTime | `number` | 否 | 开始播放的位置，单位为秒（s）。 | 0 | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |
| obeyMuteSwitch | `boolean` | 否 | 是否遵循系统静音开关，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。 | true | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |
| buffered | `number` | 是 | 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。 | - | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |
| playbackRate | `number` | 否 | 播放速度。范围 0.5-2.0。 | 1 | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |

#### audioContext Method List

| 方法 | 参数 |  说明 |
| -- | --- | --- | 
| play | 无 | 播放。 | 
| pause | 无 | 暂停。 | 
| stop | 无 | 停止。 | 
| seek | position | 跳转到指定位置，单位为秒（s）。精确到小数点后 3 位，即支持 毫秒（ms） 级别精确度。 | 
| destroy | 无 | 销毁当前实例。 | 
| onCanplay |	Function callback | 监听前景音频进入可以播放状态，但不保证后面可以流畅播放。 | 
| onPlay |	Function callback | 监听前景音频播放事件。 |
| onPause |	Function callback | 监听前景音频暂停事件。 |
| onStop |	Function callback | 监听前景音频停止事件。 |
| onEnded |	Function callback | 监听前景音频自然播放结束事件。 |
| onError |	Function callback | 监听前景音频播放错误事件。 |
| onWaiting |	Function callback | 监听前景音频加载中事件，当音频因为数据不足，需要停下来加载时会触发。 |
| onSeeking |	Function callback | 监听前景音频开始播放进度跳转的操作事件。 |
| onSeeked |	Function callback | 监听前景音频完成播放进度跳转的操作事件。 |
| offCanplay |	Function callback | 取消监听 onCanplay 事件。 |
| offPlay |	Function callback | 取消监听 onPlay 事件。 |
| offPause |	Function callback | 取消监听 onPause 事件。 |
| offStop |	Function callback | 取消监听 onStop 事件。 |
| offEnded |	Function callback | 取消监听 onEnded 事件。 |
| offTimeUpdate |	Function callback | 取消监听 onTimeUpdate 事件。 |
| offError |	Function callback | 取消监听 onError 事件。 |
| offWaiting |	Function callback | 取消监听 onWaiting 事件。 |
| offSeeking |	Function callback | 取消监听 onSeeking 事件。 |
| offSeeked |	Function callback | 取消监听 onSeeked 事件。 |

#### audioContext  Non-universal Method List (due to the destruction of the multi-code capability, it is not recommended to use)

| 方法 | 参数 |  说明 | 支持 |
| -- | --- | --- | --- |
| onTimeUpdate |	Function callback | 监听前景音频播放进度更新事件。 | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |