# universal-animation  [![npm](https://img.shields.io/npm/v/universal-animation.svg)](https://www.npmjs.com/package/universal-animation)

实现动画，通过 [weex-bindingx](https://www.npmjs.com/package/weex-bindingx) 环境允许的前提下优先使用 `bindingx`，不满足环境要求则使用 [universal-transition](https://www.npmjs.com/package/universal-transition) 调用Weex或浏览器或小程序提供的动画API实现。

## 支持
 <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

## 安装

```bash
$ npm install universal-animation --save
```

## 方法

### `animate(config, callback)`

#### 参数

| 成员 | 类型 | 描述 | 必选 |默认值 | 支持 |
| --- | --- | --- | --- | --- |  --- |
| config.props | `Array` | 详见下文描述 | ✔️ | - |    <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| callback | `function` | 动画完成后触发 | 	✘ | - |  <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> |

config.props数组成员内容:

| 成员 | 类型 | 描述 | 必选 |默认值 | 支持 |
| --- | --- | --- | --- | --- |  --- |
| element | `DOMNode|string` | DOM 元素， 小程序环境为一个`string` 类型的标志符，详细见`export()` | ✔️ | - |  <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">|
| property | `string` | 动画属性，详见[bindingx properties support](https://alibaba.github.io/bindingx/guide/cn_api_attributes) | ✔️ | - |   <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| start | `value` | 初始值 |✘ | - | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">   |
| end | `value` | 结束值 | ✔️ | - |   <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| duration | `number` | 动画持续时间 | ✘ | 0 | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">  |
| delay | `number` | 动画延迟时间 |✘ | 0 | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">  |
| easing | `string` | 动画属性，详见[bindingx easing support](https://alibaba.github.io/bindingx/guide/cn_api_interpolator) | ✘ | `easeOutSine` |  <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">  |

### export()

#### 支持

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />  <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

因为小程序无法提供`DOMNode`，并且动画应用方式也有差异。所以小程序中使用该方法获取动画内容，然后手动绑定到元素。

#### 参数

无

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| result | `Object` | 返回的对象 |
| result[key] | `Array` | `key` 为 config.props[n].element，`value` 为小程序动画内容，将该值绑定到元素  |

## 示例

```jsx
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



