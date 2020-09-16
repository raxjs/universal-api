# universal-transition [![npm](https://img.shields.io/npm/v/universal-transition.svg)](https://www.npmjs.com/package/universal-transition)

Used to create transition animation.

## Supported

__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__

## Install

```bash
$ npm install universal-transition --save
```

## Usage

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

## Methods

### `transition(domNode, styles, options, callback)`

#### Supported

__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_miniapp_bytedance__

#### Arguments

| Property | Type | Description | Required | Default | Supported |
| --- | --- | --- | --- | --- |  --- |
| domNode | `DOMNode`  | Specified element，mini app does not support，see below for details[mini app instructions] | yes | - |  __icon_web__ __icon_weex__ |
| styles | `object`  | See below for details | yes | - |   |
| options | `Object`  | options，See below for details | no | - |   |
| callback | `function`  |  Triggered after the animation is complete，mini app does not support | no | - | __icon_web__ __icon_weex__ |

The properties listed below are supported for each environment, and the properties not listed are not guaranteed for each environment.

styles supported attributes and situation description：

| Property | Type | Description | Default |
| --- | --- | --- | --- |
| styles.backgroundColor |  `color` | background color | - |
| styles.height | `length` | Length value | - |
| styles.width | `length` | Length value | - |
| styles.opacity | `number` | Opacity 0-1 | - |
| styles.transform | `string` | transform type，see below for details | - |

styles.transform supported attributes：

| Property | Type | Description | Default |
| --- | --- | --- | --- |
| translate、translateX、translateY | `number | percentage` | Specify where the element is moved to | 0 |
| rotate、rotateX、rotateY | `angle` | Specifies the angle at which the element is deflected | 0 |
| scale、scaleX、scaleY| `number` | Specify multiples of zoomed in and out elements | 1 |

options：

| Property | Type | Description | Default |
| --- | --- | --- | --- |
| options.timingFunction |  `string` | Animation effect，valid values are："linear","ease","ease-in","ease-in-out","ease-out"(Unlisted values, there may be compatibility issues) | ease |
| options.delay |  `number` | Animation delay time | 0 |
| options.duration |  `number` | Animation duration | 0 |

#### Return

Mini app return `export()`，other cases return `undefined`

## Mini app instructions：

Because the mini app can't provide `DOMNode`, and use animation way is different. So the mini app needs to get the animation content by the `export()` method and then manually bind to the element.

### Usage

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
