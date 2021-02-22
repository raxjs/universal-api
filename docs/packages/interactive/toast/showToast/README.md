---
  group:
    path: /packages/interactive
---

# showToast 
[![npm](https://img.shields.io/npm/v/@uni/toast.svg)](https://www.npmjs.com/package/@uni/toast)

通用弱提示，可选择多少秒之后消失

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序"> 

## 安装

```bash
$ npm install @uni/toast --save
```

## 示例

```js
import Toast from '@uni/toast';

// 快应用中的引入方法
// import Toast from '@uni/toast/lib/quickapp;

Toast.show('Hi');

Toast.hide();
```

你也可以从大包引入：
```js
import { toast } from '@uni/apis';
toast.show('Hi')
```

## 方法

### `Toast.show(options?: object)`

#### 参数
| 成员     | 类型     | 描述                | 默认值 |
| -------- | -------- | ------------------- | :----: |
| message  | `string` | 文字内容            |   -    |
| type | `success/fail/none` | 弹窗类型 |  none  |
| duration | `number` | 显示时长，单位为 ms |  2000  |
| success | `function` | 成功回调 |  -  |
| fail | `function` | 失败回调 |  -  |
| complete | `function` | 结束回调 |  -  |

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/toast/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i3/O1CN01FNr42l289DDCz46Dc_!!6000000007889-0-tps-668-636.jpg" width="200" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
