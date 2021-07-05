---
title: alert
---

# alert
[![npm](https://img.shields.io/npm/v/@uni/alert.svg)](https://www.npmjs.com/package/@uni/alert)

alert 警告框

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

## 安装

```bash
$ npm install @uni/alert --save
```

## 示例

```js
import alert from '@uni/alert';

alert({
  title: 'alert框的标题',
  content: 'alert框的内容',
  buttonText: '按钮文字，默认confirm'
}).then(() => {
  console.log('确定');
});
```
你也可以从大包引入：

```js
import { alert } from '@uni/apis';

```

## 参数
| 成员               | 类型     | 描述        |  默认值   |
| ------------------ | -------- | ------------ | :-------: |
| options            | `object` | alert 参数  |     -     |
| options.content    | `string` | alert 内容 | - |
| options.title      | `string` | alert 标题     |  -  |
| options.buttonText | `string` | alert 确认按钮文字 | - |

### 不通用参数（由于破坏了一码多端的能力，请谨慎使用）
| 成员               | 类型     | 描述                              |  默认值   |     支持     |
| ------------------ | -------- | ---------- | :-------: | :----------: |
| options.confirmColor | `string` | alert 确认按钮颜色 | - | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> |

### 注意

部分选项仅微信小程序支持，如 `confirmColor` 等。用户可直接在 options 中传入，但是不会在其他小程序端生效。

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/alert/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i3/O1CN015JYNlN1Nhl9FwpRcA_!!6000000001602-0-tps-644-618.jpg" width="220" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
