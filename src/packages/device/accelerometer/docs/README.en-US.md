---
title: accelerometer
---

# accelerometer 
[![npm](https://img.shields.io/npm/v/@uni/accelerometer.svg)](https://www.npmjs.com/package/@uni/accelerometer)

Accelerometer monitor and cancel.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## Support
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp">

## Install

```bash
$ npm install @uni/accelerometer --save
```

## Methods

### `onChange(callback): void`

Monitoring acceleration data, the callback interval is 500ms, the interactive calls will automatically start listening, can use offChange() to stop listening.

#### Parameters
| Property | Type     | Description   | Support |
| -------- | -------- | ------------- | :-----: |
| callback | `Function` | The callback function | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram">  |

### `offChange(): void`

Stop listening for acceleration data.

#### 是否需要传 callback 值
If the callback value is not passed, all event callbacks will be removed. The sample code is as follows:

```
accelerometer.offChange();
```
Pass the callback value and only remove the corresponding callback event. The sample code is as follows:

```
accelerometer.offChange(this.callback);
```

## Example

```js
import accelerometer from '@uni/accelerometer';

accelerometer.onChange(res => {
  console.log(res.x);
  console.log(res.y);
  console.log(res.z);
});

accelerometer.offChange();
```

You can also import from the big package:

```js
import {accelerometer} from '@uni/apis';
```

</div>
<div>

```jsx | inline
/**
 * iframe: true
 */
import React from 'react';
export default () => (
  <iframe style={{
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
      width: '375px',
      height: '700px'
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/accelerometer/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01OBELBj1akab9RKOIZ_!!6000000003368-0-tps-694-628.jpg" width="220" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>
