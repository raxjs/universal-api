[![npm](https://img.shields.io/npm/v/universal-loading.svg)](https://www.npmjs.com/package/universal-loading)

Load the transition effect of the prompt.

## Support
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-loading --save
```

## Methods

### `show(options)`

Display loading prompt box.

#### Parameters
| Property | Type      | Default | Required | Description                                                      | Support                                 |
| -------- | --------- | ------- | -------- | ---------------------------------------------------------------- | --------------------------------------- |
| content  | `String`  |         | √        | The content in the prompt                                        | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| delay    | `Number`  | `0`     | x        | Delay display, unit ms                                           | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />                     |
| mask     | `Boolean` | `false` | x        | Whether to display transparent mask to prevent touch penetration | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">                     |

### `hide(options)`

Hide loading prompt box.

#### Parameters
| Property | Type     | Default | Required | Description                                  | Support             |
| -------- | -------- | ------- | -------- | -------------------------------------------- | ------------------- |
| page     | `Object` |         | x        | Specific refers to the current page instance | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> |

## Example

```js
import Loading from 'universal-loading';

Loading.show({
  content: 'content'
});
setTimeout(() => {
  Loading.hide();
}, 1000);

```

