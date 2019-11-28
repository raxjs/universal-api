[![npm](https://img.shields.io/npm/v/universal-loading.svg)](https://www.npmjs.com/package/universal-loading)

加载提示的过渡效果。

## 支持
__icon_miniapp_mp__ __icon_miniapp_wx__

## 安装

```bash
$ npm install universal-loading --save
```

## 方法

### `show(options)`

显示 loading 提示框。

#### 参数
| 属性     | 类型     | 默认值 | 必选 | 描述     | 支持                                    |
| -------- | -------- | ------ | ---- | -------- | --------------------------------------- |
| content | `String` |        | √    | 提示中的文字内容 | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| delay | `Number` |   `0`     | x    | 延迟显示，单位 ms | __icon_miniapp_mp__ |
| mask | `Boolean` |   `false`     | x    | 是否显示透明蒙层，防止触摸穿透 | __icon_miniapp_wx__ |

### `hide(options)`

隐藏 loading 提示框。

#### 参数
| 属性     | 类型     | 默认值 | 必选 | 描述     | 支持                                    |
| -------- | -------- | ------ | ---- | -------- | --------------------------------------- |
| page | `Object` |        | x     | 具体指当前 page 实例 | __icon_miniapp_mp__ |

## 示例

```js
import Loading from 'universal-loading';

Loading.show({
  content: 'content'
});
setTimeout(() => {
  Loading.hide();
}, 1000);

```
