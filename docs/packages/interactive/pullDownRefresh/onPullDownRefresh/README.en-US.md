---
  group:
    path: /en-US/packages/interactive
---

# onPullDownRefresh 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@uni/pull-down-refresh.svg)](https://www.npmjs.com/package/@uni/pull-down-refresh)

Turn on drop-down refresh. The drop-down refresh triggers the "pulldownrefresh" event.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

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
window.events.register("pulldownrefresh", cb);
```
## Methods

### `onPullDownRefresh(options)`

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| options.pullRefresh | `boolean`  | The switch of manual pulldownRefresh | ✘ | - |

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
    <img src="https://img.alicdn.com/imgextra/i2/O1CN01iI0BJv1EyrORuBMUh_!!6000000000421-0-tps-690-662.jpg" width="200" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div> -->

</div>
</div>


```jsx | inline
  import React from 'react';
  export default class Home extends React.Component {
    componentDidMount() {
      document.querySelector('.__dumi-default-menu').style.background = '#fff';
      if (location.search.split(/[?&]/).some(i => i === 'clear=1')) {
        document.querySelector('.__dumi-default-navbar').style.display = 'none';
        document.querySelector('.__dumi-default-layout').classList = [];
        document.querySelector('.__dumi-default-menu').style.display = 'none';
        document.querySelector('.__dumi-default-layout-toc').style.display = 'none';
        document.querySelector('.__dumi-default-layout-content').querySelector('.markdown').querySelector('h1').style.marginTop = 0;
        parent.postMessage && parent.postMessage(parent.postMessage({ event: 'syncIframeHeight', height: document.querySelector('.__dumi-default-layout-content').offsetHeight }, '*'));
      }
    }

    render() {
      return null;
    }
  }
```
