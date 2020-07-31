# universal-element [![npm](https://img.shields.io/npm/v/universal-element.svg)](https://www.npmjs.com/package/universal-element)

获取 DOM 节点的信息.

## 支持
__icon_miniapp_mp__ __icon_miniapp_wx__ __icon_web__

## 安装

```bash
$ npm install universal-element --save
```

## 使用

```js
import { createElement, useEffect, Fragment } from 'rax';
import { getScrollOffset, getBoundingClientRect } from 'universal-element';

function App() {
  useEffect(() => {
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

## 方法

### `getScrollOffset()`

在阿里小程序中, 不存在 `scrollWidth`, `scrollHeight`。

```js
getScrollOffet('#container').then((ret) => {
  const { scrollTop, scrollLeft, scrollWidth, scrollHeight } = ret[0];
  console.log(scrollTop, scrollLeft, scrollWidth, scrollHeight);
});
```

### `getBoundingClientRect()`

在所有小程序中， 不存在 `x`, `y`。

```js
getBoundingClientRect('#container').then((ret) => {
  const { width, height, top, left, right, bottom, x, y } = ret[0];
  console.log(width, height, top, left, right, bottom, x, y);
});
```

### 注意
所有方法在微信小程序的自定义组件中使用的时候，都需要添加第二个参数来指定自定义组件实例：

```js
// 在 Rax 小程序编译时链路参数为 this._internal
getBoundingClientRect('#container', this).then((ret) => {
  const { width, height, top, left, right, bottom, x, y } = ret[0];
  console.log(width, height, top, left, right, bottom, x, y);
});
```
