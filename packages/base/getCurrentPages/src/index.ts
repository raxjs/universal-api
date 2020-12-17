import {isMiniappPlatform, isWeb } from 'universal-env';

export default () => {
  if (isMiniappPlatform) {
    return getCurrentPages();
  } else if (isWeb) {
    const query: any = {};
    const hash: any = {};
    window.location.hash
      .replace(/#.*?\?/, '')
      .split('&')
      .forEach((i) => {
        hash[i.split('=')[0]] = i.split('=')[1];
      });
    window.location.search
      .replace('?', '')
      .split('&')
      .forEach((i) => {
        query[i.split('=')[0]] = i.split('=')[1];
      });
    return [{ $viewId: '', pageId: '1', query, hash }];
  } else {
    throw new Error('evapi：getCurrentPages暂不支持');
  }
};
