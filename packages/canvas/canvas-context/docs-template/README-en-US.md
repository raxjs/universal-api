# universal-canvas-context [![npm](https://img.shields.io/npm/v/universal-canvas-context.svg)](https://www.npmjs.com/package/universal-canvas-context)

Universal canvas api.

## Support

__icon_miniapp_mp__ __icon_miniapp_wx__ __ icon_web__

## Install

```bash
$ npm install universal-canvas-context --save
```

## Usage

```js
import { createElement, useEffect, Fragment } from 'rax';
import createContext from 'universal-canvas-context';

function App() {
  useEffect(() => {
    createContext('canvasId', '2d').then(context => {
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
