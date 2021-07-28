# intersectionObserver 

[![npm](https://img.shields.io/npm/v/@uni/apis.svg)](https://www.npmjs.com/package/@uni/apis)
[![npm](https://img.shields.io/npm/v/@uniintersectionObserver.svg)](https://www.npmjs.com/package/@uni/intersection-observer)

Return An IntersectionObserver object that infers whether and how likely certain nodes are visible to users.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;max-width: 50%;">

## Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp">

## Install

```bash
$ npm install @uni/intersectionObserver --save
```
or
```bash
$ npm install @uni/apis --save
```
## Usage

```javascript
import createIntersectionObserver from '@uni/intersection-observer';

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

You can also import from the big package：
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

## Methods

### `createIntersectionObserver(component, options)`

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✘ | - |
| options.thresholds | `Array<number>` | An array of values, which​contains all thresholds | ✘ | [0] |
| options.initialRatio | `number` | The initial intersection ratio. If the intersection ratio detected at the time of the call is not equal to this value and reaches the threshold, the callback function of the listener is triggered.	 | ✘ | 0 |
| options.selectAll | `boolean` | Indicates whether to observe more than one target node simultaneously. If the value is set to "true", the targetSelector of observe will select multiple nodes. (Note: selecting too many nodes at the same time will affect rendering performance.) | ✘ | false |
| component | `object`  | Custom component instance | ✘ | - |

#### Return

| Property | Type | Description |
| --- | --- | --- |
| IntersectionObserver | `Object` | IntersectionObserver |


### `IntersectionObserver.relativeTo(string selector, Object margins)`

Uses a selector to specify a node as one of the reference areas.

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| selector | `string` | Selector | ✔️ | - |
| margins | `object`  | Expands/Contracts the border of the layout area of the reference node. | ✘ | - |
| margins.left | `number` | Left border of the node layout area | ✘ | - |
| margins.top | `number` | Upper border of the node layout area | ✘ | - |
| margins.right | `number` |  Right border of the node layout area | ✘ | - |
| margins.bottom | `number` | Lower border of the node layout area | ✘ | - |

#### Return

| Property | Type | Description |
| --- | --- | --- |
| IntersectionObserver | `Object` | IntersectionObserver |


### `IntersectionObserver.relativeToViewport(Object margins)`

Specifies the page display area as one of the reference areas.

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| margins | `object`  | Expands/Contracts the border of the layout area of the reference node. | ✘ | - |
| margins.left | `number` | Left border of the node layout area | ✘ | - |
| margins.top | `number` | Upper border of the node layout area | ✘ | - |
| margins.right | `number` |  Right border of the node layout area | ✘ | - |
| margins.bottom | `number` | Lower border of the node layout area | ✘ | - |

#### Return

| Property | Type | Description |
| --- | --- | --- |
| IntersectionObserver | `Object` | IntersectionObserver |


### `IntersectionObserver.observe(string targetSelector, function callback)`

Specifies the target node and starts listening on changes in the intersection status.

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| targetSelector | `string` | Selector | ✔️ | - |
| callback | `Function` | The callback function for listening on intersection status changes. | ✘ | - |

#### callback res

| Property | Type | Description |
| --- | --- | --- |
| intersectionRatio | `number` | Intersection ratio |
| intersectionRect | `Object` | The border of the intersection area |
| boundingClientRect | `Object` |  The target border |
| relativeRect | `Object` | The border of the reference area |
| time | `number` | The timestamp for intersection detection |

#### intersectionRect、boundingClientRect

| Property | Type | Description |
| --- | --- | --- |
| left | `number` | Left border |
| top | `number` | Upper border |
| right | `number` |  Right border |
| bottom | `number` | Lower border |
| width | `number` | width |
| height | `number` | height |

#### relativeRect

| Property | Type | Description |
| --- | --- | --- |
| left | `number` | Left border |
| top | `number` | Upper border |
| right | `number` |  Right border |
| bottom | `number` | Lower border |

#### Return

| Property | Type | Description |
| --- | --- | --- |
| IntersectionObserver | `Object` | IntersectionObserver |


### `IntersectionObserver.disconnect()`

Stops listening, and the callback function will no longer be triggered.

## 注意

所有方法在微信小程序的自定义组件中使用的时候，都需要添加第二个参数来指定自定义组件实例：

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
    <div style="text-align: center;">wechat miniprogram</div>
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
