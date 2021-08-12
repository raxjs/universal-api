import { normalizeSetNavigationBarTitle } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setNavigationBarTitle = normalizeSetNavigationBarTitle((args) => ks.setNavigationBarTitle(args), CONTAINER_NAME.KWAI);

export default setNavigationBarTitle;
