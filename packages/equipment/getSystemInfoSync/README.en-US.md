# getSystemInfoSync 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-getSystemInfoSync.svg)](https://www.npmjs.com/package/evapi-getSystemInfoSync)

Gets system information.

## Install

```bash
$ npm install universal-getSystemInfoSync --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import getSystemInfoSync from 'universal-getSystemInfoSync';

let res = getSystemInfoSync();

```

## Methods

### `getSystemInfoSync()`

#### Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### Return

| Property | Type | Description |
| --- | --- | --- |
| pixelRatio | `number` | Device's pixel ratio |
| screenWidth | `number` | Screen width in px |
| screenHeight | `number` | Screen height in px |
| windowWidth | `number` | Available window width in px	 |
| windowHeight | `number` | Available window height in px |
| language | `string` | Language |
| version | `string` | version |
| platform | `string` | Client platform |
