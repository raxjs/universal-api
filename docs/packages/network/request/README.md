---
group:
  title: 网络
title: request
---

# request 

[![npm](https://img.shields.io/npm/v/@uni/request.svg)](https://www.npmjs.com/package/@uni/request)


用于发起网络请求
注意：此 API 不支持 promise 调用

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

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

你也可以从大包引入：
```javascript
import { request } from '@uni/apis';
```

## 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | 是 | - |
| options.url | `string`  | 请求的URL地址 | 是 |  - |
| options.headers | `object`  | 设置请求的头部 | 否 | {<br />  'Content-Type': 'application/json'<br />} |
| options.method | `string`  | 可用的值有：GET/POST/PUT/DELETE/PATCH/HEAD/JSONP，小程序中仅支持GET/POST/JSONP | 否 |  `GET`  |
| options.data | `object`  | <br />- GET请求或POST请求设置headers['content-Type'] 为 `application/x-www-form-urlencoded`时会拼接到URL中<br />- 其他情况请求会转换为JSON字符串以请求体的形式给服务端<br /> | 否 | - |
| options.timeout | `number`  | 超时时间 | 否 | 20000 (ms) |
| options.dataType | `string`  | 期望返回的数据格式， `json` 或者 `text` ，若转换失败，则原样返回 | 否 | `json`  |
| options.jsonpCallback | `string`  | jsonp的 callback 方法名，默认 `__uni_jsonp_handler`，仅在 method 为 JSONP 时生效 | 否 | `__uni_jsonp_handler`  |
| options.jsonpCallbackProp | `string`  | jsonp的 callback 属性名，默认 `callback`，仅在 method 为 JSONP 时生效 | 否 | `callback`  |
| options.success | `Function`  | 成功的回调 | 否 | - |
| options.fail | `Function`  | 失败的回调 | 否 | - |
| options.complete | `Function`  | 结束的回调 | 否 | - |

### 不通用参数（由于破坏了一码多端的能力，不推荐使用）
| 属性   | 类型     | 默认值 | 必选 | 描述 | 支持  |
| ------ | -------- | ------ | ---- | ----- | ------- |
| responseType | `string` | text  | x    | 响应的数据类型 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |
| enableHttp2 | `boolean` |  false  | x    | 开启 http2 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |
| enableQuic | `boolean` |  false  | x    | 开启 quic | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |
| enableCache | `boolean` |  false  | x    | 开启 cache | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |
| cloudCache | `object/boolean` |  false  | x    | 开启云加速 | <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> |
| withCredentials | `boolean` |  true  | x    | 是否该使用类似cookies,authorization headers(头部授权)或者TLS客户端证书这一类资格证书来创建一个跨站点访问控制（cross-site Access-Control）请求 | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> |


### 请求成功返回：`<Response>`

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| response | `object` | - |
| response.data | `string`  | 请求返回数据，按照dataType中声明的类型转换，若转换失败则原样返回 |
| response.headers | `object`  | 请求的返回头部 |
| response.status | `number`  | 请求返回的状态码 |

#### 不通用返回参数（由于破坏了一码多端的能力，不推荐使用）
| 属性   | 类型     | 描述 | 支持  |
| ------ | -------- | ----- | ------- |
| cookies | `Array.<string>` | 开发者服务器返回的 cookies，格式为字符串数组 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |
| profile | `Object` | 网络请求过程中一些调试信息 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |

### 请求失败返回：

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| error | `object` | - |
| error.code | `number`  | 错误码 |
| error.message | `string`  | 错误说明 |

### 返回 RequestTask
请求任务对象
#### 方法：
RequestTask.abort()
中断请求任务
##### 不通用方法（由于破坏了一码多端的能力，不推荐使用）
**仅微信支持以下方法**
RequestTask.onHeadersReceived(function callback)
监听 HTTP Response Header 事件。会比请求完成事件更早

RequestTask.offHeadersReceived(function callback)
取消监听 HTTP Response Header 事件

#### 示例代码：
```js
import request from '@uni/request';
const requestTask = request({
  url: 'test.php', //仅为示例，并非真实的接口地址
  data: {
    x: '' ,
    y: ''
  },
  header: {
    'content-type': 'application/json'
  },
  success (res) {
    console.log(res.data)
  }
})
requestTask.abort() // 取消请求任务
```

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
    <img src="https://img.alicdn.com/imgextra/i1/O1CN01Ky8HXS23ytpewgaAV_!!6000000007325-0-tps-688-630.jpg" width="220" height="200" />
    <div style="text-align: center;">微信小程序</div>
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
