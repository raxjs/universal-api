# openLocation 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-openLocation.svg)](https://www.npmjs.com/package/evapi-openLocation)

使用内置地图查看位置。各平台内置地图均要求火星坐标，即使用 gcj02 国测局坐标系。

## 安装

```bash
$ npm install universal-openLocation --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import openLocation from 'universal-openLocation';

openLocation({
  longitude: '120.126293',
  latitude: '30.274653',
  name: '黄龙万科中心',
  address: '学院路77号',
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
openLocation({
  longitude: '120.126293',
  latitude: '30.274653',
  name: '黄龙万科中心',
  address: '学院路77号'})
  .then(response => {})
  .catch(error => {})
  .finally(res => {});

```

你也可以从大包引入：
```js
import { location } from 'universal-api';

location.openLocation({
  longitude: '120.126293',
  latitude: '30.274653',
  name: '黄龙万科中心',
  address: '学院路77号'})
  .then(response => {})
  .catch(error => {})
  .finally(res => {});
```

## 方法

### `openLocation(options)`

#### 支持

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.latitude | `number` | 纬度 | ✔️ | - |
| options.longtitude | `number` | 经度 | ✔️ | - |
| options.name | `string`  | 位置名 | ✔️ | - |
| options.address | `string`  | 地址的详细说明 | ✔️ | - |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |
