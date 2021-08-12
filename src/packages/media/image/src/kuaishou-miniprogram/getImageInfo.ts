import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getImageInfo = normalize.getImageInfo((args) => ks.getImageInfo(args), CONTAINER_NAME.KWAI);

export default getImageInfo;
