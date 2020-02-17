# universal-dom [![npm](https://img.shields.io/npm/v/universal-dom.svg)](https://www.npmjs.com/package/universal-dom)

Get dom info.

## Support
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" />

## Install

```bash
$ npm install universal-dom --save
```

## Usage

```js
import { createElement, useEffect, Fragment } from 'rax';
import { getScrollOffset, getBoundingClientRect } from 'universal-dom';

function App() {
  useEffect({
    getScrollOffset('#container').then((ret) => {
      const { scrollTop, scrollLeft } = ret[0];
      console.log(scrollTop, scrollLeft);
    });

    getBoundingClientRect('#container').then((ret) => {
      const { width, height, top, left, right, bottom } = ret[0];
      console.log(width, height, top, left, right, bottom);
    });
  }, []);

  return (<>
    <View id='container'>test</View>
  </>)
}
```

## Methods

### `getScrollOffset()`

In MiniApp, there isn't `scrollWidth`, `scrollHeight`.

```js
getScrollOffet('#container').then((ret) => {
  const { scrollTop, scrollLeft, scrollWidth, scrollHeight } = ret[0];
  console.log(scrollTop, scrollLeft, scrollWidth, scrollHeight);
});
```

### `getBoundingClientRect()`

In MiniApp or WechatMiniProgram, there isn't `x`, `y`.

```js
getBoundingClientRect().then((ret) => {
  const { width, height, top, left, right, bottom, x, y } = ret[0];
  console.log(width, height, top, left, right, bottom, x, y);
});
```
