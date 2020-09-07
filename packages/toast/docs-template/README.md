# universal-toast [![npm](https://img.shields.io/npm/v/universal-toast.svg)](https://www.npmjs.com/package/universal-toast)

Universal toast, you can choose how many seconds after disappearing

## Support
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__ __icon_quick_app__

## Install

```bash
$ npm install universal-toast --save
```

## Usage

```js
import Toast from 'universal-toast';

// How to use it in quickapp
// import Toast from 'universal-toast/lib/quickapp;

Toast.show('Hi');

Toast.hide();
```

## Methods

### `Toast.show(message: string, duration?: number, options?: object)`

#### Arguments
| Property | Type     | Description                                 | Default |
| -------- | -------- | ------------------------------------------- | :-----: |
| message  | `string` | content of the message                      |    -    |
| duration | `number` | Time in millisecond before Toast is closed. |  2000   |
| options | `object` | Other options used by WeChat MiniProgram/ByteDance MicroApp, see [docs](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html)  |  {}   |

### `Toast.hide()`

#### Support
__icon_web__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__

Hide toast
