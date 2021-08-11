# application
[![npm](https://img.shields.io/npm/v/@uni/application.svg)](https://www.npmjs.com/package/@uni/application)

Application interface

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" />

## Install

```bash
$ npm install @uni/application --save
```

## Function
### `getApp(): AppObject`

Gets the globally unique App instance of the Mini Program.

### `getCurrentPages(): PageObject[]`

Gets the current page stack. In the array, the first element is the homepage and the last element is the current page.

### `getLaunchOptionsSync(): LaunchObject`

Obtains the parameters upon Mini Program startup. 

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
import { getApp, getCurrentPages, getLaunchOptionsSync, onError, offError } from '@uni/application';

const appInstance = getApp();
const currentPages = getCurrentPages();
const launchOptions = getLaunchOptionsSync();

onError(e => {
  console.log(e);
});

offError();
```

You can also import from the big package:

```js
import { application } from '@uni/apis';

const appInstance = application.getApp();
const currentPages = application.getCurrentPages();
const launchOptions = application.getLaunchOptionsSync();

application.onError(e => {
  console.log(e);
});

application.offError();
```

</div>
<div>

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01HrOhz21r6bUKtdIOe_!!6000000005582-0-tps-622-634.jpg" width="220" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

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
