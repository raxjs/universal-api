# universal-clipboard [![npm](https://img.shields.io/npm/v/universal-clipboard.svg)](https://www.npmjs.com/package/universal-clipboard)

clipboard ability to achieve.

## Support
__icon_web__ __icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_quick_app__

## Install
```bash
$ npm install universal-clipboard --save
```

## Usage

```javascript
import Clipboard from 'universal-clipboard';

// How to use it in quickapp
// import Clipboard from 'universal-clipboard/lib/quickapp;

Clipboard.readText().then(text => {

}).catch(() => {

});
// Web side is not supported
Clipboard.writeText('text').then(() => {

}).catch(() => {

});
```

## Methods

### `readText(): Promise.<text>`
Get clipboard value.

#### Arguments
| Property | Type     | Description         | Default |
| -------- | -------- | ------------------- | :-----: |
| text     | `string` | get clipboard value |    -    |

### `writeText(text: string): Promise.<>`
Set clipboard value (Web side is not supported).

#### Support
__icon_weex__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_quick_app__

#### Arguments
| Property | Type     | Description         | Default |
| -------- | -------- | ------------------- | :-----: |
| text     | `string` | set clipboard value |    -    |
