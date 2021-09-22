# element 
[![npm](https://img.shields.io/npm/v/@uni/element.svg)](https://www.npmjs.com/package/@uni/element)

Get dom info.

This API needs to be used after DOM loading is successful. You can refer to the following usage scenarios:

- When entering the page, get the instance of the node object Page.onReady  Use in
- Get node instance after switching component state through SetData, and use it in SetData callback

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" />

## Install

```bash
$ npm install @uni/element --save
```

## Usage

```js
import { createElement, useEffect, Fragment } from 'rax';
import { getScrollOffset, getBoundingClientRect } from '@uni/element';

function App() {
  useEffect(() => {
    window.addEventListener('setDataFinished', () => {
      getScrollOffset('#container').then((ret) => {
        const { scrollTop, scrollLeft } = ret[0];
        console.log(scrollTop, scrollLeft);
      });

      getBoundingClientRect('#container').then((ret) => {
        const { width, height, top, left, right, bottom } = ret[0];
        console.log(width, height, top, left, right, bottom);
      });
    });
  }, []);

  return (<>
    <View id='container'>test</View>
  </>)
}
```

## Methods

### `getScrollOffset()`

```js
getScrollOffet('#container').then((ret) => {
  const { scrollTop, scrollLeft } = ret[0];
  console.log(scrollTop, scrollLeft);
});
```

## Note

When all methods are used in the custom component of the WeChat applet, you need to add a second parameter to specify the custom component instance:

```js
// When compiling the Rax applet, the link parameters are this._internal
// When compiling the Rax runtime，the link parameters are document.querySelector('#container')._internal
getBoundingClientRect('#container', this).then((ret) => {
  const { width, height, top, left, right, bottom } = ret[0];
  console.log(width, height, top, left, right, bottom);
});
```


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
