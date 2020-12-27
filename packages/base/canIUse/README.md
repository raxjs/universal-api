# canIUse 

[![npm](https://img.shields.io/npm/v/evapi.svg)](https://www.npmjs.com/package/evapi)
[![npm](https://img.shields.io/npm/v/evapi-canIUse.svg)](https://www.npmjs.com/package/evapi-canIUse)

判断api是否可用

## 安装

```bash
$ npm install universal-canIUse --save
```
or
```bash
$ npm install universal-api --save
```
## 示例

```javascript
import canIUse from 'universal-canIUse';

canIUse('getapp');

// true
canIUse('storage');
// true
canIUse('storage.getStorage');
// false
canIUse('storage.getStorageInfo');

```

## 方法

### `canIUse(options)`

#### 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| api | `string` | 用来测试的能力（一般为：包名.[方法名]） | ✔️ | - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| res | `boolean` | 为 true 时，表示api或包可用 |
