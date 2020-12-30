---
group:
  title: 路由
---

# navigate.replace

[![npm](https://img.shields.io/npm/v/universal-navigate.svg)](https://www.npmjs.com/package/universal-navigate)

路由导航能力实现

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## Install
```bash
$ npm install universal-navigate --save
```

## Usage
```javascript
import navigate from 'universal-navigate';

// 快应用中的引入方法
// import chooseImage from 'universal-navigate/lib/quickapp;

navigate.replace({
  url: 'https://www.taobao.com/'
}).then(() => {
});

```
## 方法
### `replace(options)`

#### 参数
| 成员             | 类型      | 描述    | 必选  | 默认值 |
| ---------------- | --------- | ------ | :---: | :----: |
| options          | `object`  | go 参数    |  是   |   -    |
| options.url      | `string`  | 页面 URL.  |  是   |   -    |
| options.success | `Function`  | 成功的回调 | 否 | - |
| options.fail | `Function`  | 失败的回调 | 否 | - |
| options.complete | `Function`  | 结束的回调 | 否 | - |

