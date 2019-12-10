# universal-image [![npm](https://img.shields.io/npm/v/universal-image.svg)](https://www.npmjs.com/package/universal-image)

Image operation.

## Support
__icon_miniapp_mp__ __icon_miniapp_wx__

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
| count      | `Number`       | 1                          | x        | Maximum number of optional photos               | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| sizeType   | `String Array` | ['original', 'compressed'] | x        | Compressed original picture, compressed picture | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| sourceType | `String Array` | ['camera', 'album']        | x        | Photo album selection or photo taking           | __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `preview(options)`

preview image.

#### Parameters
| Property | Type     | Default | Required | Description                    | Support                                 |
| -------- | -------- | ------- | -------- | ------------------------------ | --------------------------------------- |
| urls  | `String Array` |       | √        | A list of images to preview | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| current  | `Number` | 0       | x        | Currently displays image index | __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `getInfo(options)`

Get image information.

#### Parameters
| Property | Type     | Default | Required | Description                    | Support                                 |
| -------- | -------- | ------- | -------- | ------------------------------ | --------------------------------------- |
| src  | `String` |       | √        | Image path, can be relative path, temporary file path, storage file path, network image path | __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `compress(options)`

Compress image.

#### Parameters
| Property | Type     | Default | Required | Description                    | Support                                 |
| -------- | -------- | ------- | -------- | ------------------------------ | --------------------------------------- |
| filePaths  | `String Array` |     | √ | An array of image addresses to compress | __icon_miniapp_mp__  |
| src  | `String` |       | √        | Image path, can be relative path, temporary file path, storage file path, network image path | __icon_miniapp_wx__ |
| compressLevel  | `Number` | 4       | x   | Compression level, support 0 ~ 4 integer | __icon_miniapp_mp__ |
| quality  | `Number` | 80       | x   | Compression mass, range 0 ~ 100, the smaller the value, the lower the mass | __icon_miniapp_wx__ |

### `save(options)`

Save Image.

#### Parameters
| Property | Type     | Default | Required | Description                    | Support                                 |
| -------- | -------- | ------- | -------- | ------------------------------ | --------------------------------------- |
| url  | `String` |     | √ | Image file path | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| showActionSheet  | `Boolean` |  `true`    | x | Whether to display picture action menu | __icon_miniapp_mp__ |

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

