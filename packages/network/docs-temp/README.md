[![npm](https://img.shields.io/npm/v/universal-network.svg)](https://www.npmjs.com/package/universal-network)

Network status and monitoring.

## Support
__icon_miniapp_mp__ __icon_miniapp_wx__

## Install

```bash
$ npm install universal-network --save
```

## Methods

### `getType(options)`

Gets the current network state.

#### Success return
| Property         | Type      | Description             | Support                                 |
| ---------------- | --------- | ----------------------- | --------------------------------------- |
| networkType      | `String`  | Network type            | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| networkAvailable | `Boolean` | Availability of network | __icon_miniapp_mp__                     |

### `onStatusChange(callback)`

Start listening for changes in network status.

#### Callback return
| Property    | Type      | Description             | Support                                 |
| ----------- | --------- | ----------------------- | --------------------------------------- |
| isConnected | `Boolean` | Availability of network | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| networkType | `String`  | Network type            | __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `offStatusChange(callback)`

Cancels all event monitoring if the parameter is empty.

#### Parameters
| Property | Type       | Default | Required | Description                                       | Support             |
| -------- | ---------- | ------- | -------- | ------------------------------------------------- | ------------------- |
| callback | `Function` |         | x        | Callback function for network state change events | __icon_miniapp_mp__ |

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

