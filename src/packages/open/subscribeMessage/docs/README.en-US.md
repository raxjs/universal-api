---
group:
  title: Open Capabilities
title: subscribeMessage
---

# subscribeMessage 

[![npm](https://img.shields.io/npm/v/@uni/subscribe-message.svg)](https://www.npmjs.com/package/@uni/subscribe-message)


Bring up the client applet subscription message interface, and return the user's operation result of subscribing to the message. When the user selects "Always keep the above selections and do not ask again" in the subscription panel, the template message will be added to the user's applet settings page, and the user's subscription status to the relevant template message can be obtained through the wx.getSetting interface .

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## Supported

<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

### Precautions for WeChat Containers

- One-time template id and permanent template id cannot be used at the same time.
- The lower version of the basic library 2.4.4~2.8.3 already supports the call of the subscription message interface, and only supports the input of a one-time tmplId/permanent tmplId.
- Starting from version 2.8.2, after the user clicks or initiates a payment callback, the subscription message interface can be called up.
- Starting from version 2.10.0, the development version and the trial version of applets will prohibit the use of template message formId.
- In an authorization call, the template title corresponding to each tmplId cannot be the same. If there are the same, only one is kept.
- Starting from version 2.10.0, support for subscribing to voice message reminders, details

## Install

```bash
$ npm install @uni/subscribe-message --save
```
or
```bash
$ npm install @uni/apis --save
```
## Usage

```javascript
import subscribeMessage from '@uni/subscribe-message';

subscribeMessage({
  tmplIds: [''],
  success: () => {
    console.log('success');
  },
  fail: (res) => {
    console.log('fail', res);
  },
  complete: (res) => {
    console.log('complete', res);
  }
});

subscribeMessage({
  tmplIds: [''],
}).then((res?) => {
  console.log('success');
});
```

你也可以从大包引入：
```javascript
import { subscribeMessage } from '@uni/apis';
```

## Parameters

| Property | Type | Description | Required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | 是 | - |
| options.tmplIds | `Array`  | A collection of IDs of message templates that need to be subscribed. Up to 3 messages can be subscribed in one call | Yes |  - |
| options.success | `Function`  | The callback function for a successful API call | No | - |
| options.fail | `Function`  | The callback function for a failed API call | No | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | No | - |

### object.success Callback returns

| Property | Type | Description |
| --- | --- | --- |
| errMsg | `string` | When the interface call is successful, the errMsg value is'requestSubscribeMessage: ok' |
| [TEMPLATE_ID: string] | `string`  | [TEMPLATE_ID] is a dynamic key, the template id, and its values ​​include'accept','reject','ban', and'filter'. 'accept' means that the user agrees to subscribe to the template message corresponding to this id,'reject' means that the user refuses to subscribe to the template message corresponding to this id,'ban' means it has been banned by the background, and'filter' means that the template has been banned because the template title has the same name. Background filtering. For example, {errMsg: "requestSubscribeMessage:ok", zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE: "accept"} means that the user agrees to subscribe to this message zun-LzcQyW-edafCVvzPkK4de2RXllr1f |

### object.fail Callback returns

| Property | Type | Description |
| --- | --- | --- |
| errMsg | `string` | Interface call failure error message |
| errCode | `string`  | Interface call failure error code |

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/subscribe-message/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i1/O1CN01Ky8HXS23ytpewgaAV_!!6000000007325-0-tps-688-630.jpg" width="220" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
