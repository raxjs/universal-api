# universal-navigate

路由导航能力实现

## 支持
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__

## Install
```bash
$ npm install universal-navigate --save
```

## Usage
```javascript
import Navigate from 'universal-navigate';

Navigate.push({
  url: 'https://www.taobao.com/',
  animated: true // 仅 weex 中支持
}).then(() => {
});

Navigate.pop({
  animated: false // 仅 weex 中支持
}).then(() => {
});

Navigate.go({
  step: -1,
  animated: false // 仅 weex 中支持
}).then(() => {
});

```
## 方法
### `push(options)`

#### 参数
| 成员             | 类型      | 描述                                       | 必选  | 默认值 | 支持  |
| ---------------- | --------- | ------------------------------------------ | :---: | :----: | :---: |
| options          | `object`  | push 参数                                  |  是   |   -    |   -   |
| options.url      | `string`  | 页面 URL.                                  |  是   |   -    |   -   |
| options.animated | `boolean` | 仅weex中支持，页面压入时是否需要动画效果。 |  否   | `true` |__icon_weex__ |

### `pop(options)`

#### 参数
| 成员             | 类型      | 描述                                       | 必选  | 默认值 | 支持  |
| ---------------- | --------- | ------------------------------------------ | :---: | :----: | :---: |
| options          | `object`  | pop 参数                                   |  否   |   -    |       |
| options.animated | `boolean` | 仅weex中支持，页面压入时是否需要动画效果。 |  否   | `true` |__icon_weex__ |

### `go(options)`

#### 参数
| 成员             | 类型      | 描述                                                                                | 必选  | 默认值 | 支持  |
| ---------------- | --------- | ----------------------------------------------------------------------------------- | :---: | :----: | :---: |
| options          | `object`  | go 参数                                                                             |  是   |   -    |       |
| options.step     | `number`  | 前进步数为正值且仅支持web，后退步数为负值，若大于现有打开的页面数，则返回到起始页。 |  是   |   -    |       |
| options.animated | `boolean` | 仅weex中支持，页面压入时是否需要动画效果。                                          |  否   | `true` |__icon_weex__|

