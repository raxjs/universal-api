# universal-background [![npm](https://img.shields.io/npm/v/universal-background.svg)](https://www.npmjs.com/package/universal-background)

Dynamic setting window background color and so on.

## Support
__icon_miniapp_mp__ __icon_miniapp_wx__

## Install

```bash
$ npm install universal-background --save
```

## Methods

### `setColor(options)`

Dynamically sets the background color of the window.

#### Parameters
| Property    | Type     | Default | Required | Description            | Support                                 |
| ----------- | -------- | ------- | -------- | ---------------------- | --------------------------------------- |
| color       | `String` |   -      | x    | The background color of the window must be a hexadecimal color value | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| topColor    | `String` |   -      | x    | Background color of top window, must be hexadecimal color value, supported by iOS only | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| bottomColor | `String` |    -     | x    |Bottom window background color, must be hexadecimal color value, iOS only support| __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `setTextStyle(options)`

Dynamic Settings drop - down background font, loading map style.

#### Parameters
| Property    | Type     | Default | Required | Description            | Support                                 |
| ----------- | -------- | ------- | -------- | ---------------------- | --------------------------------------- |
| style       | `String` |         | √    | Drop down background font, loading diagram style, value: dark, light | __icon_miniapp_mp__ __icon_miniapp_wx__ |

## Example

```js
import Background from 'universal-background';

Background.setColor({
    color: #000000,
    success: res => {
    },
    fail: res => {
    }
});

Background.setTextStyle({
    style: 'dark', // The text color of the drop-down loading page is dark
    success: res => {
    },
    fail: res => {
    }
});

```

