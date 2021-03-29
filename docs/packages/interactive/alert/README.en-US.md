---
title: alert
---

# alert 
[![npm](https://img.shields.io/npm/v/@uni/alert.svg)](https://www.npmjs.com/package/@uni/alert)

Alert component for feedback.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp">

## Install

```bash
$ npm install @uni/alert --save
```

## Usage

```js
import alert from '@uni/alert';

alert({
  title: 'alert title',
  content: 'alert content',
  buttonText: 'button text，default value is confirm'
}).then(() => {
  console.log('confirm');
});
```
You can also import from the big package:

```js
import { alert } from '@uni/apis';

```

## Arguments
| Property       | Type     | Description       |  Default  |
| ------------------ | -------- | ------------ | :-------: |
| options   | `object` | alert arguments      |     -     |
| options.content    | `string` | alert content  | - |
| options.title      | `string` | alert 标题     |  -  |
| options.buttonText | `string` | alert 确认按钮文字 | - |

### 不通用参数（由于破坏了一码多端的能力，请谨慎使用）
| 成员               | 类型     | 描述                              |  默认值   |     支持     |
| ------------------ | -------- | ---------- | :-------: | :----------: |
| options.confirmColor | `string` | alert 确认按钮颜色 | - | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> |

### Attention

Options that only supported by WeChat MiniProgram like `confirmColor` can also be passed but will not effect in other miniapp platforms.

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
    <img src="https://img.alicdn.com/imgextra/i3/O1CN015JYNlN1Nhl9FwpRcA_!!6000000001602-0-tps-644-618.jpg" width="200" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>


```jsx | inline
  import React from 'react';
  export default class Home extends React.Component {
    componentDidMount() {
      if (location.search.split(/[?&]/).some(i => i === 'clear=1')) {
        document.querySelector('.__dumi-default-navbar').style.display = 'none';
        document.querySelector('.__dumi-default-layout').classList = [];
        document.querySelector('.__dumi-default-menu').style.display = 'none';
        document.querySelector('.__dumi-default-layout-toc').style.display = 'none';
        document.querySelector('.__dumi-default-layout-content').querySelector('.markdown').querySelector('h1').style.marginTop = 0;
        parent.postMessage && parent.postMessage("syncIframeHeight", 800, '*'); // 800 即页面实际高度
        // document.querySelector('.__dumi-default-layout-content').style.padding = '50px 100px';
      }
    }

    render() {
      return null;
    }
  }
```
