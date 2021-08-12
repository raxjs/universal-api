# download
[![npm](https://img.shields.io/npm/v/@uni/file.svg)](https://www.npmjs.com/package/@uni/file)

Download file resources locally.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## Support
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" />

## Install

```bash
$ npm install @uni/file --save
```

## Parameters
| Property | Type     | Default | Required | Description|
| -------- | -------- | ------- | -------- | ------- |
| url      | `String` |         | √        | Download file address   |
| header   | `Object` |         | x        | The HTTP request Header |
| success | `Function`  |   -    | x    | The callback function for a successful API call |
| fail | `Function`  |   -    | x    | The callback function for a fail API call |
| complete | `Function`  |   -    | x    | The callback function for a complete API call |

### 不通用参数（由于破坏了一码多端的能力，不推荐使用）
| 属性   | 类型     | 默认值 | 必选 | 描述 | 支持  |
| ------ | -------- | ------ | ---- | ----- | ------- |
| filePath | `string` |        | x    | 指定文件下载后存储的路径 (本地路径) | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" /> |
| timeout | `number` |      |  x | 超时时间，单位为毫秒 | <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |

### object.success parameters
| 属性     | 类型     | 描述     |
| -------- | ------ | -------- |
|tempFilePath|string|临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件|

#### 不通用参数（由于破坏了一码多端的能力，不推荐使用）
| 属性     | 类型     | 描述     | 支持   |
| -------- | ------ | -------- | ------ |
|filePath|string|用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致|<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" /> |
|statusCode|number|开发者服务器返回的 HTTP 状态码|<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" /> |
|profile|Object|网络请求过程中一些调试信息|<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" />|

## Return
注意：只有微信小程序和字节跳动小程序、百度小程序、快手小程序支持，由于破坏了一码多端请谨慎使用

DownloadTask
一个可以监听下载进度变化事件和取消下载的对象
具体文档可以查看：
DownloadTask
一个可以监听下载进度变化事件和取消下载的对象
具体文档可以查看：
微信：[链接](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.html)
字节跳动：[链接](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/network/http/download-task/)
百度：[链接](https://smartprogram.baidu.com/docs/develop/api/net/downloadTask/)
快手：[链接](https://mp.kuaishou.com/docs/develop/api/network/download/DownloadTask/DownloadTask.html)

## Example

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

Promise：
注意：由于微信容器和字节跳动容器、百度容器、快手容器 download api 会返回 downloadTask 对象，所以此处不在支持Promise 调用，请业务自行封装。

You can also import from the big package:

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
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01XQpsmx1EUAr9NAqja_!!6000000000354-0-tps-630-650.jpg" width="220" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>
