# universal-accelerometer [![npm](https://img.shields.io/npm/v/universal-accelerometer.svg)](https://www.npmjs.com/package/universal-accelerometer)

Accelerometer monitor and cancel.

## Support
__icon_miniapp_mp__ __icon_miniapp_wx__

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
| callback | `Function` | The callback function | __icon_miniapp_mp__ __icon_miniapp_wx__  |

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

