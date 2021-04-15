import { IReplaceOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const replace = normalize.replace((options?: IReplaceOptions) => {
  const { url, isHash = false, refresh = true, success, fail, complete } = options || {};
  const _url = isHash ? `/#${ url}` : url;
  setTimeout((): void => {
    try {
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

export default replace;
