# universal-canvas-context [![npm](https://img.shields.io/npm/v/universal-canvas-context.svg)](https://www.npmjs.com/package/universal-canvas-context)

一个适配多端的 canvas api。

## 支持

__ icon_miniapp_mp__  __ icon_miniapp_wx__  __ icon_web__

## 安装

```bash
$ npm install universal-canvas-context --save
```

## 使用

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

## 方法

### `createContext(canvasId, type, options)`

只有在阿里系小程序中，返回的 `context` 中才含有有实际作用的 `draw` 方法。

```js
createContext("canvasId").then((context) => {
  context.fillStyle = 'red';
  context.fillRect(0, 0, 100, 100);
  // 在除了阿里小程序的其它容器中，draw 方法是一个空函数
	context.draw();
});
```
