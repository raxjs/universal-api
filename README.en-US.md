<p align="center">
  <a href="https://universal-api.js.org/">
    <img alt="Rax" src="https://img.alicdn.com/imgextra/i3/O1CN01lt5FH71VubB3j3Okd_!!6000000002713-2-tps-412-412.png" width="66">
  </a>
</p>

<p align="center">
Uni API is a cross-terminal API solution that supports applets and web containers.
</p>

---

🎉 **Multi-container support** Currently supports Web, WeChat Mini Programs, Toutiao Mini Programs, Ali Mini Programs, Baidu Smart Programs and Kuaishou Mini Programs

🐂 **Rich API** Cover 90+ API implementations

😯 **Complete documentation** Provide bilingual documents and rich samples

0️⃣ **No framework dependency** No framework dependency, pure native implementation, compatible with any framework

🚀 **Extreme volume** Support on-demand loading, eliminate useless code according to the environment

👍🏻 **Easy to use, fast access** Provide a complete Typescripts statement, so you can get rid of the documentation and immerse yourself in programming

## Quick start

Take @uni/toast as an example:

```bash
$ npm install @uni/toast
```

```js
import { showToast } from '@uni/toast';

// string
showToast('Hi');

// object
showToast({
  content: 'hello',
  type: 'success',
  duration: 1000,
  success: () => {
    console.log('toast')
  }
});

// promise
showToast({
  content: 'hello',
  type: 'success',
  duration: 1000,
}).then(() => {});
```

Then use the applet IDE to start debugging:
<img height="400" src="https://gw.alicdn.com/imgextra/i3/O1CN01oVy1Sl1iPXLdviD7x_!!6000000004405-2-tps-3584-2240.png">

## Docs
Official site: [https://universal-api.js.org/](https://universal-api.js.org/)

## Example
|Wechat MiniProgram|Alibaba MiniApp|
|--------|----------|
|<img src="https://img.alicdn.com/imgextra/i1/O1CN01upA1bP1CxpGb8qLPp_!!6000000000148-0-tps-662-662.jpg" width="200" height="200" />|<img src="https://gw.alicdn.com/imgextra/i3/O1CN01Ca6t2Q2AEpIXh4r0u_!!6000000008172-0-tps-1540-1906.jpg" width="200" height="250" />|

## Contribute code
Please read [Rax Contribution Code Guide](https://github.com/alibaba/rax/wiki/CONTRIBUTING), Understand the basic specifications.

### Get started

```
$ git clone git@github.com:raxjs/universal-api.git
$ yarn
$ yarn build
```

### Debug API

```bash
$ yarn demo:init
$ yarn demo:dev
```
Then use the applet IDE to start debugging:
<img height="400" src="https://gw.alicdn.com/imgextra/i3/O1CN01qDANFg1QRDiWoHzHr_!!6000000001972-0-tps-2048-1418.jpg">

### Update Version

The API package version is uniformly maintained in api-config.js in the root directory. Take @uni/toast as an example:

```js
module.exports = {
  toast: {
    path: 'src/packages/interactive/toast/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.5',
        name: '@uni/toast',
      },
    ],
  },
}
```

| parameter | meaning | default value |
|----|----|----|
|path| Path in source file| -|
|pkgInfo| properties of npm packages (same as packagejson) | -|
|needCommonUtil| needs public utils| true|
|unNeedSplit| Whether to need to install environment subcontracting| false|

Large package version needs to update the version of package.json in the root directory

## Protocol

[BSD License](https://github.com/raxjs/miniapp/blob/master/LICENSE)