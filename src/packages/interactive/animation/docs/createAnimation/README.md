# createAnimation

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@uni/animation.svg)](https://www.npmjs.com/package/@uni/animation)

创建一个动画实例 `Animation`。

可以通过 **链式调用** 实例方法来描述动画，最后通过 `export` 方法导出动画数据，然后将动画数据与组件或 HTML 节点绑定。


<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

## 安装

```bash
$ npm install @uni/animation --save
```

## 示例

```js
import createAnimation from '@uni/animation';

const animation = createAnimation();

animation
  .rotate(30)
  .translate(100, 50)
  .step();

// 小程序端场景，需要将 `data` 传递给组件的 `animation` 属性
const data = animation.export();

// 如果需要支持 web 端场景，`export` 方法需要额外传绑定的 HTML 节点
// const data = animation.export(document.getElementById('app'));
```

## 语法

```
createAnimation(options): Animation
```

## 参数

### `options`

| 属性名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| duration | `number` | 指定一个动画周期的时长，单位 ms | 否 | 400 |
| timingFunction | `string` | 设置动画在每个周期的持续时间如何进展，[参考文档](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) | 否 | "linear"  |
| delay | `number` | 动画延迟时间，单位 ms | 否 | 0 |
| transformOrigin | `string` | 指定元素变形的原点 | 否 | "50% 50% 0" |

## 返回值

返回一个 `Animation` 对象

### Animation

```ts
interface Animation {

  /* ******************* 工具方法 ******************* */

  /**
   * 导出动画队列，`export` 方法每次调用后会清掉之前的动画操作
   * 如果需要支持 web 端，则参数 `dom` 需要传入，否则可不用传
   * @param dom
   */
  export: (dom?: HTMLElement) => AnimationData;

  /**
   * 表示一组动画完成。可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画
   * @param options 与 `createAnimation` 方法的参数一致
   */
  step: (options?: AnimationOptions) => Animation;


  /* ******************* 样式 ******************* */

  /**
   * 设置透明度
   * @param value
   */
  opacity: (value: number) => Animation;

  /**
   * 设置背景色
   * @param value
   */
  backgroundColor: (value: string) => Animation;

  /**
   * 设置宽度
   * @param value
   */
  width: (value: number | string) => Animation;

  /**
   * 设置高度
   * @param value
   */
  height: (value: number | string) => Animation;

  /**
   * 设置 left 值
   * @param value
   */
  left: (value: number | string) => Animation;

  /**
   * 设置 right 值
   * @param value
   */
  right: (value: number | string) => Animation;

  /**
   * 设置 top 值
   * @param value
   */
  top: (value: number | string) => Animation;

  /**
   * 设置 bottom 值
   * @param value
   */
  bottom: (value: number | string) => Animation;


  /* ******************* 旋转 ******************* */

  /**
   * 从原点顺时针旋转一个角度
   * @param angle
   */
  rotate: (angle: number) => Animation;

  /**
   * 从 X 轴顺时针旋转一个角度
   * @param angle
   */
  rotateX: (angle: number) => Animation;

  /**
   * 从 Y 轴顺时针旋转一个角度
   * @param angle
   */
  rotateY: (angle: number) => Animation;

  /**
   * 从 Z 轴顺时针旋转一个角度
   * @param angle
   */
  rotateZ: (angle: number) => Animation;

  /**
   * 从 固定 轴顺时针旋转一个角度
   * @param x
   * @param y
   * @param z
   * @param angle
   */
  rotate3d: (x: number, y: number, z: number, angle: number) => Animation;


  /* ******************* 缩放 ******************* */

  /**
   * 缩放 XY 轴
   * @param sx
   * @param sy
   */
  scale: (sx: number, sy: number) => Animation;

  /**
   * 缩放 X 轴
   * @param scale
   */
  scaleX: (scale: number) => Animation;

  /**
   * 缩放 Y 轴
   * @param scale
   */
  scaleY: (scale: number) => Animation;

  /**
   * 缩放 Z 轴
   * @param scale
   */
  scaleZ: (scale: number) => Animation;

  /**
   * 缩放 XYZ 轴
   * @param sx
   * @param sy
   * @param sz
   */
  scale3d: (sx: number, sy: number, sz: number) => Animation;


  /* ******************* 平移转换 ******************* */

  /**
   * 平移变换
   * @param tx
   * @param ty
   */
  translate: (tx: number, ty: number) => Animation;

  /**
   * 对 X 轴平移
   * @param translation
   */
  translateX: (translation: number) => Animation;

  /**
   * 对 Y 轴平移
   * @param translation
   */
  translateY: (translation: number) => Animation;

  /**
   * 对 Z 轴平移
   * @param translation
   */
  translateZ: (translation: number) => Animation;

  /**
   * 对 xyz 坐标进行平移变换
   * @param tx
   * @param ty
   * @param tz
   */
  translate3d: (tx: number, ty: number, tz: number) => Animation;


  /* ******************* 倾斜 ******************* */

  /**
   * 对 X、Y 轴坐标进行倾斜
   * @param ax
   * @param ay
   */
  skew: (ax: number, ay: number) => Animation;

  /**
   * 对 X 轴坐标进行倾斜
   * @param angle
   */
  skewX: (angle: number) => Animation;

  /**
   * 对 Y 轴坐标进行倾斜
   * @param angle
   */
  skewY: (angle: number) => Animation;


  /* ******************* 矩阵变换 ******************* */

  /**
   * 矩阵变换
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
   * 3d 矩阵变换
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
import createAnimation from '@uni/animation';

export default function App() {
  const domRef = useRef();
  const [animation, setAnimation] = useState({}); // 默认值设置为一个空对象

  useEffect(() => {
    const ani = createAnimation();
    ani.rotate(30).translate(100, 50).step();
    setAnimation(
      ani.export(domRef.current) // `export` 方法传入 HTML 节点参数
    );
  }, []);

  return (
    <View ref={domRef} animation={animation} />
  )
}
```


</div>
</div>
