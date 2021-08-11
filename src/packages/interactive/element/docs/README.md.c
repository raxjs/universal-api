# element 
[![npm](https://img.shields.io/npm/v/@uni/element.svg)](https://www.npmjs.com/package/@uni/element)

获取 DOM 节点的信息.

该 API 需要在 DOM 加载成功后使用，可参考以下几种使用场景：

- 进入页面时获取节点对象实例，在 Page.onReady 中使用
- 通过 setData 切换组件状态后获取节点实例，在 setData 回调中使用

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

## 安装

```bash
$ npm install @uni/element --save
```

## 使用

```js
import { createElement, useEffect, Fragment } from 'rax';
import { getScrollOffset, getBoundingClientRect } from '@uni/element';

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

## 注意

所有方法在微信小程序的自定义组件中使用的时候，都需要添加第二个参数来指定自定义组件实例：

```js
// 在 Rax 小程序编译时链路参数为 this._internal
// 在 Rax 小程序运行时可通过document.querySelector('#container')._internal 获取this
getBoundingClientRect('#container', this).then((ret) => {
  const { width, height, top, left, right, bottom } = ret[0];
  console.log(width, height, top, left, right, bottom);
});
```