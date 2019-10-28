# universal-navigate

路由导航能力实现

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />

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

#### 入参
| 成员             | 类型      | 描述                                       | 必选  | 默认值 | 支持  |
| ---------------- | --------- | ------------------------------------------ | :---: | :----: | :---: |
| options          | `object`  | push 参数                                  |  是   |   -    |   -   |
| options.url      | `string`  | 页面 URL.                                  |  是   |   -    |   -   |
| options.animated | `boolean` | 仅weex中支持，页面压入时是否需要动画效果。 |  否   | `true` |<img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> |

### `pop(options)`

#### 入参
| 成员             | 类型      | 描述                                       | 必选  | 默认值 | 支持  |
| ---------------- | --------- | ------------------------------------------ | :---: | :----: | :---: |
| options          | `object`  | pop 参数                                   |  否   |   -    |       |
| options.animated | `boolean` | 仅weex中支持，页面压入时是否需要动画效果。 |  否   | `true` |<img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> |

### `go(options)`

#### 入参
| 成员             | 类型      | 描述                                                                                | 必选  | 默认值 | 支持  |
| ---------------- | --------- | ----------------------------------------------------------------------------------- | :---: | :----: | :---: |
| options          | `object`  | go 参数                                                                             |  是   |   -    |       |
| options.step     | `number`  | 前进步数为正值且仅支持web，后退步数为负值，若大于现有打开的页面数，则返回到起始页。 |  是   |   -    |       |
| options.animated | `boolean` | 仅weex中支持，页面压入时是否需要动画效果。                                          |  否   | `true` |<img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> |

