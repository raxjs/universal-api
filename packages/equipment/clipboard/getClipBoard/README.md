---
  group:
    path: /packages/equipment
---

# getClipboard 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-getClipboard.svg)](https://www.npmjs.com/package/evapi-getClipboard)

获取系统剪贴板的内容

## 安装

```bash
$ npm install universal-getClipboard --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import getClipboard from 'universal-getClipboard';

getClipboard({
  success (res){
    console.log(res.text);
  }
});

// promise
getClipboard().then(res => {
  console.log(res.text);
});

```

## 方法

### `getClipboard()`

#### 支持

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

h5 暂不支持此方法

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
| res | `object` |  |
| res.text | `string` | 剪贴板的内容 |

