import { normalizeChooseLocation } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseLocation = normalizeChooseLocation((args) => tt.chooseLocation(args), CONTAINER_NAME.BYTE);

export default chooseLocation;
