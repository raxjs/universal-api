# vibrate


[![npm](https://img.shields.io/npm/v/@uni/vibrate.svg)](https://www.npmjs.com/package/@uni/vibrate)

Make the phone vibrate

## Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" />

## Install

```bash
$ npm install @uni/vibrate --save
```
or
```bash
$ npm install @uni/apis --save
```
## Usage

```javascript
import { vibrateShort } from '@uni/vibrate';

vibrateLong({
  success (){
    console.log('success');
  }
});

// promise
vibrateLong().then(() => {
  console.log('success');
});
vibrateShort({
  success (){
    console.log('success');
  }
});

// promise
vibrateShort().then(() => {
  console.log('success');
});

```

You can also import from the big package：
```js
import { vibrate } from '@uni/apis';

vibrate.vibrateLong().then(() => {
  console.log('success');
});
vibrate.vibrateShort().then(() => {
  console.log('success');
});
```

## 方法
### vibrateShort
Allows the phone to vibrate for a short period of time (15 ms). This only works on iPhone 7/7 Plus and Android models.
#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |

## Non-universal parameters (due to destroying the ability of one code and multiple terminals, it is not recommended to use)

| Property | Type | Description | required | Default | Supported |
| --- | --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - | - |
| options.type | `string`  | Vibration intensity type, valid values ​​are: heavy, medium, light | ✘ | - | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechat miniprogram" /> |

### vibrateLong

Allows the phone to vibrate for a long period of time (400 ms).
#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |
