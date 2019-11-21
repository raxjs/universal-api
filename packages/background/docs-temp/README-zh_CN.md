# universal-background [![npm](https://img.shields.io/npm/v/universal-background.svg)](https://www.npmjs.com/package/universal-background)

动态设置窗口的背景等.

## 支持
__icon_miniapp_mp__ __icon_miniapp_wx__

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
| color       | `String` |        | x    | 窗口的背景色                  | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| topColor    | `String` |        | x    | 顶部窗口的背景色，仅 iOS 支持 | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| bottomColor | `String` |        | x    | 底部窗口的背景色，仅 iOS 支持 | __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `setTextStyle(options)`

动态设置窗口的背景色。

#### 参数
| 属性  | 类型     | 默认值 | 必选 | 描述                                                     | 支持                                    |
| ----- | -------- | ------ | ---- | -------------------------------------------------------- | --------------------------------------- |
| style | `String` |        | √    | 下拉背景字体、loading 图的样式，仅支持 'dark', 'light'。 | __icon_miniapp_mp__ __icon_miniapp_wx__ |


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
