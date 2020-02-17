# universal-dom-info [![npm](https://img.shields.io/npm/v/universal-dom-info.svg)](https://www.npmjs.com/package/universal-dom-info)

Get dom info.

## Support
__icon_miniapp_mp__ __icon_miniapp_wx__ __icon_web__

## Install

```bash
$ npm install universal-dom-info --save
```

## Usage

```js
import { createElement, useEffect, Fragment } from 'rax';
import { getScrollOffset, getBoundingClientRect } from 'universal-dom-info';

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
