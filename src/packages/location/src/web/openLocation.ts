import { normalizeOpenLocation } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const openLocation = normalizeOpenLocation(() => {
  throw new Error('@uni/apis: openLocation不支持');
}, CONTAINER_NAME.WEB);

export default openLocation;
