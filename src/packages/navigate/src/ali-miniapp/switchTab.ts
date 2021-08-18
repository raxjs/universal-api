import { ISwitchTabOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const switchTab = normalize.switchTab(
  (options: ISwitchTabOptions) => {
    my.switchTab(options);
  },
  CONTAINER_NAME.ALIPAY,
);

export default switchTab;
