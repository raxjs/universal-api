---
group:
  title: Introduction
  order: 0
title: Introduce by environment
---

# Introduce by environment

The uni provides a supporting babel plug-in to introduce the smallest package according to the environment, and remove the code that is not available in the current environment.

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" title="web" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" title="ali-minipp" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px" title="wechat-miniprogram"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px" title="bytedance-microapp">

## Install

```
npm i babel-plugin-universal-api-import
```

## Usage

Add the plug-in to the babel configuration:

```
[
  'babel-plugin-universal-api-import',
  {
    target: 'miniapp'
  }
]
```
Optional values ​​for target are:

|name|value|
|:---|:---|
|ali-miniapp|miniapp|
|wechat-miniprogram|wechat-miniprogram|
|web|web|
|bytedance-microapp|byte-miniprogram|

### Rax
If you are using rax, because rax uses the build-scripts packaging tool, we provide a build-scripts plug-in, and its underlying dependency is still babel-plugin-universal-api-import.

#### Install
```
npm i build-plugin-rax-api-import
```
#### Usage
Add in the build.json file:

```
"plugins" : [
  [
    "build-plugin-rax-api-import"
  ]
]
```

No longer need to pass in target
