---
group:
  title: 文件
---

# download
[![npm](https://img.shields.io/npm/v/@uni/file.svg)](https://www.npmjs.com/package/@uni/file)

下载文件资源到本地。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install @uni/file --save
```

## 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 参数
| 属性   | 类型     | 默认值 | 必选 | 描述             |
| ------ | -------- | ------ | ---- | ---------------- |
| url    | `String` |        | √    | 下载资源的 url     |
| header | `Object` |        | x    | HTTP 请求 Header |
| filePath | `string` |        | x    | 指定文件下载后存储的路径 (本地路径) |
| success | `Function`  |   -    | x    | 成功的回调 |
| fail | `Function`  |   -    | x    | 失败的回调 |
| complete | `Function`  |   -    | x    | 结束的回调 |

### 不通用参数（由于破坏了一码多端的能力，不推荐使用）
| 属性   | 类型     | 默认值 | 必选 | 描述 | 支持  |
| ------ | -------- | ------ | ---- | ----- | ------- |
| filePath | `string` |        | x    | 指定文件下载后存储的路径 (本地路径) | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序"> |

### object.success 回调函数 的参数
| 属性     | 类型     | 描述     |
| -------- | ------ | -------- |
|tempFilePath|string|临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件|

#### 不通用参数（由于破坏了一码多端的能力，不推荐使用）
| 属性     | 类型     | 描述     | 支持   |
| -------- | ------ | -------- | ------ |
|filePath|string|用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致|<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">|
|statusCode|number|开发者服务器返回的 HTTP 状态码|<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">|
|profile|Object|网络请求过程中一些调试信息|<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">|

## 返回
注意：只有微信小程序和字节跳动小程序支持，由于破坏了一码多端请谨慎使用

DownloadTask
一个可以监听下载进度变化事件和取消下载的对象
具体文档可以查看：
微信：[链接](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.html)
字节跳动：[链接](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/network/http/download-task/)
## 示例

```js
import { download } from '@uni/file';

download({
  url: 'http://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg',
  success: res => {
    console.log(res.filePath);
  },
  fail: res => {
    console.log(res);
  },
});

```

### Promise 调用：
注意：由于微信容器和字节跳动容器 download API 会返回 downloadTask 对象，所以此处不在支持Promise 调用，请业务自行封装。


你也可以从大包引入：
```js
import { file } from '@uni/apis';

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/file/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01XQpsmx1EUAr9NAqja_!!6000000000354-0-tps-630-650.jpg" width="200" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
