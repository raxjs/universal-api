---
group:
  title: application
title: errorEvent
---

# errorEvent
[![npm](https://img.shields.io/npm/v/universal-error-event.svg)](https://www.npmjs.com/package/universal-error-event)

Monitoring and cancellation of error events


<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## Support
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-error-event --save
```

## Function

### `onError(callback): void`

Listens on the Mini Program error event. This event is triggered as a result of script error or failed API call. 

#### Parameters
function callback
The callback function for the Mini Program error event

##### Parameters
string error
Error message, including stacks.

### `offError(callback): void`

Un-listens on Mini Program error event.

#### Parameters
function callback
The callback function for the Mini Program error event

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

### `offUnhandledRejection(callback): void`

Cancel listening for unhandled Promise rejection events.

#### Parameters
function callback
The callback function for the Mini Program error event

## Example

```js
import errorEvent from 'universal-error-event';

errorEvent.onError(e => {
  console.log(e);
});

errorEvent.offError();
```

You can also import from the big package:

```js
import {errorEvent} from 'universal-api';

errorEvent.onError(e => {
  console.log(e);
});

errorEvent.offError();
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
    }} src='https://herbox.online/p/109000004/app_ZalJy1DSm?previewZoom=100&view=preview&defaultPage=pages/universal-error-event/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01HrOhz21r6bUKtdIOe_!!6000000005582-0-tps-622-634.jpg" width="200" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>