# universal-navigate [![npm](https://img.shields.io/npm/v/universal-navigate.svg)](https://www.npmjs.com/package/universal-navigate)

Route navigation capability implementation.

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-navigate --save
```

## Usage

```js
import Navigate from 'universal-navigate';

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
| options.animated | `boolean` | Support only in weex, whether animated effects are required when pages are pressed |  false   | `true`  |<img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" />  |

### `pop(options)`

#### Arguments
| Property         | Type      | Description                                                                        | required | Default | Supported |
| ---------------- | --------- | ---------------------------------------------------------------------------------- | :------: | :-----: | :---------: |
| options          | `object`  | Pop function arguments                                                             |  false   |    -    |             |
| options.animated | `boolean` | Support only in weex, whether animated effects are required when pages are pressed |  false   | `true`  |<img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" />  |

### `go(options)`

#### Arguments
| Property         | Type      | Description                                                                                                      | required | Default | Supported |
| ---------------- | --------- | ---------------------------------------------------------------------------------------------------------------- | :------: | :-----: | :---------: |
| options          | `object`  | Go function arguments                                                                                            |   true   |    -    |             |
| options.step     | `number`  | The number of forward steps is positive and only supports the web, and the number of backward steps is negative. |   true   |    -    |             |
| options.animated | `boolean` | Support only in weex, whether animated effects are required when pages are pressed                               |  false   | `true`  |<img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" />  |
