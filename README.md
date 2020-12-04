# universal-api

To extend the capabilities of the Rax system, we provide a series of Universal apis that developers can use to quickly develop multiple applications.

## Quick-start
```bash
$ npm i evapi
```

## Build
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


## publish
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