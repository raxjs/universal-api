# universal-asyncstorage [![npm](https://img.shields.io/npm/v/universal-asyncstorage.svg)](https://www.npmjs.com/package/universal-asyncstorage)

> AsyncStorage

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />

## 安装

```bash
$ npm install universal-asyncstorage --save
```

## 使用

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

## 方法

### `setItem(key: string, value: string): Promise<null>`

#### 参数
| 成员  | 类型     | 描述          | 默认值 |
| ----- | -------- | ------------- | :----: |
| key   | `string` | Storage key   |   -    |
| value | `string` | Storage value |   -    |

### `getItem(key: string): Promise<string | null>`

#### 参数
| 成员 | 类型     | 描述        | 默认值 |
| ---- | -------- | ----------- | :----: |
| key  | `string` | Storage key |   -    |

#### 返回值
| 成员   | 类型            | 描述          |
| ------ | --------------- | ------------- |
| result | `string | null` | Storage value |

### `removeItem(key: string): Promise<null>`

#### 参数
| 成员 | 类型     | 描述        | 默认值 |
| ---- | -------- | ----------- | :----: |
| key  | `string` | Storage key |   -    |

### `getAllKeys(): Promise<string[]>`

#### 返回值
| 成员   | 类型       | 描述             |
| ------ | ---------- | ---------------- |
| result | `string[]` | Storage all keys |

### `clear(): Promise<null>`
