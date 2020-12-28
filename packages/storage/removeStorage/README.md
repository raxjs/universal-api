# removeStorage 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-removeStorage.svg)](https://www.npmjs.com/package/evapi-removeStorage)

从本地缓存中异步移除指定 key。

## 安装

```bash
$ npm install universal-removeStorage --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import removeStorage from 'universal-removeStorage';

removeStorage({
  key: 'key',
  success: (res) => {
    console.log('success', res);
  },
  fail: (res) => {
    console.log('fail', res);
  },
  complete: (res) => {
    console.log('complete', res);
  }
});

// promise
removeStorage({
  key: "key"
}).then(response => {})
  .catch(error => {})
  .finally(res => {});

```

你也可以从大包引入：
```js
import { storage } from 'universal-api';

storage.removeStorage({
  key: "key"
}).then(response => {})
  .catch(error => {})
  .finally(res => {});

```

## 方法

### `removeStorage(options)`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.key | `string`  | 本地缓存中指定的 key | ✔️ |  - |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |
