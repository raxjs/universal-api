import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseImage = normalize.chooseImage((args) => ks.chooseImage(args), CONTAINER_NAME.KWAI);

export default chooseImage;
