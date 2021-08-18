import { ISwitchTabOptions } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const switchTab = normalize.switchTab(
  (options: ISwitchTabOptions) => {
    tt.switchTab(options);
  },
  CONTAINER_NAME.BYTE,
);

export default switchTab;
