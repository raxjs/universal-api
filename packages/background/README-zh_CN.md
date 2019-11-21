# universal-background [![npm](https://img.shields.io/npm/v/universal-background.svg)](https://www.npmjs.com/package/universal-background)

动态设置窗口的背景等.

## 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

## 安装

```bash
$ npm install universal-background --save
```

## 方法

### `setColor(options)`

动态设置窗口的背景色。

#### 参数
| 属性        | 类型     | 默认值 | 必选 | 描述                          | 支持                                    |
| ----------- | -------- | ------ | ---- | ----------------------------- | --------------------------------------- |
| color       | `String` |        | x    | 窗口的背景色                  | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| topColor    | `String` |        | x    | 顶部窗口的背景色，仅 iOS 支持 | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| bottomColor | `String` |        | x    | 底部窗口的背景色，仅 iOS 支持 | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |

### `setTextStyle(options)`

动态设置窗口的背景色。

#### 参数
| 属性  | 类型     | 默认值 | 必选 | 描述                                                     | 支持                                    |
| ----- | -------- | ------ | ---- | -------------------------------------------------------- | --------------------------------------- |
| style | `String` |        | √    | 下拉背景字体、loading 图的样式，仅支持 'dark', 'light'。 | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |


## 示例

```js
import Background from 'universal-background';

Background.setColor({
    color: '#000000',
    success: res => {
    },
    fail: res => {
    }
});

Background.setTextStyle({
    style: 'dark', // The text color of the drop-down loading page is dark
    success: res => {
    },
    fail: res => {
    }
});

```
