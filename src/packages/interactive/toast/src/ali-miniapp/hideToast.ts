import { normalize } from '../utils/index';
import { HideToastOption } from '../types';
import { isDingdingMiniapp } from '@utils/miniappEnvApp';

const hide = normalize((options?: HideToastOption): void => {
  const hideToast = isDingdingMiniapp ? dd.hideToast : my.hideToast;
  hideToast(options);
});

export default hide;
