# setStorageSync 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-setStorageSync.svg)](https://www.npmjs.com/package/evapi-setStorageSync)

Stores data in the specified key in the local cache. This operation will overwrite the original content of the key. The data storage lifecycle is consistent with the Mini Program, that is, data is always available unless manually deleted by the user or automatically deleted after a certain period of time.

> The maximum size of data stored in a single key is 1 MB, and the total size for data storage is limited to 10 MB.

## Install

```bash
$ npm install universal-setStorageSync --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import setStorageSync from 'universal-setStorageSync';

setStorageSync({
  key: 'key',
  data: {
    value: 'value'
  }
});

```

你也可以从大包引入：
```js
import { storage } from 'universal-api';

storage.setStorageSync({
  key: 'key',
  data: {
    value: 'value'
  }
});

```

## Methods

### `setStorageSync(options)`

#### Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.key | `string`  | The specified key in the local cache | ✔️ |  - |
| opthons.data | `object`  | Contents to be stored can only be native types, dates, and objects that can be serialized via JSON.stringify. | ✔️ | - |
