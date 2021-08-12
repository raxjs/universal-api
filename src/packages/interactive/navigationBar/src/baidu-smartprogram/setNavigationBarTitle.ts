import { normalizeSetNavigationBarTitle } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setNavigationBarTitle = normalizeSetNavigationBarTitle((args) => swan.setNavigationBarTitle(args), CONTAINER_NAME.BAIDU);

export default setNavigationBarTitle;
