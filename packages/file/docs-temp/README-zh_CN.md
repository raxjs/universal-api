# universal-file [![npm](https://img.shields.io/npm/v/universal-file.svg)](https://www.npmjs.com/package/universal-file)

文件操作.

## 支持
__icon_miniapp_mp__ __icon_miniapp_wx__

## 安装

```bash
$ npm install universal-file --save
```

## 方法

### `getInfo(options)`

获取文件信息。

#### 参数
| 属性            | 类型     | 默认值 | 必选 | 描述                       | 支持                                    |
| --------------- | -------- | ------ | ---- | -------------------------- | --------------------------------------- |
| filePath        | `String` |        | √    | 文件路径                   | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| digestAlgorithm | `String` | `md5`  | x    | 摘要算法，支持 md5 和 sha1 | __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `getSavedInfo(options)`

获取保存的文件信息。

#### 参数
| 属性     | 类型     | 默认值 | 必选 | 描述     | 支持                                    |
| -------- | -------- | ------ | ---- | -------- | --------------------------------------- |
| filePath | `String` |        | √    | 文件路径 | __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `getSavedList(options)`

获取保存的所有文件信息。

#### 支持
__icon_miniapp_mp__ __icon_miniapp_wx__

### `openDocument(options)`

在新页面打开文件预览。

#### 参数
| 属性     | 类型     | 默认值 | 必选 | 描述     | 支持                                    |
| -------- | -------- | ------ | ---- | -------- | --------------------------------------- |
| filePath | `String` |        | √    | 文件路径 | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| fileType | `String` |        | x    | 文件类型 | __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `removeSaved(options)`

删除某个保存的文件。

#### 参数
| 属性     | 类型     | 默认值 | 必选 | 描述     | 支持                                    |
| -------- | -------- | ------ | ---- | -------- | --------------------------------------- |
| filePath | `String` |        | √    | 文件路径 | __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `save(options)`

保存文件到本地。

#### 参数
| 属性     | 类型     | 默认值 | 必选 | 描述     | 支持                                    |
| -------- | -------- | ------ | ---- | -------- | --------------------------------------- |
| filePath | `String` |        | √    | 文件路径 | __icon_miniapp_mp__ __icon_miniapp_wx__ |

### `upload(options)`

上传本地资源到开发者服务器。

#### 参数
| 属性     | 类型     | 默认值 | 必选 | 描述                                                                        | 支持                                    |
| -------- | -------- | ------ | ---- | --------------------------------------------------------------------------- | --------------------------------------- |
| url      | `String` |        | √    | 开发者服务器地址                                                            | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| filePath | `String` |        | √    | 要上传文件资源的本地定位符                                                  | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| fileName | `String` |        | √    | 文件名，即对应的 key，开发者在服务器端通过这个 key 可以获取到文件二进制内容 | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| fileType | `String` |        | √    | 文件类型支持图片、视频、音频（ image / video / audio）                      | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| header   | `Object` |        | x    | HTTP 请求 Header                                                            | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| formData | `Object` |        | x    | HTTP 请求中其他额外的 form 数据                                             | __icon_miniapp_mp__ __icon_miniapp_wx__ |


### `download(options)`

下载文件资源到本地。

#### 参数
| 属性   | 类型     | 默认值 | 必选 | 描述             | 支持                                    |
| ------ | -------- | ------ | ---- | ---------------- | --------------------------------------- |
| url    | `String` |        | √    | 下载文件地址     | __icon_miniapp_mp__ __icon_miniapp_wx__ |
| header | `object` |        | x    | HTTP 请求 Header | __icon_miniapp_mp__ __icon_miniapp_wx__ |

## 示例

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

