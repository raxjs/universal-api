# upload 
[![npm](https://img.shields.io/npm/v/@uni/file.svg)](https://www.npmjs.com/package/@uni/file)

Upload local resources to the developer server.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp">

## Install

```bash
$ npm install @uni/file --save
```
## Parameters
| Property | Type     | Default | Required | Description                          |
| -------- | -------- | ------- | -------- | ------------------------------------ |
| url      | `String` |         | √        | Developer server address             |
| filePath | `String / File Object` |         | √        | The path to upload the file resource. In web browser, it can be either base64 string or a File object. |
| fileName | `String` |         | √        | File name, that is, the corresponding key, the developer in the server side through this key can get the binary content of the file.             |
| header | `Object` |         | x        | The HTTP request Header |
| formData | `Object` |         | x        | Additional form data in the HTTP request |
| success | `Function`  |   -    | x    | The callback function for a successful API call |
| fail | `Function`  |   -    | x    | The callback function for a fail API call |
| complete | `Function`  |   -    | x    | The callback function for a complete API call |

### 不通用参数（由于破坏了一码多端的能力，不推荐使用）
| 属性   | 类型     | 默认值 | 必选 | 描述 | 支持  |
| ------ | -------- | ------ | ---- | ----- | ------- |
| fileType | `String` |        | √    | 文件类型支持图片、视频、音频（ image / video / audio），Web下无需传入            | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" />  |
| hideLoading | `Boolean` |   false  | x    | 是否隐藏 loading 图（默认值为 false）  | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" />  |

## Return
注意：只有微信小程序和字节跳动小程序支持，由于破坏了一码多端请谨慎使用

UploadTask
一个可以监听上传进度变化事件，以及取消上传任务的对象
具体文档可以查看：
微信：[链接](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.html)
字节跳动：[链接](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/network/http/upload-task/)

## Example

```js
import { upload } from '@uni/file';

upload({
  url: 'http://httpbin.org/post',
  fileType: 'image',
  fileName: 'file',
  filePath: '**filePath**',
  success: res => {
    console.log('upload success');
  },
  fail: res => {
    console.log('upload succefailss');
  },
});

```

### Promise 调用：
注意：由于微信容器和字节跳动容器 upload api 会返回 UploadTask 对象，所以此处不在支持Promise 调用，请业务自行封装。

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
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01XQpsmx1EUAr9NAqja_!!6000000000354-0-tps-630-650.jpg" width="200" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>
