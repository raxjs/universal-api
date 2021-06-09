import { normalizeOpenLocation } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const openLocation = normalizeOpenLocation(() => {
  throw new Error('Uni API: openLocation不支持');
}, CONTAINER_NAME.WEB);

export default openLocation;
