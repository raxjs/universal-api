[![npm](https://img.shields.io/npm/v/universal-network.svg)](https://www.npmjs.com/package/universal-network)

Network status and monitoring.

## Support
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-network --save
```

## Methods

### `getType(options)`

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

Gets the current network state.

#### Success return
| Property         | Type      | Description             | Support                                 |
| ---------------- | --------- | ----------------------- | --------------------------------------- |
| networkType      | `String`  | Network type            | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| networkAvailable | `Boolean` | Availability of network | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />                     |

### `onStatusChange(callback)`

Start listening for changes in network status.

#### Callback return
| Property    | Type      | Description             | Support                                 |
| ----------- | --------- | ----------------------- | --------------------------------------- |
| isConnected | `Boolean` | Availability of network | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| networkType | `String`  | Network type            | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |

### `offStatusChange(callback)`

Cancels all event monitoring if the parameter is empty.

#### Parameters
| Property | Type       | Default | Required | Description                                       | Support             |
| -------- | ---------- | ------- | -------- | ------------------------------------------------- | ------------------- |
| callback | `Function` |         | x        | Callback function for network state change events | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> |

## Example

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

