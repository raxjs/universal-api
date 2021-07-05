import { normalize } from '../utils/index';
import { HideToastOption } from '../types';

export const hide = normalize((options?: HideToastOption): void => {
  swan.hideToast(options);
});

export default hide;
