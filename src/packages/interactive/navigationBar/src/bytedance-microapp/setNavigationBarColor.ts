import { normalizeSetNavigationBarColor } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setNavigationBarColor = normalizeSetNavigationBarColor((args) => {
  tt.setNavigationBarColor(args);
}, CONTAINER_NAME.BYTE);

export default setNavigationBarColor;
