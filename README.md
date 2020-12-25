---
hero:
    image: https://img.alicdn.com/tfs/TB1H2Kcb1H2gK0jSZFEXXcqMpXa-70-72.png
    title: universal-api
    desc: 一个跨端的API库
    actions:
    - text: 快速开始
      link: /packages
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: 多端统一
    desc: 支持`h5、小程序`应用
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: API丰富
    desc: 提供丰富完善的`api`
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 文档完善
    desc: 详尽的api文档及示例 
---

# evapi

基于Rax应用生态，我们提供一系列跨端api帮助用户快速开发多端应用。

```jsx | inline
/**
 * iframe: true
 */
import React from 'react';
export default () => (
  <iframe style={{
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
      width: '100%',
      height: '700px'
    }} src='https://herbox-embed.alipay.com/p/MiniappComponent/title'></iframe>
);
```

## 快速开始
```bash
$ npm i evapi
```

## 构建
```全部构建
$ npm run build
```

```构建大包
$ npm run build:main
```

```构建全部小包
$ npm run build:all
```

```构建单个指定小包
$ npm run build env
```

### api-config
根目录下的api-config作为api的版本以及信息维护地，可以再这里增删api，指定api版本，依赖，以及名称

小包的依赖都不会被打入包内，公共依赖为universal-env

大包的构建根据api-config中配置的api自动生成index，大包只有一个依赖：@babel/runtime-corejs3


## 发布
```全部发布
$ npm run pub
```

```发布大包
$ npm run pub:main
```

```发布全部小包
$ npm run pub:all
```

```发布单个指定小包
$ npm run pub env
```