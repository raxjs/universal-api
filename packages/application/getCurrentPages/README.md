---
group:
  title: 应用级事件
title: getCurrentPages
---

# getCurrentPages 

[![npm](https://img.shields.io/npm/v/universal-api.svg)](https://www.npmjs.com/package/universal-api)
[![npm](https://img.shields.io/npm/v/universal-getcurrentpages.svg)](https://www.npmjs.com/package/universal-getCurrentPages)

获取当前页面栈。数组中第一个元素为首页，最后一个元素为当前页面。

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## 安装

```bash
$ npm install universal-getcurrentpages --save
```

## 使用

```js
import { createElement, useEffect, Fragment } from 'rax';
import getCurrentPages from 'universal-getcurrentpages';

function App() {
  useEffect(() => {
    const app = getCurrentPages();
  }, []);

  return (<>
    <View></View>
  </>)
}
```
也可以从大包中引入：

```js
import {getCurrentPages} from 'universal-api';
```

## 注意：

- 不要尝试修改页面栈，会导致路由以及页面状态错误。
- 不要在 App.onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成。