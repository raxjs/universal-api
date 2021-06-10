---
group:
  title: 路由
---

# navigate.push
[![npm](https://img.shields.io/npm/v/@uni/navigate.svg)](https://www.npmjs.com/package/@uni/navigate)

路由导航能力实现

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装
```bash
$ npm install @uni/navigate --save
```

## 使用
```javascript
import navigate from '@uni/navigate';

navigate.push({
  url: 'https://www.taobao.com/'
}).then(() => {
});

```

你也可以从大包引入：
```javascript
import { navigate } from '@uni/apis';
```

## 参数
| 成员             | 类型      | 描述   | 必选  | 默认值 |
| ---------------- | --------- | ----- | :---: | :----: |
| options          | `object`  | push 参数 |  是   |   -    |
| options.url      | `string`  | 页面 URL. |  是   |   -    |
| options.success | `Function`  | 成功的回调 | 否 | - |
| options.fail | `Function`  | 失败的回调 | 否 | - |
| options.complete | `Function`  | 结束的回调 | 否 | - |

## web中使用
当在h5中使用时，会区分hash路由和普通路由，以及是否需要刷新
所以这里提供了两个参数：isHash 和 refresh，他们只在web环境下支持

| 成员             | 类型      | 描述   | 必选  | 默认值 |
| ---------------- | --------- | ----- | :---: | :----: |
| isHash          | `boolean`  | 是否是hash路由，如果 true，则url前会自动加上# |  否   |   false    |
| refresh      | `boolean`  | 是否需要刷新. |  否   |   true   |

```javascript
import navigate from '@uni/navigate';

navigate.push({
  isHash: true,
  refresh: true,
  url: '/pages/toast/index'
}).then(() => {
});

```

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/navigate/index&topSlider=false'></iframe>
);
```
<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i1/O1CN01Ky8HXS23ytpewgaAV_!!6000000007325-0-tps-688-630.jpg" width="220" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>
</div>
</div>
