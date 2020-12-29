---
group:
  title: 地理位置
---

# getLocation 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-getLocation.svg)](https://www.npmjs.com/package/evapi-getLocation)

获取当前的地理位置，该接口返回的均为WGS84（World Geodetic System）坐标，即GPS坐标。

## 安装

```bash
$ npm install universal-getLocation --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import getLocation from 'universal-getLocation';

getLocation({
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
getLocation().then(response => {})
  .catch(error => {})
  .finally(res => {});

```

你也可以从大包引入：
```js
import { location } from 'universal-api';

location.getLocation().then(response => {})
  .catch(error => {})
  .finally(res => {});
```

## 方法

### `getLocation(options)`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| latitude | `number`  | 纬度 |
| longitude | `number`  | 经度 |
| accuracy | `number`  | 位置的精确度	|

## 注意

微信中使用地理位置相关的api，需要在app.json配置中打开权限

