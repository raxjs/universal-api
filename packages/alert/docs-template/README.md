# universal-alert [![npm](https://img.shields.io/npm/v/universal-alert.svg)](https://www.npmjs.com/package/universal-alert)

Alert component for feedback.


## Support
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_quick_app__

## Install

```bash
$ npm install universal-alert --save
```

## Usage

```js
import Alert from 'universal-alert';

Alert({
  title: 'alert title',
  content: 'alert content',
  buttonText: 'button text，default value is confirm'
}).then(() => {
  console.log('confirm');
});
```

## Methods

### `Alert(options)`

#### Arguments
| Property           | Type     | Description                                           |  Default  |  Supported   |
| ------------------ | -------- | ----------------------------------------------------- | :-------: | :----------: |
| options            | `object` | alert arguments                                       |     -     |              |
| options.title      | `string` | alert title，support only in mini app                 |  -  |     __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_quick_app__ |
| options.content    | `string` | alert content                                         | - |              |
| options.buttonText | `string` | alert button text，web environments are not supported | - | __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_quick_app__ |
