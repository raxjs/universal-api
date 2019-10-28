# universal-alert [![npm](https://img.shields.io/npm/v/universal-alert.svg)](https://www.npmjs.com/package/universal-alert)

Alert component for feedback.


## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />

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
| options.title      | `string` | alert title，support only in mini app                 |  -  |     `mp`     |
| options.content    | `string` | alert content                                         | - |              |
| options.buttonText | `string` | alert button text，web environments are not supported | - | `weex`、`mp` |
