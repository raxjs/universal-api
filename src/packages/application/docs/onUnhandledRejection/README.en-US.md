---
group:
  title: application
title: onUnhandledRejection
---

# onUnhandledRejection
[![npm](https://img.shields.io/npm/v/@uni/application.svg)](https://www.npmjs.com/package/@uni/application)

Monitoring and cancellation of error events


<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" />

Note: Baidu applet is not supported.

## Install

```bash
$ npm install @uni/application --save
```

## Function

### `onUnhandledRejection(callback): void`

Listen for unhandled Promise rejection events.

#### Parameters
function callback
The callback function for the Mini Program error event

##### Parameters
Object res
|Property	|Type	|Description|
|:--|:--|:--|
|reason	|string or Error|	Reason for rejection, usually an Error object|
|promise|	Promise.<any>|Rejected Promise object|

## Example

```js
import { onUnhandledRejection, offUnhandledRejection } from '@uni/application';

onUnhandledRejection(e => {
  console.log(e);
});

offUnhandledRejection();
```

You can also import from the big package:

```js
import { application } from '@uni/apis';

application.onUnhandledRejection(e => {
  console.log(e);
});

application.offUnhandledRejection();
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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/application/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01HrOhz21r6bUKtdIOe_!!6000000005582-0-tps-622-634.jpg" width="220" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>