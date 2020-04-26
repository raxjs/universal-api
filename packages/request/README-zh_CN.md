# universal-request [![npm](https://img.shields.io/npm/v/universal-request.svg)](https://www.npmjs.com/package/universal-request)

用于发起网络请求

## 安装

```bash
$ npm install universal-request --save
```

## 示例

```javascript
import request from 'universal-request';

// 快应用中的引入方法
// import chooseImage from 'universal-request/lib/quickapp;

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

## 方法

### `request(options)`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

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

错误码：

| code | message | 说明 |
| --- | --- | --- |
| 0 | 请求失败的详细说明 | 除以下列出请求外的，请求失败 |
| 1 | Request timeout | 请求超时 |
| 2 | Request not support this platform | 不支持该平台 |
