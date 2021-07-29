---
  group:
    path: /en-US/packages/interactive
---


# createTransition

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@uni/animation.svg)](https://www.npmjs.com/package/@uni/animation)

Create a transition animation.

Create the transition animation through the **configuration option**, and finally export the animation data through the `export` method, and then bind the animation data to the component or HTML node (the same way as `createAnimation`).

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## Supports

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="baiduSmartProgram" />

## Installation

```bash
$ npm install @uni/animation --save
```

## Usage

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

// In the mini-program, you need to pass `data` to the `animation` property of the component
const data = transition.export();

// If you need to support web-side scenarios, the `export` method needs to pass in additional binding HTML node
// const data = animation.export(document.getElementById('app'));
```

## Method

```
createTransition(options): Animation
```

## Arguments

### `options`

| Property | Type | Description | Required | Default |
| --- | --- | --- | --- | --- |
| from | [`TransitionStyleOptions`](#toc-transition-style-options) | Configure the style of the start state | No | - |
| to | [`TransitionStyleOptions`](#toc-transition-style-options) | Configure the style of the end state | No | -  |
| options | [`AnimationOptions`](#toc-animation-options) | Configure transition animation options | No | - |

### <span id="toc-transition-style-options">`TransitionStyleOptions`</span>

| Property | Type | Description | Required | Default |
| --- | --- | --- | --- | --- |
| opacity | `number` | Set opacity | No | - |
| backgroundColor | `string` | Set background color | No | - |
| width | `number/string` | Set width | No | - |
| height | `number/string` | Set height | No | - |
| left | `number/string` | Set the `left` value | No | - |
| right | `number/string` | Set the `right` value | No | - |
| top | `number/string` | Set the `top` value | No | - |
| bottom | `number/string` | Set the `bottom` value | No | - |
| transform | `string` | Set transform style, [Refer to CSS transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) | No | - |

**Note**: The use of the configuration item `transform` is basically the same as CSS, but **note that the allowed units are different from CSS properties**:

| Transform function | Allowed units | Example |
| --- | --- | --- |
| rotate / rotateX / rotateY / rotateZ / skew / skewX | `deg` | `rotate(10deg)`、`skew(10deg)` |
| translate / translateX / translateY / translateZ / translate3d | `px` | `translate(100px, 50px)` |
| scale / scale3d / scaleX / scaleY / scaleZ / matrix / matrix3d | - | `scale(1.5)` |
| rotate3d | -, -, -, `deg` | `rotate3d(1, 2, 3, 10deg)` |

### <span id="toc-animation-options">`AnimationOptions`</span>

| Property | Type | Description | Required | Default |
| --- | --- | --- | --- | --- |
| duration | `number` | Specify the duration of the animation cycle, in milliseconds | No | 400 |
| timingFunction | `string` | Set how the animation progresses in the duration of each cycle, [See also documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) | No | "linear"  |
| delay | `number` | Specify the waiting time to apply the animation to the element before starting the animation, in milliseconds | No | 0 |
| transformOrigin | `string` | Set the origin of element transformation | No | "50% 50% 0" |

**Note**: In order to avoid some problems caused by the rendering mechanism, the minimum value of the parameter `duration` is **16ms**.


## Returns

Return an instance of `Animation` class (same as the return value of the `createAnimation` method)

### Animation

```ts
interface Animation {
  /**
   * Export the animation queue, the previous animation data will be cleared after each call of the `export` method.
   * If you need to support the web-side, the parameter `dom` needs to be passed in, otherwise you don’t need to pass in.
   * @param dom
   */
  export: (dom?: HTMLElement) => AnimationData;
}
```


## Frequently Asked Questions

### When used in the runtime mini-program framework, the animation does not take effect the first time
Some runtime mini-program frameworks, in order to improve performance, will discard the "null value" attribute, which has problems for the `animation` property.
Therefore, it is recommended to set an empty object as the default value for the data bound to the `animation` property: `{}`.


### Web-side Usage
Since it is not possible to bind the animation queue data to the `animation` property on the web side to achieve the animation effect,
in the web side use scenario, the `export` method needs to pass in an HTML node.

**Tips**:

- If the current scene is a mini-program, the incoming parameters will be ignored
- If the parameter passed in from the web is not an HTML node, it will be ignored

**One-code multi-side animation example based on Rax (including web-side)**：

```js
import { createElement, useRef, useEffect, useState } from 'rax';
import View from 'rax-view';
import { createTransition } from '@uni/animation';

export default function App() {
  const domRef = useRef();
  const [animation, setAnimation] = useState({}); // The default value is set to an empty object

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
      transition.export(domRef.current) // The `export` method passes in HTML node parameters
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
