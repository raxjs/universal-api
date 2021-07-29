import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getImageInfo = normalize.getImageInfo((args) => swan.getImageInfo(args), CONTAINER_NAME.BAIDU);

export default getImageInfo;
