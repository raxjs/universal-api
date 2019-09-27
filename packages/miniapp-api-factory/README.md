[![npm](https://img.shields.io/npm/v/universal-miniapp-api-factory.svg)](https://www.npmjs.com/package/universal-miniapp-api-factory)

Each platform small program factory function, through the provided factory function can quickly access the multi-platform Mini App API.

## Installation

```bash
$ npm install universal-miniapp-api-factory --save
```

## Usage

```js
import { miniAppFactory, miniAppEventHandlerFactory } from 'universal-miniapp-api-factory';

const scanCode = miniAppFactory(my, {
  method: 'scan',
  processOptions: (options: IOptions) => {
    if (options.type && Array.isArray(options.type)) {
      options.type = options.type[0] as any;
    }
    return options;
  },
  processResult: (res: any) => {
    res.result = res.code;
    return res;
  }
});

const onAccelerometerChange = miniAppEventHandlerFactory(my, {
  method: 'onAccelerometerChange'
});
```
