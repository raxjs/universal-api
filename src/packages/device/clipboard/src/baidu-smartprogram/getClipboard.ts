import { normalizeGet } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getClipboard = normalizeGet((args) => swan.getClipboardData(args), CONTAINER_NAME.BAIDU);

export default getClipboard;
