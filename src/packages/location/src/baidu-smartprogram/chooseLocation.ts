import { normalizeChooseLocation } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseLocation = normalizeChooseLocation((args) => swan.chooseLocation(args), CONTAINER_NAME.BAIDU);

export default chooseLocation;
