# universal-clipboard [![npm](https://img.shields.io/npm/v/universal-clipboard.svg)](https://www.npmjs.com/package/universal-clipboard)

粘贴板快捷操作能力实现

## 支持
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_quick_app__

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
__icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_quick_app__

#### 参数
| 成员 | 类型     | 描述           | 默认值 |
| ---- | -------- | -------------- | :----: |
| text | `string` | 设置剪贴板数据 |   -    |
