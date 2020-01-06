# universal-theme [![npm](https://img.shields.io/npm/v/universal-theme.svg)](https://www.npmjs.com/package/universal-theme)

Universal theme, you can customize your theme with CSS variables

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" />

## Install

```bash
$ npm install universal-theme --save
```

## Usage

use `build-plugin-rax-theme` in your build.json
Note that the value of `forceInline` must be true

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

in css

```css
.text {
  color: var(--color-error-1);
}
```

in js

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
| themeConfig  | `object` | customize your theme with CSS variables     |    -    |


### `setCSSVariable(key: string, value: string)`

set CSS variable.

### `getCSSVariable(key: string)`

get CSS variable.