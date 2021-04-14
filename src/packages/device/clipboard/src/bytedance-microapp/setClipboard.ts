import { normalizeSet } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setClipboard = normalizeSet((args) => {
  args.data = args.text;
  delete args.text;
  return tt.setClipboardData(args);
}, CONTAINER_NAME.BYTE);

export default setClipboard;
