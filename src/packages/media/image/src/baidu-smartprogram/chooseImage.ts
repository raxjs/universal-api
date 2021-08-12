import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseImage = normalize.chooseImage((args) => swan.chooseImage(args), CONTAINER_NAME.BAIDU);

export default chooseImage;
