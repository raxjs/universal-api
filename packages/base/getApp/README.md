---
group:
  title: 基础
title: getApp
---

# getApp 

[![npm](https://img.shields.io/npm/v/universal-api.svg)](https://www.npmjs.com/package/universal-api)
[![npm](https://img.shields.io/npm/v/universal-getapp.svg)](https://www.npmjs.com/package/universal-getapp)

获取应用实例

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## 安装

```bash
$ npm install universal-getapp --save
```

## 使用

```js
import { createElement, useEffect, Fragment } from 'rax';
import getApp from 'universal-getapp';

function App() {
  useEffect(() => {
    const app = getApp();
  }, []);

  return (<>
    <View></View>
  </>)
}
```
也可以从大包中引入：

```js
import {getApp} from 'universal-api';
```