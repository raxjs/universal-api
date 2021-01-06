---
group:
  title: 画布
title: createCanvasContext
---

# createCanvasContext 
[![npm](https://img.shields.io/npm/v/universal-canvas-context.svg)](https://www.npmjs.com/package/universal-canvas-context)

一个适配多端的 canvas api。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install universal-canvas-context --save
```

## 使用

```js
import { createElement, useEffect, Fragment } from 'rax';
import createCanvasContext from 'universal-canvas-context';

function App() {
  useEffect(() => {
    createCanvasContext('canvasId').then(context => {
      context.fillStyle = 'red';
      context.fillRect(0, 0, 100, 100);
      context.draw();
    });
  }, []);

  return (<>
    <canvas id='canvasId'></canvas>
  </>)
}
```
也可以从大包中引入：

```js
import {createCanvasContext} from 'universal-api';
```

## 方法

### `createCanvasContext(canvasId, type, options)`

只有在小程序中，返回的 `context` 中才含有有实际作用的 `draw` 方法。

```js
createCanvasContext("canvasId").then((context) => {
  context.fillStyle = 'red';
  context.fillRect(0, 0, 100, 100);
  // 在除了小程序的其它容器中，draw 方法是一个空函数
	context.draw();
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
    }} src='https://herbox.online/p/109000004/app_1aKtEd7SK?previewZoom=100&view=preview&defaultPage=pages/universal-canvas-context/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i2/O1CN01emXrdK1Oh8DlD6w3t_!!6000000001736-0-tps-694-620.jpg" width="200" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
