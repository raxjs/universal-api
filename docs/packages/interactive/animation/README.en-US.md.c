# animation

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@uni/animation.svg)](https://www.npmjs.com/package/@uni/animation)


## Installation

```bash
$ npm install @uni/animation --save
```


## createAnimation

Create an animation instance `Animation`.

You can use the **chain call** instance method to describe the animation, and finally export the animation data by the `export` method, and then bind the animation data to the component or HTML node.

### Supports

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" />

### Usage

```js
import { createAnimation } from '@uni/animation';

const animation = createAnimation();

animation
  .rotate(30)
  .translate(100, 50)
  .step();

// In the mini program, you need to pass `data` to the `animation` property of the component
const data = animation.export();

// If you need to support web-side scenarios, the `export` method needs to pass in additional binding HTML node
// const data = animation.export(document.getElementById('app'));
```


## createTransition

Create a transition animation.

Create the transition animation through the **configuration option**, and finally export the animation data through the `export` method, and then bind the animation data to the component or HTML node (the same way as `createAnimation`).

### Supports

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" />


### Usage

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

// In the mini-program, you need to pass `data` to the `animation` property of the component
const data = transition.export();

// If you need to support web-side scenarios, the `export` method needs to pass in additional binding HTML node
// const data = animation.export(document.getElementById('app'));
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
