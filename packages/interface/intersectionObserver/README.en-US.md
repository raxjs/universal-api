# intersectionObserver 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-intersectionObserver.svg)](https://www.npmjs.com/package/evapi-intersectionObserver)

Return An IntersectionObserver object that infers whether and how likely certain nodes are visible to users.

## Install

```bash
$ npm install universal-intersectionObserver --save
```
or
```bash
$ npm install universal-api --save
```
## Usage

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

## Methods

### `createIntersectionObserver(component, options)`

#### Supported

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### Arguments

| Property | Type | Description | required | Default |
| --- | --- | --- | --- | --- |
| component | `object`  | Custom component instance | ✘ | - |
| options | `object`  |  | ✘ | - |
| options.thresholds | `Array<number>` | An array of values, which​contains all thresholds | ✘ | [0] |
| options.initialRatio | `number` | The initial intersection ratio. If the intersection ratio detected at the time of the call is not equal to this value and reaches the threshold, the callback function of the listener is triggered.	 | ✘ | 0 |
| options.observeAll | `boolean` | Indicates whether to observe more than one target node simultaneously. If the value is set to "true", the targetSelector of observe will select multiple nodes. (Note: selecting too many nodes at the same time will affect rendering performance.) | ✘ | false |

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
