---
group:
  title: 画布
title: createCanvasContext
---

# createCanvasContext 
[![npm](https://img.shields.io/npm/v/universal-canvas-context.svg)](https://www.npmjs.com/package/universal-canvas-context)

一个适配多端的 canvas api。

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

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
