# universal-toast [![npm](https://img.shields.io/npm/v/universal-toast.svg)](https://www.npmjs.com/package/universal-toast)

Universal toast, you can choose how many seconds after disappearing

## Support
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_quickapp__

## Install

```bash
$ npm install universal-toast --save
```

## Usage

```js
import Toast from 'universal-toast';

Toast.show('Hi');
```

## Methods

### `Toast.show(message: string, duration?: number)`

#### Arguments
| Property | Type     | Description                                 | Default |
| -------- | -------- | ------------------------------------------- | :-----: |
| message  | `string` | content of the message                      |    -    |
| duration | `number` | Time in millisecond before Toast is closed. |  2000   |
