---
  group:
    path: /packages/interactive
---
# onPullDownRefresh 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@uni/pull-down-refresh.svg)](https://www.npmjs.com/package/@uni/pull-down-refresh)

开启下拉刷新。下拉刷新触发"pulldownrefresh"事件。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> 

## 安装

```bash
$ npm install @uni/pull-down-refresh --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

```javascript
import { onPullDownRefresh } from '@uni/pull-down-refresh';

onPullDownRefresh();
```

你也可以从大包引入：
```js
import { pullDownRefresh } from '@uni/apis';

pullDownRefresh.onPullDownRefresh();
```

监听事件
```js
pullDownRefresh.onPullDownRefresh({eventCallback: cb});
```

## 方法

### `onPullDownRefresh(options)`

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.pullRefresh | `boolean`  | 下拉刷新开关 | ✘ | true |
| options.triggerDistance | `number`  | 下拉刷新触发时所需的下拉距离 | ✘ | 90 |
| options.eventCallback | `Function`  | 事件触发时的回调函数 | ✘ | - |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/pull-down-refresh/index&topSlider=false'></iframe>
);
```

<!-- <div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i2/O1CN01iI0BJv1EyrORuBMUh_!!6000000000421-0-tps-690-662.jpg" width="200" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div> -->

</div>
</div>
