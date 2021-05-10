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

### Non-universal parameters (not recommended, may destroy one code with multiple platforms)
| Property | Type     | Default | Required | Description | Support |
| ------ | -------- | ------ | ---- | ----- | ------- |
| fileType | `String` | `image` | x | 文件类型支持图片、视频、音频（ image / video / audio），Web下无需传入            | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" />  |
| withCredentials | `Boolean` |   | x    | Custom `withCredentials` option  | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" />  |
| hideLoading | `Boolean` |   false  | x    | 是否隐藏 loading 图（默认值为 false）  | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" />  |
| timeout | `Number` |  | x    | Upload timeout  | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |

## Return
Notice: Only available in WeChat MiniProgram, ByteDance MiniProgram and Web. Please use it with caution because it will destroy one code with multiple platforms. When using it, please make sure that it is not empty, and the `upload` will return empty under containers that do not support UploadTask (such as Alipay).

### UploadTask
An object that can monitor upload progress change events and cancel upload tasks. Specific documents can be viewed:
* WeChat: [Link](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.html)
* ByteDance: [Link](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/network/http/upload-task/)
* Web: Same as WeChat

## Example

```js
import { upload } from '@uni/file';

const task = upload({
  url: 'http://httpbin.org/post',
  fileType: 'image',
  fileName: 'file',
  filePath: '**filePath**',
  success: res => {
    console.log('upload success');
  },
  fail: res => {
    console.log('upload fail');
  },
});

if (task && task.onProgressUpdate) {
  task.onProgressUpdate((progress, totalBytesSent, totalBytesExpectedToSend) => {
    console.log("Upload onProgressUpdate: ", progress, totalBytesSent, totalBytesExpectedToSend);
  });
}
if (task && task.onHeadersReceived) {
  task.onHeadersReceived((headers) => {
    console.log("Upload onHeadersReceived: ", JSON.stringify(headers));
  });
}

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
