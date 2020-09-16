# universal-transition [![npm](https://img.shields.io/npm/v/universal-transition.svg)](https://www.npmjs.com/package/universal-transition)

用于创建过度动画

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## 安装

```bash
$ npm install universal-transition --save
```

## 示例

```js
import transition from 'universal-transition';

transition(document.querySelector('#box'), {
  transform: 'translate(10px, 20px) scale(1.5, 1.5) rotate(90deg)',
  opacity: '0.5'
}, {
  timingFunction: 'ease',
  delay: 0,
  duration: 1000
}, function() {
  console.log('animation end');
});
```

## 方法

### `transition(domNode, styles, options, callback)`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> __icon_miniapp_bytedance__

#### 参数

| 成员 | 类型 | 描述 | 必选 |默认值 | 支持 |
| --- | --- | --- | --- | --- | --- |
| domNode | `DOMNode`  | 指定元素，小程序不支持，详细见下文[小程序使用说明] | 是 | - | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> |
| styles | `object`  | 详细见下文 | 是 | - |   |
| options | `Object`  | 动画参数，详细见下文 | 否 | - |   |
| callback | `function`  |  动画完成后触发，小程序不支持 | 否 | - | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> |

下面列出属性为各个端均支持，未列出属性不保证各个端兼容性。

styles 支持的属性及情况描述：

| 成员 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| styles.backgroundColor |  `color` | 背景色 | - |
| styles.height | `length` | 长度值 | - |
| styles.width | `length` | 长度值 | - |
| styles.opacity | `number` | 透明度 0-1 | - |
| styles.transform | `string` | 变换类型，具体见下表 | - |

styles.transform 支持的属性：

| 成员 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| translate、translateX、translateY | `number | percentage` | 指定元素移动到的位置 | 0 |
| rotate、rotateX、rotateY | `angle` | 指定元素偏转的角度 | 0 |
| scale、scaleX、scaleY| `number` | 指定放大缩小元素的倍数 | 1 |

options：

| 成员 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| options.timingFunction |  `string` | 动画的效果，有效值有："linear","ease","ease-in","ease-in-out","ease-out"(未列出的值，可能存在兼容问题) | ease |
| options.delay |  `number` | 动画延迟时间 | 0 |
| options.duration |  `number` | 动画持续时间 | 0 |

#### 返回

小程序返回 `export()`，其他返回 `undefined`

## 小程序使用说明：

因为小程序无法提供`DOMNode`，并且动画应用方式也有差异。所以小程序需要通过`export()`方法获取动画内容，然后手动绑定到元素。

### 示例

```html
<view animation="{{transitionInfo}}"></view>
```
```javascript
Page({
  data: {
    transitionInfo: null,
  },
  onShow(){
    const transitionInfo = transition(null, {
      transform: 'translate(10px, 20px) scale(1.5, 1.5) rotate(90deg)',
      opacity: '0.5'
    }, {
      timingFunction: 'ease',
      delay: 0,
      duration: 1000
    });

    this.setData({
      transitionInfo: transitionInfo.export()
    });
  }
})
```
