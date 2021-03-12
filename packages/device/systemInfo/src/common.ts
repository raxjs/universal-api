import { SYSTEM_INFO } from './types';
import { promisify } from '../../../utils/promisify';

const formatLanguage = (language) => {
  let fl = 'en';
  switch (language.toLowerCase()) {
    case 'zh_cn':
    case 'zh-hans':
    case 'zh-cn':
    case 'chinese': fl = 'zh_CN'; break;
    case 'zh_tw':
    case 'zh-hant':
    case 'zh-hk': fl = 'zh_TW'; break;
    case 'en':
    case 'english':
    case 'en-us': fl = 'en'; break;
    default: fl = 'en';
  }
  return fl;
};

export const formatSystemInfo: (fn: () => any) => () => SYSTEM_INFO = (fn = () => {
  return {};
}) => {
  return () => {
    const res = fn();
    return formatResult(res);
  };
};
export const formatResult = (data: any) => {
  const {
    pixelRatio = 1,
    screenWidth = 0,
    screenHeight = 0,
    windowWidth = 0,
    windowHeight = 0,
    language = '',
    version = '',
    platform = '',
  } = data;
  return {
    pixelRatio,
    screenWidth,
    screenHeight,
    windowWidth,
    windowHeight,
    language: formatLanguage(language),
    version,
    platform,
  };
};
export const formatSystemInfoAsync = (api) => {
  return (options) => {
    const afterOptions = {
      ...options,
      ...{
        success: (res) => {
          options.success && options.success(formatResult(res));
        },
        complete: (res) => {
          options.complete && options.complete(res.pixelRatio ? formatResult(res) : res);
        },
      } };
    return promisify(api)(afterOptions).then(formatResult);
  };
};
