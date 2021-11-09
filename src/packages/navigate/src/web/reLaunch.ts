import { IReLaunchOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';
import replace from './replace';

export const reLaunch = normalize.reLaunch((options: IReLaunchOptions) => {
  const { url, isHash = false, refresh = true, success, fail, complete } = options;
  const _url = isHash ? `/#${ url}` : url;
  setTimeout((): void => {
    try {
      history.go(-(history.length - 1));
      if (isHash) {
        replace({ url, isHash: true });
      } else {
        window.history.replaceState(null, null, _url);
        refresh && (location.reload());
      }
      success && success();
      complete && complete();
    } catch (e) {
      fail && fail(e);
      complete && complete(e);
    }
  });
}, CONTAINER_NAME.WEB);

export default reLaunch;
