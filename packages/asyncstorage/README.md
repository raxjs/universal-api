# universal-asyncstorage [![npm](https://img.shields.io/npm/v/universal-asyncstorage.svg)](https://www.npmjs.com/package/universal-asyncstorage)

> AsyncStorage

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />

## Install

```bash
$ npm install universal-asyncstorage --save
```

## Usage

```js
import AsyncStorage from 'universal-asyncstorage';

// setItem(key, value)
try {
  await AsyncStorage.setItem('key', 'value');
} catch (error) {
}

// getItem(key)
try {
  const value = await AsyncStorage.getItem('key');
  if (value !== null){
    console.log(value);
  }
} catch (error) {
}

// removeItem(key)
try {
  await AsyncStorage.removeItem('key');
} catch (error) {
}

// getAllKeys()
try {
  await AsyncStorage.getAllKeys();
} catch (error) {
}

// clear()
try {
  await AsyncStorage.clear();
} catch (error) {
}
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
