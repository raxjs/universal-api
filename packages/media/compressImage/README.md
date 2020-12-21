# compressImage 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-compressImage.svg)](https://www.npmjs.com/package/evapi-compressImage)

压缩图片接口，可选压缩质量

## 安装

```bash
$ npm install universal-compressImage --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import compressImage from 'universal-compressImage';

compressImage({
  src: 'http://img.icon.com/a.png',
  quality: 1,
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
compressImage({
  src: 'http://img.icon.com/a.png',
  quality: 1
}).then(response => {})
  .catch(error => {})
  .finally(res => {});

```

## 方法

### `compressImage(options)`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.src | `string`  | 图片路径，可以本地路径、代码包相对路径，不支持网络图片 | ✔️ |  - |
| options.quality | `number`  | 压缩质量，范围0～3，1-低，2-中，3-高 | ✘ | - |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| tempFilePath | `string` | 压缩后图片的临时文件路径 (本地路径) |
