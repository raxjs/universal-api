import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const switchTab = normalize.switchTab(() => {
  throw new Error('@uni/apis: switchTab 不支持');
}, CONTAINER_NAME.WEB);

export default switchTab;
