# universal-animation [![npm](https://img.shields.io/npm/v/universal-animation.svg)](https://www.npmjs.com/package/universal-animation)

实现动画，通过 [weex-bindingx](https://www.npmjs.com/package/weex-bindingx) 环境允许的前提下优先使用 `bindingx`，不满足环境要求则使用 [universal-transition](https://www.npmjs.com/package/universal-transition) 调用Weex或浏览器或小程序提供的动画API实现。

## 支持

__icon_web__ __icon_weex__ __icon_miniapp_mp__  __icon_microapp_tt__

## 安装

```bash
$ npm install universal-animation --save
```

## 示例

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

## 方法

### `animate(config, callback)`

#### 支持

__icon_web__ __icon_weex__ __icon_miniapp_mp__

#### 参数

| 成员 | 类型 | 描述 | 必选 |默认值 | 支持 |
| --- | --- | --- | --- | --- |  --- |
| config.props | `array` | 详见下文描述 | 是 | - |  |
| callback | `function` | 动画完成后触发 | 否 | - | __icon_web__ __icon_weex__ |

config.props数组成员内容:

| 成员 | 类型 | 描述 | 必选 |默认值 | 支持 |
| --- | --- | --- | --- | --- |  --- |
| element | `DOMNode|string` | DOM 元素， 小程序环境为一个`string` 类型的标志符，详细见`export()` | 是 | - | |
| property | `string` | 动画属性，详见[bindingx properties support](https://alibaba.github.io/bindingx/guide/cn_api_attributes) | 是 | - |   |
| start | `value` | 初始值 | 否 | - |   |
| end | `value` | 结束值 | 是 | - |   |
| duration | `number` | 动画持续时间 | 否 | 0 |  |
| delay | `number` | 动画延迟时间 | 否 | 0 |  |
| easing | `string` | 动画属性，详见[bindingx easing support](https://alibaba.github.io/bindingx/guide/cn_api_interpolator) | 否 | `easeOutSine` |   |

### export()

#### 支持

__icon_miniapp_mp__

因为小程序无法提供`DOMNode`，并且动画应用方式也有差异。所以小程序中使用该方法获取动画内容，然后手动绑定到元素。

#### 参数

无

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| result | `object` | 返回的对象 |
| result[key] | `array` | `key` 为 config.props[n].element，`value` 为小程序动画内容，将该值绑定到元素  |

#### 实例

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




