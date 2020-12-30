---
  group:
    path: /packages/equipment
---

# setClipboard 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-setClipboard.svg)](https://www.npmjs.com/package/evapi-setClipboard)

设置系统剪贴板的内容。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 安装

```bash
$ npm install universal-setClipboard --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import setClipboard from 'universal-setClipboard';

setClipboard({
  text: 'text',
  success (res){
    console.log(res);
  }
});

// promise
setClipboard({
  text: 'text'
}).then(res => {
  console.log(res);
});

```

你也可以从大包引入：
```js
import { clipboard } from 'universal-api';

clipboard.setClipboard({
  text: 'text'
}).then(res => {
  console.log(res);
});
```

## 方法

### `setClipboard()`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.text | `string`  | 剪切板数据 | ✔️ | - |
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
    }} src='https://herbox.online/p/109000004/app_ZQfEMJN1h?previewZoom=100&view=preview&defaultPage=pages/universal-clipboard/index&topSlider=false'></iframe>
);
```

</div>
</div>