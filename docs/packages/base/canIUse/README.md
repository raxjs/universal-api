# canIUse 

[![npm](https://img.shields.io/npm/v/@uni/caniuse.svg)](https://www.npmjs.com/package/@uni/caniuse)

判断api是否可用

## 安装

```bash
$ npm install @uni/caniuse --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

```javascript
import canIUse from '@uni/caniuse';

// true
canIUse('storage');
// true
canIUse('storage.getStorage');
// false
canIUse('storage.getStorageInfo');

```

你也可以从大包引入：

```js
import {canIUse} from '@uni/apis';
```

## 方法

### `canIUse(options)`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| api | `string` | 用来测试的能力（一般为：包名.[方法名]） | ✔️ | - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| res | `boolean` | 为 true 时，表示api或包可用 |


```jsx | inline
  import React from 'react';
  export default class Home extends React.Component {
    componentDidMount() {
      if (location.search.split(/[?&]/).some(i => i === 'clear=1')) {
        document.querySelector('.__dumi-default-navbar').style.display = 'none';
        document.querySelector('.__dumi-default-layout').classList = [];
        document.querySelector('.__dumi-default-menu').style.display = 'none';
        document.querySelector('.__dumi-default-layout-toc').style.display = 'none';
        document.querySelector('.__dumi-default-layout-content').style.padding = '50px 100px';
      }
    }

    render() {
      return null;
    }
  }
```
