# universal-navigate [![npm](https://img.shields.io/npm/v/universal-navigate.svg)](https://www.npmjs.com/package/universal-navigate)

Route navigation capability implementation.

## Support

__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_quick_app__ __icon_microapp_tt__

## Install

```bash
$ npm install universal-navigate --save
```

## Usage

```js
import Navigate from 'universal-navigate';

// 快应用中的引入方法
// import chooseImage from 'universal-navigate/lib/quickapp;

Navigate.push({
  url: 'https://www.taobao.com/',
  animated: true // Only supported in weex
}).then(() => {
});

Navigate.pop({
  animated: false // Only supported in weex
}).then(() => {
});

Navigate.go({
  step: -1,
  animated: false // Only supported in weex
}).then(() => {
});
```

## Methods

### `push(options)`

#### Arguments
| Property         | Type      | Description                                                                        | required | Default | Supported |
| ---------------- | --------- | ---------------------------------------------------------------------------------- | :------: | :-----: | :---------: |
| options          | `object`  | Push function arguments                                                            |   true   |    -    |             |
| options.url      | `string`  | The page URL.                                                                      |   true   |    -    |             |
| options.animated | `boolean` | Support only in weex, whether animated effects are required when pages are pressed |  false   | `true`  |__icon_weex__  |

### `pop(options)`

#### Arguments
| Property         | Type      | Description                                                                        | required | Default | Supported |
| ---------------- | --------- | ---------------------------------------------------------------------------------- | :------: | :-----: | :---------: |
| options          | `object`  | Pop function arguments                                                             |  false   |    -    |             |
| options.animated | `boolean` | Support only in weex, whether animated effects are required when pages are pressed |  false   | `true`  |__icon_weex__  |

### `go(options)`

#### Arguments
| Property         | Type      | Description                                                                                                      | required | Default | Supported |
| ---------------- | --------- | ---------------------------------------------------------------------------------------------------------------- | :------: | :-----: | :---------: |
| options          | `object`  | Go function arguments                                                                                            |   true   |    -    |             |
| options.step     | `number`  | The number of forward steps is positive and only supports the web, and the number of backward steps is negative. |   true   |    -    |             |
| options.animated | `boolean` | Support only in weex, whether animated effects are required when pages are pressed                               |  false   | `true`  |__icon_weex__  |
