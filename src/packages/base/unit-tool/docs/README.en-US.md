# unitTool 
[![npm](https://img.shields.io/npm/v/@uni/unit-tool.svg)](https://www.npmjs.com/package/@uni/unit-tool)

Unit tool

## Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="KuaiShouMiniProgram" />

## Install

```bash
$ npm install @uni/unit-tool --save
```
## Usage

```js
import { px2rpx, rpx2px } from '@uni/unit-tool';
```

You can also import from the big package:

```js
import {unitTool} from '@uni/apis';
const { px2rpx, rpx2px } = unitTool;
```

## APIS
### `px2rpx(val)`
px to rpx method

### `rpx2px(val)`
rpx to px method

#### Arguments
| Property | Type     | Describes | Default | Supports |
| -------- | -------- | --------- | :-----: | :------: |
| val      | `number` | px value  |    -    |          |
