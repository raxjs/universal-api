# universal-action-sheet [![npm](https://img.shields.io/npm/v/universal-action-sheet.svg)](https://www.npmjs.com/package/universal-action-sheet)

显示操作菜单.

## 支持
__icon_miniapp_mp__ __icon_miniapp_wx__

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
| title            | `String` | -      | 菜单标题         | __icon_miniapp_mp__                     |
| items            | `Array`  | -      | 菜单按钮文字数组 | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| cancelButtonText | `String` | `取消` | 取消按钮文案     | __icon_miniapp_mp__                     |


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
