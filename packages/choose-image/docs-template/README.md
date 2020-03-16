# universal-choose-image [![npm](https://img.shields.io/npm/v/universal-choose-image.svg)](https://www.npmjs.com/package/universal-choose-image)

Choose image.


## Support
__icon_web__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_qa__

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
| options.count      | `number` | Maximum number of choices       | false   | `1`               | __icon_miniapp_mp__ __icon_miniapp_wx__      |
| options.sourceType | `array`  | Album selection or photo taking | false   | `[camera, album]` | __icon_miniapp_mp__ __icon_miniapp_wx__  __icon_qa__     |

#### Returns
| Property | Type              | Description                                 |
| -------- | ----------------- | ------------------------------------------- |
| res      | `object`          |                                             |
| res.data | `base64 | string` | Web for base64, mini app for the image path |
