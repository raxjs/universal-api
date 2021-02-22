---
title: toast
---

# @uni/toast 
[![npm](https://img.shields.io/npm/v/@uni/toast.svg)](https://www.npmjs.com/package/@uni/toast)

通用弱提示，可选择多少秒之后消失

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px"> 

## 安装

```bash
$ npm install @uni/toast --save
```

## 示例

```js
import Toast from '@uni/toast';

Toast.show('Hi');

Toast.hide();
```

你也可以从大包引入：
```js
import { toast } from '@uni/apis';
```

## 方法

### `Toast.show(options?: object)`

#### 参数
| 成员     | 类型     | 描述                | 默认值 |
| -------- | -------- | ------------------- | :----: |
| message  | `string` | 文字内容            |   -    |
| type | `success | fail | none` | 弹窗类型 |  none  |
| duration | `number` | 显示时长，单位为 ms |  2000  |
| success | `function` | 成功回调 |  -  |
| fail | `function` | 失败回调 |  -  |
| complete | `function` | 结束回调 |  -  |

### `Toast.hide()`

隐藏Toast
