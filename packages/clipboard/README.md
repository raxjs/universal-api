# universal-clipboard [![npm](https://img.shields.io/npm/v/universal-clipboard.svg)](https://www.npmjs.com/package/universal-clipboard)

clipboard ability to achieve.

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

## Install
```bash
$ npm install universal-clipboard --save
```

## Usage

```javascript
import Clipboard from 'universal-clipboard';

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
<img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

#### Arguments
| Property | Type     | Description         | Default |
| -------- | -------- | ------------------- | :-----: |
| text     | `string` | set clipboard value |    -    |
