# universal-asyncstorage [![npm](https://img.shields.io/npm/v/universal-asyncstorage.svg)](https://www.npmjs.com/package/universal-asyncstorage)

> AsyncStorage

## Support
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__

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
