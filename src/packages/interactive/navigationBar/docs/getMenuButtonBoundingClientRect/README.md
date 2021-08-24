---
  group:
    path: /packages/interactive
---

# getMenuButtonBoundingClientRect


[![npm](https://img.shields.io/npm/v/@uni/navigation-bar.svg)](https://www.npmjs.com/package/@uni/navigation-bar)

解获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## 支持

<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"/> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序"/> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

## 安装

```bash
$ npm install @uni/navigation-bar --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

```javascript
import { getMenuButtonBoundingClientRect } from '@uni/navigation-bar';

getMenuButtonBoundingClientRect();
```

你也可以从大包引入：
```js
import { navigationBar } from '@uni/apis';

navigationBar.getMenuButtonBoundingClientRect();
```

## 方法

### `getMenuButtonBoundingClientRect()`

### 返回值

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| width | `number`  | 宽度，单位：px |
| height | `number`  | 高度，单位：px | 
| top | `number`  | 上边界坐标，单位：px | 
| right | `number`  | 右边界坐标，单位：px | 
| bottom | `number`  | 下边界坐标，单位：px |
| left | `number`  | 左边界坐标，单位：px |

### 不通用返回（由于破坏了一码多端的能力，不推荐使用）

| 属性 | 类型 | 描述 | 支持 |
| --- | --- | --- | ----|
| errMsg | `string`  |  | <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序"/> |

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/navigation-bar/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i2/O1CN01iI0BJv1EyrORuBMUh_!!6000000000421-0-tps-690-662.jpg" width="220" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
