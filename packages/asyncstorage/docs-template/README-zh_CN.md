# universal-asyncstorage [![npm](https://img.shields.io/npm/v/universal-asyncstorage.svg)](https://www.npmjs.com/package/universal-asyncstorage)

> AsyncStorage

## 支持
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__
## 安装

```bash
$ npm install universal-asyncstorage --save
```

## 使用

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
