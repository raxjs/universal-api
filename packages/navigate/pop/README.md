---
group:
  title: 路由
---

# navigate.pop
[![npm](https://img.shields.io/npm/v/universal-navigate.svg)](https://www.npmjs.com/package/universal-navigate)

路由导航能力实现

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## Install
```bash
$ npm install universal-navigate --save
```

## Usage
```javascript
import navigate from 'universal-navigate';

// 快应用中的引入方法
// import chooseImage from 'universal-navigate/lib/quickapp;

navigate.pop().then(() => {
});


```

你也可以从大包引入：
```javascript
import { navigate } from 'universal-api';
```

## 方法

### `pop(options)`

#### 参数
| 成员             | 类型      | 描述   | 必选  | 默认值 |
| ---------------- | --------- | ------- | :---: | :----: |
| options          | `object`  | pop 参数  |  否   |   -    |
| options.success | `Function`  | 成功的回调 | 否 | - |
| options.fail | `Function`  | 失败的回调 | 否 | - |
| options.complete | `Function`  | 结束的回调 | 否 | - |

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
    }} src='https://herbox.online/p/109000004/app_ZalJy1DSm?previewZoom=100&view=preview&defaultPage=pages/universal-navigate/index&topSlider=false'></iframe>
);
```

</div>
</div>

