[![npm](https://img.shields.io/npm/v/universal-miniapp-api-interceptor.svg)](https://www.npmjs.com/package/universal-miniapp-api-interceptor)

Each platform Mini App interceptor function, through the provided factory function can quickly access the multi-platform Mini App API.

## Installation

```bash
$ npm install universal-miniapp-api-interceptor --save
```

## Usage

```js
import { apiInterceptor, apiEventHandlerInterceptor } from 'universal-miniapp-api-interceptor';

const scanCode = apiInterceptor(my, {
  method: 'scan',
  optionsInterceptor: (options: IOptions) => {
    // process options
    return options;
  },
  successInterceptor: (res: any) => {
    // process success result
    return res;
  },
  failInterceptor: (err: any) => {
    // process fail error
    return err;
  }
});

const onAccelerometerChange = apiEventHandlerInterceptor(my, {
  method: 'onAccelerometerChange'
});
```
