# universal-choose-image [![npm](https://img.shields.io/npm/v/universal-choose-image.svg)](https://www.npmjs.com/package/universal-choose-image)

选取图片

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px">  <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px">

## 安装
```bash
$ npm install universal-choose-image --save
```

## 使用

```javascript
import chooseImage from 'universal-choose-image';

chooseImage().then(res => {
})
```

## 方法

### `chooseImage(options)`
选取照片数据

#### 参数
| 成员               | 类型     | 描述             | 必选 | 默认值          | 支持 |
| ------------------ | -------- | ---------------- | ---- | --------------- | ---- |
| options            | `object` | 选取照片参数     | 否   | -               |      |
| options.count      | `number` | 最大可选照片数   | 否   | `1`             | `mp` |
| options.sourceType | `array`  | 相册选取或者拍照 | 否   | `camera, album` | `mp` |

#### 返回值
| 成员     | 类型              | 描述                                       |
| -------- | ----------------- | ------------------------------------------ |
| res      | `object`          |                                            |
| res.data | `base64 | string` | web 环境为 base64 数据，小程序中为图片路径 |
