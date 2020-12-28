# intersectionObserver 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-intersectionObserver.svg)](https://www.npmjs.com/package/evapi-intersectionObserver)

用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。

## 安装

```bash
$ npm install universal-intersectionObserver --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import createIntersectionObserver from 'universal-intersectionObserver';

const intersectionObserver = createIntersectionObserver({
  component: null,
  options: {
    thresholds: [0]
  }
});

intersectionObserver.relativeTo('.box').observe('.circle', res => {
  console.log(res);
});

```

## 方法

### `createIntersectionObserver(component, options)`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✘ | - |
| options.thresholds | `Array<number>` | 一个数值数组，包含所有阈值 | ✘ | [0] |
| options.initialRatio | `number` | 初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数 | ✘ | 0 |
| options.observeAll | `boolean` | 是否同时观测多个目标节点（而非一个），如果设为 true ，observe 的 targetSelector 将选中多个节点（注意：同时选中过多节点将影响渲染性能） | ✘ | false |
| component | `object`  | 自定义组件实例 | ✘ | - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| IntersectionObserver | `Object` | IntersectionObserver 对象 |


### `IntersectionObserver.relativeTo(string selector, Object margins)`

使用选择器指定一个节点，作为参照区域之一。

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| selector | `string` | 选择器 | ✔️ | - |
| margins | `object`  | 用来扩展（或收缩）参照节点布局区域的边界 | ✘ | - |
| margins.left | `number` | 节点布局区域的左边界 | ✘ | - |
| margins.top | `number` | 节点布局区域的上边界 | ✘ | - |
| margins.right | `number` |  节点布局区域的右边界 | ✘ | - |
| margins.bottom | `number` | 节点布局区域的下边界 | ✘ | - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| IntersectionObserver | `Object` | IntersectionObserver 对象 |


### `IntersectionObserver.relativeToViewport(Object margins)`

指定页面显示区域作为参照区域之一

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| margins | `object`  | 用来扩展（或收缩）参照节点布局区域的边界 | ✘ | - |
| margins.left | `number` | 节点布局区域的左边界 | ✘ | - |
| margins.top | `number` | 节点布局区域的上边界 | ✘ | - |
| margins.right | `number` |  节点布局区域的右边界 | ✘ | - |
| margins.bottom | `number` | 节点布局区域的下边界 | ✘ | - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| IntersectionObserver | `Object` | IntersectionObserver 对象 |


### `IntersectionObserver.observe(string targetSelector, function callback)`

指定目标节点并开始监听相交状态变化情况

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| targetSelector | `string` | 目标选择器 | ✔️ | - |
| callback | `Function` | 监听相交状态变化的回调函数 | ✘ | - |

#### callback res

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| intersectionRatio | `number` | 相交比例 |
| intersectionRect | `Object` | 相交区域的边界 |
| boundingClientRect | `Object` |  目标边界 |
| relativeRect | `Object` | 参照区域的边界 |
| time | `number` | 相交检测时的时间戳 |

#### intersectionRect、boundingClientRect

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| left | `number` | 左边界 |
| top | `number` | 上边界 |
| right | `number` |  右边界 |
| bottom | `number` | 下边界 |
| width | `number` | 宽度 |
| height | `number` | 高度 |

#### relativeRect

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| left | `number` | 左边界 |
| top | `number` | 上边界 |
| right | `number` |  右边界 |
| bottom | `number` | 下边界 |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| IntersectionObserver | `Object` | IntersectionObserver 对象 |


### `IntersectionObserver.disconnect()`

停止监听。回调函数将不再触发
