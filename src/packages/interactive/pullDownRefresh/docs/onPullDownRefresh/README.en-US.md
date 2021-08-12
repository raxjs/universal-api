---
  group:
    path: /en-US/packages/interactive
---

# onPullDownRefresh 


[![npm](https://img.shields.io/npm/v/@uni/pull-down-refresh.svg)](https://www.npmjs.com/package/@uni/pull-down-refresh)

Turn on drop-down refresh. The drop-down refresh triggers the "pulldownrefresh" event.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> 

## Install

```bash
$ npm install @uni/pull-down-refresh --save
```
or
```bash
$ npm install @uni/apis --save
```
## Usage

```javascript
import { onPullDownRefresh } from '@uni/pullDownRefresh';

onPullDownRefresh();
```


You can also import from the big package:

```js
import { pullDownRefresh } from '@uni/apis';

pullDownRefresh.onPullDownRefresh();
```

You can add event listener:
```js
pullDownRefresh.onPullDownRefresh({eventCallback: cb});
```
## Methods

### `onPullDownRefresh(options)`

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.pullRefresh | `boolean`  | The switch of manual pulldownRefresh | ✘ | true |
| options.triggerDistance | `number`  | The pull-down distance required when the pull-down refresh is triggered | ✘ | 90 |
| options.eventCallback | `Function`  | The callback function when the event is triggered | ✘ | - |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |


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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/pull-down-refresh/index&topSlider=false'></iframe>
);
```

<!-- <div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i2/O1CN01iI0BJv1EyrORuBMUh_!!6000000000421-0-tps-690-662.jpg" width="220" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div> -->

</div>
</div>
