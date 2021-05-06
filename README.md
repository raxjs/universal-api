<p align="center">
  <a href="https://universal-api.js.org/">
    <img alt="Rax" src="https://img.alicdn.com/imgextra/i3/O1CN01lt5FH71VubB3j3Okd_!!6000000002713-2-tps-412-412.png" width="66">
  </a>
</p>

<p align="center">
Uni API 是一套支持小程序和 Web 容器的跨端 API 解决方案。
</p>

---

🎉 **多容器支持** 目前支持 Web、微信小程序、头条小程序、阿里小程序
🐂 **API 丰富** 覆盖 90+ API 实现
😯 **文档完善** 提供双语文档、丰富样例
0️⃣ **无框架依赖** 无框架依赖，纯原生实现，可以兼容任意框架
🚀 **极致体积** 支持按需加载，按环境剔除无用代码
👍🏻 **简易使用，快速接入** 提供完善的 Typescripts 声明，让你可以摆脱文档，沉浸编程

## 快速开始

```
$ npm install
$ npm run build
$ npm run build:demo
$ cd demos
$ npm i
$ npm run start
```

然后使用小程序 IDE 即可开始调试:
<img height="400" src="https://gw.alicdn.com/imgextra/i3/O1CN01qDANFg1QRDiWoHzHr_!!6000000001972-0-tps-2048-1418.jpg">

## 文档
官方站点：[https://universal-api.js.org/](https://universal-api.js.org/)

## 示例
<div style="display: flex;margin-bottom: 200px; display: flex; flex-direction: row;">
  <div>
    <div style="width: 200px;height: 250px;">
      <img src="https://img.alicdn.com/imgextra/i1/O1CN01upA1bP1CxpGb8qLPp_!!6000000000148-0-tps-662-662.jpg" width="200" height="200" />
    </div>
    <div style="text-align: center;">微信小程序</div>
  </div>
  <div style="margin-left: 30px;">
    <div style="line-height: 0;">
      <img src="https://gw.alicdn.com/imgextra/i3/O1CN01Ca6t2Q2AEpIXh4r0u_!!6000000008172-0-tps-1540-1906.jpg" width="200" height="250" />
    </div>
    <div style="text-align: center;">支付宝小程序</div>
  </div>
</div>

## 贡献代码
请首先阅读 [Rax 贡献代码指南](https://github.com/alibaba/rax/wiki/CONTRIBUTING)，了解基础的规范。

### 起步

```
$ git clone git@github.com:raxjs/universal-api.git
$ npm install
$ npm run build
```

### 调试 API
以 @uni/toast 为例：

```
$ npm run build toast
$ npm run build:demo
$ cd demos
$ npm i
$ npm run start # 启动项目，打开小程序 IDE 进行调试
```

## 协议

[BSD License](https://github.com/raxjs/miniapp/blob/master/LICENSE)