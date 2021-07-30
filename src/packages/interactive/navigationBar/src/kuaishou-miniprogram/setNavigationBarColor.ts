import { normalizeSetNavigationBarColor } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setNavigationBarColor = normalizeSetNavigationBarColor((args) => {
  ks.setNavigationBarColor(args);
}, CONTAINER_NAME.KWAI);

export default setNavigationBarColor;
