import { normalizeChooseLocation } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseLocation = normalizeChooseLocation((args) => ks.chooseLocation(args), CONTAINER_NAME.KWAI);

export default chooseLocation;
