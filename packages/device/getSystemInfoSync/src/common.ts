import { SYSTEM_INFO } from './types';

export const formatSystemInfo: (fn: () => any) => () => SYSTEM_INFO = (fn = () => {return {}}) => {
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
      language,
      version,
      platform
    };
  }
};
