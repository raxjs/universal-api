import { IPushOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const push = normalize.push((options: IPushOptions) => {
  const { url, isHash = false, success, fail, complete } = options;
  setTimeout((): void => {
    try {
      if (isHash) {
        location.hash = `#${url}`;
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
