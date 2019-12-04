# universal-accelerometer [![npm](https://img.shields.io/npm/v/universal-accelerometer.svg)](https://www.npmjs.com/package/universal-accelerometer)

加速度监听与取消.

## 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

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
| callback | `Function` | 回调函数 | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">  |

### `offChange(): void`

停止监听加速度数据

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

