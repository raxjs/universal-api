---
  group:
    path: /packages/interface
---

# getScrollOffset
[![npm](https://img.shields.io/npm/v/universal-element.svg)](https://www.npmjs.com/package/universal-element)

获取 DOM 节点的信息.

该 API 需要在 DOM 加载成功后使用，可参考以下几种使用场景：

- 进入页面时获取节点对象实例，在 Page.onReady 中使用
- 通过 setData 切换组件状态后获取节点实例，在 setData 回调中使用

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

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
  }, []);

  return (<>
    <View id='container'>test</View>
  </>)
}
```

你也可以从大包引入：

```js
import { element } from 'universal-api';
const { getScrollOffset, getBoundingClientRect } = element;

```

## 方法

### `getScrollOffset()`

```js
getScrollOffet('#container').then((ret) => {
  const { scrollTop, scrollLeft } = ret[0];
  console.log(scrollTop, scrollLeft);
});
```

## 注意

所有方法在微信小程序的自定义组件中使用的时候，都需要添加第二个参数来指定自定义组件实例：

```js
// 在 Rax 小程序编译时链路参数为 this._internal
getScrollOffet('#container', this).then((ret) => {
  const { scrollTop, scrollLeft } = ret[0];
  console.log(scrollTop, scrollLeft);
});
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
    }} src='https://herbox.online/p/109000004/app_1aKtEd7SK?previewZoom=100&view=preview&defaultPage=pages/universal-element/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i2/O1CN014nu4sC28KCibY5kmN_!!6000000007913-0-tps-678-648.jpg" width="200" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
