## 1.1.8 (2022-07-28)

### Bug Fixes
* 修复 JSONP 解码未考虑 ';' 的情况（ https://github.com/raxjs/universal-api/issues/272 ）

## 1.1.7 (2021-11-25)
### Bug Fixes
* 修复 headers 参数无法正确覆盖的问题

## 1.1.6 (2021-10-22)
### Bug Fixes
* web 容器下 jsonp 并发多时回调覆盖问题


## 1.1.5 (2021-10-19)
### Bug Fixes
* 钉钉小程序容器中post模式下，data 需要传入JSON

## 1.1.4 (2021-10-18)
### Bug Fixes
* 钉钉小程序容器中post模式下，data 需要传入JSON

### Features
* content type 默认为 application/json

## 1.1.3 (2021-10-12)
### Bug Fixes
* fix JSONP 模式下的报错

## 1.1.2 (2021-10-10)
### Features
* 优化 JSONP 模式下的错误响应，增加 timeout 支持

## 1.1.1 (2021-08-17)
### Features
* exports 规则增加对百度和快手小程序的支持

## 1.1.0 (2021-08-11)

* 增加对百度和快手小程序的支持

## 1.0.11 (2021-07-05)

### Bug Fixes

* 环境判断顺序修复为 isWeb 优先判断

## 1.0.10 (2021-06-22)

### Bug Fixes

* 修复微信小程序逻辑触发问题

## 1.0.9 (2021-06-16)

### Features

* 针对返回状态码进行成功和失败的区分

## 1.0.8 (2021-06-15)

### Bug Fixes

* 修复 Web fail success 逻辑同时触发的问题
## 1.0.7 (2021-05-26)

### Bug Fixes

* 修复阿里小程序容器内，接口报错的问题

## 1.0.6 (2021-05-17)

### Features

* exports 规则更新

### Bug Fixes

* 修复微信小程序调用成功却走到 fail 逻辑的问题
* 修复 dateType TS 声明报错问题

## 1.0.5 (2021-04-27)

### Features

* 兼容低版本容器，转换 ES6 语法
## 1.0.4 (2021-04-25)

### Features

* 新增支持 jsonp 请求

### Bug Fixes

* 修复 wx.request 中 headers 属性值错误 ([issues](https://github.com/raxjs/universal-api/issues/140))

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
