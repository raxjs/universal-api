import { normalizeSetNavigationBarColor } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setNavigationBarColor = normalizeSetNavigationBarColor((args) => {
  swan.setNavigationBarColor(args);
}, CONTAINER_NAME.BAIDU);

export default setNavigationBarColor;
