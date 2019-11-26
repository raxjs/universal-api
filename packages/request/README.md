# universal-request [![npm](https://img.shields.io/npm/v/universal-request.svg)](https://www.npmjs.com/package/universal-request)

Used to initiate a network request

## Install

```bash
$ npm install universal-request --save
```

## Usage

```javascript
import request from 'universal-request';

request({
  url: 'https://alibaba.github.io/rax/',
  method: 'POST',
  data: {
    from: 'Rax',
  },
  dataType: 'json'
}).then(response => {})
  .catch(error => {});

```

## Methods

### `request(options)`

#### Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

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

error code：

| code | message | Description |
| --- | --- | --- |
| 0 | Reason of failure | Request failed except for the listed below |
| 1 | Request timeout | timeout |
| 2 | Request not support this platform | not support this platform  |
