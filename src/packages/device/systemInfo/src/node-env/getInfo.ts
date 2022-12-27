import { formatSystemInfo, formatSystemInfoAsync } from '../common';
import { AsyncOptions } from '../types';
import { CONTAINER_NAME } from '@utils/constant';

const getInfoSync = formatSystemInfo(() => {
  return {
    pixelRatio: 1,
    screenWidth: 1,
    screenHeight: 1,
    windowWidth: 1,
    windowHeight: 1,
    language:'',
    version: '',
    platform: '',
  };
});

const getInfo = formatSystemInfoAsync((options?: AsyncOptions) => {
  const { success, fail, complete } = options;
  try {
    const res = getInfoSync();
    success && success(res);
    complete && complete(res);
  } catch (e) {
    fail && fail(e);
    complete && complete(e);
  }
}, CONTAINER_NAME.NODE);


export default getInfo;
