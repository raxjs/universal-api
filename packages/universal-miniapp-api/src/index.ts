import { isMiniApp, isWeChatMiniprogram } from 'universal-env';
import aliModule from './ali';
import wechatModule from './wechat';
import formatOriginal from './formatOriginal';
import promisifyFn from './promisifyFn';

const api = {};
let platform, listenerApis, needPromisifyApis, syncApis, overrideMap;

if (isMiniApp) {
  [platform, listenerApis, needPromisifyApis, syncApis, overrideMap] = aliModule;
}

if (isWeChatMiniprogram) {
  [platform, listenerApis, needPromisifyApis, syncApis, overrideMap] = wechatModule;
}

if (!platform) {
  throw new Error('The platform API is not currently supported!');
}

listenerApis.forEach((apiName: string) => {
  const overrideConfig = overrideMap[apiName];
  if (!overrideConfig) {
    api[apiName] = new Promise(resolve => platform[apiName](resolve));
  } else {
    api[apiName] = new Promise(resolve => {
      // When overrideConfig exists, result must be an object
      const { name, responseMap } = overrideConfig;
      platform[name](result => {
        resolve(formatOriginal(result, responseMap));
      });
    });
  }
});

syncApis.forEach((apiName: string) => {
  const overrideConfig = platform[apiName];
  if (!overrideConfig) {
    api[apiName] = platform[apiName];
  } else {
    api[apiName] = (...args) => {
      const { name, responseMap } = overrideConfig;
      const result = platform[name](...args);
      return formatOriginal(result, responseMap);
    };
  }
});

needPromisifyApis.forEach((apiName: string) => {
  const overrideConfig = overrideMap[apiName];
  if (!overrideConfig) {
    api[apiName] = (options) => promisifyFn(platform[apiName], options);
  } else {
    const { name, optionsMap, responseMap, errorMap } = overrideConfig;
    api[apiName] = (options) => {
      if (optionsMap) {
        options = formatOriginal(options, optionsMap);
      }
      return promisifyFn(platform[name], options, responseMap, errorMap);
    };
  }
});

export default api;
