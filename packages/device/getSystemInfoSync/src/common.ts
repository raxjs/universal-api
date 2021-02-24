import { SYSTEM_INFO } from './types';

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
  return {}
  ;
}) => {
  return () => {
    const {
      pixelRatio = 1,
      screenWidth = 0,
      screenHeight = 0,
      windowWidth = 0,
      windowHeight = 0,
      language = '',
      version = '',
      platform = ''
    } = fn();
    return {
      pixelRatio,
      screenWidth,
      screenHeight,
      windowWidth,
      windowHeight,
      language: formatLanguage(language),
      version,
      platform
    };
  };
};
