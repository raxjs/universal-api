# universal-toast [![npm](https://img.shields.io/npm/v/universal-toast.svg)](https://www.npmjs.com/package/universal-toast)

通用弱提示，可选择多少秒之后消失

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px"> <img alt="quickApp" src="https://gw.alicdn.com/tfs/TB1MP7EwQT2gK0jSZPcXXcKkpXa-200-200.svg" width="25px" height="25px">

## 安装

```bash
$ npm install universal-toast --save
```

## 示例

```js
import Toast from 'universal-toast';

// 快应用中的引入方法
// import Toast from 'universal-toast/lib/quickapp;

Toast.show('Hi');

```

## 方法

### `Toast.show(message: string, duration?: number, options?: object)`

#### 参数
| 成员     | 类型     | 描述                | 默认值 |
| -------- | -------- | ------------------- | :----: |
| message  | `string` | 文字内容            |   -    |
| duration | `number` | 显示时长，单位为 ms |  2000  |
| options | `object` | 其他参数，微信小程序/字节跳动小程序平台可用配置，参考[文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html)  |  {}   |
