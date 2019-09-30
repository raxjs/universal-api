# universal-confirm [![npm](https://img.shields.io/npm/v/universal-confirm.svg)](https://www.npmjs.com/package/universal-confirm)

confirm 确认框

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />

## 安装

```bash
$ npm install universal-confirm --save
```

## 示例

```js
import confirm from 'universal-confirm';

confirm({
  title: 'confirm 标题',
  content: 'confirm 内容',
  confirmButtonText: '确认按钮文字，默认confirm',
  cancelButtonText: '取消按钮文字，默认cancel'
}).then((confirm) => {
  console.log(confirm);
});
```

## 方法

### `confirm(options?: Object)`

#### 参数
| 成员                      | 类型     | 描述                           | 必选  |  默认值   |
| ------------------------- | -------- | ------------------------------ | :---: | :-------: |
| options                   | `object` | confirm 参数                   |  否   |     -     |
| options.title             | `string` | confirm 标题，仅在小程序中支持 |  否   |  -  |
| options.content           | `string` | confirm 内容                   |  否   | - |
| options.confirmButtonText | `string` | 确认按钮文字，不支持web环境    |  否   | - |
| options.cancelButtonText  | `string` | 取消按钮文字，不支持web环境    |  否   | -  |