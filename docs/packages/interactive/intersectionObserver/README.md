# intersectionObserver 


[![npm](https://img.shields.io/npm/v/@uniintersectionObserver.svg)](https://www.npmjs.com/package/@uni/intersection-observer)

用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> 

## 安装

```bash
$ npm install @uni/intersection-observer --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

```javascript
import createIntersectionObserver from '@uni/intersection-observer';

const intersectionObserver = createIntersectionObserver({
  options: {
    thresholds: [0]
  }
});

intersectionObserver.relativeTo('.box').observe('.circle', res => {
  console.log(res);
});

```

你也可以从大包引入：
```js
import { intersectionObserver } from '@uni/apis';

const observer = intersectionObserver({
  options: {
    thresholds: [0]
  }
});

observer.relativeTo('.box').observe('.circle', res => {
  console.log(res);
});
```

## 方法

### `createIntersectionObserver(component, options)`

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✘ | - |
| options.thresholds | `Array<number>` | 一个数值数组，包含所有阈值 | ✘ | [0] |
| options.initialRatio | `number` | 初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数 | ✘ | 0 |
| options.selectAll | `boolean` | 是否同时观测多个目标节点（而非一个），如果设为 true ，observe 的 targetSelector 将选中多个节点（注意：同时选中过多节点将影响渲染性能） | ✘ | false |
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


## 注意

所有方法在微信小程序、百度小程序的自定义组件中使用的时候，都需要添加第二个参数来指定自定义组件实例：

```js
// 在 Rax 小程序编译时链路参数为 this._internal
createIntersectionObserver({thresholds: [0]}, this);

// rax小程序基于kbone的运行时方案，不支持relativeTo，微信端使用时需要按下方示例方式传入实例
useEffect(() => {
  const node = document.querySelector('#circle');
  const intersectionObserver = createIntersectionObserver({}, node._internal);

  intersectionObserver.relativeToViewport().observe('#circle', res => {
    console.log(res);
    setAppear(res.intersectionRatio > 0);
  });
}, []);
```

为保证多端可用，可参考demo实现

```js
  useEffect(() => {
    // 阿里小程序需在 ​page.onReady​ 之后执行 ​createIntersectionObserver()，setTimeout 可延迟执行时机
    setTimeout(() => {
      // node必须为block元素和circle元素的共同父元素
      const node = document.querySelector('.parent');
      const intersectionObserver = createIntersectionObserver(null, node._internal);

      // 由于rax运行时在微信存在shadow dom问题，所以采用深度选择器
      const clsPre = isWeChatMiniProgram ? '.parent >>> ' : '';
      intersectionObserver.relativeTo(clsPre + '.block').observe(clsPre + '.circle', res => {
        console.log(res);
        setAppear(res.intersectionRatio > 0);
      });
    }, 0);
  }, []);
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
    }} src='https://herbox-embed.alipay.com/p/uni/uni?previewZoom=100&view=preview&defaultPage=pages/intersection-observer/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i1/O1CN01sbwluA1elHfCzI6Y1_!!6000000003911-0-tps-712-632.jpg" width="220" height="200" />
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
