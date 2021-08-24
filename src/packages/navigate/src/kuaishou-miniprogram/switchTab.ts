import { ISwitchTabOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const switchTab = normalize.switchTab(
  (options: ISwitchTabOptions) => {
    ks.switchTab(options);
  },
  CONTAINER_NAME.KWAI,
);

export default switchTab;
