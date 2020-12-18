# universal-choose-image [![npm](https://img.shields.io/npm/v/universal-choose-image.svg)](https://www.npmjs.com/package/universal-choose-image)

选取图片

## 支持
__icon_web__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__  __icon_quick_app__

## 安装
```bash
$ npm install universal-choose-image --save
```

## 使用

```javascript
import chooseImage from 'universal-choose-image';

// 快应用中的引入方法
// import chooseImage from 'universal-choose-image/lib/quickapp;

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
| options.count      | `number` | 最大可选照片数   | 否   | `1`             | __icon_web__ __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__ |
| options.sourceType | `array`  | 相册选取或者拍照 | 否   | `camera, album` | __icon_miniapp_mp__ __icon_miniapp_wx__ __icon_microapp_tt__ __icon_quick_app__ |
| options.accept     | `string` | 允许的文件类型   | 否 | `image/*` | __icon_web__ |

#### 返回值
| 成员     | 类型              | 描述                                       |
| -------- | ----------------- | ------------------------------------------ |
| res      | `object`          |                                            |
| res.data | `string[]` | web 环境为 base64 数据，小程序中为图片路径 |
| res.files | `File[]` | 仅 Web 环境存在，为原始的文件对象 |
