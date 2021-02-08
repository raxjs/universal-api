---
title: image
---

# @uni/image [![npm](https://img.shields.io/npm/v/@uni/image.svg)](https://www.npmjs.com/package/@uni/image)

图片操作.

## 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

## 安装

```bash
$ npm install @uni/image --save
```

## 方法

### `choose(options)`

拍照或从本地相册中选择图片。

#### 参数
| 属性       | 类型           | 默认值                     | 必选 | 描述                             | 支持                                    |
| ---------- | -------------- | -------------------------- | ---- | -------------------------------- | --------------------------------------- |
| count      | `Number`       | 1                          | x    | 最大可选照片数                   | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| sizeType   | `String Array` | ['original', 'compressed'] | x    | original 原图，compressed 压缩图 | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| sourceType | `String Array` | ['camera', 'album']        | x    | 相册选取或者拍照                 | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |

### `preview(options)`

预览图片。

#### 参数
| 属性    | 类型           | 默认值 | 必选 | 描述                 | 支持                                    |
| ------- | -------------- | ------ | ---- | -------------------- | --------------------------------------- |
| urls    | `String Array` |        | √    | 要预览的图片链接列表 | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| current | `Number`       | 0      | x    | 当前显示图片索引     | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |


### `getInfo(options)`

获取图片信息。

#### 参数
| 属性 | 类型     | 默认值 | 必选 | 描述                                                                 | 支持                                    |
| ---- | -------- | ------ | ---- | -------------------------------------------------------------------- | --------------------------------------- |
| src  | `String` |        | √    | 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径 | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |

### `compress(options)`

压缩图片，可选压缩质量。

#### 参数
| 属性          | 类型           | 默认值 | 必选 | 描述                                                                | 支持                |
| ------------- | -------------- | ------ | ---- | ------------------------------------------------------------------- | ------------------- |
| filePaths     | `String Array` |        | √    | 要压缩的图片地址数组                                                | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> |
| src           | `String`       |        | √    | 图片路径，图片的路径，可以是相对路径、临时文件路径、存储文件路径    | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| compressLevel | `Number`       | 4      | x    | 压缩级别，支持 0 ~ 4 的整数，默认为 4                               | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> |
| quality       | `Number`       | 80     | x    | 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效） | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |

### `save(options)`

保存图片到系统相册。

#### 参数
| 属性            | 类型      | 默认值 | 必选 | 描述                 | 支持                                    |
| --------------- | --------- | ------ | ---- | -------------------- | --------------------------------------- |
| url             | `String`  |        | √    | 要保存的图片链接     | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> |
| showActionSheet | `Boolean` | `true` | x    | 是否显示图片操作菜单 | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />                     |

## Example

```js
import Image from '@uni/image';

Image.choose({
  sourceType: ['camera','album'],
  count: 2,
  success: (res) => {
    console.log(res.filePaths);
  },
  fail: (err) => {
    console.log(err);
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

Image.choose({
  sourceType: ['camera','album'],
  success: (res) => {
    Image.compress({
      src: res.filePaths[0],
      filePaths: res.filePaths,
      success: data => {
        console.log(data.filePaths);
      }
    });
  },
  fail: (err) => {
    console.log('fail: ', err);
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

