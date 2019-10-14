[![npm](https://img.shields.io/npm/v/universal-miniapp-api.svg)](https://www.npmjs.com/package/universal-miniapp-api-interceptor)


## Installation

```bash
$ npm install universal-miniapp-api --save
```

## Usage

```js
import { showToast } from 'universal-miniapp-api-interceptor';

showToast({
  type: 'exception',
  content: '网络异常',
  duration: 3000,
}).then(() => {
  console.log('Toast success');
})
.catch(() => {
  console.log('Toast error');
});

```
