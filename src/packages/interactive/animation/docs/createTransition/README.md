---
  group:
    path: /packages/interactive
---

# createTransition

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@uni/animation.svg)](https://www.npmjs.com/package/@uni/animation)

创建一个过渡动画。

通过 **配置选项** 的方式创建过渡动画，最后通过 `export` 方法导出动画数据，然后将动画数据与组件或 HTML 节点绑定（绑定方式与 `createAnimation` 一致）。


<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" />

## 安装

```bash
$ npm install @uni/animation --save
```

## 示例

```js
import { createTransition } from '@uni/animation';

const transition = createTransition({
  from: {
    opacity: 0.6,
    transform: 'translate(10px, 10px) scale(1)'
  },
  to: {
    opacity: 1,
    transform: 'translate(100px, 50px) scale(1.2)'
  },
  options: {
    duration: 350
  }
});

// 小程序端场景，需要将 `data` 传递给组件的 `animation` 属性
const data = transition.export();

// 如果需要支持 web 端场景，`export` 方法需要额外传绑定的 HTML 节点
// const data = transition.export(document.getElementById('app'));
```

## 语法

```
createTransition(options): Animation
```

## 参数

### `options`

| 属性名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| from | [`TransitionStyleOptions`](#toc-transition-style-options) | 配置起始状态下的样式 | 否 | - |
| to | [`TransitionStyleOptions`](#toc-transition-style-options) | 配置结束状态下的样式 | 否 | -  |
| options | [`AnimationOptions`](#toc-animation-options) | 配置过渡动画选项 | 否 | - |

### <span id="toc-transition-style-options">`TransitionStyleOptions`</span>

| 属性名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| opacity | `number` | 设置不透明度 | 否 | - |
| backgroundColor | `string` | 设置背景色 | 否 | - |
| width | `number/string` | 设置宽度 | 否 | - |
| height | `number/string` | 设置高度 | 否 | - |
| left | `number/string` | 设置 `left` 值 | 否 | - |
| right | `number/string` | 设置 `right` 值 | 否 | - |
| top | `number/string` | 设置 `top` 值 | 否 | - |
| bottom | `number/string` | 设置 `bottom` 值 | 否 | - |
| transform | `string` | 设置变换样式，[参考 CSS transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) | 否 | - |

**Note**: 配置项 `transform` 使用方式与 CSS 基本一致，但是**需要注意允许的单位与 CSS 属性有区别**：

| Transform function | 允许的单位 | 示例 |
| --- | --- | --- |
| rotate / rotateX / rotateY / rotateZ / skew / skewX | `deg` | `rotate(10deg)`、`skew(10deg)` |
| translate / translateX / translateY / translateZ / translate3d | `px` | `translate(100px, 50px)` |
| scale / scale3d / scaleX / scaleY / scaleZ / matrix / matrix3d | - | `scale(1.5)` |
| rotate3d | -, -, -, `deg` | `rotate3d(1, 2, 3, 10deg)` |

### <span id="toc-animation-options">`AnimationOptions`</span>

| 属性名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| duration | `number` | 指定一个动画周期的时长，单位 ms | 否 | 400 |
| timingFunction | `string` | 设置动画在每个周期的持续时间如何进展，[参考文档](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) | 否 | "linear"  |
| delay | `number` | 动画延迟时间，单位 ms | 否 | 0 |
| transformOrigin | `string` | 指定元素变形的原点 | 否 | "50% 50% 0" |

**Note**: 为了避免渲染机制带来的一些问题，参数 `duration` 的最小值为 **16ms**


## 返回值

返回一个 `Animation` 对象（与 `createAnimation` 方法的返回值相同）

### Animation

```ts
interface Animation {
  /**
   * 导出动画队列，`export` 方法每次调用后会清掉之前的动画操作
   * 如果需要支持 web 端，则参数 `dom` 需要传入，否则可不用传
   * @param dom
   */
  export: (dom?: HTMLElement) => AnimationData;
}
```


## 常见问题

### 在运行时小程序框架中使用时，首次动画变换不生效
一些运行时的小程序框架，为了提升性能，会舍弃“空值”的属性，但是这对 `animation` 属性来说会有问题。
所以，建议给绑定 `animation` 属性的数据设置空对象作为默认值: `{}`.


### web 端使用
由于在 web 端无法通过绑定动画队列数据到 `animation` 属性来实现动画效果，所以在 web 端使用场景下，`export` 方法需要传入一个 HTML 节点。

**Tips**:

- 小程序端会忽略传入的参数
- 如果 web 端传入的参数不是一个 HTML 节点，会忽略

**基于 Rax 的一码多端动画示例 (含 web 端)**：

```js
import { createElement, useRef, useEffect, useState } from 'rax';
import View from 'rax-view';
import { createTransition } from '@uni/animation';

export default function App() {
  const domRef = useRef();
  const [animation, setAnimation] = useState({}); // 默认值设置为一个空对象

  useEffect(() => {
    const transition = createTransition({
      from: {
        opacity: 0.6,
        transform: 'translate(10px, 10px) scale(1)'
      },
      to: {
        opacity: 1,
        transform: 'translate(100px, 50px) scale(1.2)'
      },
      options: {
        duration: 350
      }
    });

    setAnimation(
      transition.export(domRef.current) // `export` 方法传入 HTML 节点参数
    );
  }, []);

  return (
    <View ref={domRef} animation={animation} />
  )
}
```

</div>
<div>

```jsx | inline
/**
 * iframe: true
 */
import React from 'react';
export default () => (
  <iframe style={{
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
      width: '375px',
      height: '700px'
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/animation/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i2/O1CN01iI0BJv1EyrORuBMUh_!!6000000000421-0-tps-690-662.jpg" width="220" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
