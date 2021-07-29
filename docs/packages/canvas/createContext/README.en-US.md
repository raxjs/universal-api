---
group:
  title: canvas
---

# createContext
[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis) [![npm](https://img.shields.io/npm/v/@uni/canvas.svg)](https://www.npmjs.com/package/@uni/canvas)

下载文件资源到本地。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" />

## 安装

```bash
$ npm install @uni/canvas --save
```

## 参数
| 属性   | 类型     | 默认值 | 必选 | 描述             |
| ------ | -------- | ------ | ---- | ---------------- |
| canvasId    | `String` |        | √    | 定义在 canvas 上的 ID  |
| type | `2d/webgl/webgl2` |   2d   | x    | 画布上下文类型 |

### 不通用参数（由于破坏了一码多端的能力，不推荐使用）
| 属性   | 类型     | 默认值 | 必选 | 描述 | 支持  |
| ------ | -------- | ------ | ---- | ----- | ------- |
| options | `object` |        | x    | 上下文属性 | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> |

## 返回
CanvasRenderingContext

通过 createContext({ canvasId: 'canvas', type: '2d' }) 接口可以获取 CanvasRenderingContext2D 对象，实现了 [HTML Canvas 2D Context](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D) 定义的属性、方法。
通过 createContext({ canvasId: 'canvas', type: 'webgl' }) 或 OffscreenCanvas.getContext('webgl') 接口可以获取 WebGLRenderingContext 对象，实现了 [WebGL 1.0](https://www.khronos.org/registry/webgl/specs/latest/1.0/) 定义的所有属性、方法、常量。

## 使用

```js
import { createElement, useEffect } from 'rax';
import View from 'rax-view';
import { createContext } from '@uni/canvas';

export default function() {
  useEffect(() => {
    createContext({
      canvasId: 'canvas'
    }).then((canvasContext) => {
      canvasContext.fillStyle = 'red';
      canvasContext.fillRect(0, 0, 100, 100);
      // Only valid in miniapp
      canvasContext.draw();
    });
  }, []);
  return (
    <View>
      <canvas id="canvas" type="2d" width="400" height="400" />
    </View>
  );
}

```
注意：在微信小程序的自定义组件中使用的时候，都需要传递 context 属性来指定自定义组件实例：
（context 在rax中如下示例中获取，在原生小程序中直接使用 this）
```js
import { createElement, useEffect } from 'rax';
import View from 'rax-view';
import { createContext } from '@uni/canvas';

export default function() {
  useEffect(() => {
    const node = document.querySelector('#demo1');
    createContext({
      canvasId: 'canvas',
      context: node._internal
    }).then((canvasContext) => {
      canvasContext.fillStyle = 'red';
      canvasContext.fillRect(0, 0, 100, 100);
      // Only valid in miniapp
      canvasContext.draw();
    });
  }, []);
  return (
    <View>
      <canvas id="canvas" type="2d" width="400" height="400" />
    </View>
  );
}

```

你也可以从大包引入：
```js
import { canvas } from '@uni/apis';

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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/canvas/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01XQpsmx1EUAr9NAqja_!!6000000000354-0-tps-630-650.jpg" width="220" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>


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
