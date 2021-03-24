# getSavedFileList
[![npm](https://img.shields.io/npm/v/@uni/file.svg)](https://www.npmjs.com/package/@uni/file)

Gets the list of local cache files saved under the Mini Program

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## Support
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp">

## Parameters
| Property | Type     | Default | Required | Description   |
| ------ | -------- | ------ | ---- | ---------------- |
| success | `Function`  |   -    | x    | The callback function for a successful API call |
| fail | `Function`  |   -    | x    | The callback function for a fail API call |
| complete | `Function`  |   -    | x    | The callback function for a complete API call |


### object.success callback function Parameters
| Property     | Type     | Description     |
| -------- | ------ | -------- |
|fileList|Array|File array, with each item being a FileItem|

#### res.fileList is composed as follows
| Property     | Type     | Description  |
| -------- | ------ | -------- |
|filePath|string|Local path|
|size|number|Local file size in bytes|
|createTime|number|The timestamp when the file was saved, which is defined as the number of seconds that have elapsed since 1970/01/01 08:00:00 to the current time|

## Install

```bash
$ npm install @uni/file --save
```
## Example

```js
import { getSavedFileList } from '@uni/file';

getSavedFileList({
  success:(res) => {
    console.log(JSON.stringfy(res));
  }
});

```

Promise：

```js
import { getSavedFileList } from '@uni/file';

getSavedFileList().then((res) => {
  console.log(JSON.stringfy(res));
}).catch((e) => {
  console.log(e);
}).finally((res) => {
  console.log(res);
});

```

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
