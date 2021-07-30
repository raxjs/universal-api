# canIUse 

[![npm](https://img.shields.io/npm/v/@uni/caniuse.svg)](https://www.npmjs.com/package/@uni/caniuse)

Determines whether the APIs, packages of the Univesal-api are available in the current version.

## Support

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" />

## Install

```bash
$ npm install @uni/caniuse --save
```
or
```bash
$ npm install @uni/apis --save
```
## Usage

```javascript
import canIUse from '@uni/caniuse';

// true
canIUse('storage');
// true
canIUse('storage.getStorage');
// false
canIUse('storage.getStorageInfo');

```

You can also import from the big package:

```js
import {canIUse} from '@uni/apis';
```

## Methods

### `canIUse(options)`

#### Arguments

| Property | Type | Description | Support | Default |
| --- | --- | --- | --- | --- |
| api | `string` | ${package}.${method} | ✔️ | - |

#### Returns

| Property | Type | Description | 
| --- | --- | --- |
| res | `boolean` | the API can be used when return true |
