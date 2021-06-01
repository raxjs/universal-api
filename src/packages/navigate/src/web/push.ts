import { IPushOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const push = normalize.push((options: IPushOptions) => {
  const { url, isHash = false, refresh = true, success, fail, complete } = options;
  // const _url = isHash ?
  //   `${location.protocol}//${location.host}/${location.pathname.split('/').filter((i) => !!i).join('/')}${location.search ? location.search : '/'}#${url}` : url;
  setTimeout((): void => {
    try {
      if (isHash) {
        location.hash = `#${url}`;
      } else if (refresh) {
        location.href = url;
      } else {
        const state = { page_id: 1 };
        const title = '';

        history.pushState(state, title, url);
      }

      success && success();
      complete && complete();
    } catch (e) {
      fail && fail(e);
      complete && complete(e);
    }
  });
}, CONTAINER_NAME.WEB);

export default push;
