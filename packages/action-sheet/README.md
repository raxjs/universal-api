# universal-action-sheet [![npm](https://img.shields.io/npm/v/universal-action-sheet.svg)](https://www.npmjs.com/package/universal-action-sheet)

Action sheet.

## Support
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-action-sheet --save
```

## Methods

### `show(options)`

Display action sheet.

#### Parameters
| Property | Type     | Default | Description    |       Support       |
| -------- | -------- | ------- | -------------- | ----------------- |
| title    | `String` | -       | The menu title | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> |
| items    | `Array` | -       | Menu button text array | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| cancelButtonText    | `String` | 取消       | Cancel button | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> |

## Example

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

