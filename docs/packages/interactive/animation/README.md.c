# animation

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@uni/animation.svg)](https://www.npmjs.com/package/@uni/animation)


## 安装

```bash
$ npm install @uni/animation --save
```


## createAnimation

创建一个动画实例 `Animation`。

可以通过 **链式调用** 实例方法来描述动画，最后通过 `export` 方法导出动画数据，然后将动画数据与组件或 HTML 节点绑定。


### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" />


### 示例

```js
import { createAnimation } from '@uni/animation';

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


## createTransition

创建一个过渡动画。

通过 **配置选项** 的方式创建过渡动画，最后通过 `export` 方法导出动画数据，然后将动画数据与组件或 HTML 节点绑定（绑定方式与 `createAnimation` 一致）。

### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" />


### 示例

```js
import { createTransition } from '@uni/animation';

const transition = createTransition({
  from: {
    opacity: 0.6,
    transform: 'translate(10px, 10px) scale(1)'
  },
  to: {
    opacity: 1,
    transform: 'translate(100px, 50px) scale(1.2)'
  },
  options: {
    duration: 350
  }
});

// 小程序端场景，需要将 `data` 传递给组件的 `animation` 属性
const data = transition.export();

// 如果需要支持 web 端场景，`export` 方法需要额外传绑定的 HTML 节点
// const data = transition.export(document.getElementById('app'));
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
