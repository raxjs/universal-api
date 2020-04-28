# universal-toast [![npm](https://img.shields.io/npm/v/universal-toast.svg)](https://www.npmjs.com/package/universal-toast)

通用弱提示，可选择多少秒之后消失

## 支持
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_miniapp_tt__ __icon_quick_app__

## 安装

```bash
$ npm install universal-toast --save
```

## 示例

```js
import Toast from 'universal-toast';

Toast.show('Hi');
```

## 方法

### `Toast.show(message: string, duration?: number)`

#### 参数
| 成员     | 类型     | 描述                | 默认值 |
| -------- | -------- | ------------------- | :----: |
| message  | `string` | 文字内容            |   -    |
| duration | `number` | 显示时长，单位为 ms |  2000  |
