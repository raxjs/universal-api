import { normalizeGet } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getClipboard = normalizeGet((args) => ks.getClipboardData(args), CONTAINER_NAME.KWAI);

export default getClipboard;
