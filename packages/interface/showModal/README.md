---
group:
  title: 界面
title: showModal
---
# showModal 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-showModal.svg)](https://www.npmjs.com/package/evapi-showModal)

显示模态对话框。

## 安装

```bash
$ npm install universal-showModal --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import showModal from 'universal-showModal';

showModal({
  title: '提示',
  content: '这是一个模态弹窗',
  success (res) {
    if (res.confirm) {
      console.log('用户点击确定')
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
});

// promise
showModal({
  title: '提示',
  content: '这是一个模态弹窗'
}).then(res => {
  if (res.confirm) {
    console.log('用户点击确定')
  } else if (res.cancel) {
    console.log('用户点击取消')
  }
});

```

## 方法

### `showModal(options)`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.title | `string`  | 提示的标题 | ✘ | - |
| options.content | `string`  | 提示的内容 | ✘ | - |
| options.showCancel | `boolean`  | 是否显示取消按钮 | ✘ | true |
| options.confirmText | `string`  | 确认按钮的文字，最多 4 个字符 | ✘ | "确定" |
| options.cancelText | `string`  | 取消按钮的文字，最多 4 个字符 | ✘ | "取消" |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| confirm | `boolean` | 为 true 时，表示用户点击了确定按钮 |
| cancel | `boolean` | 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭），微信和字节端特有|
