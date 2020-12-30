# request 

[![npm](https://img.shields.io/npm/v/universal-request.svg)](https://www.npmjs.com/package/universal-request)
[![npm](https://img.shields.io/npm/v/universal-request.svg)](https://www.npmjs.com/package/universal-request)
[![npm](https://img.shields.io/npm/v/universal-api.svg)](https://www.npmjs.com/package/universal-api)

Used to initiate a network request

## Install

```bash
$ npm install universal-request --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

```javascript
import { request } from 'universal-api';

// 快应用中的引入方法
// import chooseImage from 'universal-request/lib/quickapp;
request({
  url: 'https://alibaba.github.io/rax/',
  method: 'POST',
  data: {
    from: 'Rax',
  },
  dataType: 'json',
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
// Promise调用
request({
  url: 'https://alibaba.github.io/rax/',
  method: 'POST',
  data: {
    from: 'Rax',
  },
  dataType: 'json'
}).then(response => {})
  .catch(error => {})
  .finally(res => {});

```

You can also import from the big package:
```javascript
import { request } from 'universal-api';
```

## Methods

### `request(options)`

#### Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | true | - |
| opthons.url | `string`  | Required，the request url | true | - |
| opthons.headers | `object`  | The request headers | false | {<br />  'Content-Type': 'application/json'<br />} |
| options.method | `string`  | Values：GET/POST/PUT/DELETE/PATCH/HEAD,mini app only support GET/POST | false | `GET`  |
| options.data | `object`  | <br />- GET or POST set headers['content-Type'] is equal to `application/x-www-form-urlencoded` data will apply to URL<br />- In other cases, the data will be converted to a JSON string as request body to the server.<br /> | false | - |
| options.timeout | `number`  | timeout | false| 20000 (ms) |
| options.dataType | `string`  | Set return data type, `json` or `text`, If the conversion fails, returns as it is | false | `json`  |
| options.success | `Function`  | The callback function for a successful API call | false | - |
| options.fail | `Function`  | The callback function for a failed API call | false | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | 否 | - |

#### Return

Success return：`Promise<Response>`

| Property | Type | Description |
| --- | --- | --- |
| response | `object` | - |
| response.data | `string`  | The data returned by the request is converted according to the type declared in the dataType. If the conversion fails, it is returned as it is |
| response.headers | `object`  | Response headers ，JSONP request has no value |
| response.status | `number`  | Response status，JSONP request has no value |

Fail return：

| Property | Type | Description |
| --- | --- | --- |
| error | `object` | - |
| error.code | `number`  | Error code |
| error.message | `string`  | Error message |

