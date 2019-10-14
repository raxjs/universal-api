# universal-appstate [![npm](https://img.shields.io/npm/v/universal-appstate.svg)](https://www.npmjs.com/package/universal-appstate)
应用被前台或即将被后台状态

## 支持
<img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" />

## 安装

```sh
npm install --save universal-appstate
```

## 使用

```js
import AppState from 'universal-appstate';

console.log(AppState.isAvailable);
console.log(AppState.currentState); // active|background

const _handleAppStateChange = (nextAppState) => {
  console.log(nextAppState); // active|background
}

AppState.addEventListener('change', _handleAppStateChange);
AppState.removeEventListener('change', _handleAppStateChange);
```

## APIS

### `isAvailable: boolean`
Whether to support.

### `nextAppState: 'active' | 'background'`
Application becoming foreground or background.
