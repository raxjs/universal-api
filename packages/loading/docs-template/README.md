[![npm](https://img.shields.io/npm/v/universal-loading.svg)](https://www.npmjs.com/package/universal-loading)

Load the transition effect of the prompt.

## Support
__icon_miniapp_mp__ __icon_miniapp_wx__

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
| content  | `String`  |         | √        | The content in the prompt                                        | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| delay    | `Number`  | `0`     | x        | Delay display, unit ms                                           | __icon_miniapp_mp__                     |
| mask     | `Boolean` | `false` | x        | Whether to display transparent mask to prevent touch penetration | __icon_miniapp_wx__                     |

### `hide(options)`

Hide loading prompt box.

#### Parameters
| Property | Type     | Default | Required | Description                                  | Support             |
| -------- | -------- | ------- | -------- | -------------------------------------------- | ------------------- |
| page     | `Object` |         | x        | Specific refers to the current page instance | __icon_miniapp_mp__ |

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

