---
title: element
---
# universal-element 
[![npm](https://img.shields.io/npm/v/universal-element.svg)](https://www.npmjs.com/package/universal-element)

获取 DOM 节点的信息.

该 API 需要在 DOM 加载成功后使用，可参考以下几种使用场景：

- 进入页面时获取节点对象实例，在 Page.onReady 中使用
- 通过 setData 切换组件状态后获取节点实例，在 setData 回调中使用

## 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" />

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

```js
getScrollOffet('#container').then((ret) => {
  const { scrollTop, scrollLeft } = ret[0];
  console.log(scrollTop, scrollLeft);
});
```

### `getBoundingClientRect()`

```js
getBoundingClientRect('#container').then((ret) => {
  const { width, height, top, left, right, bottom } = ret[0];
  console.log(width, height, top, left, right, bottom);
});
```