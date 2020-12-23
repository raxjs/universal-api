---
group:
  title: Base
title: getApp
---

# getApp 

[![npm](https://img.shields.io/npm/v/universal-api.svg)](https://www.npmjs.com/package/universal-api)
[![npm](https://img.shields.io/npm/v/universal-getapp.svg)](https://www.npmjs.com/package/universal-getapp)

Gets the globally unique App instance of the Mini Program.

## Support

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-getapp --save
```

## Usage

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
It can also be imported from the big package:

```js
import {getApp} from 'universal-api';
```