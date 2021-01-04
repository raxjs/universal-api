# navigate.pop 
[![npm](https://img.shields.io/npm/v/universal-navigate.svg)](https://www.npmjs.com/package/universal-navigate)

Route navigation capability implementation.

<div style="display: flex;flex-direction: row;justify-content: space-between;">
<div style="margin-right: 20px;">

## Support

<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px"> <img alt="bytedanceMicroApp" src="https://gw.alicdn.com/tfs/TB1jFtVzO_1gK0jSZFqXXcpaXXa-200-200.svg" width="25px" height="25px">

## Install

```bash
$ npm install universal-navigate --save
```

## Usage

```js
import navigate from 'universal-navigate';

// How to use it in quickapp
// import chooseImage from 'universal-navigate/lib/quickapp;

navigate.pop().then(() => {
});

```

You can also import from the big package:
```javascript
import { navigate } from 'universal-api';
```

## Methods

### `pop(options)`

#### Arguments
| Property         | Type      | Description | required | Default |
| ---------------- | --------- | --------- | :------: | :-----: |
| options          | `object`  | Pop function arguments |  false   |    -    | 
| options.success | `Function`  | The callback function for a successful API call | false | - |
| options.fail | `Function`  | The callback function for a failed API call | false | - |
| options.complete | `Function`  | The callback function used when the API call completed (always executed whether the call succeeds or fails) | 否 | - |

</div>
<div>

```jsx | inline
/**
 * iframe: true
 */
import React from 'react';
export default () => (
  <iframe style={{
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
      width: '375px',
      height: '700px'
    }} src='https://herbox.online/p/109000004/app_1aKtEd7SK?previewZoom=100&view=preview&defaultPage=pages/universal-navigate/index&topSlider=false'></iframe>
);
```

</div>
</div>
