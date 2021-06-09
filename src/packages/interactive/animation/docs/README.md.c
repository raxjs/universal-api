# createAnimation

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@uni/animation.svg)](https://www.npmjs.com/package/@uni/animation)

创建一个动画实例 `Animation`。

可以通过 **链式调用** 实例方法来描述动画，最后通过 `export` 方法导出动画数据，然后将动画数据与组件或 HTML 节点绑定。


## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install @uni/animation --save
```

## 示例

```js
import createAnimation from '@uni/animation';

const animation = createAnimation();

animation
  .rotate(30)
  .translate(100, 50)
  .step();

// 小程序端场景，需要将 `data` 传递给组件的 `animation` 属性
const data = animation.export();

// 如果需要支持 web 端场景，`export` 方法需要额外传绑定的 HTML 节点
// const data = animation.export(document.getElementById('app'));
```
