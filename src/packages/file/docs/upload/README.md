# upload
[![npm](https://img.shields.io/npm/v/@uni/file.svg)](https://www.npmjs.com/package/@uni/file)

上传本地资源到开发者服务器。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install @uni/file --save
```

## 参数
| 属性     | 类型     | 默认值 | 必选 | 描述  |
| ----- | ----- | ------ | ---- | ----- |
| url      | `String` |        | √    | 开发者服务器地址  |
| filePath | `String / File Object` |     |   √    | 要上传文件资源的本地定位符，Web下支持base64字符串或File对象  |
| fileName | `String` |        | √    | 文件名，即对应的 key，开发者在服务器端通过这个 key 可以获取到文件二进制内容 |
| header   | `Object` |        | x    | HTTP 请求 Header   |
| formData | `Object` |        | x    | HTTP 请求中其他额外的 form 数据 |
| success | `Function`  |   -    | x    | 成功的回调 |
| fail | `Function`  |   -    | x    | 失败的回调 |
| complete | `Function`  |   -    | x    | 结束的回调 |

### 不通用参数（由于破坏了一码多端的能力，不推荐使用）
| 属性   | 类型     | 默认值 | 必选 | 描述 | 支持  |
| ------ | -------- | ------ | ---- | ----- | ------- |
| fileType | `String` |        | √    | 文件类型支持图片、视频、音频（ image / video / audio），Web下无需传入            | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" />  |
| withCredentials | `Boolean` |   | x    | 自定义 withCredentials 选项（默认根据域名判断）  | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" />  |
| hideLoading | `Boolean` |   false  | x    | 是否隐藏 loading 图（默认值为 false）  | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" />  |

## 返回
注意：只有微信小程序和字节跳动小程序支持，由于破坏了一码多端请谨慎使用

UploadTask
一个可以监听上传进度变化事件，以及取消上传任务的对象
具体文档可以查看：
微信：[链接](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.html)
字节跳动：[链接](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/network/http/upload-task/)

## 示例

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
    console.log('upload fail');
  },
});

```

### Promise 调用：
注意：由于微信容器和字节跳动容器 upload api 会返回 UploadTask 对象，所以此处不在支持Promise 调用，请业务自行封装。

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
