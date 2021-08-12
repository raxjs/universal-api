# file
[![npm](https://img.shields.io/npm/v/@uni/file.svg)](https://www.npmjs.com/package/@uni/file)

文件操作.

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

## 安装

```bash
$ npm install @uni/file --save
```

## 方法

### `getInfo(options)`

获取文件信息。

#### 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

#### 参数
| 属性   | 类型     | 默认值 | 必选 | 描述 |
| --------------- | -------- | ------ | ---- | ------- |
| filePath        | `String` |        | √    | 文件路径（本地路径）            |
| digestAlgorithm | `String` | md5  | x    | 摘要算法，支持 md5 和 sha1 |
| success | `Function`  |   -    | x    | 成功的回调 |
| fail | `Function`  |   -    | x    | 失败的回调 |
| complete | `Function`  |   -    | x    | 结束的回调 |

#### object.success 回调函数 的参数
| 属性     | 类型     | 描述     |
| -------- | ------ | -------- |
|size|number|文件大小，以字节为单位|
|digest|string|按照传入的 digestAlgorithm 计算得出的的文件摘要|

### `getSavedInfo(options)`

获取保存的文件信息。

#### 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

#### 参数
| 属性     | 类型     | 默认值 | 必选 | 描述     |
| -------- | -------- | ------ | ---- | -------- |
| filePath | `String` |        | √    | 文件路径 (本地路径) |
| success | `Function`  |   -    | x    | 成功的回调 |
| fail | `Function`  |   -    | x    | 失败的回调 |
| complete | `Function`  |   -    | x    | 结束的回调 |

##### object.success 回调函数 的参数
| 属性     | 类型     | 描述     |
| -------- | ------ | -------- |
|size|number|文件大小，单位 B|
|createTime|number|文件保存时的时间戳，从1970/01/01 08:00:00 到该时刻的秒数|

### `getSavedList(options)`

获取保存的所有文件信息。

#### 参数
| 属性   | 类型     | 默认值 | 必选 | 描述  |
| ------ | -------- | ------ | ---- | ----- |
| success | `Function`  |   -    | x    | 成功的回调 |
| fail | `Function`  |   -    | x    | 失败的回调 |
| complete | `Function`  |   -    | x    | 结束的回调 |

#### object.success 回调函数 的参数
| 属性     | 类型     | 描述     |
| -------- | ------ | -------- |
|fileList|Array|文件数组，每一项是一个 FileItem|

##### res.fileList 的结构
| 属性     | 类型     | 描述     |
| -------- | ------ | -------- |
|filePath|string|文件路径 (本地路径)|
|size|number|本地文件大小，以字节为单位|
|createTime|number|文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数|

### `openDocument(options)`

在新页面打开文件预览。

#### 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

#### 参数
| 属性     | 类型     | 默认值 | 必选 | 描述     |
| -------- | -------- | ------ | ---- | -------- |
| filePath | `String` |        | √    | 文件路径 (本地路径)  |
| fileType | `String` |        | x    | 文件类型 |
| success | `Function`  |   -    | x    | 成功的回调 |
| fail | `Function`  |   -    | x    | 失败的回调 |
| complete | `Function`  |   -    | x    | 结束的回调 |

### 不通用参数（由于破坏了一码多端的能力，不推荐使用）
| 属性   | 类型     | 默认值 | 必选 | 描述 | 支持  |
| ------ | -------- | ------ | ---- | ----- | ------- |
| showMenu | `boolean` |   false   | x    | 是否显示右上角菜单 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> |

#### object.fileType

| 值     | 描述     |
| -------- | -------- |
|pdf|pdf 格式|

#### 不通用值（由于破坏了一码多端的能力，不推荐使用）

| 值     | 描述     | 支持   |
| -------- | -------- | ------ |
|doc|doc 格式|<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" />|
|docx|docx 格式|<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" />|
|xls|xls 格式|<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" />|
|xlsx|xlsx 格式|<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" />|
|ppt|ppt 格式|<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" />|
|pptx|pptx 格式|<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" />|

### `removeSaved(options)`

删除某个保存的文件。

#### 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

#### 参数
| 属性     | 类型     | 默认值 | 必选 | 描述     |
| -------- | -------- | ------ | ---- | -------- |
| filePath | `String` |        | √    | 文件路径 (本地路径) |
| success | `Function`  |   -    | x    | 成功的回调 |
| fail | `Function`  |   -    | x    | 失败的回调 |
| complete | `Function`  |   -    | x    | 结束的回调 |

### `save(options)`

保存文件到本地缓存目录（总容量限制：10 MB）。

注意：saveFile 会把临时文件移动，因此调用成功后传入的 filePath 将不可用

#### 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

#### 参数
| 属性     | 类型     | 默认值 | 必选 | 描述     |
| -------- | -------- | ------ | ---- | -------- |
| filePath | `String` |        | √    | 需要保存的文件的临时路径 (本地路径)  |
| success | `Function`  |   -    | x    | 成功的回调 |
| fail | `Function`  |   -    | x    | 失败的回调 |
| complete | `Function`  |   -    | x    | 结束的回调 |

#### object.success 回调函数 的参数
| 属性     | 类型     | 描述     |
| -------- | ------ | -------- |
|savedFilePath|string|存储后的文件路径 (本地路径)|

### `upload(options)`

上传本地资源到开发者服务器。

#### 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />


#### 参数
| 属性     | 类型     | 默认值 | 必选 | 描述  |
| ----- | ----- | ------ | ---- | ----- |
| url      | `String` |        | √    | 开发者服务器地址  |
| filePath | `String / File Object` |     |   √    | 要上传文件资源的本地定位符，Web下支持base64字符串或File对象  |
| fileName | `String` |        | √    | 文件名，即对应的 key，开发者在服务器端通过这个 key 可以获取到文件二进制内容 |
| header   | `Object` |        | x    | HTTP 请求 Header   |
| formData | `Object` |        | x    | HTTP 请求中其他额外的 form 数据 |
| success | `Function`  |   -    | x    | 成功的回调 |
| fail | `Function`  |   -    | x    | 失败的回调 |
| complete | `Function`  |   -    | x    | 结束的回调 |

##### 不通用参数（由于破坏了一码多端的能力，不推荐使用）
| 属性   | 类型     | 默认值 | 必选 | 描述 | 支持  |
| ------ | -------- | ------ | ---- | ----- | ------- |
| fileType | `String` | `image` | x    | 文件类型支持图片、视频、音频（ image / video / audio），Web下无需传入            | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" />  |
| withCredentials | `Boolean` |   | x    | 自定义 withCredentials 选项（默认根据域名判断）  | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" />  |
| hideLoading | `Boolean` |   false  | x    | 是否隐藏 loading 图（默认值为 false）  | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" />  |
| timeout | `Number` |  | x    | 上传超时时间  | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |

#### 返回
注意：支付宝小程序只有客户端 10.1.35 及以上支持，由于破坏了一码多端请谨慎使用。使用时请务必判断返回不为空，`upload`在不支持 UploadTask 的容器下返回结果为空。

**UploadTask**

一个可以监听上传进度变化事件，以及取消上传任务的对象。具体文档可以查看：
* 微信：[链接](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.html)
* 字节跳动：[链接](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/network/http/upload-task/)
* 百度：[链接](https://smartprogram.baidu.com/docs/develop/api/net/uploadTask/)
* 快手：[链接](https://mp.kuaishou.com/docs/develop/api/network/upload/UploadTask/UploadTask.html)
* 支付宝：已对齐微信，但缺少`onHeadersReceived`和`offHeadersReceived`
* Web：与微信相同

### `download(options)`

下载文件资源到本地。

#### 支持
<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

#### 参数
| 属性   | 类型     | 默认值 | 必选 | 描述             |
| ------ | -------- | ------ | ---- | ---------------- |
| url    | `String` |        | √    | 下载资源的 url     |
| header | `Object` |        | x    | HTTP 请求 Header |
| filePath | `string` |        | x    | 指定文件下载后存储的路径 (本地路径) |
| success | `Function`  |   -    | x    | 成功的回调 |
| fail | `Function`  |   -    | x    | 失败的回调 |
| complete | `Function`  |   -    | x    | 结束的回调 |

##### 不通用参数（由于破坏了一码多端的能力，不推荐使用）
| 属性   | 类型     | 默认值 | 必选 | 描述 | 支持  |
| ------ | -------- | ------ | ---- | ----- | ------- |
| filePath | `string` |        | x    | 指定文件下载后存储的路径 (本地路径) | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |
| timeout | `number` |      |  x | 超时时间，单位为毫秒 | <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |

#### object.success 回调函数 的参数
| 属性     | 类型     | 描述     |
| -------- | ------ | -------- |
|tempFilePath|string|临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件|

##### 不通用参数（由于破坏了一码多端的能力，不推荐使用）
| 属性     | 类型     | 描述     | 支持   |
| -------- | ------ | -------- | ------ |
|filePath|string|用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致|<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |
|statusCode|number|开发者服务器返回的 HTTP 状态码|<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |
|profile|Object|网络请求过程中一些调试信息|<img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" />|

#### 返回
注意：只有微信小程序和字节跳动小程序、百度小程序、快手小程序支持，由于破坏了一码多端请谨慎使用

DownloadTask
一个可以监听下载进度变化事件和取消下载的对象
具体文档可以查看：
微信：https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.html
字节跳动：https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/network/http/download-task/
百度：[链接](https://smartprogram.baidu.com/docs/develop/api/net/downloadTask/)
快手：[链接](https://mp.kuaishou.com/docs/develop/api/network/download/DownloadTask/DownloadTask.html)

## 示例

```js
import { download, getInfo, getSavedInfo, getSavedList, openDocument, removeSaved, save, upload } from '@uni/file';

// Get file information.
getInfo({
  filePath: 'https://resource/apml953bb093ebd2834530196f50a4413a87.video',
  digestAlgorithm: 'sha1',
  success: (res)=>{
    console.log(JSON.stringify(res))
  }
});

// You need to save the address to be able to use File.getsavedinfo
getSavedInfo({
  filePath: '**filePath**',
  success: (res) => {
    console.log(res.size);
    console.log(res.createTime);
  }
});

getSavedList({
  success:(res) => {
    console.log(JSON.stringfy(res));
  }
});

openDocument({
  filePath: '**filePath**',
  fileType: 'pdf',
  success: (res) => {
    console.log('open document success');
  };
});

removeSaved({
  filePath: '**filePath**',
  success:(res) => {
    console.log('remove success');
  }
});

save({
  filePath: '**filePath**',
  success:(res) => {
    console.log('save success');
  }
});

upload({
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

download({
  url: 'http://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg',
  success: res => {
    console.log(res.filePath);
  },
  fail: res => {
    console.log(res);
  },
});

```

