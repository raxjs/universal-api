---
group:
  title: 多媒体
---

# chooseImage 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-chooseImage.svg)](https://www.npmjs.com/package/evapi-chooseImage)

从本地相册选择图片或使用相机拍照。

## 安装

```bash
$ npm install universal-chooseImage --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import chooseImage from 'universal-chooseImage';

chooseImage({
  count: 1,
  sourceType: ['album', 'camera'],
  success (res) {
    const tempFilePaths = res.tempFilePaths
  }
});

// promise
chooseImage({
  count: 1,
  sourceType: ['album', 'camera']
}).then(res => {
  const tempFilePaths = res.tempFilePaths
});

```

你也可以从大包引入：
```js
import { chooseImage } from 'universal-api';
```

## 方法

### `chooseImage(options)`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.count | `number` | 最大可选照片数，默认1张 | ✔️ | 1 |
| opthons.sourceType | `Array<string>`  | 相册选取或者拍照，默认 ['camera','album']，`h5不支持拍照` | ✔️ | ['album', 'camera'] |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| tempFilePaths | `Array<string>`  | 图片的本地临时文件路径列表，h5为base64图片数据列表 |
