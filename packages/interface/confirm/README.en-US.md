---
title: confirm
---

# universal-confirm [![npm](https://img.shields.io/npm/v/universal-confirm.svg)](https://www.npmjs.com/package/universal-confirm)

Confirm component for feedback.

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="quickApp" src="https://gw.alicdn.com/tfs/TB1MP7EwQT2gK0jSZPcXXcKkpXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-confirm --save
```

## Usage

```js
import confirm from 'universal-alert';

// How to use it in quickapp
// import confirm from 'universal-confirm/lib/quickapp;

confirm({
  title: 'Confirm title',
  content: 'Confirm content',
  confirmButtonText: 'confirm',
  cancelButtonText: 'cancel'
}).then((confirm) => {
  console.log(confirm);
});
```

## Methods

### `confirm(options)`

#### Arguments
| Property                  | Type     | Description                                | required |  Default  |
| ------------------------- | -------- | ------------------------------------------ | :------: | :-------: |
| options                   | `object` | alert arguments                            |  false   |     -     |
| options.title             | `string` | alert title，support in miniapp and quick app     |  false   |  -  |
| options.content           | `string` | alert content                              |  false   | - |
| options.confirmButtonText | `string` | confirm button text，web are not supported |  false   | - |
| options.cancelButtonText  | `string` | cancel button text，web are not supported  |  false   | -  |
