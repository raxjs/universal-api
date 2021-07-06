## 1.0.9 (2021-07-05)

### Bug Fixes

* 环境判断顺序修复为 isWeb 优先判断

## 1.0.8 (2021-05-17)

### Features

* exports 规则更新

## 1.0.7 (2021-05-11)

### Features

* 支持支付宝容器 Upload 返回 UploadTask
### Bug Fixes

* 修复 Web 端 onProgressUpdate 回调与微信不一致
* 修复 Upload 类型声明

## 1.0.6 (2021-05-07)

### Features

* 支持在 Web 上使用 UploadTask
* 支持 timeout 参数（可用：微信小程序，Web）
* Web 逻辑与小程序对齐，服务端返回 404 等状态码会进入 success 回调，可通过 statusCode 额外处理
* Web 逻辑与小程序对齐，success 回调中的 data 会保持字符串，不会再自动解码

## 1.0.5 (2021-05-06)

### Features

* 支持在 Web 上自定义 withCredentials

## 1.0.4 (2021-04-27)

### Features

* 兼容低版本容器，转换 ES6 语法

## 1.0.3 (2021-04-16)

### Features

* 剔除 Babel/runtime-corejs3
* 新增支持 webpack5 exports ([a113f40](https://github.com/raxjs/universal-api/commit/a113f4034a35c2d5325536026d825175aa889dfd))

## 1.0.2 (2021-04-07)

### Features

* 支持 api 维度构建
* 增加 _ext 扩展参数 ([4c53d00](https://github.com/raxjs/universal-api/commit/4c53d006bd52a53a368132e63a75a94f490f43dc))
* 更新目录结构 ([a37ec34](https://github.com/raxjs/universal-api/commit/a37ec343ec1afb455458a6be27af932052654b58))
* 文档对接rax站点 ([0899643](https://github.com/raxjs/universal-api/commit/089964320fee0163bfd62b529ec8c93e85ad46da))

## 1.0.1 (2021-03-12)

### Features

* 移除 @uni/env 的 peer 依赖

## 1.0.0 (2021-01-26)

### Features

* 正式发布 🎉🎉🎉
