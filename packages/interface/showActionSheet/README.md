---
group:
  title: 界面
title: showActionSheet
---
# showActionSheet 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-showActionSheet.svg)](https://www.npmjs.com/package/evapi-showActionSheet)

显示操作菜单

## 安装

```bash
$ npm install universal-showActionSheet --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import showActionSheet from 'universal-showActionSheet';

showActionSheet({
  itemList: ['A', 'B', 'C'],
  success (res) {
    console.log(res.tapIndex)
  },
  fail (res) {
    console.log(res.errMsg)
  }
});

// promise
showActionSheet({
  itemList: ['A', 'B', 'C']
}).then(res => {
    console.log(res.tapIndex)
});

```


你也可以从大包引入：
```js
import { showActionSheet } from 'universal-api';
```

## 方法

### `showActionSheet(options)`

#### 支持

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.itemList | `Array<string>`  | 按钮的文字数组，数组长度最大为 6	 | ✔️ | - |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| tapIndex | `number` | 用户点击的按钮序号，从上到下的顺序，从0开始 |
