# universal-action-sheet [![npm](https://img.shields.io/npm/v/universal-action-sheet.svg)](https://www.npmjs.com/package/universal-action-sheet)

显示操作菜单.

## 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

## 安装

```bash
$ npm install universal-action-sheet --save
```

## 方法

### `show(options)`

显示操作菜单。

#### 参数
| 属性             | 类型     | 默认值 | 描述             | 支持                                    |
| ---------------- | -------- | ------ | ---------------- | --------------------------------------- |
| title            | `String` | -      | 菜单标题         | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />                     |
| items            | `Array`  | -      | 菜单按钮文字数组 | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| cancelButtonText | `String` | 取消 | 取消按钮文案     | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />                     |


## 示例

```js
import ActionSheet from 'universal-action-sheet';

ActionSheet.show({
  items: ['one', 'two', 'three'],
  success: res => {
    console.log(res.index);
  },
  fail: res => {
    console.log(res.errMsg);
  }
});

```
