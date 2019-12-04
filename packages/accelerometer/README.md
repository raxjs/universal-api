# universal-accelerometer [![npm](https://img.shields.io/npm/v/universal-accelerometer.svg)](https://www.npmjs.com/package/universal-accelerometer)

Accelerometer monitor and cancel.

## Support
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-accelerometer --save
```

## Methods

### `onChange(callback): void`

Monitoring acceleration data, the callback interval is 500ms, the interface calls will automatically start listening, can use offChange() to stop listening.

#### Parameters
| Property | Type     | Description   | Support |
| -------- | -------- | ------------- | :-----: |
| callback | `Function` | The callback function | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">  |

### `offChange(): void`

Stop listening for acceleration data.

## Example

```js
import Accelerometer from 'universal-accelerometer';

Accelerometer.onChange(res => {
  console.log(res.x);
  console.log(res.y);
  console.log(res.z);
});

Accelerometer.offChange();
```

