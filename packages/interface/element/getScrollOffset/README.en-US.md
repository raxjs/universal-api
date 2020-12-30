---
  group:
    path: /en-US/packages/interface
---

# getScrollOffset

[![npm](https://img.shields.io/npm/v/universal-element.svg)](https://www.npmjs.com/package/universal-element)

Get dom info.

This API needs to be used after DOM loading is successful. You can refer to the following usage scenarios:

- When entering the page, get the instance of the node object Page.onReady  Use in
- Get node instance after switching component state through SetData, and use it in SetData callback

## Support
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" />

## Install

```bash
$ npm install universal-element --save
```

## Usage

```js
import { createElement, useEffect, Fragment } from 'rax';
import { getScrollOffset, getBoundingClientRect } from 'universal-element';

function App() {
  useEffect(() => {
    getScrollOffset('#container').then((ret) => {
      const { scrollTop, scrollLeft } = ret[0];
      console.log(scrollTop, scrollLeft);
    });
  }, []);

  return (<>
    <View id='container'>test</View>
  </>)
}
```
You can also import from the big package:

```js
import { element } from 'universal-api';
const { getScrollOffset, getBoundingClientRect } = element;

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
getScrollOffet('#container', this).then((ret) => {
  const { scrollTop, scrollLeft } = ret[0];
  console.log(scrollTop, scrollLeft);
});
```