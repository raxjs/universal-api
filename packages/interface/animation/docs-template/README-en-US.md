# universal-animation [![npm](https://img.shields.io/npm/v/universal-animation.svg)](https://www.npmjs.com/package/universal-animation)

Achieve timing animation, use `bindingx` first when the environment is allowed by [weex-bindingx](https://www.npmjs.com/package/weex-bindingx), and use [universal-transition](https://www.npmjs.com/package/universal-transition) if the environment is not met, call the animation API implementation provided by Weex or browser or mini app.

## Supported

__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__ __icon_quick_app__

## Install

```bash
$ npm install universal-animation --save
```

## Usage

```js
import animate from 'universal-animation';

animate({
  props: [{
    element: findDOMNode(this.refs.block2),
    property,
    easing,
    duration,
    start,
    end,
    delay
  }]
}, () => {
  console.log('timing end')
})

```

## Methods

### `animate(config, callback)`

#### Arguments

| Property | Type | Description | Required | Default | Supported |
| --- | --- | --- | --- | --- |  --- |
| config.props | `Array` | See below for details | yes | - |__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__ __icon_quick_app__ |
| callback | `function` | Triggered after the animation is complete | no | - | __icon_web__ __icon_weex__  |

config.props array member content:

| Property | Type | Description | Required | Default | Supported |
| --- | --- | --- | --- | --- |  --- |
| element | `DOMNode|string` | DOM element， The mimi app environment is a `string` type identifier, see details`export()` | yes | - | __icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__ __icon_quick_app__ |
| property | `string` | Animation property, see details [bindingx properties support](https://alibaba.github.io/bindingx/guide/cn_api_attributes) | yes | - | __icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__ __icon_quick_app__  |
| start | `value` | start value | no | - | __icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__ __icon_quick_app__   |
| end | `value` | end value | yes | - |  __icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__ __icon_quick_app__ |
| duration | `number` | Animation duration | no | 0 | __icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__ __icon_quick_app__  |
| delay | `number` | Animation delay time | 否 | 0 | __icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__ __icon_quick_app__  |
| easing | `string` | Animation effect，see details [bindingx easing support](https://alibaba.github.io/bindingx/guide/cn_api_interpolator) | 否 | `easeOutSine` | __icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__ __icon_quick_app__ |

### `export()`

#### Supported

__icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__ __icon_quick_app__

Because the mini app can't provide `DOMNode`, and the animation application is different. So the mini app uses this method to get the animation content and then manually bind to the element.

#### Arguments

no

#### Return

| Property | Type | Description |
| --- | --- | --- |
| result | `Object` | return object |
| result[key] | `Array` | `key` is config.props[n].element，`value` is the mini app animation content, bind the value to the element  |

#### Usage

```jsx | pure
import { createElement, useState, useEffect, useRef, Fragment } from 'rax';
import animate from 'universal-animation';
import findDOMNode from 'rax-find-dom-node';
import View from 'rax-view';
import { isMiniApp } from 'universal-env';

export default function Demo() {
  const [animationInfo1, setAnimationInfo1] = useState({});
  const [animationInfo2, setAnimationInfo2] = useState({});
  const block1 = useRef();
  const block2 = useRef();

  useEffect(() => {
    const animationResult = animate(
      {
        props: [
          {
            element: isMiniApp ? 'view1' : findDOMNode(block1.current),
            property: 'transform.translateX',
            easing: 'easeOutSine',
            duration: 200,
            start: 0,
            end: 200,
            delay: 100,
          },
          {
            element: isMiniApp ? 'view2' : findDOMNode(block2.current),
            property: 'opacity',
            easing: 'easeOutSine',
            duration: 200,
            end: 0.2,
            delay: 100,
          },
        ],
      },
      () => {
        console.log('timing end');
      },
    ).export();

    if (isMiniApp) {
      setAnimationInfo1(animationResult.view1);
      setAnimationInfo2(animationResult.view2);
    }
  }, []);

  return (
    <>
      <View
		ref={block1}
        animation={animationInfo1}
        style={{ backgroundColor: 'red', height: '100rpx', width: '100rpx' }}
      ></View>
      <View
		ref={block2}
        animation={animationInfo2}
        style={{ backgroundColor: 'yellow', height: '100rpx', width: '100rpx' }}
      ></View>
    </>
  );
}
```



