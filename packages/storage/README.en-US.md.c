# setStorage 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-setStorage.svg)](https://www.npmjs.com/package/evapi-setStorage)

Stores data in the specified key in the local cache. This operation will overwrite the original content of the key. The data storage lifecycle is consistent with the Mini Program, that is, data is always available unless manually deleted by the user or automatically deleted after a certain period of time.

> The maximum size of data stored in a single key is 1 MB, and the total size for data storage is limited to 10 MB.

## Install

```bash
$ npm install universal-setStorage --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import setStorage from 'universal-setStorage';

setStorage({
  key: 'key',
  data: {
    value: 'value'
  },
  success: (res) => {
    console.log('success', res);
  },
  fail: (res) => {
    console.log('fail', res);
  },
  complete: (res) => {
    console.log('complete', res);
  }
});

// promise
setStorage({
  key: "key",
  data: {
    value: 'value'
  }
}).then(response => {})
  .catch(error => {})
  .finally(res => {});

```

## Methods

### `setStorage(options)`

#### Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.key | `string`  | The specified key in the local cache | ✔️ |  - |
| opthons.data | `object`  | Contents to be stored can only be native types, dates, and objects that can be serialized via JSON.stringify. | ✔️ | - |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |


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


# getStorage 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-getStorage.svg)](https://www.npmjs.com/package/evapi-getStorage)

Asynchronously gets the content of the specified key from the local cache.

## Install

```bash
$ npm install universal-getStorage --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import getStorage from 'universal-getStorage';

getStorage({
  key: 'key',
  success: (res) => {
    console.log('success', res);
  },
  fail: (res) => {
    console.log('fail', res);
  },
  complete: (res) => {
    console.log('complete', res);
  }
});

// promise
getStorage({
  key: "key"
}).then(response => {})
  .catch(error => {})
  .finally(res => {});

```

## Methods

### `getStorage(options)`

#### Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.key | `string`  | The specified key in the local cache | ✔️ |  - |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |

#### Return

| Property | Type | Description |
| --- | --- | --- |
| data | `any`  | Content of the key |

# getStorageSync 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-getStorageSync.svg)](https://www.npmjs.com/package/evapi-getStorageSync)

Gets the content of the specified key from the local cache.

## Install

```bash
$ npm install universal-getStorageSync --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import getStorageSync from 'universal-getStorageSync';

let res = getStorageSync({
  key: 'key'
});

```

## Methods

### `getStorageSync(options)`

#### Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.key | `string`  | The specified key in the local cache | ✔️ |  - |

#### Return

| Property | Type | Description |
| --- | --- | --- |
| data | `any`  | Content of the key |

# removeStorage 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-removeStorage.svg)](https://www.npmjs.com/package/evapi-removeStorage)

Asynchronously removes the specified key from the local cache.

## Install

```bash
$ npm install universal-removeStorage --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import removeStorage from 'universal-removeStorage';

removeStorage({
  key: 'key',
  success: (res) => {
    console.log('success', res);
  },
  fail: (res) => {
    console.log('fail', res);
  },
  complete: (res) => {
    console.log('complete', res);
  }
});

// promise
removeStorage({
  key: "key"
}).then(response => {})
  .catch(error => {})
  .finally(res => {});

```

## Methods

### `removeStorage(options)`

#### Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.key | `string`  | The specified key in the local cache | ✔️ |  - |
| options.success | `Function`  | The callback function for a successful API call | ✘ | - |
| options.fail | `Function`  | The callback function for a failed API call | ✘ | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | ✘ | - |

# removeStorageSync 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-removeStorageSync.svg)](https://www.npmjs.com/package/evapi-removeStorageSync)

Removes the specified key from the local cache.

## Install

```bash
$ npm install universal-removeStorageSync --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import removeStorageSync from 'universal-removeStorageSync';

removeStorageSync({
  key: 'key'
});

```

## Methods

### `removeStorageSync(options)`

#### Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✔️ | - |
| opthons.key | `string`  | The specified key in the local cache | ✔️ |  - |
