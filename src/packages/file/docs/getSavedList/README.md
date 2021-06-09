# getSavedList 
[![npm](https://img.shields.io/npm/v/@uni/file.svg)](https://www.npmjs.com/package/@uni/file)

获取该小程序下已保存的本地缓存文件列表

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install @uni/file --save
```

## 参数
| 属性   | 类型     | 默认值 | 必选 | 描述  |
| ------ | -------- | ------ | ---- | ----- |
| success | `Function`  |   -    | x    | 成功的回调 |
| fail | `Function`  |   -    | x    | 失败的回调 |
| complete | `Function`  |   -    | x    | 结束的回调 |

### object.success 回调函数 的参数
| 属性     | 类型     | 描述     |
| -------- | ------ | -------- |
|fileList|Array|文件数组，每一项是一个 FileItem|

#### res.fileList 的结构
| 属性     | 类型     | 描述     |
| -------- | ------ | -------- |
|filePath|string|文件路径 (本地路径)|
|size|number|本地文件大小，以字节为单位|
|createTime|number|文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数|

## 示例

```js
import { getSavedList } from '@uni/file';

getSavedList({
  success:(res) => {
    console.log(JSON.stringfy(res));
  }
});

```

Promise调用：

```js
import { getSavedList } from '@uni/file';

getSavedList().then((res) => {
  console.log(JSON.stringfy(res));
}).catch((e) => {
  console.log(e);
}).finally((res) => {
  console.log(res);
});

```

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
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01XQpsmx1EUAr9NAqja_!!6000000000354-0-tps-630-650.jpg" width="220" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
