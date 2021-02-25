---
title: unitTool
---

# unitTool
[![npm](https://img.shields.io/npm/v/@uni/unit-tool.svg)](https://www.npmjs.com/package/@uni/unit-tool)

工具库

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install @uni/unit-tool --save
```
## 示例

```js
import { px2rpx, rpx2px } from '@uni/unit-tool';
```

你也可以从大包引入：

```js
import {unitTool} from '@uni/apis';
const { px2rpx, rpx2px } = unitTool;
```

## 方法
### `px2rpx(val)`
px 转 rpx 方法。

### `rpx2px(val)`
rpx 转 px 方法。

#### 入参
| 成员 | 类型     | 描述  | 默认值 | 支持  |
| ---- | -------- | ----- | :----: | :---: |
| val  | `number` | px 值 |   -    |       |
