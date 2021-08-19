# chooseVideo 

 [![npm](https://img.shields.io/npm/v/@uni/video.svg)](https://www.npmjs.com/package/@uni/video)

拍摄视频或从手机相册中选视频。

## 支持

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

## 安装

```bash
$ npm install @uni/video --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

```javascript
import { chooseVideo } from '@uni/video';

chooseVideo({
  sourceType: ['album', 'camera'],
  compressed: true,
  camera: 'back',
  maxDuration: 100,
  success (res) {
    console.log(res);
  }
});

// promise
chooseVideo({
  sourceType: ['camera'],
  compressed: false,
  camera: 'front',
  maxDuration: 20,
}).then(res => {
  console.log(res);
});

```

你也可以从大包引入：
```js
import { video } from '@uni/apis';

video.chooseVideo({
  sourceType: ['album', 'camera'],
  compressed: true,
  camera: 'back',
  maxDuration: 100,
  success (res) {
    console.log(res);
  }
});

// promise
video.chooseVideo({
  sourceType: ['camera'],
  compressed: false,
  camera: 'front',
  maxDuration: 20,
}).then(res => {
  console.log(res);
});

```

## 方法

### `chooseVideo(options)`

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `object`  |  | ✘ | - |
| options.sourceType | `Array<string>`  | 视频选择的来源 | ✘ | ['album', 'camera'] |
| options.maxDuration | `number` | 视频最大时长，阿里取值范围[5, 60]，字节取值范围(0, 180]，maxDuration <= 0 时取值 60, maxDuration > 180 时取值 180，在取值范围内为传入值 | ✘ | 60 |
| options.success | `Function`  | 成功的回调 | ✘ | - |
| options.fail | `Function`  | 失败的回调 | ✘ | - |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - |

#### 差异化参数

| 成员 | 类型 | 描述 | 必选 | 默认值 | 支持度 |
| --- | --- | --- | --- | --- | -- |
| options.camera | `string`  | 默认拉起的是前置或者后置摄像头，取值'back'或'front' | ✘ | 'back' | <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |
| options.compressed | `boolean`  | 是否压缩选择的视频 | ✘ | true | <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" /> |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| tempFilePath | `string`  | 选定视频的临时文件路径 |
| duration | `number` | 选定视频的时间长度 |
| size | `number` | 选定视频的数据量大小 |
| width | `number` | 返回选定视频的高度 |
| height | `number` | 返回选定视频的宽度 |

#### 不通用返回参数

| 成员 | 类型 | 描述 | 支持 |
| --- | --- | --- | --- |
| files | `Array<Object>` | File 对象 | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> |

# createVideoContext 

 [![npm](https://img.shields.io/npm/v/@uni/video.svg)](https://www.npmjs.com/package/@uni/video)

创建 video 上下文 VideoContext 对象。

## 支持

<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />

## 安装

```bash
$ npm install @uni/video --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

```javascript
import { createVideoContext } from '@uni/video';

const videoContext = createVideoContext('videoId');

```

你也可以从大包引入：
```js
import { video } from '@uni/apis';

const videoContext = video.createVideoContext('videoId');

```

## 方法

### `createVideoContext(id, context)`

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 |
| --- | --- | --- | --- | --- |
| id | `string`  | video 组件的 id | ✔ |  - |
| context | `object`  | 在自定义组件下，当前组件实例的this，以操作组件内 video 组件，微信和字节小程序需传入 | ✘ | - |

#### 返回

| 成员 | 类型 | 描述 |
| --- | --- | --- |
| videoContext | `VideoContext` | VideoContext 通过 id 跟一个 video 组件绑定，操作对应的 video 组件 |

# chooseMedia 

 [![npm](https://img.shields.io/npm/v/@uni/video.svg)](https://www.npmjs.com/package/@uni/video)

拍摄或从手机相册中选择图片或视频。（h5支持任意文件类型;字节跳动小程序、阿里小程序、百度小程序、快手小程序仅支持选择图片）

## 支持

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />


## 安装

```bash
$ npm install @uni/video --save
```
or
```bash
$ npm install @uni/apis --save
```
## 示例

```javascript
import { chooseMedia } from '@uni/video';

chooseMedia({
  sourceType: ['album', 'camera'],
  camera: 'back',
  success (res) {
    console.log(res);
  }
});

// promise
chooseMedia({
  sourceType: ['camera'],
  camera: 'front',
  maxDuration: 20,
}).then(res => {
  console.log(res);
});

```

你也可以从大包引入：
```js
import { video } from '@uni/apis';

video.chooseMedia({
  sourceType: ['album', 'camera'],
  camera: 'back',
  success (res) {
    console.log(res);
  }
});

// promise
video.chooseMedia({
  sourceType: ['camera'],
  camera: 'front',
  maxDuration: 20,
}).then(res => {
  console.log(res);
});

```

## 方法

### `chooseMedia(options)`

#### 参数

| 成员 | 类型 | 描述 | 必选 | 默认值 | 支持度 |
| --- | --- | --- | --- | --- | -- |
| options | `object`  |  | ✘ | - |  |
| opthons.count | `number`  | 最多可以选择的文件个数 | ✘ | 9 |  |
| opthons.mediaType | `Array<string>` | 文件类型 | ✘ | ['image', 'video'] | web不支持 |
| opthons.accept | `string` | 文件类型 | ✘ | all | 仅web支持，如：'image/*' |
| opthons.sourceType | `Array<string>` | 图片和视频选择的来源 | ✘ | ['album', 'camera'] | <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="字节跳动小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />
 |
| opthons.sizeType | `Array<string>` | 仅对 mediaType 为 image 时有效，是否压缩所选文件 | ✘ | ['original', 'compressed'] |  <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> <img alt="baiduSmartProgram" src="https://img.alicdn.com/imgextra/i4/O1CN01jngdBb24yGv2Fu34G_!!6000000007459-2-tps-200-200.png" width="25px" height="25px" title="百度小程序" /> <img alt="kuaiShouMiniProgram" src="https://gw.alicdn.com/imgextra/i4/O1CN01kzmJMM24jcFEzp5Wv_!!6000000007427-2-tps-200-200.png" width="25px" height="25px" title="快手小程序" />
 |
| opthons.maxDuration | `number` | 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 30s 之间 | ✘ | 10 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" />  |
| opthons.camera | `string`  | 仅在 sourceType 为 camera 时生效，使用前置或后置摄像头 | ✘ | 'back' | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" />  |
| options.success | `Function`  | 成功的回调 | ✘ | - | |
| options.fail | `Function`  | 失败的回调 | ✘ | - | |
| options.complete | `Function`  | 结束的回调 （调用成功、失败都会执行） | ✘ | - | |


#### 返回

| 成员 | 类型 | 描述 | 支持度 |
| --- | --- | --- | --- |
| tempFiles | `Array<Object>` | 本地临时文件列表 |  |
| type | `string` | 文件类型，有效值有 image 、video | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /><img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="阿里小程序" /> |

针对阿里小程序，若type为image，则tempFiles为chooseImage的格式，若type为video，则tempFiles为chooseVideo的格式

#### 不通用返回参数

| 成员 | 类型 | 描述 | 支持 |
| --- | --- | --- | --- |
| files | `Array<Object>` | File 对象 | <img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="h5" /> |

##### tempFiles 的结构

| 成员 | 类型 | 描述 | 支持度 |
| --- | --- | --- | --- |
| tempFilePath | `string`  | 选定视频的临时文件路径 |  |
| duration | `number` | 选定视频的时间长度 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |
| size | `number` | 选定视频的数据量大小 | |
| width | `number` | 返回选定视频的高度 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |
| height | `number` | 返回选定视频的宽度 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |
| thumbTempFilePath | `string` | 视频缩略图临时文件路径 | <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="微信小程序" /> |
