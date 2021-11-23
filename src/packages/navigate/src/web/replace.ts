import { IReplaceOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const replace = normalize.replace((options?: IReplaceOptions) => {
  const { url, isHash = false, refresh = true, success, fail, complete } = options || {};
  const _url = isHash ? `/#${ url}` : url;
  setTimeout((): void => {
    try {
      if ((url.indexOf('https://') !== -1 || url.indexOf('https://') !== -1) &&
        url.indexOf(location.origin) === -1
      ) {
        console.warn('Uni API: Replace does not support cross-domain');
        location.href = url;
        return;
      }
      if (isHash) {
        const { href } = location;
        const index = href.indexOf('#');
        // 域名不变的情况下不会刷新页面
        window.location.replace(index > 0
          ? `${href.slice(0, index)}#${url}`
          : `${href}#${url}`);
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

export default replace;
