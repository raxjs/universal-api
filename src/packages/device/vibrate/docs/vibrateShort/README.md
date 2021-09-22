---
  group:
    path: /packages/device
---

# vibrateShort 


[![npm](https://img.shields.io/npm/v/@uni/vibrate.svg)](https://www.npmjs.com/package/@uni/vibrate)

使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" />

## 安装

```bash
$ npm install @uni/vibrate --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

```javascript
import { vibrateShort } from '@uni/vibrate';

vibrateShort({
  success (){
    console.log('success');
  }
});

// promise
vibrateShort().then(() => {
  console.log('success');
});

```

你也可以从大包引入：
```js
import { vibrate } from '@uni/apis';

vibrate.vibrateShort().then(() => {
  console.log('success');
});
```

## 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |

## 不通用参数（由于破坏了一码多端的能力，不推荐使用）

| 成员 | 类型 | 描述 | 必选 | 默认值 | 支持度 |
| --- | --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - | - |
| options.type | `string`  | 震动强度类型，有效值为：heavy、medium、light | ✘ | - | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/vibrate/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i2/O1CN01KS0wJM1N4pU0izbfM_!!6000000001517-0-tps-666-646.jpg" width="220" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>