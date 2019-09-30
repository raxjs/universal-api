# universal-choose-image [![npm](https://img.shields.io/npm/v/universal-choose-image.svg)](https://www.npmjs.com/package/universal-choose-image)

Choose image.


## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />

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
| options.count      | `number` | Maximum number of choices       | false   | `1`               | `mp`      |
| options.sourceType | `array`  | Album selection or photo taking | false   | `[camera, album]` | `mp`      |

#### Returns
| Property | Type              | Description                                 |
| -------- | ----------------- | ------------------------------------------- |
| res      | `object`          |                                             |
| res.data | `base64 | string` | Web for base64, mini app for the image path |
