# universal-image [![npm](https://img.shields.io/npm/v/universal-image.svg)](https://www.npmjs.com/package/universal-image)

Image operation.

## Support
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-image --save
```

## Methods

### `choose(options)`

Take a photo or select an image from a local album.

#### Parameters
| Property   | Type           | Default                    | Required | Description                                     | Support                                 |
| ---------- | -------------- | -------------------------- | -------- | ----------------------------------------------- | --------------------------------------- |
| count      | `Number`       | 1                          | x        | Maximum number of optional photos               | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| sizeType   | `String Array` | ['original', 'compressed'] | x        | Compressed original picture, compressed picture | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| sourceType | `String Array` | ['camera', 'album']        | x        | Photo album selection or photo taking           | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |

### `preview(options)`

preview image.

#### Parameters
| Property | Type     | Default | Required | Description                    | Support                                 |
| -------- | -------- | ------- | -------- | ------------------------------ | --------------------------------------- |
| urls  | `String Array` |       | √        | A list of images to preview | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| current  | `Number` | 0       | x        | Currently displays image index | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |

### `getInfo(options)`

Get image information.

#### Parameters
| Property | Type     | Default | Required | Description                    | Support                                 |
| -------- | -------- | ------- | -------- | ------------------------------ | --------------------------------------- |
| src  | `String` |       | √        | Image path, can be relative path, temporary file path, storage file path, network image path | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |

### `compress(options)`

Compress image.

#### Parameters
| Property | Type     | Default | Required | Description                    | Support                                 |
| -------- | -------- | ------- | -------- | ------------------------------ | --------------------------------------- |
| filePaths  | `String Array` |     | √ | An array of image addresses to compress | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />  |
| src  | `String` |       | √        | Image path, can be relative path, temporary file path, storage file path, network image path | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| compressLevel  | `Number` | 4       | x   | Compression level, support 0 ~ 4 integer | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> |
| quality  | `Number` | 80       | x   | Compression mass, range 0 ~ 100, the smaller the value, the lower the mass | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |

### `save(options)`

Save Image.

#### Parameters
| Property | Type     | Default | Required | Description                    | Support                                 |
| -------- | -------- | ------- | -------- | ------------------------------ | --------------------------------------- |
| url  | `String` |     | √ | Image file path | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| showActionSheet  | `Boolean` |  `true`    | x | Whether to display picture action menu | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> |

## Example

```js
import Image from 'universal-image';

Image.choose({
  sourceType: ['camera','album'],
  count: 2,
  success: (res) => {
    console.log(res.filePaths);
  },
  fail: () => {
    console.log('fail');
  }
});

Image.preview({
  current: 2,
  urls: [
    'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
    'https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg',
    'https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg'
  ],
});

Image.getInfo({
  src:'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
  success: (res) => {
    console.log(JSON.stringify(res))
  }
});

Image.compress({
  filePaths: [''],
  success: data => {
    console.log(data);
  }
});

Image.choose({
  sourceType: ['camera','album'],
  success: (res) => {
    console.log(res);
    Image.save({
      url: res.filePaths[0],
      success: () => {
        console.log('success: ');
      },
    });
  },
  fail: (err) => {
    console.log('fail: ', err);
  }
});

```

