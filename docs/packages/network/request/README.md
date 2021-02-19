---
group:
  title: 网络
title: request
---

# request 

[![npm](https://img.shields.io/npm/v/@uni/request.svg)](https://www.npmjs.com/package/@uni/request)
[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)

用于发起网络请求

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install @uni/request --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

```javascript
import request from '@uni/request';

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

你也可以从大包引入：
```javascript
import { request } from '@uni/apis';
```

## 方法

### `request(options)`

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | 是 | - |
| opthons.url | `string`  | 请求的URL地址 | 是 |  - |
| opthons.headers | `object`  | 设置请求的头部 | 否 | {<br />  'Content-Type': 'application/json'<br />} |
| options.method | `string`  | 可用的值有：GET/POST/PUT/DELETE/PATCH/HEAD，小程序中仅支持GET/POST | 否 |  `GET`  |
| options.data | `object`  | <br />- GET请求或POST请求设置headers['content-Type'] 为 `application/x-www-form-urlencoded`时会拼接到URL中<br />- 其他情况请求会转换为JSON字符串以请求体的形式给服务端<br /> | 否 | - |
| options.timeout | `number`  | 超时时间 | 否 | 20000 (ms) |
| options.data类型 | `string`  | 期望返回的数据格式， `json` 或者 `text` ，若转换失败，则原样返回 | 否 | `json`  |
| options.success | `Function`  | 成功的回调 | 否 | - |
| options.fail | `Function`  | 失败的回调 | 否 | - |
| options.complete | `Function`  | 结束的回调 | 否 | - |

#### 返回

请求成功返回：`Promise<Response>`

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| response | `object` | - |
| response.data | `string`  | 请求返回数据，按照dataType中声明的类型转换，若转换失败则原样返回 |
| response.headers | `object`  | 请求的返回头部，JSONP请求无值 |
| response.status | `number`  | 请求返回的状态码，JSONP请求无值 |

请求失败返回：

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| error | `object` | - |
| error.code | `number`  | 错误码 |
| error.message | `string`  | 错误说明 |

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/request/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i1/O1CN01Ky8HXS23ytpewgaAV_!!6000000007325-0-tps-688-630.jpg" width="200" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
