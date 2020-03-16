# universal-choose-image [![npm](https://img.shields.io/npm/v/universal-choose-image.svg)](https://www.npmjs.com/package/universal-choose-image)

Choose image.


## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="quickApp" src="https://gw.alicdn.com/tfs/TB1MP7EwQT2gK0jSZPcXXcKkpXa-200-200.svg" width="25px" height="25px">
## Install

```bash
$ npm install universal-choose-image --save
```

## Usage

```js
import chooseImage from 'universal-choose-image';

chooseImage().then(res => {
})
```

## Methods

### `chooseImage(options)`

#### Arguments
| Property           | Type     | Description                     | require | Default           | Supported |
| ------------------ | -------- | ------------------------------- | ------- | ----------------- | --------- |
| options            | `object` | Options                         | false   | -                 |           |
| options.count      | `number` | Maximum number of choices       | false   | `1`               | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">      |
| options.sourceType | `array`  | Album selection or photo taking | false   | `[camera, album]` | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="quickApp" src="https://gw.alicdn.com/tfs/TB1MP7EwQT2gK0jSZPcXXcKkpXa-200-200.svg" width="25px" height="25px"> <img alt="quickApp" src="https://gw.alicdn.com/tfs/TB1MP7EwQT2gK0jSZPcXXcKkpXa-200-200.svg" width="25px" height="25px">    |

#### Returns
| Property | Type              | Description                                 |
| -------- | ----------------- | ------------------------------------------- |
| res      | `object`          |                                             |
| res.data | `base64 | string` | Web for base64, mini app and quickapp for the image path |
