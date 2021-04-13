import { IReLaunchOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const reLaunch = normalize.reLaunch((options: IReLaunchOptions) => {
  const { url, isHash = false, refresh = true, success, fail, complete } = options;
  const _url = isHash ? `/#${ url}` : url;
  setTimeout((): void => {
    try {
      history.go(-(history.length - 1));
      history.replaceState('', '', _url);
      refresh && history.go(0);
      success && success();
      complete && complete();
    } catch (e) {
      fail && fail(e);
      complete && complete(e);
    }
  });
}, CONTAINER_NAME.WEB);

export default reLaunch;
