# universal-asyncstorage [![npm](https://img.shields.io/npm/v/universal-asyncstorage.svg)](https://www.npmjs.com/package/universal-asyncstorage)

> AsyncStorage

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="quickApp" src="https://gw.alicdn.com/tfs/TB1MP7EwQT2gK0jSZPcXXcKkpXa-200-200.svg" width="25px" height="25px">  <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-asyncstorage --save
```

## Usage

```js
import AsyncStorage from 'universal-asyncstorage';

// setItem(key, value)
AsyncStorage.setItem('key', 'value').then(() => {});

// getItem(key)
AsyncStorage.getItem('key').then(value => {
  if (value !== null){
    console.log(value);
  }
});

// removeItem(key)
AsyncStorage.removeItem('key').then(res => {});

// getAllKeys()
AsyncStorage.getAllKeys().then(res => {
  console.log(res.join());
});

// clear()
AsyncStorage.clear().then(() => {});
```

## Methods

### `setItem(key: string, value: string): Promise<null>`

#### Arguments
| Property | Type     | Description   | Default |
| -------- | -------- | ------------- | :-----: |
| key      | `string` | Storage key   |    -    |
| value    | `string` | Storage value |    -    |

### `getItem(key: string): Promise<string | null>`

#### Arguments
| Property | Type     | Description | Default |
| -------- | -------- | ----------- | :-----: |
| key      | `string` | Storage key |    -    |

#### Returns
| Property | Type            | Description   |
| -------- | --------------- | ------------- |
| result   | `string | null` | Storage value |

### `removeItem(key: string): Promise<null>`

#### Arguments
| Property | Type     | Description | Default |
| -------- | -------- | ----------- | :-----: |
| key      | `string` | Storage key |    -    |

### `getAllKeys(): Promise<string[]>`

#### Returns
| Property | Type       | Description      |
| -------- | ---------- | ---------------- |
| result   | `string[]` | Storage all keys |

### `clear(): Promise<null>`
