# universal-animation [![npm](https://img.shields.io/npm/v/universal-animation.svg)](https://www.npmjs.com/package/universal-animation)

Achieve timing animation, use `bindingx` first when the environment is allowed by [weex-bindingx](https://www.npmjs.com/package/weex-bindingx), and use [universal-transition](https://www.npmjs.com/package/universal-transition) if the environment is not met, call the animation API implementation provided by Weex or browser or mini app.

## Supported

__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_microapp_tt__

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

#### Supported
__icon_web__ __icon_weex__ __icon_miniapp_mp__

#### Arguments

| Property | Type | Description | Required | Default | Supported |
| --- | --- | --- | --- | --- |  --- |
| config.props | `array` | See below for details | yes | - |  |
| callback | `function` | Triggered after the animation is complete | no | - | __icon_web__ __icon_weex__ |

config.props array member content:

| Property | Type | Description | Required | Default | Supported |
| --- | --- | --- | --- | --- |  --- |
| element | `DOMNode|string` | DOM element， The mimi app environment is a `string` type identifier, see details`export()` | yes | - | |
| property | `string` | Animation property, see details [bindingx properties support](https://alibaba.github.io/bindingx/guide/cn_api_attributes) | yes | - |   |
| start | `value` | start value | no | - |   |
| end | `value` | end value | yes | - |   |
| duration | `number` | Animation duration | no | 0 |  |
| delay | `number` | Animation delay time | 否 | 0 |  |
| easing | `string` | Animation effect，see details [bindingx easing support](https://alibaba.github.io/bindingx/guide/cn_api_interpolator) | 否 | `easeOutSine` |   |

### `export()`

#### Supported

__icon_miniapp_mp__

Because the mini app can't provide `DOMNode`, and the animation application is different. So the mini app uses this method to get the animation content and then manually bind to the element.

#### Arguments

no

#### Return

| Property | Type | Description |
| --- | --- | --- |
| result | `object` | return object |
| result[key] | `array` | `key` is config.props[n].element，`value` is the mini app animation content, bind the value to the element  |

#### Usage

```html
<view animation="{{animationInfo1}}" style="background:red;height:100rpx;width:100rpx"></view>
<view animation="{{animationInfo2}}" style="background:yellow;height:100rpx;width:100rpx"></view>
```

```javascript
  const animationResult = animation({
    props: [{
      element: 'view1',
      property: 'transform.translateX',
      easing: 'easeOutSine',
      duration: 200,
      start: 0,
      end: 200,
      delay: 100
    }, {
      element: `view2`,
      property: 'opacity',
      easing: 'easeOutSine',
      duration: 200,
      end: 0.2,
      delay: 100
    }]
  }).export()

  setTimeout(() => {
    this.setData({
      animationInfo1: animationResult.view1,
      animationInfo2: animationResult.view2,
    });
  }, 500);
```




