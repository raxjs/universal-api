# universal-clipboard [![npm](https://img.shields.io/npm/v/universal-clipboard.svg)](https://www.npmjs.com/package/universal-clipboard)

粘贴板快捷操作能力实现

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

## 安装
```bash
$ npm install universal-clipboard --save
```

## 使用

```javascript
import Clipboard from 'universal-clipboard';

Clipboard.readText().then(text => {

}).catch(() => {

});
// 不支持Web端
Clipboard.writeText('text').then(() => {

}).catch(() => {

});
```

## 方法

### `readText(): Promise.<text>`
获取剪贴板数据

#### 出参
| 成员 | 类型     | 描述       | 默认值 |
| ---- | -------- | ---------- | :----: |
| text | `string` | 剪贴板数据 |   -    |

### `writeText(text: string): Promise.<>`
设置剪贴板数据

#### 支持
<img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

#### 入参
| 成员 | 类型     | 描述           | 默认值 |
| ---- | -------- | -------------- | :----: |
| text | `string` | 设置剪贴板数据 |   -    |
