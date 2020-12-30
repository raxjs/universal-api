---
title: createCanvasContext
---

# createCanvasContext 
[![npm](https://img.shields.io/npm/v/universal-canvas-context.svg)](https://www.npmjs.com/package/universal-canvas-context)

Universal canvas api.

## Support

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-canvas-context --save
```

## Usage

```js
import { createElement, useEffect, Fragment } from 'rax';
import createCanvasContext from 'universal-canvas-context';

function App() {
  useEffect(() => {
    createCanvasContext('canvasId', '2d').then(context => {
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
You can also import from the big package:

```js
import {createCanvasContext} from 'universal-api';
```
## Methods

### `createContext(canvasId, type, options)`

Only in MiniApp, the return `context` has valid `draw` method.

```js
createContext("canvasId").then((context) => {
  context.fillStyle = 'red';
  context.fillRect(0, 0, 100, 100);
  // Only in alibaba miniapp, draw isn't an empty function
	context.draw();
});
```
