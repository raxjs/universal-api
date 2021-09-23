# vibrate


[![npm](https://img.shields.io/npm/v/@uni/vibrate.svg)](https://www.npmjs.com/package/@uni/vibrate)

使手机发生振动
## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" />

## 安装

```bash
$ npm install @uni/vibrate --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

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

你也可以从大包引入：
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
使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |
## 不通用参数（由于破坏了一码多端的能力，不推荐使用）

| 成员 | 类型 | 描述 | 必选 | 默认值 | 支持度 |
| --- | --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - | - |
| options.type | `string`  | 震动强度类型，有效值为：heavy、medium、light | ✘ | - | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |

### vibrateLong
使手机发生较长时间的振动（400 ms)
#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |