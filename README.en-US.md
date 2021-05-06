<p align="center">
  <a href="https://rax.js.org/docs/guide/about-miniapp">
    <img alt="Rax" src="https://user-images.githubusercontent.com/677114/59907138-e99f7180-943c-11e9-8769-07021d9fe1ca.png" width="66">
  </a>
</p>

<p align="center">
Uni API is a cross-terminal API solution that supports applets and web containers.
</p>

---

🎉 **Multi-container support** Currently supports Web, WeChat Mini Programs, Toutiao Mini Programs, and Ali Mini Programs
🐂 **Rich API** Cover 90+ API implementations
😯 **Complete documentation** Provide bilingual documents and rich samples
0️⃣ **No framework dependency** No framework dependency, pure native implementation, compatible with any framework
🚀 **Extreme volume** Support on-demand loading, eliminate useless code according to the environment
👍🏻 **Easy to use, fast access** Provide a complete Typescripts statement, so you can get rid of the documentation and immerse yourself in programming

## Quick start

```
$ npm install
$ npm run build
$ npm run build:demo
$ cd demos
$ npm i
$ npm run start
```

Then use the applet IDE to start debugging:
<img height="400" src="https://gw.alicdn.com/imgextra/i3/O1CN01oVy1Sl1iPXLdviD7x_!!6000000004405-2-tps-3584-2240.png">

## Docs
Official site: [https://universal-api.js.org/](https://universal-api.js.org/)

## Example
<div style="display: flex;margin-bottom: 200px;">
  <div>
    <div style="width: 200px;height: 250px;">
      <img src="https://img.alicdn.com/imgextra/i1/O1CN01upA1bP1CxpGb8qLPp_!!6000000000148-0-tps-662-662.jpg" width="200" height="200" />
    </div>
    <div style="text-align: center;">Wechat MiniProgram</div>
  </div>
  <div style="margin-left: 30px;">
    <div style="line-height: 0;">
      <img src="https://gw.alicdn.com/imgextra/i3/O1CN01Ca6t2Q2AEpIXh4r0u_!!6000000008172-0-tps-1540-1906.jpg" width="200" height="250" />
    </div>
    <div style="text-align: center;">Alibaba MiniApp</div>
  </div>
</div>

## Contribute code
Please read [Rax Contribution Code Guide](https://github.com/alibaba/rax/wiki/CONTRIBUTING), Understand the basic specifications.

### Get started

```
$ git clone git@github.com:raxjs/universal-api.git
$ npm install
$ npm run build
```

### Debug API
Take @uni/toast as an example:

```
$ npm run build toast
$ npm run build:demo
$ cd demos
$ npm i
$ npm run start # 启动项目，打开小程序 IDE 进行调试
```

## Protocol

[BSD License](https://github.com/raxjs/miniapp/blob/master/LICENSE)