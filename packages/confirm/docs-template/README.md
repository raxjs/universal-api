# universal-confirm [![npm](https://img.shields.io/npm/v/universal-confirm.svg)](https://www.npmjs.com/package/universal-confirm)

Confirm component for feedback.

## Support
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_quick_app__

## Install

```bash
$ npm install universal-confirm --save
```

## Usage

```js
import confirm from 'universal-alert';

confirm({
  title: 'Confirm title',
  content: 'Confirm content',
  confirmButtonText: 'confirm',
  cancelButtonText: 'cancel'
}).then((confirm) => {
  console.log(confirm);
});
```

## Methods

### `confirm(options)`

#### Arguments
| Property                  | Type     | Description                                | required |  Default  |
| ------------------------- | -------- | ------------------------------------------ | :------: | :-------: |
| options                   | `object` | alert arguments                            |  false   |     -     |
| options.title             | `string` | alert title，support in mini and quick app     |  false   |  -  |
| options.content           | `string` | alert content                              |  false   | - |
| options.confirmButtonText | `string` | confirm button text，web are not supported |  false   | - |
| options.cancelButtonText  | `string` | cancel button text，web are not supported  |  false   | -  |
