import { normalizeGet } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getClipboard = normalizeGet((args) => tt.getClipboardData(args), CONTAINER_NAME.BYTE);

export default getClipboard;
