# universal-alert [![npm](https://img.shields.io/npm/v/universal-alert.svg)](https://www.npmjs.com/package/universal-alert)

alert 警告框


## 支持
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_quick_app__

## 安装

```bash
$ npm install universal-alert --save
```

## 示例

```js
import Alert from 'universal-alert';

Alert({
  title: 'alert框的标题',
  content: 'alert框的内容',
  buttonText: '按钮文字，默认confirm'
}).then(() => {
  console.log('确定');
});
```

## 方法

### `Alert(options)`

#### 参数
| 成员               | 类型     | 描述                              |  默认值   |     支持     |
| ------------------ | -------- | --------------------------------- | :-------: | :----------: |
| options            | `object` | alert 参数                        |     -     |      -       |
| options.title      | `string` | alert 标题，仅在小程序中支持      |  -  | __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_quick_app__ |
| options.content    | `string` | alert 内容                        | - |              |
| options.buttonText | `string` | alert 确认按钮文字，不支持web环境 | - | __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_quick_app__ |
