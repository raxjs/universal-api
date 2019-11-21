# universal-accelerometer [![npm](https://img.shields.io/npm/v/universal-accelerometer.svg)](https://www.npmjs.com/package/universal-accelerometer)

加速度监听与取消.

## 支持
__icon_miniapp_mp__ __icon_miniapp_wx__

## 安装

```bash
$ npm install universal-accelerometer --save
```

## 方法

### `onChange(callback): void`

监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可以使用 offChange() 停止监听。

#### 参数
| 属性 | 类型     | 描述   | 支持 |
| -------- | -------- | ------------- | :-----: |
| callback | `Function` | 回调函数 | __icon_miniapp_mp__ __icon_miniapp_wx__  |

### `offChange(): void`

停止监听加速度数据

#### 支持
__icon_miniapp_mp__ __icon_miniapp_wx__

## 示例

```js
import Accelerometer from 'universal-accelerometer';

Accelerometer.onChange(res => {
    console.log(res.x);
    console.log(res.y);
    console.log(res.z);
});

Accelerometer.offChange();
```

