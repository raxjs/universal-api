# setStorageSync 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-setStorageSync.svg)](https://www.npmjs.com/package/evapi-setStorageSync)

将数据同步存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。

> 各平台对数据存储大小的限制不同，不建议存储过大的数据，其中支付宝和钉钉小程序单个key允许存储的最大数据大小为 `200KB`，微信和字节跳动小程序单个 key 允许存储的最大数据长度为 `1MB`，所有小程序平台总体缓存数据上限均为 `10M`

> 同步数据IO操作可能会影响小程序流畅度，建议使用异步接口，或谨慎处理调用异常。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install universal-setStorageSync --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import setStorageSync from 'universal-setStorageSync';

setStorageSync({
  key: 'key',
  data: {
    value: 'value'
  }
});

```

你也可以从大包引入：
```js
import { storage } from 'universal-api';

storage.setStorageSync({
  key: 'key',
  data: {
    value: 'value'
  }
});

```

## 方法

### `setStorageSync(options)`

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.key | `string`  | 本地缓存中指定的 key | ✔️ |  - |
| opthons.data | `object`  | 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。 | ✔️ | - |

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
    }} src='https://herbox.online/p/109000004/app_1aKtEd7SK?previewZoom=100&view=preview&defaultPage=pages/universal-storage/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i2/O1CN01uDGumH1UwbI5mxYOZ_!!6000000002582-0-tps-646-638.jpg" width="200" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
