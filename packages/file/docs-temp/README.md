# universal-file [![npm](https://img.shields.io/npm/v/universal-file.svg)](https://www.npmjs.com/package/universal-file)

File operations.

## Support
__icon_miniapp_mp__ __icon_miniapp_wx__

## Install

```bash
$ npm install universal-file --save
```

## Methods

### `getInfo(options)`

Get file information.

#### Parameters
| Property        | Type     | Default | Required | Description                                                  | Support                                 |
| --------------- | -------- | ------- | -------- | ------------------------------------------------------------ | --------------------------------------- |
| filePath        | `String` |         | √        | The file path                                                | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| digestAlgorithm | `String` | md5   | x        | The algorithm to calculate the file summary can be md5, sha1 | __icon_miniapp_mp__ __icon_miniapp_wx__ |


### `getSavedInfo(options)`

Gets saved file information.

#### Parameters
| Property | Type     | Default | Required | Description   | Support                                 |
| -------- | -------- | ------- | -------- | ------------- | --------------------------------------- |
| filePath | `String` |         | √        | The file path | __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `getSavedList(options)`

Gets all saved file information.

### `openDocument(options)`

Open a file preview on the new page.

#### Parameters
| Property | Type     | Default | Required | Description   | Support                                 |
| -------- | -------- | ------- | -------- | ------------- | --------------------------------------- |
| filePath | `String` |         | √        | The file path | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| fileType | `String` |         | x        | The file Type | __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `removeSaved(options)`

Delete a saved file.

#### Parameters
| Property | Type     | Default | Required | Description   | Support                                 |
| -------- | -------- | ------- | -------- | ------------- | --------------------------------------- |
| filePath | `String` |         | √        | The file path | __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `save(options)`

Save the file locally.

#### Parameters
| Property | Type     | Default | Required | Description   | Support                                 |
| -------- | -------- | ------- | -------- | ------------- | --------------------------------------- |
| filePath | `String` |         | √        | The file path | __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `upload(options)`

Upload local resources to the developer server.

#### Parameters
| Property | Type     | Default | Required | Description                          | Support                                 |
| -------- | -------- | ------- | -------- | ------------------------------------ | --------------------------------------- |
| url      | `String` |         | √        | Developer server address             | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| filePath | `String` |         | √        | The path to upload the file resource | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| fileName | `String` |         | √        | File name, that is, the corresponding key,
the developer in the server side through this key can get the binary content of the file.             | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| fileType | `String` |         | √        | File type supports image, video, audio (image/video/audio) | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| header | `Object` |         | x        | The HTTP request Header | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| formData | `Object` |         | x        | Additional form data in the HTTP request | __icon_miniapp_mp__ __icon_miniapp_wx__ |


### `download(options)`

Download file resources locally.

#### Parameters
| Property | Type     | Default | Required | Description             | Support                                 |
| -------- | -------- | ------- | -------- | ----------------------- | --------------------------------------- |
| url      | `String` |         | √        | Download file address   | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| header   | `Object` |         | x        | The HTTP request Header | __icon_miniapp_mp__ __icon_miniapp_wx__ |

## Example

```js
import File from 'universal-file';

// Get file information.
File.getInfo({
  filePath: 'https://resource/apml953bb093ebd2834530196f50a4413a87.video',
  digestAlgorithm: 'sha1',
  success: (res)=>{
    console.log(JSON.stringify(res))
  }
});

// You need to save the address to be able to use File.getsavedinfo
File.getSavedInfo({
  filePath: '**filePath**',
  success: (res) => {
    console.log(res.size);
    console.log(res.createTime);
  }
});

File.getSavedList({
  success:(res) => {
    console.log(JSON.stringfy(res));
  }
});

File.openDocument({
  filePath: '**filePath**',
  fileType: 'pdf',
  success: (res) => {
    console.log('open document success');
  };
});

File.removeSaved({
  filePath: '**filePath**',
  success:(res) => {
    console.log('remove success');
  }
});

File.save({
  filePath: '**filePath**',
  success:(res) => {
    console.log('save success');
  }
});

File.upload({
  url: 'http://httpbin.org/post',
  fileType: 'image',
  fileName: 'file',
  filePath: '**filePath**',
  success: res => {
    console.log('upload success');
  },
  fail: res => {
    console.log('upload succefailss');
  },
});

File.download({
  url: 'http://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg',
  success: res => {
    console.log(res.filePath);
  },
  fail: res => {
    console.log(res);
  },
});

```

