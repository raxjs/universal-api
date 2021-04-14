import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getImageInfo = normalize.getImageInfo((args) => tt.getImageInfo(args), CONTAINER_NAME.BYTE);

export default getImageInfo;
