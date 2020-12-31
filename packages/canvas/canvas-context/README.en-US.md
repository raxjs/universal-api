---
title: createCanvasContext
---

# createCanvasContext 
[![npm](https://img.shields.io/npm/v/universal-canvas-context.svg)](https://www.npmjs.com/package/universal-canvas-context)

Universal canvas api.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

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
    }} src='https://herbox.online/p/109000004/app_ZalJy1DSm?previewZoom=100&view=preview&defaultPage=pages/universal-canvas-context/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i2/O1CN01emXrdK1Oh8DlD6w3t_!!6000000001736-0-tps-694-620.jpg" width="200" height="200" />
    <div style="text-align: center;">wechat miniprogram</div>
  </div>
</div>

</div>
</div>
