import { normalizeGet } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getClipboard = normalizeGet(() => {
  throw new Error('Uni API: getClipboard不支持');
}, CONTAINER_NAME.WEB);

export default getClipboard;
