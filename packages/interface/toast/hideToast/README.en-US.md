---
  group:
    path: /en-US/packages/interface
---

# hideToast 
[![npm](https://img.shields.io/npm/v/universal-toast.svg)](https://www.npmjs.com/package/universal-toast)

Universal toast, you can choose how many seconds after disappearing

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px"> 

## Install

```bash
$ npm install universal-toast --save
```

## Usage

```js
import Toast from 'universal-toast';

Toast.hide();
```

你也可以从大包引入：
```js
import { toast } from 'universal-api';
toast.hide()
```

## Methods

### `Toast.hide()`

Hides the loading prompt box