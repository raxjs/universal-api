[![npm](https://img.shields.io/npm/v/universal-network.svg)](https://www.npmjs.com/package/universal-network)

网络状态与监听。

## 支持
__icon_miniapp_mp__ __icon_miniapp_wx__

## 安装

```bash
$ npm install universal-network --save
```

## 方法

### `getType(options)`

获取当前网络状态。

#### success 返回
| 属性             | 类型      | 描述         | 支持                                    |
| ---------------- | --------- | ------------ | --------------------------------------- |
| networkType      | `String`  | 网络类型     | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| networkAvailable | `Boolean` | 网络是否可用 | __icon_miniapp_mp__                     |

### `onStatusChange(callback)`

开始监听网络状态变化。

#### callback 返回
| 属性        | 类型      | 描述         | 支持                                    |
| ----------- | --------- | ------------ | --------------------------------------- |
| isConnected | `Boolean` | 网络是否可用 | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| networkType | `String`  | 网络类型     | __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `offStatusChange(callback)`

取消监听网络状态变化，参数为空，则取消所有的事件监听。

#### 参数
| 属性     | 类型       | 默认值 | 必选 | 描述                       | 支持                                    |
| -------- | ---------- | ------ | ---- | -------------------------- | --------------------------------------- |
| callback | `Function` |        | x    | 网络状态变化事件的回调函数 | __icon_miniapp_mp__ __icon_miniapp_wx__ |

## 示例

```js
import Network from 'universal-network';

Network.getType().then(res => {
  console.log(res.networkType);
});
Network.onStatusChange((res) => {
  console.log('on: ', res.networkType)
});
setTimeout(() => {
  Network.offStatusChange();
}, 1000);

```
