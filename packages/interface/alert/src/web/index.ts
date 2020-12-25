import { Options } from '../types';
import showModal from '../../../showModal/src/web';
import {initApi} from '../common';

const alert = (options: Options) => {
  const { title, content, buttonText, success, fail, complete } = options;
  showModal({
    title,
    content,
    showCancel: false,
    confirmText: buttonText,
    success,
    fail,
    complete,
  });
};

export default initApi(alert);
