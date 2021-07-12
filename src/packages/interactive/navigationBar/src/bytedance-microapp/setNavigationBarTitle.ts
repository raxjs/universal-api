import { normalizeSetNavigationBarTitle } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setNavigationBarTitle = normalizeSetNavigationBarTitle((args) => tt.setNavigationBarTitle(args), CONTAINER_NAME.BYTE);

export default setNavigationBarTitle;
