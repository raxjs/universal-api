# request 

[![npm](https://img.shields.io/npm/v/@uni/request.svg)](https://www.npmjs.com/package/@uni/request)
[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)

Used to initiate a network request
Note: This API does not support promise calls

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp">

## Install

```bash
$ npm install @uni/request --save
```
or
```bash
$ npm install @uni/apis --save
```
## Usage

```javascript
import { request } from '@uni/apis';

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

request({
  url: 'http://suggest.taobao.com/sug',
  method: 'JSONP',
  data: {
    code: 'utf-8',
    q: '卫衣'
  },
  jsonpCallback: 'cb',
  jsonpCallbackProp: 'callback',
  timeout: 5000,
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
```

You can also import from the big package:
```javascript
import { request } from '@uni/apis';
```

## Arguments

| Property | Type | Description | Required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | true | - |
| opthons.url | `string`  | Required，the request url | true | - |
| opthons.headers | `object`  | The request headers | false | {<br />  'Content-Type': 'application/json'<br />} |
| options.method | `string`  | Values：GET/POST/PUT/DELETE/PATCH/HEAD/JSONP,mini app only support GET/POST/JSONP | false | `GET`  |
| options.data | `object`  | <br />- GET or POST set headers['content-Type'] is equal to `application/x-www-form-urlencoded` data will apply to URL<br />- In other cases, the data will be converted to a JSON string as request body to the server.<br /> | false | - |
| options.timeout | `number`  | timeout | false| 20000 (ms) |
| options.dataType | `string`  | Set return data type, `json` or `text`, If the conversion fails, returns as it is | false | `json`  |
| options.jsonpCallback | `string`  | The callback method name of jsonp, which only takes effect when method is JSONP | false | `__uni_jsonp_handler`  |
| options.jsonpCallbackProp | `string`  | The name of the callback attribute of jsonp, which only takes effect when the method is JSONP | 否 | `callback`  |
| options.success | `Function`  | The callback function for a successful API call | false | - |
| options.fail | `Function`  | The callback function for a failed API call | false | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | 否 | - |

### Non-universal parameters (due to destroying the ability of one code and multiple terminals, it is not recommended to use)
| Property   | Type     | Default | Required | Description | Supported  |
| ------ | -------- | ------ | ---- | ----- | ------- |
| responseType | `string` | text  | x    | 响应的数据类型 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp"> |
| enableHttp2 | `boolean` |  false  | x    | 开启 http2 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> |
| enableQuic | `boolean` |  false  | x    | 开启 quic | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> |
| enableCache | `boolean` |  false  | x    | 开启 cache | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> |

### Success return：`Response`

| Property | Type | Description |
| --- | --- | --- |
| response | `object` | - |
| response.data | `string`  | The data returned by the request is converted according to the type declared in the dataType. If the conversion fails, it is returned as it is |
| response.headers | `object`  | Response headers |
| response.status | `number`  | Response status |

### Non-universal return parameters (due to the destruction of the ability of one code, it is not recommended to use)
| Property   | Type     | Description | Supported  |
| ------ | -------- | ----- | ------- |
| cookies | `Array.<string>` | The cookies returned by the developer server, in the format of a string array | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> |
| profile | `Object` | Some debugging information during the network request | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> |

### Fail return：

| Property | Type | Description |
| --- | --- | --- |
| error | `object` | - |
| error.code | `number`  | Error code |
| error.message | `string`  | Error message |

### RequestTask
Request task object
#### Function
RequestTask.abort()
Interrupt request task

##### Not a universal method (due to the destruction of the ability of one code, it is not recommended to use)
**Only WeChat supports the following methods**
RequestTask.onHeadersReceived(function callback)
Listen to the HTTP Response Header event. Will be completed earlier than the requested completion event

RequestTask.offHeadersReceived(function callback)
Cancel listening for HTTP Response Header event

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/storage/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i1/O1CN01Ky8HXS23ytpewgaAV_!!6000000007325-0-tps-688-630.jpg" width="200" height="200" />
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
