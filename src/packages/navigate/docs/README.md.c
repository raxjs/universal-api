# navigate
[![npm](https://img.shields.io/npm/v/@uni/navigate.svg)](https://www.npmjs.com/package/@uni/navigate)

路由导航能力实现

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali miniprogram" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechatMiniprogram" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedanceMicroApp" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

## Install
```bash
$ npm install @uni/navigate --save
```

## Usage
```javascript
import navigate from '@uni/navigate';

// 快应用中的引入方法
// import chooseImage from '@uni/navigate/lib/quickapp;

navigate.push({
  url: 'https://www.taobao.com/'
}).then(() => {
});

navigate.back().then(() => {
});

navigate.go({
  step: -1
}).then(() => {
});

navigate.replace({
  url: 'https://www.taobao.com/'
}).then(() => {
});

navigate.reLaunch({
  url: 'https://www.taobao.com/'
}).then(() => {
});

```
## 方法
### `push(options)`

#### 参数
| 成员             | 类型      | 描述                                       | 必选  | 默认值 |
| ---------------- | --------- | ------------------------------------------ | :---: | :----: |
| options          | `object`  | push 参数                                  |  是   |   -    |
| options.url      | `string`  | 页面 URL.                                  |  是   |   -    |
| options.success | `Function`  | 成功的回调 | 否 | - |
| options.fail | `Function`  | 失败的回调 | 否 | - |
| options.complete | `Function`  | 结束的回调 | 否 | - |

### `back(options)`

#### 参数
| 成员             | 类型      | 描述                                       | 必选  | 默认值 |
| ---------------- | --------- | ------------------------------------------ | :---: | :----: |
| options          | `object`  | pop 参数                                   |  否   |   -    |
| options.success | `Function`  | 成功的回调 | 否 | - |
| options.fail | `Function`  | 失败的回调 | 否 | - |
| options.complete | `Function`  | 结束的回调 | 否 | - |

### `go(options)`

#### 参数
| 成员             | 类型      | 描述                                                                                | 必选  | 默认值 |
| ---------------- | --------- | ----------------------------------------------------------------------------------- | :---: | :----: |
| options          | `object`  | go 参数                                                                             |  是   |   -    |
| options.step     | `number`  | 前进步数为正值且仅支持web，后退步数为负值，若大于现有打开的页面数，则返回到起始页。 |  是   |   -    |
| options.success | `Function`  | 成功的回调 | 否 | - |
| options.fail | `Function`  | 失败的回调 | 否 | - |
| options.complete | `Function`  | 结束的回调 | 否 | - |

### `replace(options)`

#### 参数
| 成员             | 类型      | 描述                                                                                | 必选  | 默认值 |
| ---------------- | --------- | ----------------------------------------------------------------------------------- | :---: | :----: |
| options          | `object`  | go 参数                                                                             |  是   |   -    |
| options.url      | `string`  | 页面 URL.                                  |  是   |   -    |
| options.success | `Function`  | 成功的回调 | 否 | - |
| options.fail | `Function`  | 失败的回调 | 否 | - |
| options.complete | `Function`  | 结束的回调 | 否 | - |

### `reLaunch(options)`

#### 参数
| 成员             | 类型      | 描述                                                                                | 必选  | 默认值 |
| ---------------- | --------- | ----------------------------------------------------------------------------------- | :---: | :----: |
| options          | `object`  | go 参数                                                                             |  是   |   -    |
| options.url      | `string`  | 页面 URL.                                  |  是   |   -    |
| options.success | `Function`  | 成功的回调 | 否 | - |
| options.fail | `Function`  | 失败的回调 | 否 | - |
| options.complete | `Function`  | 结束的回调 | 否 | - |


### `switchTab(options)`
不支持 web 端

## 参数
| 成员             | 类型      | 描述    | 必选  | 默认值 |
| ---------------- | --------- | ------ | :---: | :----: |
| options          | `object`  | 函数参数    |  是   |   -    |
| options.url      | `string`  | 页面 URL.  |  是   |   -    |
| options.success | `Function`  | 成功的回调 | 否 | - |
| options.fail | `Function`  | 失败的回调 | 否 | - |
| options.complete | `Function`  | 结束的回调 | 否 | - |
