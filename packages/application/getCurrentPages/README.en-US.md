---
group:
  title: Application
title: getCurrentPages
---

# getCurrentPages 

[![npm](https://img.shields.io/npm/v/universal-api.svg)](https://www.npmjs.com/package/universal-api)
[![npm](https://img.shields.io/npm/v/universal-getcurrentpages.svg)](https://www.npmjs.com/package/universal-getCurrentPages)

Gets the current page stack. In the array, the first element is the homepage and the last element is the current page.

## Support

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-getcurrentpages --save
```

## Usage

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
It can also be imported from the big package:

```js
import {getCurrentPages} from 'universal-api';
```

## Note:

- Do not modify the page stack as this will lead to routing and page status errors.
- Do not call getCurrentPages() when App.onLaunch is called since page is not generated.