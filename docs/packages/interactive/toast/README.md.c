# toast 
[![npm](https://img.shields.io/npm/v/@uni/toast.svg)](https://www.npmjs.com/package/@uni/toast)

通用弱提示，可选择多少秒之后消失

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" /> 

## 安装

```bash
$ npm install @uni/toast --save
```

## 示例

```js
import { showToast, hideToast } from '@uni/toast';

showToast('Hi');

hideToast();
```

你也可以从大包引入：
```js
import { toast } from '@uni/apis';
```

## 方法

### `showToast(options?: object)`

#### 参数
| 成员     | 类型     | 描述                | 默认值 |
| -------- | -------- | ------------------- | :----: |
| content  | `string` | 文字内容            |   -    |
| type | `success | fail | none` | 弹窗类型 |  none  |
| duration | `number` | 显示时长，单位为 ms |  2000  |
| success | `function` | 成功回调 |  -  |
| fail | `function` | 失败回调 |  -  |
| complete | `function` | 结束回调 |  -  |

### `hideToast()`

隐藏Toast


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
