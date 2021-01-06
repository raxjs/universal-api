# canIUse 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-canIUse.svg)](https://www.npmjs.com/package/evapi-canIUse)

Determines whether the APIs, packages of the Univesal-api are available in the current version.

## Install

```bash
$ npm install universal-canIUse --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import canIUse from 'universal-canIUse';

canIUse('getapp');

// true
canIUse('storage');
// true
canIUse('storage.getStorage');
// false
canIUse('storage.getStorageInfo');

```

You can also import from the big package:

```js
import {canIUse} from 'universal-api';
```

## Methods

### `canIUse(options)`

#### Support

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp">

#### Arguments

| Property | Type | Description | Support | Default |
| --- | --- | --- | --- | --- |
| api | `string` | ${package}.${method} | ✔️ | - |

#### Returns

| Property | Type | Description | 
| --- | --- | --- |
| res | `boolean` | the api can be used when return true |
