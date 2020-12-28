# setStorage 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-setStorage.svg)](https://www.npmjs.com/package/evapi-setStorage)

将数据异步存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。

> 各平台对数据存储大小的限制不同，不建议存储过大的数据，其中支付宝和钉钉小程序单个key允许存储的最大数据大小为 `200KB`，微信和字节跳动小程序单个 key 允许存储的最大数据长度为 `1MB`，所有小程序平台总体缓存数据上限均为 `10M`

## 安装

```bash
$ npm install universal-setStorage --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import setStorage from 'universal-setStorage';

setStorage({
  key: 'key',
  data: {
    value: 'value'
  },
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
setStorage({
  key: "key",
  data: {
    value: 'value'
  }
}).then(response => {})
  .catch(error => {})
  .finally(res => {});

```

## 方法

### `setStorage(options)`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.key | `string`  | 本地缓存中指定的 key | ✔️ |  - |
| opthons.data | `object`  | 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。 | ✔️ | - |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |

# setStorageSync 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-setStorageSync.svg)](https://www.npmjs.com/package/evapi-setStorageSync)

将数据同步存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。

> 各平台对数据存储大小的限制不同，不建议存储过大的数据，其中支付宝和钉钉小程序单个key允许存储的最大数据大小为 `200KB`，微信和字节跳动小程序单个 key 允许存储的最大数据长度为 `1MB`，所有小程序平台总体缓存数据上限均为 `10M`

> 同步数据IO操作可能会影响小程序流畅度，建议使用异步接口，或谨慎处理调用异常。

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

## 方法

### `setStorageSync(options)`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.key | `string`  | 本地缓存中指定的 key | ✔️ |  - |
| opthons.data | `object`  | 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。 | ✔️ | - |


# getStorage 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-getStorage.svg)](https://www.npmjs.com/package/evapi-getStorage)

从本地缓存中异步获取指定 key 的内容。

## 安装

```bash
$ npm install universal-getStorage --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import getStorage from 'universal-getStorage';

getStorage({
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
getStorage({
  key: "key"
}).then(response => {})
  .catch(error => {})
  .finally(res => {});

```

## 方法

### `getStorage(options)`

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

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| data | `any`  | key对应的内容 |

# getStorageSync 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-getStorageSync.svg)](https://www.npmjs.com/package/evapi-getStorageSync)

从本地缓存中同步获取指定 key 的内容。

## 安装

```bash
$ npm install universal-getStorageSync --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import getStorageSync from 'universal-getStorageSync';

let res = getStorageSync({
  key: 'key'
});

```

## 方法

### `getStorageSync(options)`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.key | `string`  | 本地缓存中指定的 key | ✔️ |  - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| data | `any`  | key对应的内容 |

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

# removeStorageSync 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-removeStorageSync.svg)](https://www.npmjs.com/package/evapi-removeStorageSync)

从本地缓存中同步移除指定 key。

## 安装

```bash
$ npm install universal-removeStorageSync --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import removeStorageSync from 'universal-removeStorageSync';

removeStorageSync({
  key: 'key'
});

```

## 方法

### `removeStorageSync(options)`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.key | `string`  | 本地缓存中指定的 key | ✔️ |  - |
