---
group:
  title: 设备
title: accelerometer
---

# accelerometer 
[![npm](https://img.shields.io/npm/v/universal-accelerometer.svg)](https://www.npmjs.com/package/universal-accelerometer)

加速度监听与取消.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

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

#### 是否需要传 callback 值
不传递 callback 值，则会移除监听所有的事件回调。示例代码如下：

```
accelerometer.offChange();
```
传递 callback 值，只移除对应的 callback 事件。示例代码如下：

```
accelerometer.offChange(this.callback);
```

## 示例

```js
import accelerometer from 'universal-accelerometer';

accelerometer.onChange(res => {
  console.log(res.x);
  console.log(res.y);
  console.log(res.z);
});

accelerometer.offChange();
```
你也可以从大包引入：

```js
import {accelerometer} from 'universal-api';
```

</div>
<div>

```jsx | inline
/**
 * iframe: true
 */
import React from 'react';
export default () => (
  <iframe style={{
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
      width: '375px',
      height: '700px'
    }} src='https://herbox.online/p/109000004/app_1aKtEd7SK?previewZoom=100&view=preview&defaultPage=pages/universal-accelerometer/index&topSlider=false'></iframe>
);
```

<div style="display: flex;margin-top: 50px;">
  <div>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01OBELBj1akab9RKOIZ_!!6000000003368-0-tps-694-628.jpg" width="200" height="200" />
    <div style="text-align: center;">微信小程序</div>
  </div>
</div>

</div>
</div>
