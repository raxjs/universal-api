# getImageInfo 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-getImageInfo.svg)](https://www.npmjs.com/package/evapi-getImageInfo)

获取图片信息。网络图片需先配置download域名才能生效。

## 安装

```bash
$ npm install universal-getImageInfo --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import getImageInfo from 'universal-getImageInfo';

getImageInfo({
  src: 'http://img.icon.com/a.png',
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
getImageInfo({
  src: 'http://img.icon.com/a.png'
}).then(response => {})
  .catch(error => {})
  .finally(res => {});

```

## 方法

### `getImageInfo(options)`

#### 支持

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.src | `string`  | 图片的路径，支持网络路径、相对路径 | ✔️ |  - |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| width | `number`  | 图片原始宽度，单位px |
| height | `number`  | 图片原始高度，单位px |
| path | `number`  | 图片的本地路径	|
