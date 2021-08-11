# getFileInfo
[![npm](https://img.shields.io/npm/v/@uni/file.svg)](https://www.npmjs.com/package/@uni/file)

Get file information.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## Support
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" />

## Install

```bash
$ npm install @uni/file --save
```
## Parameters
| Property  | Type     | Default | Required | Description   |
| ------- | -------- | ------- | -------- | ------- |
| filePath        | `String` |         | √        | The path to the local file    |
| digestAlgorithm | `String` | md5   | x        | The algorithm to calculate the file summary can be md5, sha1 |
| success | `Function`  |   -    | x    | The callback function for a successful API call |
| fail | `Function`  |   -    | x    | The callback function for a fail API call |
| complete | `Function`  |   -    | x    | The callback function for a complete API call |

### object.success callback function Parameters

| Property     | Type     | Description     |
| -------- | ------ | -------- |
|size|number|File size in bytes|
|digest|string|File summary computed based on the passed digestAlgorithm|

## Example

```js
import { getFileInfo } from '@uni/file';

// Get file information.
getFileInfo({
  filePath: 'https://resource/apml953bb093ebd2834530196f50a4413a87.video',
  digestAlgorithm: 'sha1',
  success: (res)=>{
    console.log(JSON.stringify(res))
  }
});

```

Promise：

```js
import { getFileInfo } from '@uni/file';

getFileInfo({
  filePath: 'https://resource/apml953bb093ebd2834530196f50a4413a87.video',
  digestAlgorithm: 'sha1',
}).then((res) => {
  console.log(res);
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
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01XQpsmx1EUAr9NAqja_!!6000000000354-0-tps-630-650.jpg" width="220" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
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
