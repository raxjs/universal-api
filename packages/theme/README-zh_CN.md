# universal-theme [![npm](https://img.shields.io/npm/v/universal-theme.svg)](https://www.npmjs.com/package/universal-theme)

你可以通过使用 CSS 变量的方式定制你的主题

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" />

## Install

```bash
$ npm install universal-theme --save
```

## Usage

在 build.json 中需要配置 `build-plugin-rax-theme`。
注意：`forceInline` 的值需要设置为 true。

`
{
  "plugins": [
    [
      "build-plugin-rax-component",
      {
        "type": "rax",
        "forceInline": "true",
        "targets": ["web", "weex"]
      }
    ],
    "build-plugin-rax-theme"
  ]
}
`

CSS 变量的使用

```css
.text {
  color: var(--color-error-1);
}
```

JS 中定义变量值

```js
import { setCSSVariables, getCSSVariable } from 'universal-theme';

const themeConfig = {
  'color-error-1': 'red'
};

setCSSVariables(themeConfig);
```

## Methods

### `setCSSVariables(themeConfig: object)`

#### Arguments
| Property | Type     | Description                                 | Default |
| -------- | -------- | ------------------------------------------- | :-----: |
| themeConfig  | `object` | 传入皮肤对象     |    -    |

### `setCSSVariable(key: string, value: string)`

设置单个 CSS 变量

### `getCSSVariable(key: string)`

获取单个 CSS 变量