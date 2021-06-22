---
  group:
    path: /en-US/packages/interactive
---


# createAnimation

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@uni/animation.svg)](https://www.npmjs.com/package/@uni/animation)

Create an animation instance [`Animation`](#toc-animation-interface).

You can use the **chain call** instance method to describe the animation, and finally export the animation data by the `export` method, and then bind the animation data to the component or HTML node.


<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">


## Supports

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## Installation

```bash
$ npm install @uni/animation --save
```

## Usage

```js
import { createAnimation } from '@uni/animation';

const animation = createAnimation();

animation
  .rotate(30)
  .translate(100, 50)
  .step();

// In the mini-program, you need to pass `data` to the `animation` property of the component
const data = animation.export();

// If you need to support web-side scenarios, the `export` method needs to pass in additional binding HTML node
// const data = animation.export(document.getElementById('app'));
```

## Method

```
createAnimation(options): Animation
```

## Arguments

### `options`

| Property | Type | Description | Required | Default |
| --- | --- | --- | --- | --- |
| duration | `number` | Specify the duration of the animation cycle, in milliseconds | No | 400 |
| timingFunction | `string` | Set how the animation progresses in the duration of each cycle, [See also documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) | No | "linear"  |
| delay | `number` | Specify the waiting time to apply the animation to the element before starting the animation, in milliseconds | No | 0 |
| transformOrigin | `string` | Set the origin of element transformation | No | "50% 50% 0" |

**Note**: In order to avoid some problems caused by the rendering mechanism, the minimum value of the parameter `duration` is **16ms**.


## Returns

Returns an instance of an `Animation` class

### <span id="toc-animation-interface">Animation</span>

```ts
interface Animation {

  /* ******************* util ******************* */

  /**
   * Export the animation queue, the previous animation data will be cleared after each call of the `export` method.
   * If you need to support the web-side, the parameter `dom` needs to be passed in, otherwise you don’t need to pass in.
   * @param dom
   */
  export: (dom?: HTMLElement) => AnimationData;

  /**
   * Indicates that a set of animations are completed.
   * Any number of animation methods can be called in a group of animations, all animations in a group of animations will start at the same time,
   * and the next group of animations will be executed after a group of animations are completed.
   * @param options Same as the parameters of the `createAnimation` method
   */
  step: (options?: AnimationOptions) => Animation;


  /* ******************* style ******************* */

  /**
   * Set opacity
   * @param value
   */
  opacity: (value: number) => Animation;

  /**
   * Set background color
   * @param value
   */
  backgroundColor: (value: string) => Animation;

  /**
   * Set width
   * @param value
   */
  width: (value: number | string) => Animation;

  /**
   * Set height
   * @param value
   */
  height: (value: number | string) => Animation;

  /**
   * Set the `left` value
   * @param value
   */
  left: (value: number | string) => Animation;

  /**
   * Set the `right` value
   * @param value
   */
  right: (value: number | string) => Animation;

  /**
   * Set the `top` value
   * @param value
   */
  top: (value: number | string) => Animation;

  /**
   * Set the `bottom` value
   * @param value
   */
  bottom: (value: number | string) => Animation;


  /* ******************* rotate ******************* */

  /**
   * Rotate an angle clockwise from the origin
   * @param angle
   */
  rotate: (angle: number) => Animation;

  /**
   * Rotate one angle clockwise from the X axis
   * @param angle
   */
  rotateX: (angle: number) => Animation;

  /**
   * Rotate one angle clockwise from the Y axis
   * @param angle
   */
  rotateY: (angle: number) => Animation;

  /**
   * Rotate one angle clockwise from the Z axis
   * @param angle
   */
  rotateZ: (angle: number) => Animation;

  /**
   * Rotate one angle clockwise from the fixed axis
   * @param x
   * @param y
   * @param z
   * @param angle
   */
  rotate3d: (x: number, y: number, z: number, angle: number) => Animation;


  /* ******************* scale ******************* */

  /**
   * Scale X and Y axes
   * @param sx
   * @param sy
   */
  scale: (sx: number, sy: number) => Animation;

  /**
   * Scale X axes
   * @param scale
   */
  scaleX: (scale: number) => Animation;

  /**
   * Scale Y axes
   * @param scale
   */
  scaleY: (scale: number) => Animation;

  /**
   * Scale Z axes
   * @param scale
   */
  scaleZ: (scale: number) => Animation;

  /**
   * Scale X, Y and Z axis
   * @param sx
   * @param sy
   * @param sz
   */
  scale3d: (sx: number, sy: number, sz: number) => Animation;


  /* ******************* translate ******************* */

  /**
   * Translate transformation
   * @param tx
   * @param ty
   */
  translate: (tx: number, ty: number) => Animation;

  /**
   * Translate the X axis
   * @param translation
   */
  translateX: (translation: number) => Animation;

  /**
   * Translate the Y axis
   * @param translation
   */
  translateY: (translation: number) => Animation;

  /**
   * Translate the Z axis
   * @param translation
   */
  translateZ: (translation: number) => Animation;

  /**
   * Translate the X, Y and Z axis
   * @param tx
   * @param ty
   * @param tz
   */
  translate3d: (tx: number, ty: number, tz: number) => Animation;


  /* ******************* skew ******************* */

  /**
   * Tilt X and Y axis
   * @param ax
   * @param ay
   */
  skew: (ax: number, ay: number) => Animation;

  /**
   * Tilt X axis
   * @param angle
   */
  skewX: (angle: number) => Animation;

  /**
   * Tilt Y axis
   * @param angle
   */
  skewY: (angle: number) => Animation;


  /* ******************* matrix ******************* */

  /**
   * Matrix transformation
   * @param a
   * @param b
   * @param c
   * @param d
   * @param tx
   * @param ty
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix()
   */
  matrix: (
    a: number, b: number, c: number, d: number,
    tx: number, ty: number
  ) => Animation;

  /**
   * 3D matrix transformation
   * @param a1
   * @param b1
   * @param c1
   * @param d1
   * @param a2
   * @param b2
   * @param c2
   * @param d2
   * @param a3
   * @param b3
   * @param c3
   * @param d3
   * @param a4
   * @param b4
   * @param c4
   * @param d4
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d()
   */
  matrix3d: (
    a1: number, b1: number, c1: number, d1: number,
    a2: number, b2: number, c2: number, d2: number,
    a3: number, b3: number, c3: number, d3: number,
    a4: number, b4: number, c4: number, d4: number
  ) => Animation;
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
import { createAnimation } from '@uni/animation';

export default function App() {
  const domRef = useRef();
  const [animation, setAnimation] = useState({}); // The default value is set to an empty object

  useEffect(() => {
    const ani = createAnimation();
    ani.rotate(30).translate(100, 50).step();
    setAnimation(
      ani.export(domRef.current) // The `export` method passes in HTML node parameters
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



```jsx | inline
  import React from 'react';
  export default class Home extends React.Component {
    componentDidMount() {
      document.querySelector('.__dumi-default-menu').style.background = '#fff';
      if (location.search.split(/[?&]/).some(i => i === 'clear=1')) {
        document.querySelector('.__dumi-default-navbar').style.display = 'none';
        document.querySelector('.__dumi-default-layout').classList = [];
        document.querySelector('.__dumi-default-menu').style.display = 'none';
        document.querySelector('.__dumi-default-layout-toc').style.display = 'none';
        document.querySelector('.__dumi-default-layout-content').querySelector('.markdown').querySelector('h1').style.marginTop = 0;
        parent.postMessage && parent.postMessage(parent.postMessage({ event: 'syncIframeHeight', height: document.querySelector('.__dumi-default-layout-content').offsetHeight }, '*'));
      }
    }

    render() {
      return null;
    }
  }
```
